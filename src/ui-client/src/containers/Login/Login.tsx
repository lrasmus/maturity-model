import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import InfoBox from '../../components/Login/InfoBox';
import LeftFooter from '../../components/Login/LeftFooter';
import LoginBox from '../../components/Login/LoginBox';
import SignUp from '../../components/SignUp/SignUp';
import { GeneralState } from '../../model/GeneralState';
import { LoginState } from '../../model/LoginState';
import { AppConfigState } from '../../model/AppConfigState';
import './Login.css';

interface Props {
    dispatch: any;
    generalState: GeneralState;
    loginState: LoginState;
    appConfigState: AppConfigState;
}

export class Login extends React.PureComponent<Props> {
    private className = 'login';

    public render() {
        const c = this.className;
        const { dispatch, generalState, loginState, appConfigState } = this.props;
        return (
            <Container fluid={true}>
                <Row>
                    <Col className={`${c}-col ${c}-col-left`}>
                        <div className={`${c}-col-left-container`}>
                            <InfoBox />
                            <LeftFooter />
                        </div>
                    </Col>
                    <Col className={`${c}-col ${c}-col-right`}>
                        <div className={`${c}-col-right-container`}>
                            {!loginState.newUser
                                ? <LoginBox dispatch={dispatch} infoState={generalState.informationModal} loginState={loginState} appConfigState={appConfigState} />
                                : <SignUp dispatch={dispatch} infoState={generalState.informationModal} loginState={loginState} />
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
}