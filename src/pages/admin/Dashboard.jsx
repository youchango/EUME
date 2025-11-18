/**
 * 관리자 대시보드 페이지
 */
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">관리자 대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">총 사용자</h3>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">활성 세션</h3>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">위험군 청년</h3>
          <p className="text-3xl font-bold text-red-600">0</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
