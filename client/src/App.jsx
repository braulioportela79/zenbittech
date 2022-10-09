import * as S from './style';
import Feedback from './apis/Feedback';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  setEmail,
  setMessage,
} from './redux/reducers/feedbackReducer';

export const App = () => {
  const notify = () => toast('Your message was sent succesfully!');

  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedback);

  const changeName = (newName) => dispatch(setName(newName));
  const changeEmail = (newEmail) => dispatch(setEmail(newEmail));
  const changeMessage = (newMessage) => dispatch(setMessage(newMessage));

  const handleNameInput = (e) => changeName(e.target.value);
  const handleEmailInput = (e) => changeEmail(e.target.value);
  const handleMessageInput = (e) => changeMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Feedback.post('/', {
        user_name: feedback.name,
        user_email: feedback.email,
        message: feedback.message,
      });

      dispatch(setName(''));
      dispatch(setEmail(''));
      dispatch(setMessage(''));
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
            value={feedback.name}
            onChange={handleNameInput}
          ></S.TextInput>
          <S.TextInput
            placeholder='Your e-mail*'
            type='email'
            maxLength='100'
            required
            value={feedback.email}
            onChange={handleEmailInput}
          ></S.TextInput>
          <S.MsgInput
            placeholder='Your e-mail*'
            type='text'
            maxLength='255'
            required
            value={feedback.message}
            onChange={handleMessageInput}
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
