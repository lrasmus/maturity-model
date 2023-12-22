import React from 'react';
import { SEDoH_v2 } from '../../model/Models/SEDoH_v2';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class SEDoH_v2Form extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={SEDoH_v2} />;
    }
}