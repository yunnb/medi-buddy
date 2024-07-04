import React from "react";
import {
  WholeWrapper,
  Wrapper,
  TitleWrapper,
  Title,
  ContentWrapper,
  Content,
  MainContent,
} from "../components/common/commonComponents";

class HealthNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datum: null,
    };
  }

  render() {
    const { datum } = this.state;

    return (
      <WholeWrapper>
        <TitleWrapper>
          <Title>Health News</Title>
        </TitleWrapper>
        <MainContent>
          <div className="content-image"></div>
          <div className="content-title">this is best news title</div>
          <div className="content-description">
            this is best news desc.this is best news desc.this is best news
            desc.this is best news desc.this is best news descthis is best news
            descthis is best news desc.this is best news desc.this is best news
            desc
          </div>
        </MainContent>
        <ContentWrapper>
          <Content>
            <div className="content-image"></div>
            <div className="content-title">this is news title</div>
            <div className="content-description">
              this is news description. abcdeqwerqwerqwerqwer.
            </div>
          </Content>
          <Content>
            <div className="content-image"></div>
            <div className="content-title">this is news title</div>
            <div className="content-description">
              this is news description. abcdeqwerqwerqwerqwer.
            </div>
          </Content>
          <Content>
            <div className="content-image"></div>
            <div className="content-title">this is news title</div>
            <div className="content-description">
              this is news description. abcdeqwerqwerqwerqwer.
            </div>
          </Content>
          <Content>
            <div className="content-image"></div>
            <div className="content-title">this is news title</div>
            <div className="content-description">
              this is news description. abcdeqwerqwerqwerqwer.
            </div>
          </Content>
          <Content>
            <div className="content-image"></div>
            <div className="content-title">this is news title</div>
            <div className="content-description">
              this is news description. abcdeqwerqwerqwerqwer.
            </div>
          </Content>
          <Content>
            <div className="content-image"></div>
            <div className="content-title">this is news title</div>
            <div className="content-description">
              this is news description. abcdeqwerqwerqwerqwer.
            </div>
          </Content>
        </ContentWrapper>
      </WholeWrapper>
    );
  }
}

export default HealthNews;
