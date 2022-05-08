import "../../components/Main/Main.scss";
import { MainDiv } from "./MainStyle";

const Main = (props) => {
    return (
<>
        <MainDiv>{props.children}</MainDiv>
        {/* <main className="Main">{props.children}</main> */}
</>
    );
};

export default Main;

