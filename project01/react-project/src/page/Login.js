import React, {useRef} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login() {

  const idRef = useRef()
  const pwRef = useRef()

  const navigate = useNavigate()
  const handleJoin = (event)=>{
    console.log('handleJoin')
    console.log(idRef.current.value)
    console.log(pwRef.current.value)
    //다른 페이지로 이동하지 못하도록 막는 기능
    event.preventDefault()

    let userData = {
      id : idRef.current.value,
      pw : pwRef.current.value
    }
  }

  return (
    <div>
        <h3>로그인</h3>
            <form onSubmit={handleJoin}>
                <input type="text" ref={idRef} name='id' placeholder='ID를 입력하시오'></input>
                <input type="password" ref={pwRef} name='pw' placeholder='PW를 입력하시오'></input>
                <input type='submit' value='로그인'></input>
            </form>
    </div>
  )
}

export default Login;