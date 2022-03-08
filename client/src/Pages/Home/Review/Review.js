import React, { useEffect, useState } from 'react';
import quoteSign from '../../../images/icons/quoteSign.png'
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from 'react-rating';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./styles.css";
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';


SwiperCore.use([EffectCoverflow, Pagination]);

const Review = () => {
    const [reviews, setReviews] = useState(null)

    useEffect(() => {
        fetch('https://tranquil-atoll-77789.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className="mt-24 xs:w-11/12 mx-auto">
            <div className="flex xs:flex-col md:flex-row justify-between items-center">
                <h1 className="text-4xl font-bold text-left cusGrayColor font-overlock">What the customer says about us</h1>
                <hr className="border-2 w-full xs:mt-6 md:mt-0" />
                <img src={quoteSign} alt="" className="w-44 ml-5" />
            </div>
            <div className="mt-10">

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 200,
                        "modifier": 1,
                        "slideShadows": true
                    }} pagination={true} className="mySwiper">

                    {reviews &&
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="bg-gray-100 h-full w-full rounded-xl relative">
                                    <div className="text-left p-4">

                                        <div className="flex justify-between items-center">
                                            <FontAwesomeIcon icon={faQuoteLeft}
                                                className="text-5xl text-green-200 " />
                                            <Rating
                                                style={{ color: "rgb(255, 150, 0)" }}
                                                emptySymbol={<FontAwesomeIcon icon={faStar} className="text-gray-400" />}
                                                fullSymbol={<FontAwesomeIcon icon={faStar} />}
                                                initialRating={review.rating}
                                                readonly />
                                        </div>
                                        <p className="mt-3">{review.reviewText}</p>
                                    </div>

                                    {/* Bottom Profile section---------- */}
                                    <div className="py-2 w-full bg-gray-500 text-white  absolute bottom-0 rounded-b-xl grid grid-cols-4 justify-center items-center">
                                        <div className="w-16 h-16 rounded-full col-span-1 mx-auto">
                                            <img src={review.photoURL} alt="" className="w-full h-full rounded-full" />
                                        </div>
                                        <div className="col-span-2 text-left">
                                            <h4 className="text-xl font-bold">{review.name}</h4>
                                            <h5>{review.position}</h5>
                                        </div>
                                        <div>
                                            <a href="">
                                                <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Review;