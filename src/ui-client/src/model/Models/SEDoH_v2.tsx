import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { SEDoH_v2Form } from "../../components/Models/SEDoH_v2";

export const SEDoH_v2: BaseModel = 
{
    completeField: 'social_and_environmental_determinants_of_health_complete',
    name: 'Social & Environmental Determinants of Health Maturity Model (v2, SEDoH_v2)',
    shortName: 'SEDoH_v2',
    description: "This maturity model is for SEDoH data use in the clinical enterprise, not data being collected exclusively for research projects. Race, ethnicity, address, and other variables collected as a standard part of patient registration and billing are not considered SEDoH data collection. Each of the questions asks about the highest level at which your institution consistently performs. Even if there may be a research project at your institution that is very advanced, the goal of this maturity model is to understand at which level your institution's clinical enterprise consistently performs.",
    render: (dispatch: any, answers: UserAnswers) => <SEDoH_v2Form dispatch={dispatch} answers={answers} />,
    questions: [
        {
        answerField: 'sedoh_q1_v2',
        text: <span>Data Collection Policies</span>,
        options: [
                {
            text: "Level 7: Standardized data collection policy for SEDoH exists at an organizational or institutional level.",
            value: '7'
                },
                {
            text: "Level 6: Few departments/ sections within a division of the organization (e.g., Department of Medicine) have a standard policy for SEDoH data collection.",
            value: '6'
                },
                {
            text: "Level 5: Standard policy for SEDoH data collection exists at the division level of an organization (e.g., Division of Obstetrics and Gynecology).",
            value: '5'
                },
                {
            text: "Level 4: Clinics within a division (e.g., IVF clinic or labor and delivery clinic) have standardized policy for SEDoH data collection.",
            value: '4'
                },
                {
            text: "Level 3: Individuals with consistent SEDoH data collection practices.",
            value: '3'
                },
                {
            text: "Level 2: Ad-hoc. No policies exist yet but various groups in the organization are collecting SEDoH data inconsistently.",
            value: '2'
                },
                {
            text: "Level 1: Institutions are not collecting SEDoH data (collecting demographics, such as race and ethnicity, does not qualify as SEDoH data collection). No well-defined, operational data collection policies in the organization.",
            value: '1'
                }
            ]
        },
        {
            answerField: 'sedoh_q2_v2',
            text: <span>Data collection methods and technologies</span>,
            footer: <div>** Primarily for contextual data, but also personal data where relevant; e.g., patients are providing personal level SDoH data to some other entity, and the health system in question is integrating it into their data.</div>,
            options: [
                {
            text: "Level 7: Dynamic query of external sources** to bring in real-time or near-real-time actionable information.",
            value: '7'
                },
                {
            text: "Level 6: Integrating historical data from external sources (e.g., USDA, EPA, ACS)**",
            value: '6'
                },
                {
            text: "Level 5: EHR-linked, structured data collection. For example, using the SDOH Wheel in Epic, or Cerner Determinants of Health to intervene at the point of care using evidence-based screening tools and gain a better understanding of the social risk factors impacting your patient population.",
            value: '5'
                },
                {
            text: "Level 4: Electronic, structured SEDoH data collection using a third party platform such as, purple binder or native solutions such as, qualtrics. Data collection is not integrated into clinical workflow.",
            value: '4'
                },
                {
            text: "Level 3: SEDoH data is unstructured and free-texted within the EHR.",
            value: '3'
                },
                {
            text: "Level 2: Electronic data collection that is not part of the EHR, or it is being done for research only.",
            value: '2'
                },
                {
            text: "Level 1: Paper-based SEDoH data collection.",
            value: '1'
                }
            ]
        },
        {
        answerField: 'sedoh_q3_v2',
        text: <span>Technology platforms for analysis and visualization</span>,
        options: [
                {
            text: "Level 7: EHR-based integrated analytics and population health platform, enriched with external feed, such as ACS data or USDA data.",
            value: '7'
                },
                {
            text: "Level 6: EHR-based integrated analytics and population health platform in use to support specific care management goals.",
            value: '6'
                },
                {
            text: "Level 5: EHR-linked integrated and interactive analytics capability. This means that the information is actionable (eg.,it can trigger a CDS pathway, or an order for a social work consult) or it creates a structured data field, such as a risk profile, that can be used to identify risk and group patients.",
            value: '5'
                },
                {
            text: "	Level 4: Analytics and visualizations are embedded in the EHR, i.e., EHR- linked (HL7 or FHIR integration) analytics platform. This is non-actionable, read-only information, like a PDF where you are presenting the information to the user but there is no specific pathway that is triggered by that information.",
            value: '4'
                },
                {
            text: "Level 3: Non-EHR, interactive visual analytics platform in use (e.g., Power BI or Tableau)",
            value: '3'
                },
                {
            text: "Level 2: Non-EHR, primitive software is used for data visualization and performing analysis (e.g., Excel)",
            value: '2'
                },
                {
            text: "Level 1: No specific technology platforms are used for SEDoH data analysis and visualization.",
            value: '1'
                }
            ]
        },
        {
        answerField: 'sedoh_q4_v2',
        text: <span>Analytics Capacity</span>,
        options: [
                {
            text: "Level 7: SEDoH data informs precision medicine and prescriptive analytics initiatives resulting in a learning healthcare system.",
            value: '7'
                },
                {
            text: "Level 6: SEDoH data is being used for population health management, e.g., identifying high-risk patients for targeted interventions.",
            value: '6'
                },
                {
            text: "Level 5: SEDoH data is being used for waste and care variability reduction.",
            value: '5'
                },
                {
            text: "	Level 4: Creating reports and dashboards for external agencies (for community benefits requirement, for federal agencies, etc.)",
            value: '4'
                },
                {
            text: "Level 3: Internal reporting of SEDoH data, i.e., reports and dashboards are created for internal consumption of the institution.",
            value: '3'
                },
                {
            text: "Level 2: Standardized terminology is used to represent SEDoH concepts and data elements across the institution.",
            value: '2'
                },
                {
            text: "Level 1: Data within the technology platforms are not being used for analysis.",
            value: '1'
                }
            ]
        },
        {
        answerField: 'sedoh_q5_v2',
        text: <span>Operational and Strategic Impact</span>,
        options: [
                {
            text: "Level 7: SEDoH data influences strategic and financial decisions at the highest organizational level. Organizational leadership is committed and makes decisions based on SEDoH data, including allocation of significant financial resources.",
            value: '7'
                },
                {
            text: "Level 6: SEDoH data guides programmatic implementation, i.e., all organizational decisions (not just specific SEDoH initiatives) take into consideration the SEDoH data about the target population. For example, hiring Spanish staff for a population with 30% Spanish patients.",
            value: '6'
                },
                {
            text: "Level 5: SEDoH services center (infrastructure and operational unit) that operates to support patient-specific SEDoH needs and delivery of services to address SEDoH.",
            value: '5'
                },
                {
            text: "Level 4: SEDoH data informs department or division or clinic decisions within an organization (e.g., use of heat maps to assess high-prevalence asthma areas for establishing outpatient clinics).",
            value: '4'
                },
                {
            text: "Level 3: Presenting SEDoH data at point of care to help clinicians make clinical decisions.",
            value: '3'
                },
                {
            text: "Level 2: SEDoH data is presented for research or projects only.",
            value: '2'
                },
                {
            text: "Level 1: Leadership is not committed to SEDoH data initiatives.",
            value: '1'
                }
            ]
        }
    ]
}
