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
    modifiers,
    actionText,
    title,
    buttonText,
    isHeadingVisible = true,
    children,
    onClick,
}) => {
    const modifierClasses = {
        testimonials: 'Section_testimonials'
    }

    let sectionClass = 'Section';
    
    if (modifiers){
        modifiers.forEach(modifier => {
            sectionClass += ' ' + modifierClasses[modifier];
        });
    }

    
    return (

        <SectionWrapper sectionClass={sectionClass}>
            <SectionInner>
            {actionText && <SectionActionText>{actionText}</SectionActionText> }
            {isHeadingVisible && <SectionHeading>
                {title && <SectionTitle>{title}</SectionTitle> }
                {buttonText && <Button onClick={onClick} isHeading isOutline>{buttonText}</Button>}
            </SectionHeading>}
            {children}
            </SectionInner>
        </SectionWrapper>

    );
}

export default Section;