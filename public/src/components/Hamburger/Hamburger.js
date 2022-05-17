import { useState } from "react";
import { HamburgerButton } from "./HamburgerStyle";
import { useNavigate } from "react-router-dom";
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
              <a onClick={() => changeRoute("/Courses")}>Courses</a> <br />
              <a>Sign In</a> <br />
              <a>Register</a>
            </HamburgerMenu>
          </>
            )
        };
        </ButtonPosition>
    </>
  );
};

export default Hamburger;
