/**
 * React Router 라우팅 설정
 * 관리자(Admin) 페이지와 사용자(User) 페이지 분리
 */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';

// User Pages
import UserHome from './pages/user/Home';

// Router 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserHome />,
  },
  {
    path: '/admin',
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      // 추가 관리자 페이지는 여기에 정의
    ],
  },
  {
    path: '/user',
    children: [
      {
        path: 'home',
        element: <UserHome />,
      },
      // 추가 사용자 페이지는 여기에 정의
    ],
  },
]);

export default router;
