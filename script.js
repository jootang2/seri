// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('Seri project loaded successfully!');
    
    // 버튼 요소 가져오기
    const changeColorBtn = document.getElementById('changeColorBtn');
    
    // 배경색 변경 함수
    function changeBackgroundColor() {
        const colors = [
            '#f4f4f4', // 기본색
            '#e8f5e8', // 연한 초록
            '#fff0f0', // 연한 빨강
            '#f0f0ff', // 연한 파랑
            '#fff8e1', // 연한 노랑
            '#f3e5f5'  // 연한 보라
        ];
        
        // 현재 배경색 확인
        const currentColor = document.body.style.backgroundColor || '#f4f4f4';
        
        // 다음 색상 찾기
        let nextColor;
        if (currentColor === 'rgb(244, 244, 244)' || currentColor === '#f4f4f4') {
            nextColor = colors[1];
        } else {
            const currentIndex = colors.findIndex(color => 
                color === currentColor || 
                color === rgbToHex(currentColor)
            );
            nextColor = colors[(currentIndex + 1) % colors.length];
        }
        
        // 배경색 변경
        document.body.style.backgroundColor = nextColor;
        
        // 버튼 텍스트 업데이트
        changeColorBtn.textContent = `Current: ${nextColor}`;
        
        console.log('Background color changed to:', nextColor);
    }
    
    // RGB를 HEX로 변환하는 함수
    function rgbToHex(rgb) {
        if (!rgb.startsWith('rgb')) return rgb;
        
        const rgbValues = rgb.match(/\d+/g);
        if (!rgbValues || rgbValues.length !== 3) return rgb;
        
        const r = parseInt(rgbValues[0]);
        const g = parseInt(rgbValues[1]);
        const b = parseInt(rgbValues[2]);
        
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    
    // 버튼 클릭 이벤트 리스너 추가
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', changeBackgroundColor);
        console.log('Button event listener added');
    } else {
        console.error('Button not found!');
    }
    
    // 페이지 로드 완료 메시지
    console.log('All event listeners are set up');
});

// 추가 기능: 현재 시간 표시
function showCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ko-KR');
    console.log('Current time:', timeString);
}

// 5초마다 시간 표시
setInterval(showCurrentTime, 5000); 