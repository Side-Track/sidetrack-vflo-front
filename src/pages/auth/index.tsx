import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { up, down } from 'styled-breakpoints';

const Wrapper = styled.div`
  /* PC */
  ${tw`lg:flex lg:flex-row`}
  ${tw`w-full min-h-screen bg-blue-400 `}


  .header {
    ${tw`relative w-full h-1/3 flex flex-col items-center justify-center p-8`}
    ${tw`lg:w-1/2 lg:h-screen`}

    &::after {
      content: '';
      ${tw`absolute bg-white`}
      ${up('lg')} {
        width: 2px;
        height: 100px;
        right: 0;
      }
      ${down('lg')} {
        width: 100px;
        height: 2px;
        bottom: 0;
      }
    }

    .title {
      ${tw`text-6xl font-bold text-white mb-10`}
    }

    .signup {
      ${tw`px-10 py-2 text-center text-white font-bold border-2 border-white rounded-lg`}
      ${tw`hover:text-black hover:bg-white`}
    }
  }

  .main {
    ${tw`w-full h-2/3 flex items-center justify-center p-8`}
    ${tw`lg:w-1/2 lg:h-screen lg:flex-col lg:justify-center`}
  }

  .form {
    ${tw`w-full bg-white p-4 lg:p-10 rounded-xl border-2 border-gray-100`}

    ${up('lg')} {
      max-width: 500px;
    }

    .form-title {
      ${tw`text-black font-bold text-3xl py-2 lg:pt-0 lg:pb-10 text-center lg:text-left`}
    }

    .form-item {
      ${tw`py-4 last:pb-0`}

      & label {
        ${tw`block font-bold text-base mb-1`}
      }

      & input {
        ${tw`block w-full h-12 p-4 text-base border-2 border-gray-100 rounded-lg`}
      }

      & button {
        ${tw`block w-full text-center bg-blue-400 h-12 rounded-lg text-white font-bold text-base`}
      }
    }
  }
`;

const AuthPage = () => {
  return (
    <Wrapper>
      <header className="header">
        <h1 className="title">VFLO</h1>
        <Link className="signup" to="/auth/signup">
          처음 오시나요?
        </Link>
      </header>
      <main className="main">
        <form className="form">
          <h2 className="form-title">로그인</h2>
          <div className="form-item">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" />
          </div>
          <div className="form-item">
            <label htmlFor="password">비밀번호</label>
            <input type="password"></input>
          </div>
          <div className="form-item">
            <button type="submit">로그인</button>
          </div>
        </form>
      </main>
    </Wrapper>
  );
};

export default AuthPage;
