import React from 'react';
import { BaseModel } from '../../../model/ModelsState';
import { UserState } from '../../../model/UserState';
import { RIOSM } from '../../../model/Models/RIOSM';
import { EDW4R } from '../../../model/Models/EDW4R';
import ModelSummary from '../ModelSummary/ModelSummary';
import './ContentSummary.css';

interface Props {
    user: UserState;
    models: BaseModel[];
    model: string;
    mappedModels: Map<string, number>;
}

export default class ContentSummary extends React.PureComponent<Props> {
    private className = 'content-summary';

    public render() {
        const c = this.className;
        const { user, models, model, mappedModels } = this.props;

        if (model === 'RIOSM') {
            return this.getRIOSMSummary()
        };
        if (model === 'EDW4R') {
            return this.getEDW4RSummary()
        };
        
        return (
            models.map((m, i) => {
                return m.shortName === model &&
                    <div key={i} className={c}>
                        <div className={`${c}-total-submissions`}>
                            There are {mappedModels.get(m.shortName)} submission(s) for this model.
                        </div>

                        <ModelSummary key={i} model={m} user={user} />
                    </div>
            })
        );
    };

    private getEDW4RSummary = () => {
        const c = 'edw4r-summary';
        const { results } = this.props.user;
        const { mappedModels } = this.props;

        return (
            <div className={c}>
                <div className={`${c}-total-submissions`}>
                    There are {mappedModels.get(EDW4R.shortName)} submission(s) for this model.
                </div>
                
                {/* Scale */}
                <div className={`${c}-scale`}>
                    <div className={`${c}-scale-value`}>
                        <div>0</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <div className={`${c}-scale-key`}>
                        <div>N/A</div>
                        <div>Strongly Disagree</div>
                        <div>Disagree</div>
                        <div>Neutral</div>
                        <div>Agree</div>
                        <div>Strongly Agree</div>
                    </div>
                </div>

                {/* Composite Scores */}
                <div className={`${c}-composite`}>

                    {/* Overall */}
                    <div className={`${c}-composite-score`}>
                        Overall EDW4R Maturity Index Score: 
                        <span>
                            <strong>{results.user.edw4r_categories.overall.toFixed(1)}</strong>
                            {this.getEDW4RValueDifference(results.user.edw4r_categories.overall, results.all.edw4r_categories.overall)}
                        </span>
                    </div>

                    {/* Access and Outreach */}
                    <div className={`${c}-composite-score`}>
                        Access and Outreach: 
                        <span>
                            <strong>{results.user.edw4r_categories.access_and_outreach.toFixed(1)}</strong>
                            {this.getEDW4RValueDifference(results.user.edw4r_categories.access_and_outreach, results.all.edw4r_categories.access_and_outreach)}
                        </span>
                    </div>

                    {/* Service Management */}
                    <div className={`${c}-composite-score`}>
                        Service Management: 
                        <span>
                            <strong>{results.user.edw4r_categories.service_management.toFixed(1)}</strong>
                            {this.getEDW4RValueDifference(results.user.edw4r_categories.service_management, results.all.edw4r_categories.service_management)}
                        </span>
                    </div>

                    {/* Workforce */}
                    <div className={`${c}-composite-score`}>
                        Workforce: 
                        <span>
                            <strong>{results.user.edw4r_categories.workforce.toFixed(1)}</strong>
                            {this.getEDW4RValueDifference(results.user.edw4r_categories.workforce, results.all.edw4r_categories.workforce)}
                        </span>
                    </div>

                    {/* EDW4R and Enterprise IT */}
                    <div className={`${c}-composite-score`}>
                        EDW4R and Enterprise IT: 
                        <span>
                            <strong>{results.user.edw4r_categories.enterprise_it.toFixed(1)}</strong>
                            {this.getEDW4RValueDifference(results.user.edw4r_categories.enterprise_it, results.all.edw4r_categories.enterprise_it)}
                        </span>
                    </div>

                    {/* Data Governance */}
                    <div className={`${c}-composite-score`}>
                        Data Governance: 
                        <span>
                            <strong>{results.user.edw4r_categories.data_governance.toFixed(1)}</strong>
                            {this.getEDW4RValueDifference(results.user.edw4r_categories.data_governance, results.all.edw4r_categories.data_governance)}
                        </span>
                    </div>

                    {/* Metrics */}
                    <div className={`${c}-composite-score`}>
                        Metrics: 
                        <span>
                            <strong>{results.user.edw4r_categories.metrics.toFixed(1)}</strong>
                            {this.getEDW4RValueDifference(results.user.edw4r_categories.metrics, results.all.edw4r_categories.metrics)}
                        </span>
                    </div>

                </div>
                
                <ModelSummary model={EDW4R} user={this.props.user} />

            </div>
        );
    }

