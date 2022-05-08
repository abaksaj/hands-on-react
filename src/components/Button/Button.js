import { ButtonWrapper } from "./ButtonStyle";

const Button = ({modifiers, children, onclick}) => {
    const modifierClasses = {
        secondary: 'Button_secondary',
        nav: 'Button_nav',
        landing: 'Button_landing',
        heading: 'Button_heading',
        outline: 'Button_outline'
    };

    let buttonClass = "Button";

    modifiers.forEach(modifier => (buttonClass += " " + modifierClasses[modifiers]));

    return (

        <ButtonWrapper buttonClass={buttonClass} onClick={onclick}> {children} 
            {/* <Button className={buttonClass} onClick={onclick}>{children}</Button> */}
        
            </ButtonWrapper>
        // <Button className={buttonClass} onClick={onclick}>{children}</Button>

    );


};

export default Button;
