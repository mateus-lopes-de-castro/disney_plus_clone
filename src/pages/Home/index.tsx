import React from 'react';

import Slider from '../../components/Slider';
import Viewer from '../../components/Viewer';
import Recommends from '../../components/Recommends';
import NewDisney from '../../components/NewDisney';

import imgBackground from '../../assets/home-background.png';

import { Container } from './styles'

const Home: React.FC = () => {
    return (
        <Container image={imgBackground}>
            <Slider />
            <Viewer />
            <Recommends />
            <NewDisney />
        </Container>
    )
}

export default Home;