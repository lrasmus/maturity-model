import React from 'react'
import { AnswerStats } from '../../../model/Score';
import { BaseModel } from '../../../model/ModelsState';
import { UserState } from '../../../model/UserState';
import QuestionSummary from '../QuestionSummary/QuestionSummary';
import './ModelSummary.css';

interface Props {
    user: UserState;
    model: BaseModel;
}

export default class ModelSummary extends React.PureComponent<Props> {
    private className = 'model-summary';

    public render() {
        const c = this.className;
        const { model } = this.props;
        const { answers } = this.props.user;

        return (
            <div className={c}>
                <div className={`${c}-breakdown`}>
                    {model.questions.map((q, i) => {
                        const a = answers[q.answerField];
                        const result = this.getResults(model.shortName, i);
                        return (
                            <QuestionSummary key={i} answer={a} question={q} index={i} results={result} />
                        )
                    })}
                </div>
            </div>
        );
    };

    private getResults = (modelName: string, index: number): AnswerStats => {
        if (modelName === this.res.RIOSM.name) {
            return this.res.RIOSM.questions[index];
        };
        if (modelName === this.res.Quintegra_eHMM.name) {
            return this.res.Quintegra_eHMM.questions[index];
        };
        if (modelName === this.res.PrecisionHealth.name) {
            return this.res.PrecisionHealth.questions[index];
        };
        if (modelName === this.res.HAAM.name) {
            return this.res.HAAM.questions[index];
        };
        if (modelName === this.res.SEDoH.name) {
            return this.res.SEDoH.questions[index];
        };
        if (modelName === this.res.SEDoH_v2.name) {
            return this.res.SEDoH_v2.questions[index];
        };
        if (modelName === this.res.NESTcc.name) {
            return this.res.NESTcc.questions[index];
        };
        if (modelName === this.res.NLP.name) {
            return this.res.NLP.questions[index];
        };
        if (modelName === this.res.CTME.name) {
            return this.res.CTME.questions[index];
        };
        if (modelName === this.res.EDW4R.name) {
            return this.res.EDW4R.questions[index];
        };
        return {mean: 0, min: 0, max: 0, median: 0};
    }

    private results = this.props.user.results;
    private riosm = this.results.all.riosm_questions;
    private quintegra_eHMMR = this.results.all.quintegra_ehmm_questions;
    private precisionHealth = this.results.all.precision_health_questions;
    private haam = this.results.all.haam_questions;
    private sedoh = this.results.all.sedoh_questions;
    private sedoh_v2 = this.results.all.sedoh_v2_questions;
    private nestcc = this.results.all.nestcc_questions;
    private nlp = this.results.all.nlp_questions;
    private ctme = this.results.all.ctme_questions;
    private edw4r = this.results.all.edw4r_questions;

