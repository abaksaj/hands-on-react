import { Button as ButtonWrapper} from "./ButtonStyle";

const Button = ({
    children,
    ...other
}) => {
    
    return (
        <ButtonWrapper {...other}>{children}</ButtonWrapper>
    );
};

export default Button;
