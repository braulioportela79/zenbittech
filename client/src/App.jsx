import * as S from './style';
import Feedback from './apis/Feedback';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const notify = () => toast('Your message was sent succesfully!');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Feedback.post('/', {
        user_name: userName,
        user_email: userEmail,
        message,
      });
      setUserName('');
      setUserEmail('');
      setMessage('');
      notify();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Container>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <S.Main>
        <S.Form onSubmit={handleSubmit}>
          <S.FormHeader>Reach out to us!</S.FormHeader>
          <S.TextInput
            placeholder='Your name*'
            type='text'
            maxLength='100'
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></S.TextInput>
          <S.TextInput
            placeholder='Your e-mail*'
            type='email'
            maxLength='100'
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          ></S.TextInput>
          <S.MsgInput
            placeholder='Your e-mail*'
            type='text'
            maxLength='255'
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
