# Maturity Models

Welcome to the Maturity Models Survey app!

- [Running the App Locally](#running-the-app-locally)
- [Creating the User Form](#creating-the-user-form)
- [Adding Models](#adding-models)

## Running the App Locally
The Maturity Models survey app uses a three-tiered architecture with a React web client, a small Python-Flask server API, and a REDCap project as a database.

To run it locally, do the following steps:

### API Setup

```bash
# Clone the repo
$ git clone https://github.com/lrasmus/maturity-model.git

# Setup a python virtual environment
$ cd maturity-model/src/server
$ python3 -m venv venv
$ . venv/bin/activate

# Install API dependencies
$ python -m pip install -r requirements.txt
```

Next, create a `config.json` file under `./maturity-models/src/server/flaskr/app/modules/services/config.json`.  For more informationabout the format of the configuration file, see [Server Configuration](#server-configuration).


Run the API
```bash
$ python3 run.py
```

#### API Configuration

The server configuration file is located at `./maturity-models/src/server/flaskr/app/modules/services/config.json`, and has the following structure:

```json
{
    "application": {
        "admin": "contact@institution.edu",
        "allowSignup": false,
        "allowGuest": false
    },
    "redcap": {
        "token": "<API_token>",
        "url": "https://redcap.example.org/api/"
    },
    "flask": {
        "secret_key": "12345678901234567890123456789012345678901234567890123456789012345"
    }
}
```

| Option | Notes |
|--------|-------|
| `admin` | The contact email to use for the site administrator.  This is used in dialogs if the user needs to reach out about the software. |
| `allowSignup` | `true` or `false` - enable/disable the ability of users to sign up for an account via the website |
| `allowGuest` | `true` or `false` - enable/disable the ability for someone to login to the software as a guest. |
| `token` | The REDCap API token |
| `url` | The REDCap API URL |
| `secret_key` | The [secret key used by Flask](https://flask.palletsprojects.com/en/2.3.x/config/#SECRET_KEY) for things like generating CSRFs. |

The `secret_key` can be generated using:

```
python -c 'import secrets; print(secrets.token_hex())'
```

### Web client setup

Now that the API is running, you can setup the React web client. Make sure you have [NPM](https://www.npmjs.com/get-npm) installed first.

```bash
# Install client dependencies
$ cd maturity-models/src/ui-client
$ npm install

# Run the client
$ npm start
```

Note that in order to be allowed into the app (even in development), you'll need a record in the REDCap project `User` form with your `email` address and `entry_code`.

## Creating the User Form

The `User` form is a record of all the users and their login info. To add new users, this form must be completed to grant them access.

The following fields in [maturity-model/src/server/flaskr/app/modules/fields.py](https://github.com/data2health/maturity-model/blob/redcap-doc/src/server/flaskr/app/modules/fields.py) are currrently being used in the app and can be modified to project needs.

```python
RECORD_ID = 'record_id' (REDCap automatically makes this field)
EMAIL_ADDRESS = 'email'
ENTRY_CODE = 'entry_code'
APPROVED = 'approved'
FNAME = 'user_fname'
LNAME = 'user_lname'
```

1. The app uses the variable names `email` and `entry_code` to log in, which must be included in the form.

2. There is an `approved` field, which validates whether the login is approved or not. If the variable is set to `false`, the **login will fail**.

3. The app also uses the `user_fname` and `user_lname` to display the user name in the app. If the field is left blank, no name will be shown.

The `User` form can also store additional information about the user which may or may not be used.

## Adding Models

Adding models to the Maturity Models Survey app is straightforward.

1. Add a new `Form` to the REDCap project to represent the Model you'd like to add. 

Name the variables in the project uses the convention `<form_name>_q<question_num>_<short_name>`, and be sure to use `Multiple Radio Buttons (Single Answer)` as the type.

So for example, a form called `Example` could have variables of the form:
- `example_complete` (REDCap automatically makes this field)
- `example_q1_month_of_birth`
- `example_q2_fav_monty_python_joke`
- ...

2. Next, add the model to the client app. Begin by adding the new variables you added to the REDCap project above to the existing `AnswerField` type in [maturity-models/src/ui-client/src/model.User.ts](https://github.com/uwrit/maturity-models/blob/master/src/ui-client/src/model/User.ts#L3).

```typescript
export type AnswerField =

    // User name
    'user_fname' |
    'user_lname' |
    ...

    // Example                             <- These are new
    `example_complete` |
    `example_q1_month_of_birth` |
    `example_q2_fav_monty_python_joke` |

    ...
```

3. Create a new file for your Model under [maturity-models/src/ui-client/src/model/Models/](https://github.com/uwrit/maturity-models/tree/master/src/ui-client/src/model/Models). Inside the file, create a new `BaseModel` object. This is the data that will populate the form actually seen by users.

```typescript
import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { ExampleForm } from "../../components/Models/Example/Example"; // <- Don't worry, this won't work yet but is the next step.

export const Example: BaseModel = 
{
    completeField: 'example_complete',
    name: 'The Super Awesome Example Survey (SAES)',
    description: 'The Super Awesome Example Survey is just that, an example. But also super awesome.',
    render: (dispatch: any, answers: UserAnswers) => <ExampleForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'example_q1_month_of_birth',
            text: 'Select the month of your birth:',
            options: [
                {
                    text: 'January',
                    value: '1'
                },
                {
                    text: 'February',
                    value: '2'
                }
            ]
        },
        {
            answerField: 'example_q2_fav_monty_python_joke',
            text: 'Select your favorite Monty Python joke:',
            options: [
                {
                    text: 'The dead parrot one',
                    value: '1'
                },
                {
                    text: 'Tis but a scratch',
                    value: '2'
                }
            ]
        }
    ],
}
```

Note that the `import { ExampleForm } from ...` statement won't work yet, we'll do that next.

4. Under [maturity-models/src/ui-client/src/components/Models/](https://github.com/uwrit/maturity-models/tree/master/src/ui-client/src/model/Models), add a new file called `Example.tsx`, subsituting "Example" for the actual name of your Model. This is the React component we want to render when your model is selected by the user. Most models can work using existing React components we've created (specifically [ModelForm](https://github.com/uwrit/maturity-models/blob/master/src/ui-client/src/components/BaseForms/ModelForm/ModelForm.tsx)), so you should rarely need to do anything custom here.

```typescript
import React from 'react';
import { Example } from '../../model/Models/Example';  // <- This is the file created in step #3.
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class ExampleForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={Example}/>;
    }
}
```

5. Last step: add your Model to the `defaultModelState() function` under [maturity-models/src/ui-client/src/reducers/model.ts](https://github.com/uwrit/maturity-models/blob/master/src/ui-client/src/reducers/model.ts#L6). This "officially" adds the model to the list that users can select.

```typescript
import { MODEL_SET_CURRENT, ModelAction, MODEL_SET_SELECTED } from '../actions/model';
import { ModelsState } from '../model/ModelsState';
import { RIOSM } from '../model/Models/RIOSM';
import { HIMSS_EMRAM } from '../model/Models/HIMSS_EMRAM';
import { Example } from '../model/Models/Example';         // <- Import your Model first

export const defaultModelState = (): ModelsState => {
    return {
        all: [ RIOSM, HIMSS_EMRAM, Example ]               // <- Then add it to the array here
    };
};
```

Voilà! ;)
