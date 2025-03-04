import Axios from 'axios';
import { NewUserFormState } from '../model/LoginState';
import { UserAnswersDTO, UserUpdateDTO, UserAnswers } from '../model/User';
import { UserState } from '../model/UserState';
import { AppConfigState } from '../model/AppConfigState';
import { BaseAnswerScore, AnswerScores } from "../model/Score";
import { 
    riosmFields, 
    QUINTEGRA_EHMM_Q1, 
    HAAM_Q1,
    IDC_HEALTHCARE_IT_Q1, 
    HIMSS_EMRAM_Q1, 
    himssCCmmFields,
    sedohFields,
    sedoh_v2Fields,
    EPRMM_Q1,
    NEHTA_IMM_Q1,
    nestccFields,
    nlpFields,
    precisionHealthFields,
    riosmGovernance, 
    riosmDataAndSoftware, 
    riosmResearchInformatics,
    ctmeFields,
    edw4rFields,
    edw4rAccessOutreach,
    edw4rServiceManagement,
    edw4rWorkforce,
    edw4rEnterpriseIT,
    edw4rDataGovernance,
    edw4rMetrics
} from "../model/User";

let serverState: UserAnswers = {};


/*
 * Request current scores for the user.
 */
export const getApplicationConfig = async (): Promise<AppConfigState> => {
    const resp = await Axios.get('/api/config');

    return {
        ...resp.data
    };
};


/*
 * Request a login with email and entryCode. If successful,
 * returns data for user from REDCap.
 */
export const login = async (email: string, entryCode: string): Promise<UserAnswers> => {
    const resp = await Axios.post('/api/login', {
        email,
        entry_code: entryCode
    });
    const dto = resp.data.user as UserAnswersDTO;
    const user = dtoToUser(dto);
    serverState = user;

    return user;
};

/*
 * Sign up new user.
 */
export const signUp = async (newUserForm: NewUserFormState): Promise<number> => {
    const resp = await Axios.post('/api/user', {
        email: newUserForm.emailAddress,
        institution: newUserForm.institutionName,
        entry_code: newUserForm.entryCode,
        user_fname: newUserForm.firstName,
        user_lname: newUserForm.lastName
    });

    return resp.status
};

/*
 * Request current scores for the user.
 */
export const getUserAndAggregateScores = async (user: UserState): Promise<AnswerScores> => {
    const resp = await Axios.post('/api/scores', {
        email: user.email,
        entry_code: user.entryCode
    });

    return {
        user: calculateUserScores(user.answers),
        ...resp.data
    };
};

/*
 * Given the current UI state, check whether there are 
 * any changes compared to what is believed to be on the server.
 */
export const changed = (user: UserState): boolean => {
    for (const key of Object.keys(user.answers)) {
        if (serverState[key] !== user.answers[key]) {
            return true;
        }
    }
    
    return false;
};

/*
 * Given the current user answers, update the server with
 * the latest values after diffing.
 */
export const update = async (user: UserState): Promise<UserUpdateDTO> => {

    /*
     * Include only values that have been updated since
     * the last sync with the server.
     */
    const diff: UserAnswers = {};
    for (const key of Object.keys(user.answers)) {
        if (serverState[key] !== user.answers[key]) {
            diff[key] = user.answers[key];
        }
    }
    
    /*
     * Update the server.
     */
    const resp = await Axios.post('/api/user/answers', {
        email: user.email,
        entry_code: user.entryCode,
        answers: diff
    });

    /*
     * If the call succeeded, update the serverState properties.
     */
    for (const key of Object.keys(diff)) {
        serverState[key] = diff[key];
    }

    return resp.data as UserUpdateDTO;
};

/*
 * Given a REDCap-based dictionary user object, return it back
 * as a [UserAnswers] object. The DTO and Model are currently identical, but 
 * in the future if they aren't use thus function to transform them.
 */
const dtoToUser = (dto: UserAnswersDTO): UserAnswers => {
    return dto;
};

export const calculateUserScores = (user: UserAnswers): BaseAnswerScore => {
    const maxFive  = 5.0;
    const maxSix   = 6.0;
    const maxSeven = 7.0;
    const maxEight = 8.0;
    const valElseZero = (val:string) => val !== '' ? parseFloat(val) : 0;
    const riosmSum = sum(validate(riosmFields.map(f => user[f])));
    const edw4rSum = sum(validate(edw4rFields.map(f => user[f])));
    
    return {
        riosm             : riosmSum / (riosmFields.length * maxFive),
        quintegra_ehmm    : valElseZero(user[QUINTEGRA_EHMM_Q1]) / maxSeven,
        haam              : valElseZero(user[HAAM_Q1]) / maxEight,
        idc_healthcare_it : valElseZero(user[IDC_HEALTHCARE_IT_Q1]) / maxFive,
        himss_emram       : valElseZero(user[HIMSS_EMRAM_Q1]) / maxSeven,
        himss_ccmm        : sum(validate(himssCCmmFields.map(f => user[f]))) / (himssCCmmFields.length * maxFive),
        nehta_imm         : valElseZero(user[NEHTA_IMM_Q1]) / maxFive,
        nestcc            : sum(validate(nestccFields.map(f => user[f]))) / (nestccFields.length * maxFive),
        nlp               : sum(validate(nlpFields.map(f => user[f]))) / (nlpFields.length * maxFive),
        eprmm             : valElseZero(user[EPRMM_Q1]) / maxSix,
        sedoh             : sum(validate(sedohFields.map(f => user[f]))) / (sedohFields.length * maxSeven),
        sedoh_v2          : sum(validate(sedoh_v2Fields.map(f => user[f]))) / (sedoh_v2Fields.length * maxSeven),
        forrester         : 0.0,
        precision_health  : sum(validate(precisionHealthFields.map(f => user[f]))) / (precisionHealthFields.length * maxFive),
        riosm_categories  : {
            overall                   : riosmSum / riosmFields.length,
            governance                : sum(validate(riosmGovernance.map(f => user[f]))) / riosmGovernance.length,
            data_and_software_sharing : sum(validate(riosmDataAndSoftware.map(f => user[f]))) / riosmDataAndSoftware.length,
            research_informatics      : sum(validate(riosmResearchInformatics.map(f => user[f]))) / riosmResearchInformatics.length
        },
        ctme             : sum(validate(ctmeFields.map(f => user[f]))) / (ctmeFields.length * maxFive),
        edw4r            : edw4rSum / (edw4rFields.length * maxFive),
        edw4r_categories  : {
            overall                 : edw4rSum / edw4rFields.length,
            access_and_outreach     : sum(validate(edw4rAccessOutreach.map(f => user[f]))) / edw4rAccessOutreach.length,
            service_management      : sum(validate(edw4rServiceManagement.map(f => user[f]))) / edw4rServiceManagement.length,
            workforce               : sum(validate(edw4rWorkforce.map(f => user[f]))) / edw4rWorkforce.length,
            enterprise_it           : sum(validate(edw4rEnterpriseIT.map(f => user[f]))) / edw4rEnterpriseIT.length,
            data_governance         : sum(validate(edw4rDataGovernance.map(f => user[f]))) / edw4rDataGovernance.length,
            metrics                 : sum(validate(edw4rMetrics.map(f => user[f]))) / edw4rMetrics.length
        },
    };
};

const sum = (vals: number[]): number => vals.reduce((a,b) => a + b, 0);
const validate = (vals: string[]): number[] => vals.filter(v => v !== '').map(v => parseFloat(v));