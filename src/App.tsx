import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { EditorPageLayout } from './components/Layout';

/**
 * @file App.tsx
 * - 각 라우팅별 다른 페이지를 불러오는 컴포넌트
 * - `lazy` 를 통해 비동기적으로 페이지를 불러오는 것을 권장
 */

// 로그인 / 회원가입 페이지
const AuthPage = lazy(() => import('./pages/auth'));
const AuthSignupPage = lazy(() => import('./pages/auth/signup'));

// 에디터 페이지
const EditorDashBoard = lazy(() => import('./pages/editor'));
const EditorSettingPage = lazy(() => import('./pages/editor/setting'));

// 관리자 페이지
const AdminPage = lazy(() => import('./pages/admin'));

/**
 * @Component Loading
 * - 로딩중을 보여주는 컴포넌트
 */
const Loading = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center">
    <p>로딩중...</p>
  </div>
);

/**
 * @Component Page404
 * - 404 Not Found 에러를 보여주는 컴포넌트
 * - 로그인 페이지로 이동하는 링크를 보여줌
 */
const Page404 = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col items-center justify-center">
    <p>404 Not Found</p>
    <Link to="/">로그인 페이지</Link>
  </div>
);

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/">
            <Route path="/" element={<AuthPage />} />
            <Route path="/signup" element={<AuthSignupPage />} />
          </Route>
          <Route path="/editor" element={<EditorPageLayout />}>
            <Route path="/editor/" element={<EditorDashBoard />} />
            <Route path="/editor/setting" element={<EditorSettingPage />} />
          </Route>
          <Route path="/admin">
            <Route path="/admin/" element={<AdminPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  );
}
