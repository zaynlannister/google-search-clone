import styled from "styled-components";

const ResultSection = (props: any) => {
  const truncateText = (text: string) => {
    const maxLength = 36;

    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <StyledLink>
      {props?.data?.organic &&
        props?.data?.organic.map((item: any, index: any) => (
          <div className="mb-6" key={index}>
            <div
              className="link-section"
              onClick={() => handleClick(item.link)}
            >
              <p className="text-[12px] text-[#4d5156]">
                {truncateText(item.link)}
              </p>
              <a
                className="text-[#1a0dab] text-[20px]"
                target="_blank"
                href={item.link}
              >
                {item.title}
              </a>
            </div>
            <p className="text-[#4d5156] text-[14px]">{item.snippet}</p>

            {item.position === 1 &&
              item.sitelinks?.map((item: any, index: number) => (
                <div className="pl-4 pt-2" key={index}>
                  <a className="text-[#1a0dab]" href={item.link}>
                    {item.title}
                  </a>
                  <p className="text-[#4d5156] text-[14px]">{item.link}</p>
                </div>
              ))}
          </div>
        ))}
    </StyledLink>
  );
};

const StyledLink = styled.div`
  width: 650px;
  .link-section {
    cursor: pointer;
    width: fit-content;
  }
  .link-section:hover a {
    text-decoration: underline;
  }
`;

export default ResultSection;
