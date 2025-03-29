// ✅ 학생 계정 정보
const studentAccounts = [
  { id: "202301", name: "홍길동", googleId: "hong123@gmail.com", password: "pass1234" },
  { id: "202302", name: "김영희", googleId: "kimyh@gmail.com", password: "abc9876" },
  { id: "202303", name: "이철수", googleId: "lee123@gmail.com", password: "mypw4321" }
];

// ✅ DOMContentLoaded 이후 메인 로직 실행
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const resultBox = document.getElementById('result');
  const googleIdSpan = document.getElementById('googleId');
  const googlePwSpan = document.getElementById('googlePw');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputId = document.getElementById('studentId').value.trim();
    const inputName = document.getElementById('studentName').value.trim();

    const student = studentAccounts.find(
      s => s.id === inputId && s.name === inputName
    );

    if (student) {
      googleIdSpan.textContent = student.googleId;
      googlePwSpan.textContent = student.password;
      resultBox.style.display = 'block';
    } else {
      googleIdSpan.textContent = '';
      googlePwSpan.textContent = '';
      resultBox.style.display = 'block';
      resultBox.innerHTML = `<h2>조회 결과</h2><p style="color:red;">일치하는 정보가 없습니다.</p>`;
    }
  });

  // ✅ 벚꽃 떨어지는 애니메이션
  function createSakura() {
    const container = document.getElementById('sakura-container');
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');

    // 랜덤 위치 및 애니메이션 속도
    sakura.style.left = Math.random() * window.innerWidth + 'px';
    sakura.style.animationDuration = (5 + Math.random() * 5) + 's';
    sakura.style.opacity = (0.7 + Math.random() * 0.3).toFixed(2);
    sakura.style.transform = `scale(${0.8 + Math.random() * 0.5})`;

    container.appendChild(sakura);

    // 일정 시간 후 제거
    setTimeout(() => {
      sakura.remove();
    }, 10000);
  }

  // 일정 간격으로 벚꽃 생성
  setInterval(createSakura, 500);
});
