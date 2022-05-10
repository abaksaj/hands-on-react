import { useState } from "react";
import { HamburgerButton } from "./HamburgerStyle";
import { useNavigate } from "react-router-dom";

function Hamburger() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  let navigate = useNavigate();

  function changeRoute(route) {
    navigate(route);
    setShowHamburgerMenu(false);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        <div style={{ alignSelf: "end" }}>
          <HamburgerButton onClick={() => setShowHamburgerMenu(true)}/>
        </div>

        {showHamburgerMenu && (
          <>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <a onClick={() => changeRoute("/Courses")}>Courses</a> <br />
              <a>Signin</a> <br />
              <a>Register</a>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Hamburger;
