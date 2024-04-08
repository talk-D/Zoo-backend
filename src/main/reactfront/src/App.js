import React from 'react'; //원본에는 이거 없었는데 여기선 이거 없음 에러남 왜일까?
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Community from './pages/Community';
import Community1 from './pages/Community1';
import Community2 from './pages/Community2';
import Step1 from './pages/Step1';
import ThemeMakestep2 from './pages/ThemeMakestep2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/community' element={<Community />} />
          <Route path='/community1' element={<Community1 />} />
          <Route path='/community2' element={<Community2 />} />
          <Route path='/step1' element={<Step1 />} />
          <Route path='/ThemeMakestep2' element={<ThemeMakestep2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;