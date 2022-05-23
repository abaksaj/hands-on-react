import React from 'react';
import Button from '../Button/Button';
import {
    Section as SectionWrapper,
    SectionInner,
    SectionActionText,
    SectionHeading,
    SectionTitle
 } from "./SectionStyle";

const Section = ({
    children,
    actionText,
    title,
    buttonText,
    isHeadingVisible = true,
    onClick,
    isTestimonials
}) => {  
    return (
        <SectionWrapper isTestimonials={isTestimonials}>
            <SectionInner>
            {actionText && <SectionActionText>{actionText}</SectionActionText>}
            {isHeadingVisible && <SectionHeading>
                {title && <SectionTitle>{title}</SectionTitle>}
                {buttonText && <Button onClick={onClick} isHeading isOutline>{buttonText}</Button>}
            </SectionHeading>}
            {children}
            </SectionInner>
        </SectionWrapper>
    );
}
export default Section;