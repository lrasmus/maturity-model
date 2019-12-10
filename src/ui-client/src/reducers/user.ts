import { 
    UserAction, 
    USER_SET_CREDENTIALS, 
    USER_SET_ANSWERS,
    USER_SET_ANSWER_SCORE,
    USER_SET_ANSWER_SCORES,
    USER_SET_ANSWER_SCORE_LOAD_STATE,
    USER_SET_IS_GUEST
} from "../actions/user";
import { UserState, AnswerScoreLoadState } from "../model/UserState";
import { AnswerScore } from "../model/Score";

export const defaultUserState = (): UserState => {
    return {
        answers: {

            // User name
            'user_fname': '',                     
            'user_lname': '',
            'email': '',
            'user_complete': '',

            // RIOSM
            'riosm_complete': '',
            'riosm_q1_support_open_science': '',
            'riosm_q2_data_sharing': '',
            'riosm_q3_data_sharing_edu': '',      
            'riosm_q4_engagement': '',  
            'riosm_q5_governance': '',        
            'riosm_q6_reputation': '',        
            'riosm_q7_data_analytics_activity': '',
            'riosm_q8_ctms': '',
            'riosm_q9_external_data_edw': '',
            'riosm_q10_research_computing': '',
            'riosm_q11_secondary_data_use': '',

            // Quintegra eHMM
            'quintegra_ehmm_complete': '',
            'quintegra_ehmm_q1': '',    

            // IDC Healthcare IT
            'idc_healthcare_it_complete': '',
            'idc_healthcare_it_q1': '',

            // HIMSS EMRAM
            'himss_emram_complete': '',
            'himss_emram_q1': '',

            // NEHTA IMM
            'nehta_imm_complete': '',
            'nehta_imm_q1': '',

            // HIMSS CCMM
            'himss_ccmm_complete': '',
            'himss_ccmm_q1': '',        
            'himss_ccmm_q2': '',              
            'himss_ccmm_q3': '',          
            'himss_ccmm_q4': '',

            // EPRMM
            'eprmm_q1': '',

            // Forrester
            'forrester_model_q1': '',
            'forrester_model_q2': '',
            'forrester_model_q3': '',
            'forrester_model_q4': ''          
        },
        answersLoadState: AnswerScoreLoadState.NotLoaded,
        email: '',
        entryCode: '',
        guest: false,
        results: {
            all: defaultScore(),
            user: defaultScore(),
            n: 0
        }
    };
};

const defaultScore = (): AnswerScore => {
    return {
        riosm: 0,
        quintegra_ehmm: 0,
        idc_healthcare_it: 0,
        himss_emram: 0,
        himss_ccmm: 0,
        nehta_imm: 0,
        eprmm: 0,
        forrester: 0,
        riosm_categories: {
            overall: 0,
            governance: 0,
            data_and_software_sharing: 0,
            research_informatics: 0
        }
    };
}

export const user = (state: UserState = defaultUserState(), action: UserAction): UserState => {
    switch (action.type) {
        case USER_SET_CREDENTIALS:
            return Object.assign({}, state, { email: action.email, entryCode: action.entryCode });
        case USER_SET_ANSWERS:
            return Object.assign({}, state, { 
                answers: {
                    ...state.answers,
                    ...action.answers 
                }
            });
        case USER_SET_ANSWER_SCORE:
            return Object.assign({}, state, { 
                results: { 
                        user: action.score,
                        all: state.results.all
                    } 
                } 
            );
        case USER_SET_ANSWER_SCORES:
            return Object.assign({}, state, { results: action.scores } );
        case USER_SET_ANSWER_SCORE_LOAD_STATE:
            return Object.assign({}, state, { answersLoadState: action.answerLoadState } );
        case USER_SET_IS_GUEST:
            return Object.assign({}, state, { guest: true });
    }
    return state;
};