    private getRIOSMSummary = () => {
        const c = 'riosm-summary';
        const { results } = this.props.user;
        const { mappedModels } = this.props;

        return (
            <div className={c}>

                <div className={`${c}-total-submissions`}>
                    There are {mappedModels.get(RIOSM.shortName)} submission(s) for this model.
                </div>
                
                {/* Scale */}
                <div className={`${c}-scale`}>
                    <div className={`${c}-scale-value`}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <div className={`${c}-scale-key`}>
                        <div>Initial</div>
                        <div>Repeating</div>
                        <div>Defined</div>
                        <div>Managed</div>
                        <div>Optimizing</div>
                    </div>
                </div>

                {/* Composite Scores */}
                <div className={`${c}-composite`}>

                    {/* Overall */}
                    <div className={`${c}-composite-score`}>
                        Overall RIOSM Maturity Score: 
                        <span>
                            <strong>{results.user.riosm_categories.overall.toFixed(1)}</strong>
                            {this.getRIOSMValueDifference(results.user.riosm_categories.overall, results.all.riosm_categories.overall)}
                        </span>
                    </div>

                    {/* Governance */}
                    <div className={`${c}-composite-score`}>
                        Informatics Governance: 
                        <span>
                            <strong>{results.user.riosm_categories.governance.toFixed(1)}</strong>
                            {this.getRIOSMValueDifference(results.user.riosm_categories.governance, results.all.riosm_categories.governance)}
                        </span>
                    </div>

                    {/* Data and Software Sharing */}
                    <div className={`${c}-composite-score`}>
                        Data and Software Sharing: 
                        <span>
                            <strong>{results.user.riosm_categories.data_and_software_sharing.toFixed(1)}</strong>
                            {this.getRIOSMValueDifference(results.user.riosm_categories.data_and_software_sharing, results.all.riosm_categories.data_and_software_sharing)}
                        </span>
                    </div>

                    {/* Research Informatics */}
                    <div className={`${c}-composite-score`}>
                        Research Informatics: 
                        <span>
                            <strong>{results.user.riosm_categories.research_informatics.toFixed(1)}</strong>
                            {this.getRIOSMValueDifference(results.user.riosm_categories.research_informatics, results.all.riosm_categories.research_informatics)}
                        </span>
                    </div>

                </div>
                
                <ModelSummary model={RIOSM} user={this.props.user} />

            </div>
        );
    };

    private getRIOSMValueDifference = (user: number, all: number): JSX.Element | null => {
        return this.getValueDifference('riosm-summary', user, all);
    };

    private getEDW4RValueDifference = (user: number, all: number): JSX.Element | null => {
        return this.getValueDifference('edw4r-summary', user, all);
    };

    private getValueDifference = (cssClass: string, user: number, all: number): JSX.Element | null => {
        if (user >= all) {
            return <span className={`${cssClass}-composite-score-diff over`}>+{(user-all).toFixed(2)}</span>
        } else if (all > user) {
            return <span className={`${cssClass}-composite-score-diff under`}>-{(all-user).toFixed(2)}</span>
        };
        return null;
    };
}