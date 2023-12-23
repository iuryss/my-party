import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Div2 = styled.div`
  background-color: #0a075f;
  align-self: stretch;
  margin-top: 5px;
  width: 100%;
  padding: 50px 80px 28px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const Div3 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Div4 = styled.div`
  display: flex;
  margin-top: 64px;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const Div5 = styled.div`
  color: #f3f3f3;
  font: 400 14px/22px Montserrat, sans-serif;
`;

export const Div6 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 20px;
  width: 87px;
  max-width: 100%;
  padding-right: -1px;
  gap: 16px;
`;

export const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
`;

export const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  flex: 1;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 67%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Div7 = styled.div`
  display: flex;
  margin-top: 11px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Div8 = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Div9 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 22%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Div10 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const Div11 = styled.div`
  color: #fff;
  text-transform: capitalize;
  white-space: nowrap;
  margin-left: -5px;
  font: 700 18px/23px DM Sans, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Div12 = styled.div`
  color: #f3f3f3;
  margin-top: 20px;
  font: 500 14px/28px DM Sans, sans-serif;
`;

export const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 20%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Div13 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const Div14 = styled.div`
  color: #fff;
  text-transform: capitalize;
  white-space: nowrap;
  font: 700 18px/23px DM Sans, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Div15 = styled.div`
  color: #f3f3f3;
  margin-top: 20px;
  font: 500 14px/28px DM Sans, sans-serif;
`;

export const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 58%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Div16 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const Div17 = styled.div`
  color: #fff;
  text-transform: capitalize;
  white-space: nowrap;
  font: 700 18px/23px DM Sans, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Div18 = styled.div`
  color: #f3f3f3;
  margin-top: 23px;
  font: 400 14px/22px DM Sans, sans-serif;
`;

export const Div19 = styled.div`
  border-radius: 45.595px;
  border: 2px solid #f1f1f1;
  background-color: #fff;
  display: flex;
  margin-top: 48px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 8px 17px 8px 26px;
  @media (max-width: 991px) {
    padding-left: 20px;
    margin-top: 40px;
  }
`;

export const Input = styled.input`
  background-color: #fff;
  color: #959595;
  border-style: none;
  border-width: 1px;
  margin: auto -3px auto 0;
  font: 12.9px/16px "Jaldi", sans-serif;
  &:focus {
    outline: none;
}
`;

export const Div20 = styled.div`
  color: #fff;
  letter-spacing: 0.7903132057189942px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0px 10px 50px 0px rgba(61, 55, 241, 0.25);
  background-color: #f5167e;
  align-self: stretch;
  flex-grow: 1;
  margin-right: -5px;
  padding: 15px 20px;
  font: 400 12px/16px DM Sans, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Div21 = styled.div`
  color: #fefefe;
  align-self: start;
  white-space: nowrap;
  margin: 91px 0 0 54px;
  font: 400 14px/22px Averta Demo PE Cutted Demo, -apple-system, Roboto,
    Helvetica, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin: 40px 0 0 10px;
  }
`;