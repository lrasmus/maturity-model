# User
RECORD_ID = 'record_id'
EMAIL_ADDRESS = 'email'
ENTRY_CODE = 'entry_code'
APPROVED = 'approved'
FNAME = 'user_fname'
LNAME = 'user_lname'

# RIOSM
RIOSM_COMPLETE = 'riosm_complete'
RIOSM_Q1_ENGAGEMENT = 'riosm_q1_engagement'
RIOSM_Q2_GOVERNANCE = 'riosm_q2_governance'
RIOSM_Q3_REPUTATION = 'riosm_q3_reputation'
RIOSM_Q4_SUPPORT_OPEN_SCIENCE = 'riosm_q4_support_open_science'
RIOSM_Q5_DATA_SHARING = 'riosm_q5_data_sharing'
RIOSM_Q6_DATA_SHARING_EDU = 'riosm_q6_data_sharing_edu'
RIOSM_Q7_DATA_ANALYTICS_ACTIVITY = 'riosm_q7_data_analytics_activity'
RIOSM_Q8_CTMS = 'riosm_q8_ctms'
RIOSM_Q9_EXTERNAL_DATA_EDW = 'riosm_q9_external_data_edw'
RIOSM_Q10_RESEARCH_COMPUTING = 'riosm_q10_research_computing'
RIOSM_Q11_SECONDARY_DATA_USE = 'riosm_q11_secondary_data_use'

riosm_fields = [ 
    RIOSM_Q1_ENGAGEMENT, RIOSM_Q2_GOVERNANCE, RIOSM_Q3_REPUTATION, RIOSM_Q4_SUPPORT_OPEN_SCIENCE,
    RIOSM_Q5_DATA_SHARING, RIOSM_Q6_DATA_SHARING_EDU, RIOSM_Q7_DATA_ANALYTICS_ACTIVITY, RIOSM_Q8_CTMS,
    RIOSM_Q9_EXTERNAL_DATA_EDW, RIOSM_Q10_RESEARCH_COMPUTING, RIOSM_Q11_SECONDARY_DATA_USE
]

riosm_governance = [
    RIOSM_Q1_ENGAGEMENT, RIOSM_Q2_GOVERNANCE, RIOSM_Q3_REPUTATION
]

riosm_data_and_software = [
    RIOSM_Q4_SUPPORT_OPEN_SCIENCE, RIOSM_Q5_DATA_SHARING, RIOSM_Q6_DATA_SHARING_EDU
]

riosm_research_informatics = [
    RIOSM_Q7_DATA_ANALYTICS_ACTIVITY, RIOSM_Q8_CTMS, RIOSM_Q9_EXTERNAL_DATA_EDW, RIOSM_Q10_RESEARCH_COMPUTING, RIOSM_Q11_SECONDARY_DATA_USE
]

# Quintegra eHMM
QUINTEGRA_EHMM_COMPELTE = 'quintegra_ehmm_complete'
QUINTEGRA_EHMM_Q1 = 'quintegra_ehmm_q1'

# HAAM
HAAM_COMPELTE = 'haam_complete'
HAAM_Q1 = 'haam_q1'

# IDC Healthcare IT
IDC_HEALTHCARE_IT_COMPLETE = 'idc_healthcare_it_complete'
IDC_HEALTHCARE_IT_Q1 = 'idc_healthcare_it_q1'

# HIMSS EMRAM
HIMSS_EMRAM_COMPLETE = 'himss_emram_complete'
HIMSS_EMRAM_Q1 = 'himss_emram_q1'

# HIMSS CCMM
HIMSS_CCMM_COMPLETE = 'himss_ccmm_complete'
HIMSS_CCMM_Q1 = 'himss_ccmm_q1'
HIMSS_CCMM_Q2 = 'himss_ccmm_q2'
HIMSS_CCMM_Q3 = 'himss_ccmm_q3'
HIMSS_CCMM_Q4 = 'himss_ccmm_q4'

himss_ccmm_fields = [
    HIMSS_CCMM_Q1, HIMSS_CCMM_Q2, HIMSS_CCMM_Q3, HIMSS_CCMM_Q4
]

# NEHTA IMM
NEHTA_IMM_COMPLETE = 'nehta_imm_complete'
NEHTA_IMM_Q1 = 'nehta_imm_q1'

# EPRMM
EPRMM_COMPLETE = 'eprmm_complete'
EPRMM_Q1 = 'eprmm_q1'

# Forrester
FORRESTER_COMPLETE = 'forrester_model_complete'
FORRESTER_MODEL_Q1 = 'forrester_model_q1'
FORRESTER_MODEL_Q2 = 'forrester_model_q2'
FORRESTER_MODEL_Q3 = 'forrester_model_q3'
FORRESTER_MODEL_Q4 = 'forrester_model_q4'

