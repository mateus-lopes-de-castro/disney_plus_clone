import React from 'react';

import Slider from '../../components/Slider';
import Viewer from '../../components/Viewer';

import { Container } from './styles'

const Home: React.FC = () => {
    return (
        <Container>
            <Slider />
            <Viewer />
        </Container>
    )
}

export default Home;