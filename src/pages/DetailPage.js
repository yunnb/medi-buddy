import React from "react";
import { useParams } from "react-router-dom";
import {
  WholeWrapper,
  TitleWrapper,
  CentWrapper,
} from "../components/common/WrapperStyles";
import { Title, ErrFont } from "../components/common/TypographyStyles";
import { MainContent } from "../components/common/ContentStyles";

const DetailPage = () => {
  const { id } = useParams();
  const contentId = parseInt(id, 10);

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

  const content = contentData.find((item) => item.id === contentId);

  if (!content) {
    return (
      <CentWrapper>
        <ErrFont>CONTENT NOT FOUND</ErrFont>
      </CentWrapper>
    );
  }

  return (
    <WholeWrapper>
      <TitleWrapper>
        <Title>{content.title}</Title>
      </TitleWrapper>
      <MainContent>
        <div className="content-image"></div>
        <div className="content-description">{content.description}</div>
      </MainContent>
    </WholeWrapper>
  );
};

export default DetailPage;
