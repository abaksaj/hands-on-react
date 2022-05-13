import React from 'react';
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
    );
}

export default Testimonial;