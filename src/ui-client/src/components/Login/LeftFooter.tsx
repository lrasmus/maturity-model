import React from 'react'

interface Props {}

export default class LeftFooter extends React.PureComponent<Props> {
    private className = 'login-footer';

    public render() {
        const c = this.className;

        return (
            <div className={c}>
                <p className={`${c}-shoutout`}>
                    <span>Hosted by: The Northwestern University Clinical and Translational Sciences Institute (<a href="https://www.nucats.northwestern.edu/">NUCATS</a>)</span><br/>
                    <span>Originally developed by: UW Medicine Research IT and the CD2H</span>
                </p>
            </div>
        );
    }
}