    private res: Result = {
        RIOSM: {
            name: 'RIOSM',
            questions: [
                {
                    mean: this.riosm.q1Stats.mean,
                    min: this.riosm.q1Stats.min,
                    max: this.riosm.q1Stats.max,
                    median: this.riosm.q1Stats.median
                },
                {
                    mean: this.riosm.q2Stats.mean,
                    min: this.riosm.q2Stats.min,
                    max: this.riosm.q2Stats.max,
                    median: this.riosm.q2Stats.median
                },
                {
                    mean: this.riosm.q3Stats.mean,
                    min: this.riosm.q3Stats.min,
                    max: this.riosm.q3Stats.max,
                    median: this.riosm.q3Stats.median
                },
                {
                    mean: this.riosm.q4Stats.mean,
                    min: this.riosm.q4Stats.min,
                    max: this.riosm.q4Stats.max,
                    median: this.riosm.q4Stats.median
                },
                {
                    mean: this.riosm.q5Stats.mean,
                    min: this.riosm.q5Stats.min,
                    max: this.riosm.q5Stats.max,
                    median: this.riosm.q5Stats.median
                },
                {
                    mean: this.riosm.q6Stats.mean,
                    min: this.riosm.q6Stats.min,
                    max: this.riosm.q6Stats.max,
                    median: this.riosm.q6Stats.median
                },
                {
                    mean: this.riosm.q7Stats.mean,
                    min: this.riosm.q7Stats.min,
                    max: this.riosm.q7Stats.max,
                    median: this.riosm.q7Stats.median
                },
                {
                    mean: this.riosm.q8Stats.mean,
                    min: this.riosm.q8Stats.min,
                    max: this.riosm.q8Stats.max,
                    median: this.riosm.q8Stats.median
                },
                {
                    mean: this.riosm.q9Stats.mean,
                    min: this.riosm.q9Stats.min,
                    max: this.riosm.q9Stats.max,
                    median: this.riosm.q9Stats.median
                },
                {
                    mean: this.riosm.q10Stats.mean,
                    min: this.riosm.q10Stats.min,
                    max: this.riosm.q10Stats.max,
                    median: this.riosm.q10Stats.median
                },
                {
                    mean: this.riosm.q11Stats.mean,
                    min: this.riosm.q11Stats.min,
                    max: this.riosm.q11Stats.max,
                    median: this.riosm.q11Stats.median
                }
            ]
        },
        Quintegra_eHMM: {
            name: 'Quintegra eHMM',
            questions: [
                {
                    mean: this.quintegra_eHMMR.q1Stats.mean,
                    min: this.quintegra_eHMMR.q1Stats.min,
                    max: this.quintegra_eHMMR.q1Stats.max,
                    median: this.quintegra_eHMMR.q1Stats.median 
                }
            ]
        },
        PrecisionHealth: {
            name: 'Precision Health',
            questions: [
                {
                    mean: this.precisionHealth.q1Stats.mean,
                    min: this.precisionHealth.q1Stats.min,
                    max: this.precisionHealth.q1Stats.max,
                    median: this.precisionHealth.q1Stats.median
                },
                {
                    mean: this.precisionHealth.q2Stats.mean,
                    min: this.precisionHealth.q2Stats.min,
                    max: this.precisionHealth.q2Stats.max,
                    median: this.precisionHealth.q2Stats.median
                },
                {
                    mean: this.precisionHealth.q3Stats.mean,
                    min: this.precisionHealth.q3Stats.min,
                    max: this.precisionHealth.q3Stats.max,
                    median: this.precisionHealth.q3Stats.median
                },
                {
                    mean: this.precisionHealth.q4Stats.mean,
                    min: this.precisionHealth.q4Stats.min,
                    max: this.precisionHealth.q4Stats.max,
                    median: this.precisionHealth.q4Stats.median
                },
                {
                    mean: this.precisionHealth.q5Stats.mean,
                    min: this.precisionHealth.q5Stats.min,
                    max: this.precisionHealth.q5Stats.max,
                    median: this.precisionHealth.q5Stats.median
                },
                {
                    mean: this.precisionHealth.q6Stats.mean,
                    min: this.precisionHealth.q6Stats.min,
                    max: this.precisionHealth.q6Stats.max,
                    median: this.precisionHealth.q6Stats.median
                },
                {
                    mean: this.precisionHealth.q7Stats.mean,
                    min: this.precisionHealth.q7Stats.min,
                    max: this.precisionHealth.q7Stats.max,
                    median: this.precisionHealth.q7Stats.median
                },
                {
                    mean: this.precisionHealth.q8Stats.mean,
                    min: this.precisionHealth.q8Stats.min,
                    max: this.precisionHealth.q8Stats.max,
                    median: this.precisionHealth.q8Stats.median
                },
                {
                    mean: this.precisionHealth.q9Stats.mean,
                    min: this.precisionHealth.q9Stats.min,
                    max: this.precisionHealth.q9Stats.max,
                    median: this.precisionHealth.q9Stats.median
                },
                {
                    mean: this.precisionHealth.q10Stats.mean,
                    min: this.precisionHealth.q10Stats.min,
                    max: this.precisionHealth.q10Stats.max,
                    median: this.precisionHealth.q10Stats.median
                }
            ]
        },
        HAAM: {
            name: 'HAAM',
            questions: [
                {
                    mean: this.haam.q1Stats.mean,
                    min: this.haam.q1Stats.min,
                    max: this.haam.q1Stats.max,
                    median: this.haam.q1Stats.median 
                }
            ]
        },
        SEDoH: {
            name: 'SEDoH',
            questions: [
                {
                    mean: this.sedoh.q1Stats.mean,
                    min: this.sedoh.q1Stats.min,
                    max: this.sedoh.q1Stats.max,
                    median: this.sedoh.q1Stats.median
                },
                {
                    mean: this.sedoh.q2Stats.mean,
                    min: this.sedoh.q2Stats.min,
                    max: this.sedoh.q2Stats.max,
                    median: this.sedoh.q2Stats.median
                },
                {
                    mean: this.sedoh.q3Stats.mean,
                    min: this.sedoh.q3Stats.min,
                    max: this.sedoh.q3Stats.max,
                    median: this.sedoh.q3Stats.median
                },
                {
                    mean: this.sedoh.q4Stats.mean,
                    min: this.sedoh.q4Stats.min,
                    max: this.sedoh.q4Stats.max,
                    median: this.sedoh.q4Stats.median
                },
                {
                    mean: this.sedoh.q5Stats.mean,
                    min: this.sedoh.q5Stats.min,
                    max: this.sedoh.q5Stats.max,
                    median: this.sedoh.q5Stats.median
                }
            ]
        },
        SEDoH_v2: {
            name: 'SEDoH_v2',
            questions: [
                {
                    mean: this.sedoh_v2.q1Stats.mean,
                    min: this.sedoh_v2.q1Stats.min,
                    max: this.sedoh_v2.q1Stats.max,
                    median: this.sedoh_v2.q1Stats.median
                },
                {
                    mean: this.sedoh_v2.q2Stats.mean,
                    min: this.sedoh_v2.q2Stats.min,
                    max: this.sedoh_v2.q2Stats.max,
                    median: this.sedoh_v2.q2Stats.median
                },
                {
                    mean: this.sedoh_v2.q3Stats.mean,
                    min: this.sedoh_v2.q3Stats.min,
                    max: this.sedoh_v2.q3Stats.max,
                    median: this.sedoh_v2.q3Stats.median
                },
                {
                    mean: this.sedoh_v2.q4Stats.mean,
                    min: this.sedoh_v2.q4Stats.min,
                    max: this.sedoh_v2.q4Stats.max,
                    median: this.sedoh_v2.q4Stats.median
                },
                {
                    mean: this.sedoh_v2.q5Stats.mean,
                    min: this.sedoh_v2.q5Stats.min,
                    max: this.sedoh_v2.q5Stats.max,
                    median: this.sedoh_v2.q5Stats.median
                }
            ]
        },
        NESTcc: {
            name: 'NESTcc',
            questions: [
                {
                    mean: this.nestcc.q1Stats.mean,
                    min: this.nestcc.q1Stats.min,
                    max: this.nestcc.q1Stats.max,
                    median: this.nestcc.q1Stats.median
                },
                {
                    mean: this.nestcc.q2Stats.mean,
                    min: this.nestcc.q2Stats.min,
                    max: this.nestcc.q2Stats.max,
                    median: this.nestcc.q2Stats.median
                },
                {
                    mean: this.nestcc.q3Stats.mean,
                    min: this.nestcc.q3Stats.min,
                    max: this.nestcc.q3Stats.max,
                    median: this.nestcc.q3Stats.median
                },
                {
                    mean: this.nestcc.q4Stats.mean,
                    min: this.nestcc.q4Stats.min,
                    max: this.nestcc.q4Stats.max,
                    median: this.nestcc.q4Stats.median
                },
                {
                    mean: this.nestcc.q5Stats.mean,
                    min: this.nestcc.q5Stats.min,
                    max: this.nestcc.q5Stats.max,
                    median: this.nestcc.q5Stats.median
                }
            ]
        },
        NLP: {
            name: 'NLP',
            questions: [
                {
                    mean: this.nlp.q1Stats.mean,
                    min: this.nlp.q1Stats.min,
                    max: this.nlp.q1Stats.max,
                    median: this.nlp.q1Stats.median
                },
                {
                    mean: this.nlp.q2Stats.mean,
                    min: this.nlp.q2Stats.min,
                    max: this.nlp.q2Stats.max,
                    median: this.nlp.q2Stats.median
                },
                {
                    mean: this.nlp.q3Stats.mean,
                    min: this.nlp.q3Stats.min,
                    max: this.nlp.q3Stats.max,
                    median: this.nlp.q3Stats.median
                },
                {
                    mean: this.nlp.q4Stats.mean,
                    min: this.nlp.q4Stats.min,
                    max: this.nlp.q4Stats.max,
                    median: this.nlp.q4Stats.median
                },
                {
                    mean: this.nlp.q5Stats.mean,
                    min: this.nlp.q5Stats.min,
                    max: this.nlp.q5Stats.max,
                    median: this.nlp.q5Stats.median
                },
                {
                    mean: this.nlp.q6Stats.mean,
                    min: this.nlp.q6Stats.min,
                    max: this.nlp.q6Stats.max,
                    median: this.nlp.q6Stats.median
                }
            ]
        },
        CTME: {
            name: 'CTME',
            questions: [
                {
                    mean: this.ctme.q1Stats.mean,
                    min: this.ctme.q1Stats.min,
                    max: this.ctme.q1Stats.max,
                    median: this.ctme.q1Stats.median
                },
                {
                    mean: this.ctme.q2Stats.mean,
                    min: this.ctme.q2Stats.min,
                    max: this.ctme.q2Stats.max,
                    median: this.ctme.q2Stats.median
                },
                {
                    mean: this.ctme.q3Stats.mean,
                    min: this.ctme.q3Stats.min,
                    max: this.ctme.q3Stats.max,
                    median: this.ctme.q3Stats.median
                },
                {
                    mean: this.ctme.q4Stats.mean,
                    min: this.ctme.q4Stats.min,
                    max: this.ctme.q4Stats.max,
                    median: this.ctme.q4Stats.median
                },
                {
                    mean: this.ctme.q5Stats.mean,
                    min: this.ctme.q5Stats.min,
                    max: this.ctme.q5Stats.max,
                    median: this.ctme.q5Stats.median
                },
                {
                    mean: this.ctme.q6Stats.mean,
                    min: this.ctme.q6Stats.min,
                    max: this.ctme.q6Stats.max,
                    median: this.ctme.q6Stats.median
                },
                {
                    mean: this.ctme.q7Stats.mean,
                    min: this.ctme.q7Stats.min,
                    max: this.ctme.q7Stats.max,
                    median: this.ctme.q7Stats.median
                },
                {
                    mean: this.ctme.q8Stats.mean,
                    min: this.ctme.q8Stats.min,
                    max: this.ctme.q8Stats.max,
                    median: this.ctme.q8Stats.median
                },
                {
                    mean: this.ctme.q9Stats.mean,
                    min: this.ctme.q9Stats.min,
                    max: this.ctme.q9Stats.max,
                    median: this.ctme.q9Stats.median
                },
                {
                    mean: this.ctme.q10Stats.mean,
                    min: this.ctme.q10Stats.min,
                    max: this.ctme.q10Stats.max,
                    median: this.ctme.q10Stats.median
                },
                {
                    mean: this.ctme.q11Stats.mean,
                    min: this.ctme.q11Stats.min,
                    max: this.ctme.q11Stats.max,
                    median: this.ctme.q11Stats.median
                }
            ]
        },
        EDW4R: {
            name: 'EDW4R',
            questions: [
                {
                    mean: this.edw4r.q1Stats.mean,
                    min: this.edw4r.q1Stats.min,
                    max: this.edw4r.q1Stats.max,
                    median: this.edw4r.q1Stats.median
                },
                {
                    mean: this.edw4r.q2Stats.mean,
                    min: this.edw4r.q2Stats.min,
                    max: this.edw4r.q2Stats.max,
                    median: this.edw4r.q2Stats.median
                },
                {
                    mean: this.edw4r.q3Stats.mean,
                    min: this.edw4r.q3Stats.min,
                    max: this.edw4r.q3Stats.max,
                    median: this.edw4r.q3Stats.median
                },
                {
                    mean: this.edw4r.q4Stats.mean,
                    min: this.edw4r.q4Stats.min,
                    max: this.edw4r.q4Stats.max,
                    median: this.edw4r.q4Stats.median
                },
                {
                    mean: this.edw4r.q5Stats.mean,
                    min: this.edw4r.q5Stats.min,
                    max: this.edw4r.q5Stats.max,
                    median: this.edw4r.q5Stats.median
                },
                {
                    mean: this.edw4r.q6Stats.mean,
                    min: this.edw4r.q6Stats.min,
                    max: this.edw4r.q6Stats.max,
                    median: this.edw4r.q6Stats.median
                },
                {
                    mean: this.edw4r.q7Stats.mean,
                    min: this.edw4r.q7Stats.min,
                    max: this.edw4r.q7Stats.max,
                    median: this.edw4r.q7Stats.median
                },
                {
                    mean: this.edw4r.q8Stats.mean,
                    min: this.edw4r.q8Stats.min,
                    max: this.edw4r.q8Stats.max,
                    median: this.edw4r.q8Stats.median
                },
                {
                    mean: this.edw4r.q9Stats.mean,
                    min: this.edw4r.q9Stats.min,
                    max: this.edw4r.q9Stats.max,
                    median: this.edw4r.q9Stats.median
                },
                {
                    mean: this.edw4r.q10Stats.mean,
                    min: this.edw4r.q10Stats.min,
                    max: this.edw4r.q10Stats.max,
                    median: this.edw4r.q10Stats.median
                },
                {
                    mean: this.edw4r.q11Stats.mean,
                    min: this.edw4r.q11Stats.min,
                    max: this.edw4r.q11Stats.max,
                    median: this.edw4r.q11Stats.median
                },
                {
                    mean: this.edw4r.q12Stats.mean,
                    min: this.edw4r.q12Stats.min,
                    max: this.edw4r.q12Stats.max,
                    median: this.edw4r.q12Stats.median
                },
                {
                    mean: this.edw4r.q13Stats.mean,
                    min: this.edw4r.q13Stats.min,
                    max: this.edw4r.q13Stats.max,
                    median: this.edw4r.q13Stats.median
                },
                {
                    mean: this.edw4r.q14Stats.mean,
                    min: this.edw4r.q14Stats.min,
                    max: this.edw4r.q14Stats.max,
                    median: this.edw4r.q14Stats.median
                },
                {
                    mean: this.edw4r.q15Stats.mean,
                    min: this.edw4r.q15Stats.min,
                    max: this.edw4r.q15Stats.max,
                    median: this.edw4r.q15Stats.median
                },
                {
                    mean: this.edw4r.q16Stats.mean,
                    min: this.edw4r.q16Stats.min,
                    max: this.edw4r.q16Stats.max,
                    median: this.edw4r.q16Stats.median
                },
                {
                    mean: this.edw4r.q17Stats.mean,
                    min: this.edw4r.q17Stats.min,
                    max: this.edw4r.q17Stats.max,
                    median: this.edw4r.q17Stats.median
                },
                {
                    mean: this.edw4r.q18Stats.mean,
                    min: this.edw4r.q18Stats.min,
                    max: this.edw4r.q18Stats.max,
                    median: this.edw4r.q18Stats.median
                },
                {
                    mean: this.edw4r.q19Stats.mean,
                    min: this.edw4r.q19Stats.min,
                    max: this.edw4r.q19Stats.max,
                    median: this.edw4r.q19Stats.median
                },
                {
                    mean: this.edw4r.q20Stats.mean,
                    min: this.edw4r.q20Stats.min,
                    max: this.edw4r.q20Stats.max,
                    median: this.edw4r.q20Stats.median
                },
                {
                    mean: this.edw4r.q21Stats.mean,
                    min: this.edw4r.q21Stats.min,
                    max: this.edw4r.q21Stats.max,
                    median: this.edw4r.q21Stats.median
                },
                {
                    mean: this.edw4r.q22Stats.mean,
                    min: this.edw4r.q22Stats.min,
                    max: this.edw4r.q22Stats.max,
                    median: this.edw4r.q22Stats.median
                },
                {
                    mean: this.edw4r.q23Stats.mean,
                    min: this.edw4r.q23Stats.min,
                    max: this.edw4r.q23Stats.max,
                    median: this.edw4r.q23Stats.median
                },
                {
                    mean: this.edw4r.q24Stats.mean,
                    min: this.edw4r.q24Stats.min,
                    max: this.edw4r.q24Stats.max,
                    median: this.edw4r.q24Stats.median
                },
                {
                    mean: this.edw4r.q25Stats.mean,
                    min: this.edw4r.q25Stats.min,
                    max: this.edw4r.q25Stats.max,
                    median: this.edw4r.q25Stats.median
                },
                {
                    mean: this.edw4r.q26Stats.mean,
                    min: this.edw4r.q26Stats.min,
                    max: this.edw4r.q26Stats.max,
                    median: this.edw4r.q26Stats.median
                },
                {
                    mean: this.edw4r.q27Stats.mean,
                    min: this.edw4r.q27Stats.min,
                    max: this.edw4r.q27Stats.max,
                    median: this.edw4r.q27Stats.median
                },
                {
                    mean: this.edw4r.q28Stats.mean,
                    min: this.edw4r.q28Stats.min,
                    max: this.edw4r.q28Stats.max,
                    median: this.edw4r.q28Stats.median
                },
                {
                    mean: this.edw4r.q29Stats.mean,
                    min: this.edw4r.q29Stats.min,
                    max: this.edw4r.q29Stats.max,
                    median: this.edw4r.q29Stats.median
                },
                {
                    mean: this.edw4r.q30Stats.mean,
                    min: this.edw4r.q30Stats.min,
                    max: this.edw4r.q30Stats.max,
                    median: this.edw4r.q30Stats.median
                },
                {
                    mean: this.edw4r.q31Stats.mean,
                    min: this.edw4r.q31Stats.min,
                    max: this.edw4r.q31Stats.max,
                    median: this.edw4r.q31Stats.median
                },
                {
                    mean: this.edw4r.q32Stats.mean,
                    min: this.edw4r.q32Stats.min,
                    max: this.edw4r.q32Stats.max,
                    median: this.edw4r.q32Stats.median
                },
                {
                    mean: this.edw4r.q33Stats.mean,
                    min: this.edw4r.q33Stats.min,
                    max: this.edw4r.q33Stats.max,
                    median: this.edw4r.q33Stats.median
                }
            ]
        }
    };
}

interface Result {
    RIOSM: ModelResult;
    Quintegra_eHMM: ModelResult;
    PrecisionHealth: ModelResult;
    HAAM: ModelResult;
    SEDoH: ModelResult;
    SEDoH_v2: ModelResult;
    NESTcc: ModelResult;
    NLP: ModelResult;
    CTME: ModelResult;
    EDW4R: ModelResult;
};

interface ModelResult {
    name: string;
    questions: AnswerStats[];
};