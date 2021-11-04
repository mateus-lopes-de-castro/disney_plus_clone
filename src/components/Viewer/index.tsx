import React from 'react';

import ViewerDisneyImg from '../../assets/viewer/viewers-disney.png';
import ViewerPixarImg from '../../assets/viewer/viewers-pixar.png';
import ViewerMarvelImg from '../../assets/viewer/viewers-marvel.png';
import ViewerStarWarsImg from '../../assets/viewer/viewers-starwars.png';
import ViewerNationalImg from '../../assets/viewer/viewers-national.png';

import { Container, Wrap } from './styles';

const Viewer: React.FC = () => {
    
    return (
        <Container>
            <Wrap>
                <img src={ViewerDisneyImg} alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={ViewerPixarImg} alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={ViewerMarvelImg} alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
                
            </Wrap>
            <Wrap>
                <img src={ViewerStarWarsImg} alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={ViewerNationalImg} alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source
                        src="/videos/1564676296-national-geographic.mp4"
                        type="video/mp4"
                    />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewer;