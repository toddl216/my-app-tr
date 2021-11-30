import React, { useRef } from 'react'
import "./styles.css";
import styled from "styled-components";
//import './App.css';
import cover from "./img/img.png";

const Main = () => {

  const nameInput = useRef('')
  const answerInput = useRef('')

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
  }
    
  // 시작 버튼 클릭 동작
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
        <h1 style={{ color: 'orange' }}>꺄 정보부 데굴데굴 ㅇㅁㅇ</h1>
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
      </div>
    </div>
  );
}


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
	max-width: 200%;
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