import Carousel from "react-bootstrap/Carousel"
import "../../assets/css/scss/slider/slider.scss"


type Props = {}

const Slider = (props: Props) => {
    return (

        <Carousel slide={false} controls={false} indicators={false}>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100 object-fit"
                    src="https://demo5.cybersoft.edu.vn/img/1.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100 object-fit"
                    src="https://demo5.cybersoft.edu.vn/img/2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100 object-fit"
                    src="https://demo5.cybersoft.edu.vn/img/3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100 object-fit"
                    src="https://demo5.cybersoft.edu.vn/img/4.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100 object-fit"
                    src="https://demo5.cybersoft.edu.vn/img/5.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    )
}

export default Slider