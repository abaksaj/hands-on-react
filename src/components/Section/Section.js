import React from 'react';
import Button from '../Button/Button';
import '../../components/Section/Section.scss';
import { useNavigate, useParams} from "react-router-dom";

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

        // <section className={sectionClass}>
        //     <div className="Section-Inner">
        //         {actionText && <span className="Section-ActionText">{}</span>}
        //         {isHeadingVisible && <div className="Section-Heading">
        //             {title && <h2 className="Section-Title">{title}</h2>}
        //             {buttonText && <Button onclick={onclick} modifiers={['heading', 'outline']}>{buttonText}</Button>}
        //         </div>}
        //         {children}
        //     </div>
        // </section>
    );
}

export default Section;