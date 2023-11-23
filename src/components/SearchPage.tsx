import React from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import styled from "styled-components";
import SearchIcon from "../assets/icons/SearchIcon";
import ClearIcon from "../assets/icons/ClearIcon";
import ResultSection from "./ResultSection";
import VideoSection from "./VideoSection";
import PhotosSection from "./PhotosSection";
import { useLocation, useNavigate } from "react-router-dom";
import fetchData from "../helpers/fetchData";
const nav = [
  { link: "all", name: "Все" },
  { link: "video", name: "Видео" },
  { link: "photo", name: "Картинки" },
];

const SearchPage = () => {
  const navigate = useNavigate();
  const searchVal = useLocation().search.split("=")[1].replace(/%20/g, " ");
  const [defaultValue, setDefault] = React.useState("all");
  const [search, setSearch] = React.useState(searchVal);

  const [data, setData] = React.useState<any>({});

  const clearSearch = () => {
    setSearch("");
  };

  const handleSearch = () => {
    navigate(`?search=${search}`);
    fetchData(search, setData);
  };

  React.useEffect(() => {
    handleSearch();
  }, []);

  return (
    <StyledSearcSection>
      <div className="header">
        <span onClick={() => navigate("/")}>
          <GoogleIcon className="google-icon" width="92px" height="30px" />
        </span>
        <div className="header-search">
          <div className="header-container relative w-fit">
            <input
              type="text"
              className="header-input"
              placeholder="Поиск..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <span className="header-icons absolute">
              <ClearIcon
                onClick={clearSearch}
                title="Очистить"
                className={`header-icons__clear ${
                  search.length ? "" : "hidden"
                }`}
              />
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
              <a className="cursor-pointer">{item.name}</a>
            </span>
          ))}
        </div>
        <div className="search-result flex gap-28 mt-8">
          {defaultValue === "all" ? (
            <ResultSection data={data} />
          ) : defaultValue === "video" ? (
            <VideoSection />
          ) : (
            <PhotosSection />
          )}
          {data.knowledgeGraph &&
            data.knowledgeGraph.description &&
            defaultValue === "all" && (
              <div className="w-[370px] border border-[#dadce0] h-fit rounded-[10px] right-content">
                <div className=" border-b border-b-[#dadce0]">
                  <p className="text-[28px] p-4">{data.knowledgeGraph.title}</p>
                </div>
                <div className="p-4">
                  <p className="text-[#4d5156] text-[14px] mb-4">
                    {data.knowledgeGraph.description}
                  </p>
                  <a
                    className="text-[#1a0dab]"
                    href={data.knowledgeGraph.descriptionLink}
                  >
                    {data.knowledgeGraph.descriptionSource}
                  </a>
                </div>
              </div>
            )}
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
    }
    .search-container {
      padding-inline: 20px;
    }
  }

  @media (max-width: 760px) {
    .header-input {
      width: 400px;
    }
  }

  @media (max-width: 585px) {
    .header-input {
      width: 100%;
    }
  }

  @media (max-width: 1260px) {
    .right-content {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .header {
      gap: 20px;
    }
    .google-icon {
      width: 50px;
      height: 30px;
    }
  }
`;

export default SearchPage;
