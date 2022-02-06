import React from 'react';
import { Link } from 'react-router-dom';

const UserMainPage = () => {
  return (
    <div className="w-full h-screen bg-blue-400 flex flex-col justify-center items-center">
      <h1 className="text-white text-5xl font-bold mb-4">VFLO</h1>
      <p className="text-white font-medium mb-10">공사중 입니다.</p>
      <Link to="/auth">
        <a className="block px-4 py-2 border-2 border-white rounded-lg text-white hover:bg-white hover:text-black">
          로그인/회원가입
        </a>
      </Link>
    </div>
  );
};

export default UserMainPage;
