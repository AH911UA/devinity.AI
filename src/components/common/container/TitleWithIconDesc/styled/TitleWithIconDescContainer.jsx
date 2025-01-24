import styled from "styled-components";
import fonts from "../../../../fonts";
import colors from "../../../../colors";

export const TitleWithIconDescContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.transpetent};
  border-radius: 12px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 54px;
  height: 54px;
  min-width: 54px;
  min-height: 54px;

  background-color: ${colors.purple700};
  border: 1px solid ${colors.purple600};
  border-radius: 12px;

  img {
    height: 18px;
    width: 18px;
  }
`;

export const TextWrapper = styled.div`
  margin-left: 16px;
  color: #fff;

  .main-text {
    font-size: 30px;
    font-weight: bold;
  }

  .tag-text {
    font-weight: 100;
    font-size: 16px;
    color: ${colors.purple};
  }

  @media screen and (max-width: 768px) {
    .main-text {
        font-size: 24px;
        line-height: 30px;
    }
    .tag-text {
        font-size: 14px;
        line-height: 18px;
    }
  }


`;
