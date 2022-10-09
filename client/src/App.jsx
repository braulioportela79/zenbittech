import * as S from './style';
import Feedback from './apis/Feedback';
import { useState } from 'react';

export const App = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Feedback.post('/', {
      user_name: userName,
      user_email: userEmail,
      message,
    });
    setUserName('');
    setUserEmail('');
    setMessage('');
  };

  return (
    <S.Container>
      <S.Main>
        <S.Form onSubmit={handleSubmit}>
          <S.FormHeader>Reach out to us!</S.FormHeader>
          <S.TextInput
            placeholder='Your name*'
            type='text'
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></S.TextInput>
          <S.TextInput
            placeholder='Your e-mail*'
            type='email'
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          ></S.TextInput>
          <S.MsgInput
            placeholder='Your e-mail*'
            type='text'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></S.MsgInput>
          <S.SubmitBtn>Send message</S.SubmitBtn>
        </S.Form>
      </S.Main>
      <S.Footer>
        <S.SocialMedia>
          <a href='/' target='_blank'>
            <img src='../assets/linkedin_icon.png' alt='LinkedIn' />
          </a>
          <a href='/' target='_blank'>
            <img src='../assets/twitter_icon.png' alt='Twitter' />
          </a>
          <a href='/' target='_blank'>
            <img src='../assets/facebook_icon.png' alt='Facebook' />
          </a>
          <a href='/' target='_blank'>
            <img src='../assets/pinterest_icon.png' alt='Pinterest' />
          </a>
        </S.SocialMedia>
      </S.Footer>
    </S.Container>
  );
};
