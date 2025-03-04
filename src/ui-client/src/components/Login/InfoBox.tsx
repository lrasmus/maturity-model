import React from 'react';

interface Props {}

export default class InfoBox extends React.PureComponent<Props> {

    public render() {
        const c = 'infobox';

        return (
            <div className={c}>
                <div className={`${c}-header`}>Welcome to the Integrated Informatics Maturity Assessment Tool (IIMAT)</div>
                <p>
                    <a href="https://ctsa.ncats.nih.gov/cd2h/informatics-maturity-and-best-practices-core/" target="_">
                        Learn more about informatics maturity and best practices
                    </a>
                </p>
            </div>
        );
    }
}