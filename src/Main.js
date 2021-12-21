import React, { useRef } from 'react'
import styled from "styled-components";
//import './App.css';
//import { useNavigate } from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux'
//import { createUserName } from "../redux/modules/user";
import cover from "./img/img1.png";

const ans = '1234'

const Main = () => {
  /*
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  */
  const nameInput = useRef('')
  const answerInput = useRef('')

  setTimeout(function() {
    alert('힌트 확인하세요 ㅇㅁㅇ');
  }, 30000);

  /*
  useEffect(() => {
    nameInput.current.focus()
  }, [])

  const checkExistName = () => {
    return users.some(user => user.name === nameInput.current.value)
  }
  */

  // 입력 여부 확인 후 퀴즈 시작
  const quizStart = () => {
    const name = nameInput.current.value
    const answer = answerInput.current.value
    if (!name) {
      alert('교번을 입력해주세요!')
      nameInput.current.focus()
      return
    }

    if (!answer) {
      alert('답을 입력해주세요!')
      answerInput.current.focus()
      return
    }

    const check_ans = (a) => {
      alert('The answer is ' + String(a === ans))
      return (a === ans)
    }

    return check_ans(answer)
    /*
    if (checkExistName()) {
      alert('이미 사용된 이름이에요! 다른 이름을 입력해주세요 :)')
      nameInput.current.focus()
      return
    }

    dispatch(createUserName(name, false))
    history.push('/quiz/1')
    }
    */
  }
  // 버튼 클릭 동작
  const handleClickNextBtn = () => {
    quizStart()
  }

  // 엔터 입력 시 동작
  const handleHitEnter = (e) => {
    if (e.key === 'Enter') {
      quizStart()
    }
  }
  
  const styles = {
    border: '1px solid #eee', 
    padding: '20px',
    display: 'flex', 
    width: '100vw', 
    maxWidth: '400px', 
    margin: '30px auto', 
    flexDirection: 'column'
  };  

  return (
    <div className="App">
      <div style={styles}>
        <h1 style={{ color: 'orange' }}>꺄 데굴데굴 정보부 ㅇㅁㅇ</h1>
        <hr style={{width: '100%'}}/>
        <StyledImage src={cover} alt="cover"></StyledImage>
        <Container>
          <h2>교번</h2>
          <Input id="classnumber" name="classnumber" ref={nameInput} onKeyUp={handleHitEnter} placeholder="교번을 입력해주세요...!" />
          <h2>답</h2>
          <Input
            id="answer"
            name="answer"
            type="password"
            ref={answerInput}
            onKeyUp={handleHitEnter}
            placeholder="답을 입력해주세요...!"
          />
          <Button onClick={handleClickNextBtn}>제출!</Button>
        </Container>
        <Explain>
        <b>힌트</b> 입니다!<br/>
        <b>일단 구현해볼게요!</b>
      </Explain>
      </div>
    </div>
  );
}

const Explain = styled.p`
  font-family: 'sans-serif';
  font-size: 14px;
  line-height: 1.72;
  text-align: center;
  padding: 16px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;

  b {
    font-size: 18px;
  }
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

const StyledImage = styled.img`
	border-radius: 16px;
	opacity: 100%;
	margin-bottom: 1px;
	max-width: 100%;
	display: block;
`

const Container = styled.div`
  margin-top: 1px;
  padding: 5px;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

export default Main;