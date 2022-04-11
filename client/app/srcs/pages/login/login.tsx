import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import * as style from './style';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const signUp = useCallback(async () => {
    const response = await fetch('/api/users', {
      method: 'post', body: name
    });
    if (response.status === 500) {
      const { msg } = await response.json();
      console.log(msg);
      alert('Some Error');
    } else {
      alert('SignUP OK!');
    }
  }, []);
  const signIn = useCallback(async () => {
    const response = await fetch(`/api/users?name=${name}`);
    console.log(response);
    const data = await response.json();
    console.log(data)
    if (response.status === 500) {
      console.log(data.msg);
      alert('Some Error');
    } else {
      window.localStorage.setItem('dataplatform_id', data.id);
      navigate('/');
    }
  }, []);
  return (
    <style.div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => signIn()}>로그인</button>
      <button onClick={() => signUp()}>회원가입</button>
    </style.div>
  )
};

export default Login;
