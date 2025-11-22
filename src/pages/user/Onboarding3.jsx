import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/user.css';

function Onboarding3() {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState('ocean');

  useEffect(() => {
    // 기존에 저장된 테마 로드
    const saved = localStorage.getItem('eume_theme');
    if (saved) {
      setSelectedTheme(saved);
    }
  }, []);

  // 테마 변경 시 body 클래스 적용
  useEffect(() => {
    const body = document.body;
    body.className = `theme-${selectedTheme}`;
  }, [selectedTheme]);

  const handleBack = () => {
    navigate('/user/onboarding-2');
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem('eume_theme', theme);
  };

  const handleComplete = () => {
    localStorage.setItem('eume_theme', selectedTheme);
    localStorage.setItem('eume_visited', 'true');
    localStorage.setItem('eume_onboarding_complete', 'true');
    navigate('/user/home');
  };

  return (
    <div className={`theme-${selectedTheme}`}>
      <div className="app-container">
        <div className="onboarding-container">
          {/* 뒤로가기 버튼 */}
          <button className="back-button" onClick={handleBack}>
            ← 이전
          </button>

          {/* 진행 표시 */}
          <div className="progress-dots">
            <span className="progress-dot completed"></span>
            <span className="progress-dot completed"></span>
            <span className="progress-dot active"></span>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="onboarding-content">
            <h1 className="onboarding-title">
              편한 색을<br />
              선택해주세요
            </h1>

            <p className="onboarding-description">
              마음에 드는 색상을 골라주세요<br />
              나중에 변경할 수 있어요
            </p>

            <div className="theme-selector">
              <label className="theme-option">
                <input
                  type="radio"
                  name="theme"
                  value="ocean"
                  checked={selectedTheme === 'ocean'}
                  onChange={() => handleThemeChange('ocean')}
                />
                <div className="theme-preview ocean">
                  <span className="theme-color"></span>
                  <span className="theme-name">바다</span>
                  <span className="theme-desc">시원한 파랑</span>
                </div>
              </label>

              <label className="theme-option">
                <input
                  type="radio"
                  name="theme"
                  value="sunset"
                  checked={selectedTheme === 'sunset'}
                  onChange={() => handleThemeChange('sunset')}
                />
                <div className="theme-preview sunset">
                  <span className="theme-color"></span>
                  <span className="theme-name">노을</span>
                  <span className="theme-desc">따뜻한 주황</span>
                </div>
              </label>

              <label className="theme-option">
                <input
                  type="radio"
                  name="theme"
                  value="forest"
                  checked={selectedTheme === 'forest'}
                  onChange={() => handleThemeChange('forest')}
                />
                <div className="theme-preview forest">
                  <span className="theme-color"></span>
                  <span className="theme-name">숲</span>
                  <span className="theme-desc">편안한 초록</span>
                </div>
              </label>

              <label className="theme-option">
                <input
                  type="radio"
                  name="theme"
                  value="lavender"
                  checked={selectedTheme === 'lavender'}
                  onChange={() => handleThemeChange('lavender')}
                />
                <div className="theme-preview lavender">
                  <span className="theme-color"></span>
                  <span className="theme-name">라벤더</span>
                  <span className="theme-desc">은은한 보라</span>
                </div>
              </label>

              <label className="theme-option">
                <input
                  type="radio"
                  name="theme"
                  value="rose"
                  checked={selectedTheme === 'rose'}
                  onChange={() => handleThemeChange('rose')}
                />
                <div className="theme-preview rose">
                  <span className="theme-color"></span>
                  <span className="theme-name">장미</span>
                  <span className="theme-desc">부드러운 분홍</span>
                </div>
              </label>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="button-container">
            <button className="btn btn-primary btn-large btn-full" onClick={handleComplete}>
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding3;
