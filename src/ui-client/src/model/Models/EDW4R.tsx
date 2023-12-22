import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { EDW4RForm } from "../../components/Models/EDW4R";

export const EDW4R: BaseModel = 
{
    completeField: 'edw4r_maturity_index_complete',
    name: 'Enterprise Data Warehouse for Research (EDW4R) Maturity Index',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10052397/',
    shortName: 'EDW4R',
    description: 'This is a maturity index for Enterprise Data Warehouse for Research operations. It focuses on six areas including Access and outreach, Service management, Workforce, Relationship with Enterprise IT, Data Governance and Metrics.',
    render: (dispatch: any, answers: UserAnswers) => <EDW4RForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'acc_out10',
            text: <span><b>Access and Outreach:</b> We have self-service tools for exploring a de-identified portion of the EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'acc_out11',
            text: <span><b>Access and Outreach:</b> We have a variety of methods for enabling users to access data in our EDW4R, which take into consideration the level of data expertise of the researcher.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'acc_out12',
            text: <span><b>Access and Outreach:</b> We require CITI or other relevant research ethics training prior to accessing our EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'acc_out4',
            text: <span><b>Access and Outreach:</b> We have regular orientation courses in accessing data in the EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'acc_out7',
            text: <span><b>Access and Outreach:</b> We offer a service that establishes a population-specific data mart that is periodically updated.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'acc_out8',
            text: <span><b>Access and Outreach:</b> We are able to generate reports from our Electronic Health Record for research requests.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'servman1',
            text: <span><b>Service Management:</b> We have a standard format for submitting data requests.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'servman2',
            text: <span><b>Service Management:</b> We have a written description of the services available to access our EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'servman3',
            text: <span><b>Service Management:</b> Our EDW4R services are listed as part of our enterprise IT service catalog.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'servman4',
            text: <span><b>Service Management:</b> Our IT helpdesk knows to refer research requests for clinical data to our EDW4R team.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'workforce1',
            text: <span><b>Workforce:</b> We have one or more staff whose duties include processing requests for data from our EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'workforce2',
            text: <span><b>Workforce:</b> We have one or more staff whose duties include aggregating and managing the data stored in our EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'workforce3',
            text: <span><b>Workforce:</b> We have one or more staff whose duties include project management of activities related to our EDW4R team.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'workforce4',
            text: <span><b>Workforce:</b> We have one or more staff whose duties are shared with enterprise IT.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'workforce5',
            text: <span><b>Workforce:</b> We have identified training programs as pipelines to fill open positions on our EDW4R team.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'workforce6',
            text: <span><b>Workforce:</b> Our EDW4R team includes faculty domain experts who assist with EDW4R services.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'rel_eit1',
            text: <span><b>EDW4R and Enterprise IT:</b> EDW4R services are listed as part of the Enterprise IT service catalog.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'rel_eit2',
            text: <span><b>EDW4R and Enterprise IT:</b> Our EDW4R data team is integrated into our Enterprise IT organization.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'rel_eit3',
            text: <span><b>EDW4R and Enterprise IT:</b> Our EDW4R group works closely with the clinical data warehouse teams.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'rel_eit4',
            text: <span><b>EDW4R and Enterprise IT:</b> The EDW4R is part of the overall Enterprise IT strategic planning process.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'rel_eit5',
            text: <span><b>EDW4R and Enterprise IT:</b> Our CRIO (or equivalent) collaborates closely with other C-suite leaders.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'datagov1',
            text: <span><b>Data Governance:</b> We manage requests for access to our EDW4R with guidance from our IRB.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'datagov2',
            text: <span><b>Data Governance:</b> We have a team that reviews and prioritizes data requests to the EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'datagov3',
            text: <span><b>Data Governance:</b> We have a team that defines what data from source systems goes into the EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'datagov4',
            text: <span><b>Data Governance:</b> We have a team that engages with the IRB, compliance, and legal to define policies regarding requests for using data from the EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'datagov5',
            text: <span><b>Data Governance:</b> We have a high-level committee that reviews external agreements regarding accessing data from the EDW4R.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'datagov6',
            text: <span><b>Data Governance:</b> Our governance structure considers both clinical and research data requests.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'metric1',
            text: <span><b>Metrics:</b> We keep track of the number of research requests we receive for patient data.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'metric2',
            text: <span><b>Metrics:</b> We track the outcomes (publications, grants...) resulting from research requests for patient data.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'metric3',
            text: <span><b>Metrics:</b> We track response times for research requests for patient data.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'metric4',
            text: <span><b>Metrics:</b> We provide data quality assessments for a research network such as PCORnet or OHDSI.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'metric5',
            text: <span><b>Metrics:</b> We assess our EDW4R using NCATS' Common Metrics.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        },
        {
            answerField: 'metric6',
            text: <span><b>Metrics:</b> We track metrics that are used for strategic planning.</span>, 
            options: [
                    {
                text: "Strongly Agree",
                value: '5'
                    },
                    {
                text: "Agree",
                value: '4'
                    },
                    {
                text: "Neutral",
                value: '3'
                    },
                    {
                text: "Disagree",
                value: '2'
                    },
                    {
                text: "Strongly Disagree",
                value: '1'
                    },
                    {
                text: "Not Applicable",
                value: '0'
                    }
            ]
        }
    ]
}