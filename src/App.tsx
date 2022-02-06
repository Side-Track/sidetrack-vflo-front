import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { EditorPageLayout } from './components/Layout';

const AuthPage = lazy(() => import('./pages/auth'));
const AuthSignupPage = lazy(() => import('./pages/auth/signup'));

const EditorDashBoard = lazy(() => import('./pages/editor'));
const EditorSettingPage = lazy(() => import('./pages/editor/setting'));
  
const AdminPage = lazy(() => import('./pages/admin'));

const Loading = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center">
    <p>로딩중...</p>
  </div>
);

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
