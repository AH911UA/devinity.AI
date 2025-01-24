import styled from "styled-components";

const ButtonsHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;
  padding: ${({ padding }) => padding || "100px 0"};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${({ paddingMobile }) => paddingMobile || "50px 0 80px"};
    gap: 20px;

    > div:nth-child(1) {
      justify-content: space-between;
    }
    
    >div {
      font-size: 24px;
      padding: 25px 35px;
    }
  }
`;

export default ButtonsHorizontal;
