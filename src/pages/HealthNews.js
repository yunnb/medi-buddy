import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WholeWrapper, TitleWrapper } from "../components/common/WrapperStyles";
import { Title } from "../components/common/TypographyStyles";
import {
  ContentWrapper,
  Content,
  MainContent,
} from "../components/common/ContentStyles";
import styled from "styled-components";

const HealthNews = () => {
  const [datum, setDatum] = useState(null);
  const navigate = useNavigate();

  const contentData = [
    {
      id: 1,
      title: "1번 뉴스 제목",
      description: "1번 뉴스 내용입니다~~~~~~~~~~~~~~~~~~~~~~~~",
    },
    {
      id: 2,
      title: "2번 뉴스 제목",
      description: "2번 뉴스 내용입니다~~~~~~~~~~~~~~~~~~~~~~~~",
    },
    {
      id: 3,
      title: "3번 뉴스 제목",
      description: "3번 뉴스 내용입니다~~~~~~~~~~~~~~~~~~~~~~~~",
    },
    {
      id: 4,
      title: "4번 뉴스 제목",
      description: "4번 뉴스 내용입니다~~~~~~~~~~~~~~~~~~~~~~~~",
    },
    {
      id: 5,
      title: "5번 뉴스 제목",
      description: "5번 뉴스 내용입니다~~~~~~~~~~~~~~~~~~~~~~~~",
    },
    {
      id: 6,
      title: "6번 뉴스 제목",
      description: "6번 뉴스 내용입니다~~~~~~~~~~~~~~~~~~~~~~~~",
    },
  ];

  const handleContentClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const bestContent = contentData[0];

  return (
    <WholeWrapper>
      <TitleWrapper>
        <Title>Health News</Title>
      </TitleWrapper>
      <StyledMainContent onClick={() => handleContentClick(bestContent.id)}>
        <div className="content-image"></div>
        <div className="content-title">{bestContent.title}</div>
        <div className="content-description">{bestContent.description}</div>
      </StyledMainContent>
      <ContentWrapper>
        {contentData.slice(1).map((item) => (
          <StyledContent
            key={item.id}
            onClick={() => handleContentClick(item.id)}
          >
            <div className="content-image"></div>
            <div className="content-title">{item.title}</div>
            <div className="content-description">{item.description}</div>
          </StyledContent>
        ))}
      </ContentWrapper>
    </WholeWrapper>
  );
};

const StyledMainContent = styled(MainContent)`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledContent = styled(Content)`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default HealthNews;
