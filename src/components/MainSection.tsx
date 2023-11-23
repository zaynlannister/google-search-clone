import styled from "styled-components";
import GoogleIcon from "../assets/icons/GoogleIcon";
import SearchIcon from "../assets/icons/SearchIcon";

const MainSection = () => {
  return (
    <StyledMain>
      <span className="main-logo">
        <GoogleIcon width="272px" height="92px" />
      </span>
      <div className="main-search mt-10">
        <div className="main-search__container relative">
          <span className="main-search__icon absolute">
            <SearchIcon width="24px" height="24px" />
          </span>
          <input
            autoComplete="off"
            spellCheck="false"
            className="main-search__input"
            type="text"
            placeholder="Введите поисковый запрос или URL"
          />
        </div>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  .main-logo svg {
    margin: 0 auto;
  }
  .main-search__icon {
    left: 20px;
    top: 10px;
  }
  .main-search__input {
    outline: none;
    border-radius: 20px;
    padding: 10px 60px;
    width: 500px;
    box-shadow: 0px 1px 6px 0px rgba(31, 31, 15, 0.2);
  }

  @media (max-width: 535px) {
    .main-search__input {
      width: 400px;
    }
  }
  @media (max-width: 435px) {
    .main-search__input {
      width: 300px;
    }
  }
  @media (max-width: 360px) {
    .main-search__input {
      width: 100%;
    }
  }
`;

export default MainSection;
