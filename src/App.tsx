import MainSection from "./components/MainSection";
import styled from "styled-components";

const App = () => {
  return (
    <StyledApp>
      <div className="main-page">
        <MainSection />
      </div>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  .main-page {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 35%;
  }
`;

export default App;
