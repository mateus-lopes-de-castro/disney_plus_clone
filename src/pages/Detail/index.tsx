import React, { useState } from 'react';

import {
    Container,
    Background,
    ImageTitle,
    ContentMeta,
    Controls,
    Player,
    Trailer,
    AddList,
    GroupWatch,
    SubTitle,
    Description
} from './styles'

import playIconBlackImg from '../../assets/play-icon-black.png';
import playIconWhiteImg from '../../assets/play-icon-white.png';
import groupIconImg from '../../assets/group-icon.png';

interface IObje{
    title: string;
    backgroundImg: string;
    titleImg: string;
    subTitle: string;
    description: string;
}

const Detail: React.FC = () => {

    const [detailData, setDetail] = useState({
        titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78",
        backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
        subTitle: "2018 • 1h 58m • Science Fiction, Family, Animation, Action-Adventure",
        description: "While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the day-to-day heroics of “normal” life at home with Violet, Dash and Jack-Jack, whose superpowers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But with Frozone by their side, the Parrs can take on anything."
    } as IObje);

    return (
        <Container>
            <Background>
                <img alt={detailData.title} src={detailData.backgroundImg} />
            </Background>

            <ImageTitle>
                <img alt={detailData.title} src={detailData.titleImg} />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={playIconBlackImg} alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src={playIconWhiteImg} alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src={groupIconImg} alt="" />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>{detailData.subTitle}</SubTitle>
                <Description>{detailData.description}</Description>
            </ContentMeta>
        </Container>
    )
}

export default Detail;