forrester_fields = [
    FORRESTER_MODEL_Q1, FORRESTER_MODEL_Q2, FORRESTER_MODEL_Q3, FORRESTER_MODEL_Q4
]

# SEDoH
SEDOH_COMPLETE = 'sedoh_complete'
SEDOH_Q1 = 'sedoh_q1'
SEDOH_Q2 = 'sedoh_q2'
SEDOH_Q3 = 'sedoh_q3'
SEDOH_Q4 = 'sedoh_q4'
SEDOH_Q5 = 'sedoh_q5'

sedoh_fields = [
    SEDOH_Q1, SEDOH_Q2, SEDOH_Q3, SEDOH_Q4, SEDOH_Q5
]

# SEDoH v2
SEDOH_V2_COMPLETE = 'social_and_environmental_determinants_of_health_complete'
SEDOH_V2_Q1 = 'sedoh_q1_v2'
SEDOH_V2_Q2 = 'sedoh_q2_v2'
SEDOH_V2_Q3 = 'sedoh_q3_v2'
SEDOH_V2_Q4 = 'sedoh_q4_v2'
SEDOH_V2_Q5 = 'sedoh_q5_v2'

sedoh_v2_fields = [
    SEDOH_V2_Q1, SEDOH_V2_Q2, SEDOH_V2_Q3, SEDOH_V2_Q4, SEDOH_V2_Q5
]

# Precision Health
PRECISION_HEALTH_COMPLETE = 'precision_health_complete'
PRECISION_HEALTH_Q1 = 'precision_health_q1'
PRECISION_HEALTH_Q2 = 'precision_health_q2'
PRECISION_HEALTH_Q3 = 'precision_health_q3'
PRECISION_HEALTH_Q4 = 'precision_health_q4'
PRECISION_HEALTH_Q5 = 'precision_health_q5'
PRECISION_HEALTH_Q6 = 'precision_health_q6'
PRECISION_HEALTH_Q7 = 'precision_health_q7'
PRECISION_HEALTH_Q8 = 'precision_health_q8'
PRECISION_HEALTH_Q9 = 'precision_health_q9'
PRECISION_HEALTH_Q10 = 'precision_health_q10'

precision_health_fields = [
    PRECISION_HEALTH_Q1, PRECISION_HEALTH_Q2, PRECISION_HEALTH_Q3, PRECISION_HEALTH_Q4, PRECISION_HEALTH_Q5,
    PRECISION_HEALTH_Q6, PRECISION_HEALTH_Q7, PRECISION_HEALTH_Q8, PRECISION_HEALTH_Q9, PRECISION_HEALTH_Q10
]

# NESTcc
NESTcc_COMPLETE = 'nestcc_complete'
NESTcc_Q1 = 'nestcc_q1'
NESTcc_Q2 = 'nestcc_q2'
NESTcc_Q3 = 'nestcc_q3'
NESTcc_Q4 = 'nestcc_q4'
NESTcc_Q5 = 'nestcc_q5'

nestcc_fields = [
    NESTcc_Q1, NESTcc_Q2, NESTcc_Q3, NESTcc_Q4, NESTcc_Q5
]

# NLP
NLP_COMPLETE = 'nlp_complete'
NLP_Q1 = 'nlp_q1'
NLP_Q2 = 'nlp_q2'
NLP_Q3 = 'nlp_q3'
NLP_Q4 = 'nlp_q4'
NLP_Q5 = 'nlp_q5'
NLP_Q6 = 'nlp_q6'

nlp_fields = [
    NLP_Q1, NLP_Q2, NLP_Q3, NLP_Q4, NLP_Q5, NLP_Q6
]

# CTME
CTME_COMPLETE = 'ctme_mm_survey_complete'
CTME_Q1 = 'study_mgmt_level'
CTME_Q2 = 'reg_and_audit_mgmt_level'
CTME_Q3 = 'financial_mgmt_level'
CTME_Q4 = 'investigational_prod_mgmt_level'
CTME_Q5 = 'subject_id_recruitment_level'
CTME_Q6 = 'subject_mgmt_level'
CTME_Q7 = 'data_level'
CTME_Q8 = 'reporting_analytics_dashboard_level'
CTME_Q9 = 'system_integration_level'
CTME_Q10 = 'staff_training_and_personnel_mgmt_level'
CTME_Q11 = 'org_maturity_culture_level'

ctme_fields = [
    CTME_Q1, CTME_Q2, CTME_Q3, CTME_Q4, CTME_Q5, CTME_Q6, CTME_Q7, CTME_Q8, CTME_Q9, CTME_Q10, CTME_Q11
]

