import { Link } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <button>
        <Link to="/auth/signup">회원가입</Link>
      </button>
      <button>
        <Link to="/editor">에디터 페이지 체험하기</Link>
      </button>
    </div>
  );
};

export default AuthPage;
