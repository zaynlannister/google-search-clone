import MainSection from "./components/MainSection";
import styled from "styled-components";

const App = () => {
  return (
    <StyledApp>
      <MainSection />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 35%;
`;

export default App;
