export interface RIOSMCategoryScore {
    overall: number;
    governance: number;
    data_and_software_sharing: number;
    research_informatics: number;
}

export interface RIOSMQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
    q6Stats: AnswerStats;
    q7Stats: AnswerStats;
    q8Stats: AnswerStats;
    q9Stats: AnswerStats;
    q10Stats: AnswerStats;
    q11Stats: AnswerStats;
}

export interface PrecisionHealthQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
    q6Stats: AnswerStats;
    q7Stats: AnswerStats;
    q8Stats: AnswerStats;
    q9Stats: AnswerStats;
    q10Stats: AnswerStats;
}

export interface Quintegra_eHMMQuestionScore {
    q1Stats: AnswerStats;
}

export interface HAAMQuestionScore {
    q1Stats: AnswerStats;
}

export interface SEDoHQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
}

export interface SEDoH_v2QuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
}

export interface NESTccQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
}

export interface NLPQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
    q6Stats: AnswerStats;
}

export interface CTMEQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
    q6Stats: AnswerStats;
    q7Stats: AnswerStats;
    q8Stats: AnswerStats;
    q9Stats: AnswerStats;
    q10Stats: AnswerStats;
    q11Stats: AnswerStats;
}

export interface EDW4RCategoryScore {
    overall: number;
    access_and_outreach: number;
    service_management: number;
    workforce: number;
    enterprise_it: number;
    data_governance: number;
    metrics: number;
}

export interface EDW4RQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
    q6Stats: AnswerStats;
    q7Stats: AnswerStats;
    q8Stats: AnswerStats;
    q9Stats: AnswerStats;
    q10Stats: AnswerStats;
    q11Stats: AnswerStats;
    q12Stats: AnswerStats;
    q13Stats: AnswerStats;
    q14Stats: AnswerStats;
    q15Stats: AnswerStats;
    q16Stats: AnswerStats;
    q17Stats: AnswerStats;
    q18Stats: AnswerStats;
    q19Stats: AnswerStats;
    q20Stats: AnswerStats;
    q21Stats: AnswerStats;
    q22Stats: AnswerStats;
    q23Stats: AnswerStats;
    q24Stats: AnswerStats;
    q25Stats: AnswerStats;
    q26Stats: AnswerStats;
    q27Stats: AnswerStats;
    q28Stats: AnswerStats;
    q29Stats: AnswerStats;
    q30Stats: AnswerStats;
    q31Stats: AnswerStats;
    q32Stats: AnswerStats;
    q33Stats: AnswerStats;
}

export interface AllModelsCompleted {
    riosm: number;
    quintegra_ehmm: number;
    haam: number;
    idc_healthcare_it: number;
    himss_emram: number;
    himss_ccmm: number;
    nehta_imm: number;
    nestcc: number;
    nlp: number;
    eprmm: number;
    sedoh: number;
    sedoh_v2: number;
    precision_health: number;
    ctme: number;
    edw4r: number;
}

export interface BaseAnswerScore {
    riosm: number;
    riosm_categories: RIOSMCategoryScore;
    quintegra_ehmm: number;
    haam: number;
    idc_healthcare_it: number;
    himss_emram: number;
    himss_ccmm: number;
    nehta_imm: number;
    nestcc: number;
    nlp: number;
    eprmm: number;
    forrester: number;
    sedoh: number;
    sedoh_v2: number;
    precision_health: number;
    ctme: number;
    edw4r: number;
    edw4r_categories: EDW4RCategoryScore;
}

export interface AllAnswerScore extends BaseAnswerScore {
    models_completed: AllModelsCompleted;
    haam_questions: HAAMQuestionScore;
    nestcc_questions: NESTccQuestionScore;
    nlp_questions: NLPQuestionScore;
    precision_health_questions: PrecisionHealthQuestionScore;
    quintegra_ehmm_questions: Quintegra_eHMMQuestionScore;
    riosm_questions: RIOSMQuestionScore;
    sedoh_questions: SEDoHQuestionScore;
    sedoh_v2_questions: SEDoH_v2QuestionScore;
    ctme_questions: CTMEQuestionScore;
    edw4r_questions: EDW4RQuestionScore;
}

export interface AnswerStats {
    mean: number;
    min: number;
    max: number;
    median: number;
}

export interface AnswerScoresDTO {
    all: AllAnswerScore;
    n: number;
}

export interface AnswerScores extends AnswerScoresDTO {
    user: BaseAnswerScore;
}