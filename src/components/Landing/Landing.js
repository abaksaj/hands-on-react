import Button from "../Button/Button";
import LandingImg  from "../../assets/images/landing.jpg";
import { Link } from "react-router-dom";

import { LandingWrapper, 
          LandingImage, 
          LandingOverlay, 
          LandingOverlayPrimary, 
          LandingOverlaySecondary,
          LandingContent,
          LandingContentInner,
          LandingTitle,
          LandingSubtitle,
        Figure } from "./LandingStyle";

const Landing = () => {
  return (
    <LandingWrapper >
      <Figure >
        <LandingImage src={LandingImg} alt="Landing"/>
      </Figure>
      <LandingOverlay>
        <LandingOverlayPrimary/>
        <LandingOverlaySecondary/>
      </LandingOverlay>
      <LandingContent>
        <LandingContentInner>
          <LandingTitle>Learn what matters with Speck</LandingTitle>
          <LandingSubtitle> Make a turnaround in your career or upgrade your current skill set
              with knowledge-based lessons from IT practice.</LandingSubtitle>
          <Link to="/courses">
          <Button isLanding>Explore Courses</Button>
          </Link>
        </LandingContentInner>
      </LandingContent>
    </LandingWrapper>
  );
};

export default Landing;