import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import ctaLogoOne from '../../assets/cta-logo-one.svg';
import ctaLogoTwo from '../../assets/cta-logo-two.png';
import imgBackground from '../../assets/login-background.jpg';

import { Container, Content, BgImage, CTA, CTALogoOne, SignUp, Description, CTALogoTwo } from './styles';

const Login: React.FC = () => {

    const history = useHistory();
    const { signInWithGoogle } = useAuth();

    const handleSignIn = async () => {
        await signInWithGoogle().then(res => {
            if (res)
                history.push('/home');
        });
    }

    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src={ctaLogoOne} alt="" />
                    <SignUp onClick={handleSignIn}>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src={ctaLogoTwo} alt="" />
                </CTA>
                <BgImage image={imgBackground} />
            </Content>
        </Container>
    )
}

export default Login;