# EDW4R
EDW4R_COMPLETE = 'edw4r_maturity_index_complete'
EDW4R_ACCCESS_Q1 = 'acc_out10'
EDW4R_ACCCESS_Q2 = 'acc_out11'
EDW4R_ACCCESS_Q3 = 'acc_out12'
EDW4R_ACCCESS_Q4 = 'acc_out4'
EDW4R_ACCCESS_Q5 = 'acc_out7'
EDW4R_ACCCESS_Q6 = 'acc_out8'
EDW4R_SERVICE_Q7 = 'servman1'
EDW4R_SERVICE_Q8 = 'servman2'
EDW4R_SERVICE_Q9 = 'servman3'
EDW4R_SERVICE_Q10 = 'servman4'
EDW4R_WF_Q11 = 'workforce1'
EDW4R_WF_Q12 = 'workforce2'
EDW4R_WF_Q13 = 'workforce3'
EDW4R_WF_Q14 = 'workforce4'
EDW4R_WF_Q15 = 'workforce5'
EDW4R_WF_Q16 = 'workforce6'
EDW4R_EIT_Q17 = 'rel_eit1'
EDW4R_EIT_Q18 = 'rel_eit2'
EDW4R_EIT_Q19 = 'rel_eit3'
EDW4R_EIT_Q20 = 'rel_eit4'
EDW4R_EIT_Q21 = 'rel_eit5'
EDW4R_GOV_Q22 = 'datagov1'
EDW4R_GOV_Q23 = 'datagov2'
EDW4R_GOV_Q24 = 'datagov3'
EDW4R_GOV_Q25 = 'datagov4'
EDW4R_GOV_Q26 = 'datagov5'
EDW4R_GOV_Q27 = 'datagov6'
EDW4R_METRICS_Q28 = 'metric1'
EDW4R_METRICS_Q29 = 'metric2'
EDW4R_METRICS_Q30 = 'metric3'
EDW4R_METRICS_Q31 = 'metric4'
EDW4R_METRICS_Q32 = 'metric5'
EDW4R_METRICS_Q33 = 'metric6'

edw4r_fields = [ 
    EDW4R_ACCCESS_Q1, EDW4R_ACCCESS_Q2, EDW4R_ACCCESS_Q3, EDW4R_ACCCESS_Q4, EDW4R_ACCCESS_Q5, EDW4R_ACCCESS_Q6,
    EDW4R_SERVICE_Q7, EDW4R_SERVICE_Q8, EDW4R_SERVICE_Q9, EDW4R_SERVICE_Q10,
    EDW4R_WF_Q11, EDW4R_WF_Q12, EDW4R_WF_Q13, EDW4R_WF_Q14, EDW4R_WF_Q15, EDW4R_WF_Q16,
    EDW4R_EIT_Q17, EDW4R_EIT_Q18, EDW4R_EIT_Q19, EDW4R_EIT_Q20, EDW4R_EIT_Q21,
    EDW4R_GOV_Q22, EDW4R_GOV_Q23, EDW4R_GOV_Q24, EDW4R_GOV_Q25, EDW4R_GOV_Q26, EDW4R_GOV_Q27,
    EDW4R_METRICS_Q28, EDW4R_METRICS_Q29, EDW4R_METRICS_Q30, EDW4R_METRICS_Q31, EDW4R_METRICS_Q32, EDW4R_METRICS_Q33
]

edw4r_access_outreach_fields = [
    EDW4R_ACCCESS_Q1, EDW4R_ACCCESS_Q2, EDW4R_ACCCESS_Q3, EDW4R_ACCCESS_Q4, EDW4R_ACCCESS_Q5, EDW4R_ACCCESS_Q6
]

edw4r_service_management_fields = [
    EDW4R_SERVICE_Q7, EDW4R_SERVICE_Q8, EDW4R_SERVICE_Q9, EDW4R_SERVICE_Q10,
]

edw4r_workforce_fields = [
    EDW4R_WF_Q11, EDW4R_WF_Q12, EDW4R_WF_Q13, EDW4R_WF_Q14, EDW4R_WF_Q15, EDW4R_WF_Q16,
]

edw4r_enterprise_it_fields = [
    EDW4R_EIT_Q17, EDW4R_EIT_Q18, EDW4R_EIT_Q19, EDW4R_EIT_Q20, EDW4R_EIT_Q21,
]

edw4r_data_governance_fields = [
    EDW4R_GOV_Q22, EDW4R_GOV_Q23, EDW4R_GOV_Q24, EDW4R_GOV_Q25, EDW4R_GOV_Q26, EDW4R_GOV_Q27,
]

edw4r_metrics_fields = [
    EDW4R_METRICS_Q28, EDW4R_METRICS_Q29, EDW4R_METRICS_Q30, EDW4R_METRICS_Q31, EDW4R_METRICS_Q32, EDW4R_METRICS_Q33
]
