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
    sectionClass,
    isCentered=false
}) => {  
    return (
        <SectionWrapper sectionClass={sectionClass}>
            <SectionInner>
            {actionText && <SectionActionText>{actionText}</SectionActionText>}
            {isHeadingVisible && <SectionHeading>
                {title && <SectionTitle isCentered>{title}</SectionTitle>}
                {buttonText && <Button onClick={onClick} isHeading isOutline>{buttonText}</Button>}
            </SectionHeading>}
            {children}
            </SectionInner>
        </SectionWrapper>
    );
}
export default Section;