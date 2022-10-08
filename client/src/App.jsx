import * as S from './style';

export const App = () => {
  return (
    <S.Container>
      <S.Main>
        <S.Form>
          <S.FormHeader>Reach out to us!</S.FormHeader>
          <S.TextInput
            placeholder='Your name*'
            type='text'
            required
          ></S.TextInput>
          <S.TextInput
            placeholder='Your e-mail*'
            type='email'
            required
          ></S.TextInput>
          <S.MsgInput
            placeholder='Your e-mail*'
            type='text'
            required
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
