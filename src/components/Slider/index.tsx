

import sliderBadingImg from '../../assets/slider/slider-badging.jpg';
import sliderScaleImg from '../../assets/slider/slider-scale.jpg';
import sliderBadagImg from '../../assets/slider/slider-badag.jpg';
import sliderScalesImg from '../../assets/slider/slider-scales.jpg';

import {Wrap, Carousel} from './styles'

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src={sliderBadingImg} alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src={sliderScaleImg} alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src={sliderBadagImg} alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src={sliderScalesImg} alt="" />
                </a>
            </Wrap>
        </Carousel>
    );
};

export default ImgSlider;

