import logo from './logo.svg';
import './App.css';

import Header from './layout/Header';
import Navbar from './layout/Navbar';

import Main from './page/Main';
import Login from './page/Login';
import Join from './page/Join';

import {Routes,Route} from 'react-router-dom'

function App() {



  //1. 고정되어있는 Header를 하나 제작하여
  //    =>JS(B)라는 내용의 h3 태그
  //    =>클릭 시, 메인창으로 이동 

  // 2. 고정되어있는 Navbar를 하나 제작하라
  //    =>버튼 2개 (로그인, 회원가입)
  //    =>각각페이지로 이동
  
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Join' element={<Join></Join>}></Route>
      </Routes>
    </div>
  );
}

export default App;
