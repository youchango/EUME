/**
 * 사용자 홈 페이지
 */
import React from 'react';

const UserHome = () => {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">이음이에 오신 것을 환영합니다</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-lg mb-4">
          이음이는 서울시의 고립은둔청년을 위한 정서 돌봄 AI 서비스입니다.
        </p>
        <p className="text-gray-600">
          먼저 말을 걸고, 감정을 읽어 복지를 연결하는 AI Digital Mate
        </p>
      </div>
    </div>
  );
};

export default UserHome;
