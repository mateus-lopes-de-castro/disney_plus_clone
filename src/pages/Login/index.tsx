import React from 'react';

import ctaLogoOne from '../../assets/cta-logo-one.svg';
import ctaLogoTwo from '../../assets/cta-logo-two.png';
import imgBackground from '../../assets/login-background.jpg';

import { Container, Content, BgImage, CTA, CTALogoOne, SignUp, Description, CTALogoTwo } from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src={ctaLogoOne} alt="" />
                    <SignUp>GET ALL THERE</SignUp>
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