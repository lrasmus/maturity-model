import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { CTMEForm } from "../../components/Models/CTME";

export const CTME: BaseModel = 
{
    completeField: 'ctme_mm_survey_complete',
    name: 'Clinical Trials Management Ecosystem (CTME) Maturity Model',
    shortName: 'CTME',
    description: 'CTME maturity assessment for CTSAs',
    render: (dispatch: any, answers: UserAnswers) => <CTMEForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'eprmm_q1',
            text: 'Choose the statement that best describes the current stage of your Electronic Patient Record Maturity Model.:',
            options: [
                {
                    text: 'Level 5.',
                    value: '1'
                },
                {
                    text: 'Level 4',
                    value: '2'
                },
                {
                    text: 'Level 3',
                    value: '3'
                },
                {
                    text: 'Level 2',
                    value: '4'
                },
                {
                    text: 'Level 1',
                    value: '5'
                }
            ]
        }
    ],
}