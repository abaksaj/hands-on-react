import React from 'react';
import '../Testimonial/Testimonial.scss';

import testimonialImg from '../../assets/images/testimonial.jpg';

import {
    Testimonial as TestimonialWrapper,
    TestimonialFigure,
    TestimonialImg,
    TestimonialContent,
    TestimonialText,
    TestimonialQuotation,

  } from "./TestimonialStyle";

const Testimonial = () => {
    return (

        <TestimonialWrapper> 
            <TestimonialFigure>
                <TestimonialImg src={testimonialImg} alt="Testimonial" />

            </TestimonialFigure>

            <TestimonialContent> 

            <TestimonialText> 
            <TestimonialQuotation>At the academy, I learned how to apply technology in practice. 
                 Frontend education was demanding, it required a lot of time. 
            Upon completion, I got my first job as a developer. </TestimonialQuotation>
            </TestimonialText>


            </TestimonialContent>


        </TestimonialWrapper>



        // <div className="Testimonial">
        //     <figure className="Testimonial-Figure">
        //         <img src={testimonialImg} alt="Testimoniala" className="Testimonial-Img" />
        //     </figure>
        //     <div className="Testimonial-Content">
        //         <p className="Testimonial-Text">
        //             <span className="Testimonial-Quotation">"</span>
        //             At the academy, I learned how to apply technology in practice. 
        //             Frontend education was demanding, it required a lot of time. 
        //             Upon completion, I got my first job as a developer.
        //             <span className="Testimonial-Quotation">"</span>
        //         </p>
        //     </div>
        // </div>
    );
}

export default Testimonial;