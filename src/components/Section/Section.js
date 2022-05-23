import React from 'react';
import Button from '../Button/Button';
import {
    Section as SectionWrapper,
    SectionInner,
    SectionActionText,
    SectionHeading,
    SectionTitleH1,
    SectionTitleH2
 } from "./SectionStyle";

const Section = ({
    children,
    actionText,
    title,
    buttonText,
    isHeadingVisible = true,
    onClick,
    isCentered = false,
    isTestimonials,
    isMainSection=false,
}) => {  
    return (
        <SectionWrapper isTestimonials={isTestimonials}>
            <SectionInner>
            {actionText && <SectionActionText>{actionText}</SectionActionText>}
            {isHeadingVisible && <SectionHeading>
                {title && (isMainSection 
                ? <SectionTitleH1 isCentered={isCentered}>{title}</SectionTitleH1>
                :<SectionTitleH2 isCentered={isCentered}>{title}</SectionTitleH2>)
                }
                {buttonText && <Button onClick={onClick} isHeading isOutline>{buttonText}</Button>}
            </SectionHeading>}
            {children}
            </SectionInner>
        </SectionWrapper>
    );
}
export default Section;