import React from 'react'; //원본에는 이거 없었는데 여기선 이거 없음 에러남 왜일까?
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Main1 from './pages/Main1';
import Community from './pages/Community';
import Community1 from './pages/Community1';
import ThemeMake from './pages/ThemeMake';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/main1' element={<Main1 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/community' element={<Community />} />
          <Route path='/community1' element={<Community1 />} />
          <Route path='/ThemeMake' element={<ThemeMake />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
