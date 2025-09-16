const { useState } = React; 

const App = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const [emailError, setEmailError] = useState("")
  // 이벤트 핸들러 함수
  // handleChangeEmail 형태도 많이 쓰임
  const onChangeEmail = (event) => {
    console.log(event.target); // 작동된 태그
    console.log(event.target.value); // 작동된 태그에 입력된 값
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  };

  const onClickSignup = (event) => {
    console.log(email) // 저장이 잘 되었는지 확인
    console.log(password) // 저장이 잘 되었는지 확인

    if(email.includes("@") === true) {
      // 정상이므로 백엔드 컴퓨터에 정보 전달하기! => 나중에 배움

      alert("회원가입을 축하합니다!!!")
    } else {
      // alert("이메일이 올바르지 않습니다!! '@'가 없어요!")

      // 퀴즈) 코드 작성하여 이메일 아래쪽에 에러메시지 나타내기
      // 힌트: 새로운 state 만들어서 사용하기
      setEmailError("이메일이 올바르지 않습니다!! '@'가 없어요!")
    }
  }

  return (
    <div className="철수의App">
      이메일: <input type="text" onChange={onChangeEmail} /><br />
      {/* <div id="좋지않음"></div> */}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} /><br />
      {/* <div></div> */}
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
};
