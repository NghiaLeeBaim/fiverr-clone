import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import "../../assets/css/scss/slickCarousel/slickCarousel.scss"

type Props = {}

const SlickCarousel = (props: Props) => {
    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    borderRadius: "50%",
                    color: "#fff",
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        // swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="mt-4">
            <div className="container padding-0">
                <Slider {...settings}>
                    <div className="css-video ">
                        <div className="modal-1 col-lg-12">
                            <>
                                <Button className="modal-btn" variant="none" onClick={handleShow}>
                                    <img
                                        className="modal-img-slick"
                                        src="https://demo5.cybersoft.edu.vn/img/testimonial1.png"
                                        alt="testimonial1"
                                    ></img>
                                </Button>

                                <Modal className="modal-show" show={show} onHide={handleClose}>
                                    <div className="video-selling">
                                        <ReactPlayer
                                            url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                                            width="900px"
                                            height="auto"
                                            playing={true}
                                            controls={false}
                                        />
                                    </div>
                                </Modal>
                            </>
                            <div className="text-block">
                                <div
                                    className=" text d-flex align-items-center"
                                    style={{ paddingBottom: 16 }}
                                >
                                    <h5>Kay Kim, Co-Founder </h5>
                                    <span className="testimonial-logo">
                                        <img
                                            className="img-rooted"
                                            alt="Company logo"
                                            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                                            loading="lazy"
                                            style={{ width: "90%" }}
                                        />
                                    </span>
                                </div>
                                <div className="quote-modal">
                                    <i>
                                        "It's extremely exciting that Fiverr has freelancers from
                                        all over the world — it broadens the talent pool. One of the
                                        best things about Fiverr is that while we're sleeping,
                                        someone's working."
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="css-video ">
                        <div className="modal-1 col-lg-12">
                            <>
                                <Button className="modal-btn" variant="none" onClick={handleShow}>
                                    <img
                                        className="modal-img-slick"
                                        src="https://demo5.cybersoft.edu.vn/img/testimonial2.png"
                                        alt="testimonial2"
                                    ></img>
                                </Button>

                                <Modal className="modal-show" show={show} onHide={handleClose}>
                                    <div className="video-selling">
                                        <ReactPlayer
                                            url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl"
                                            width="900px"
                                            height="auto"
                                            playing={true}
                                            controls={false}
                                        />
                                    </div>
                                </Modal>
                            </>
                            <div className="text-block">
                                <div
                                    className="text d-flex align-items-center"
                                    style={{ paddingBottom: 16 }}
                                >
                                    <h5>Caitlin Tormey, Chief Commercial Officer</h5>
                                    <span className="testimonial-logo">
                                        <img
                                            className="img-rooted"
                                            alt="Company logo"
                                            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                            loading="lazy"
                                            style={{ width: "90%" }}
                                        />
                                    </span>
                                </div>
                                <div className="quote-modal">
                                    <i>
                                        "We've used Fiverr for Shopify web development, graphic
                                        design, and backend web development. Working with Fiverr
                                        makes my job a little easier every day."
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="css-video ">
                        <div className="modal-1 col-lg-12">
                            <>
                                <Button className="modal-btn" variant="none" onClick={handleShow}>
                                    <img
                                        className="modal-img-slick"
                                        src="https://demo5.cybersoft.edu.vn/img/testimonial3.png"
                                        alt="testimonial3"
                                    ></img>
                                </Button>

                                <Modal className="modal-show" show={show} onHide={handleClose}>
                                    <div className="video-selling">
                                        <ReactPlayer
                                            url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi"
                                            width="900px"
                                            height="auto"
                                            playing={true}
                                            controls={false}
                                        />
                                    </div>
                                </Modal>
                            </>
                            <div className="text-block">
                                <div
                                    className=" text d-flex align-items-center"
                                    style={{ paddingBottom: 16 }}
                                >
                                    <h5>Brighid Gannon (DNP, PMHNP-BC), Co-Founder</h5>
                                    <span className="testimonial-logo">
                                        <img
                                            className="img-rooted"
                                            alt="Company logo"
                                            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                                            loading="lazy"
                                            style={{ width: "90%" }}
                                        />
                                    </span>
                                </div>
                                <div className="quote-modal">
                                    <i>
                                        "We used Fiverr for SEO, our logo, website, copy, animated
                                        videos — literally everything. It was like working with a
                                        human right next to you versus being across the world."
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="css-video ">
                        <div className="modal-1 col-lg-12">
                            <>
                                <Button className="modal-btn" variant="none" onClick={handleShow}>
                                    <img
                                        className="modal-img-slick"
                                        src="https://demo5.cybersoft.edu.vn/img/testimonial4.png"
                                        alt="testimonial4"
                                    ></img>
                                </Button>

                                <Modal className="modal-show" show={show} onHide={handleClose}>
                                    <div className="video-selling">
                                        <ReactPlayer
                                            url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun"
                                            width="900px"
                                            height="auto"
                                            playing={true}
                                            controls={false}
                                        />
                                    </div>
                                </Modal>
                            </>
                            <div className="text-block">
                                <div
                                    className="text d-flex align-items-center"
                                    style={{ paddingBottom: 16 }}
                                >
                                    <h5>Tim and Dan Joo, Co-Founders</h5>
                                    <span className="testimonial-logo">
                                        <img
                                            className="img-rooted"
                                            alt="Company logo"
                                            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                                            loading="lazy"
                                            style={{ width: "90%" }}
                                        />
                                    </span>
                                </div>
                                <div className="quote-modal">
                                    <i>
                                        "When you want to create a business bigger than yourself,
                                        you need a lot of help. That's what Fiverr does."
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SlickCarousel