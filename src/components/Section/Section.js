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
    onclick,
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

            {actionText && <SectionActionText>{}</SectionActionText> }
            {isHeadingVisible && <SectionHeading /> }
            {title && <SectionTitle>{title}</SectionTitle> }
            {buttonText && <Button onclick={onclick} modifiers={['heading', 'outline']}>{buttonText}</Button>}
            </SectionInner>
            {children}

        </SectionWrapper>

    );
}

export default Section;