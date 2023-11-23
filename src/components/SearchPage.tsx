import React from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import styled from "styled-components";
import SearchIcon from "../assets/icons/SearchIcon";
import ClearIcon from "../assets/icons/ClearIcon";
import ResultSection from "./ResultSection";
import VideoSection from "./VideoSection";
import PhotosSection from "./PhotosSection";

const nav = [
  { link: "all", name: "Все" },
  { link: "video", name: "Видео" },
  { link: "photo", name: "Картинки" },
];

const SearchPage = () => {
  const [defaultValue, setDefault] = React.useState("all");

  return (
    <StyledSearcSection>
      <div className="header">
        <GoogleIcon width="92px" height="30px" />
        <div className="header-search">
          <div className="header-container relative w-fit">
            <input
              type="text"
              className="header-input"
              placeholder="some text"
            />
            <span className="header-icons absolute">
              <ClearIcon title="Очистить" className="header-icons__clear" />
              <SearchIcon
                title="Поиск"
                fill="#4285f4"
                className="header-icons__search"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="search-container">
        <div className="navigation flex gap-6">
          {nav.map((item, index) => (
            <span
              onClick={() => setDefault(item.link)}
              className={`${
                defaultValue === item.link
                  ? "text-[#1a73e8] border-b border-b-[#1a73e8] pb-1"
                  : ""
              }`}
              key={index}
            >
              <a href={`#${item.link}`}>{item.name}</a>
            </span>
          ))}
        </div>
        <div className="search-result flex gap-20 mt-8">
          {defaultValue === "all" ? (
            <ResultSection />
          ) : defaultValue === "video" ? (
            <VideoSection />
          ) : (
            <PhotosSection />
          )}

          <p>right</p>
        </div>
      </div>
    </StyledSearcSection>
  );
};

const StyledSearcSection = styled.div`
  .header {
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 30px 20px;

    &-input {
      outline: none;
      border-radius: 20px;
      padding: 10px 90px 10px 20px;
      width: 500px;
      box-shadow: 0px 1px 6px 0px rgba(31, 31, 15, 0.2);
    }

    &-icons {
      display: flex;
      align-items: center;
      top: 10px;
      right: 20px;
      gap: 6px;

      &__clear,
      &_search {
        cursor: pointer;
      }

      &__search {
        border-left: 1px solid #5f6368;
        padding-left: 10px;
        box-sizing: content-box;
      }
    }
  }

  .search-container {
    padding: 0 20px 0 160px;
  }

  @media (max-width: 900px) {
    .header {
      width: min(650px, 100%);
      padding-inline: 20px;
      &-input {
        width: 400px;
      }
    }
    .search-container {
      padding-inline: 20px;
    }
  }
`;

export default SearchPage;
