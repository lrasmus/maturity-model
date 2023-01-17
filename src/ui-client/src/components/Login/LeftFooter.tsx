import React from 'react'

interface Props {}

export default class LeftFooter extends React.PureComponent<Props> {
    private className = 'login-footer';

    public render() {
        const c = this.className;

        return (
            <div className={c}>
                <p className={`${c}-shoutout`}>
                    <span>Developed by UW Medicine Research IT, the CD2H, and <a href="https://www.nucats.northwestern.edu/">NUCATS</a>.
                    </span>
                </p>
            </div>
        );
    }
}