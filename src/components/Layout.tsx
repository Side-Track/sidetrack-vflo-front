import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const EditorPageLayout = () => {
  return (
    <>
      <nav>
        <h1>VFLO</h1>
        <ul>
          <li>
            <Link to="/editor">Dashboard</Link>
          </li>
          <li>
            <Link to="/editor/setting">Setting</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export const UserPageLayout = () => {
  return (
    <>
      <nav>
        {/* <h1>VFLO</h1> */}
        {/* <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/auth">로그인</Link>
          </li>
        </ul> */}
      </nav>
      <Outlet />
    </>
  );
};
