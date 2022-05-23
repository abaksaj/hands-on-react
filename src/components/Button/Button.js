import "../../components/Button/Button.scss";

const Button = ({modifiers, children}) => {
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
        <button className={buttonClass}>{children}</button>
    );
};

export default Button;
