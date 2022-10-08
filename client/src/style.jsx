import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Main = styled.main`
  height: 80%;

  display: flex;

  background: url('../assets/orange_cartoon.png') 2% 5%,
    url('../assets/street_bg.png') top right,
    url('../assets/cloud_bg.png') left top 20px;
  background-size: 90px, contain, 100%;
  background-repeat: no-repeat;

  @media (max-width: 1023px) {
    background: url('../assets/orange_cartoon.png') 2% 5%,
      url('../assets/cloud_bg.png') left top 20px;
    background-repeat: no-repeat;
    background-size: 80px, 100%;
  }
`;

export const Form = styled.form`
  height: 80%;
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-left: 150px;
  margin-top: clamp(70px, 90px, 80px);

  font-family: 'IBM Plex Sans Arabic', sans-serif;

  @media (max-width: 1023px) {
    width: 80%;
    margin: clamp(70px, 90px, 80px) auto;
  }
`;

export const FormHeader = styled.h2`
  font-weight: 400;
  font-size: 2.5em;

  color: #3e3e3e;

  margin: 0 0 30px 0;

  @media (max-width: 1023px) {
    font-size: 2.2em;
    text-align: center;
    margin-bottom: 0;
    margin-top: 30px;
  }
`;

export const TextInput = styled.input`
  height: 93px;

  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  outline: none;
  padding: 0 46px;

  color: #3e3e3e;
  font-family: 'IBM Plex Sans Arabic', sans-serif;

  ::placeholder {
    color: #3e3e3e;
  }
`;

export const MsgInput = styled.textarea`
  height: 189px;

  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  outline: none;
  padding: 10px 46px;
  resize: none;

  color: #3e3e3e;
  font-family: 'IBM Plex Sans Arabic', sans-serif;

  ::placeholder {
    color: #3e3e3e;
  }
`;

export const SubmitBtn = styled.button`
  width: 218px;
  height: 73px;

  margin-top: 20px;

  cursor: pointer;

  background: #fad34f;
  border-radius: 500px;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #fff;

  @media (max-width: 650px) {
    align-self: center;
  }
`;

export const Footer = styled.footer`
  height: 20%;

  display: flex;
  align-items: center;

  background: url('../assets/pink_cartoon.png') 30px 0,
    url('../assets/green_cartoon.png') clamp(80%, 95%, 85%) top,
    url('../assets/orange_cartoon.png') 101%, #fafafa;
  border: 1px solid #d8d8d8;
  background-repeat: no-repeat;

  @media (max-width: 650px) {
    margin: auto;
    background: url('../assets/pink_cartoon.png') bottom -20px left -10px,
      url('../assets/green_cartoon.png') top right 20px,
      url('../assets/orange_cartoon.png') bottom 20px right -10px, #fafafa;
    background-repeat: no-repeat;
    background-size: 90px, 40px, 50px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 25px;

  margin-left: 350px;

  @media (max-width: 755px) {
    margin: auto;
  }
`;
