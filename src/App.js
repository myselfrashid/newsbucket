import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes, Route } from "react-router-dom";
import Authentication from './components/Authentication';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

const NewsBucket = () => {
  return (
      <div className='pb-20'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={8} country='in' category='general' />}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={8} country='in' category='entertainment' />}></Route>
          <Route exact path='/general' element={<News key="general" pageSize={8} country='in' category='general' />}></Route>
          <Route exact path='/health' element={<News key="health" pageSize={8} country='in' category='health' />}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={8} country='in' category='science' />}></Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={8} country='in' category='sports' />}></Route>
          <Route exact path='/technology' element={<News key="technology" pageSize={8} country='in' category='technology' />}></Route>
          <Route exact path = '/authentication' element = {<Authentication />}/>
          <Route exact path='/login' element = {<SignInForm />} />
          <Route exact path='/signup' element = {<SignUpForm />} />
        </Routes>
      </div>
  )
}

export default NewsBucket;
