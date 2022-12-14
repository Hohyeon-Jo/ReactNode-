import React, {useRef} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Join() {

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
    
    
        // axios를 이용해서 데이터 서버로 보내기 
        // axios.post(보낼 주소,{보낼 데이터})
        axios.post('http://127.0.0.1:3001/joinData',{
          user : userData
        })
        .then((res)=>{
          console.log('성공', res)
          alert('회원가입에 성공하셨습니다!')
          navigate('/')
        })
        .catch(()=>{
          console.log('실패')
        })
    
    }
  return (

    <div>
        <h3>회원가입</h3>
            <form onSubmit={handleJoin}>
                <input type="text" ref={idRef} name='ID' placeholder='ID를 입력하시오'></input>
                <input type="password" ref={pwRef} name='PW' placeholder='PW를 입력하시오'></input>
                <input type='submit' value='가입신청'></input>
            </form>
        
    </div>
  )
}

export default Join