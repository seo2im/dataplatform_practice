import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../context';
import * as style from './style';

const useAuth = (navigate, userInfo) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const id = window.localStorage.getItem('dataplatform_id');
    if (!id || id === '') navigate('/login');
    else userInfo.setId(id);
  }, []);
  useEffect(() => {
    console.log(userInfo.id);
    if (userInfo.id !== null) setLoading(false);
  }, [ userInfo.id ])

  return loading;
}

const Home: React.FC = () => {
  const userInfo = useContext(Store);
  const navigate = useNavigate();
  const loading = useAuth(navigate, userInfo);
  
  const [file, setFile] = useState(null);
  const submit = useCallback(async (e: React.Event) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`/api/datas?userid=${userInfo.id}&filename=${file.filename}`, {
      method: 'post',
      body: formData,
    });
    if (response.status === 500) {
      const { msg } = await response.json();
      console.log(msg);
      alert('Some Error');
    } else {
      alert('Data upload clear');
    }
  });
  
  if (loading) return (<div>Loading</div>)
  return (
    <style.div>
      <input type='file' onChange={e => setFile(e.target.files[0])}/>
      <button onClick={submit}>upload</button>
    </style.div>
  )
};

export default Home;