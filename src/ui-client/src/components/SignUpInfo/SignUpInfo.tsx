import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { FiChevronRight } from 'react-icons/fi';
import { attemptSignUp } from '../../actions/login';
import InformationModal from '../../components/Modals/InformationModal/InformationModal';
import { InformationModalState } from '../../model/GeneralState';
import { LoginServerCommunicationState, LoginState, NewUserFormState } from '../../model/LoginState';
import './SignUpInfo.css';

interface Props {
    dispatch: any;
    infoState: InformationModalState;
    loginState: LoginState;
}

export default class SignUpInfo extends React.PureComponent<Props> {
    private className = 'signupInfo';

    constructor(props: Props) {
        super(props);
    };

    public render() {
        const c = this.className;
        const { dispatch, infoState } = this.props;
        const inputClassName = 'leaf-input';

        return (
            <div>Hi</div>
        );
    };
};