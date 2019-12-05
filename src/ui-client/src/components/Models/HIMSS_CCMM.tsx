import React from 'react';
import { HIMSS_CCMM } from '../../model/Models/HIMSS_CCMM';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class HIMSS_CCMMForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={HIMSS_CCMM} />;
    }
}