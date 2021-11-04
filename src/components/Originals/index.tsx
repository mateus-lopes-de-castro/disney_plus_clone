import React from 'react';
import { Link } from "react-router-dom";

import Image1 from '../../assets/originals/image1.jpg';
import Image2 from '../../assets/originals/image2.jpg';
import Image3 from '../../assets/originals/image3.jpg';
import Image4 from '../../assets/originals/image4.jpg';

import { Container, Content, Wrap } from './styles';

const Originals: React.FC = () => {
    return (
        <Container>
            <h4>Originals</h4>

            <Content>
                <Wrap> 
                    <Link to={`/detail/1`}>
                        <img src={Image1} alt="" />
                    </Link>
                </Wrap>
                <Wrap> 
                    <Link to={`/detail/1`}>
                        <img src={Image2} alt="" />
                    </Link>
                </Wrap>
                <Wrap> 
                    <Link to={`/detail/1`}>
                        <img src={Image3} alt="" />
                    </Link>
                </Wrap>
                <Wrap> 
                    <Link to={`/detail/1`}>
                        <img src={Image4} alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Originals;