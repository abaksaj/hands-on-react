import { HamburgerButton } from "./HamburgerStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ButtonPosition,
        ButtonPositionInner,
        HamburgerMenu } from "./HamburgerStyle";

function Hamburger() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  let navigate = useNavigate();

  function changeRoute(route) {
    navigate(route);
    setShowHamburgerMenu(false);
  }

  return (
    <>
        <ButtonPosition>
          <ButtonPositionInner>
            <HamburgerButton onClick={() => setShowHamburgerMenu(true)}/>
          </ButtonPositionInner>

        {showHamburgerMenu && (
          <>
            <HamburgerMenu>
              <a onClick={() => changeRoute("/courses")}>Courses</a><br/>
              <a onClick={() => changeRoute("/sign-in")}>Sign In</a> <br/>
              <a onClick={() => changeRoute("/register")}>Register</a>
            </HamburgerMenu>
          </>)
        };
        </ButtonPosition>
    </>
  );
};

export default Hamburger;
