/**
 * API 설정 파일
 * Spring Boot 백엔드 연결을 위한 환경별 API URL 관리
 */

// 환경 변수에서 API URL 가져오기
export const JAVA_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/';

// API 엔드포인트 상수
export const API_ENDPOINTS = {
  // 예시 엔드포인트
  AUTH: {
    LOGIN: `${JAVA_URL}api/auth/login`,
    LOGOUT: `${JAVA_URL}api/auth/logout`,
    REGISTER: `${JAVA_URL}api/auth/register`,
  },
  USER: {
    PROFILE: `${JAVA_URL}api/user/profile`,
    UPDATE: `${JAVA_URL}api/user/update`,
  },
  // 추가 엔드포인트는 여기에 정의
};

// API 설정 옵션
export const API_CONFIG = {
  timeout: 10000, // 10초
  headers: {
    'Content-Type': 'application/json',
  },
};
