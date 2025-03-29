// 예시 데이터: 실제 서비스에선 백엔드에서 가져오도록 해야 함
const studentAccounts = [
  { id: "202301", name: "홍길동", googleId: "hong123@gmail.com", password: "pass1234" },
  { id: "202302", name: "김영희", googleId: "kimyh@gmail.com", password: "abc9876" },
  { id: "202303", name: "이철수", googleId: "lee123@gmail.com", password: "mypw4321" }
];

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
      resultBox.innerHTML = `<h2>조회 결과</h2><p>일치하는 정보가 없습니다.</p>`;
    }
  });
});
