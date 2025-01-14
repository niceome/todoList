const completeSignupBtn = document.querySelector(".complete");

const backButton = document.querySelector(".backButton");

//회원 가입 제출 조건
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password && password.length >= 7) {
    localStorage.setItem(username, password);
    alert("회원가입 성공~");
  } else {
    alert("비밀번호 7자리 이상 입력하세요~");
  }
});

//이전 버튼
backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

//회원 가입 완료 버튼
completeSignupBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password && password.length >= 7) {
    window.location.href = "index.html";
  }
});
