import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";

import './LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const dispath = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const urlApi = "*";

    fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      console.log(jwt_decode(data.token))
      dispath({
        type: 'user/setLogged',
        payload: true
      })
      dispath({
        type: 'user/setUser',
        payload: jwt_decode(data.token)
      })
      navigate('/')
    })
    .finally(() => {
        setLoading(false);
    })
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">{
        loading ? "Loading..." : "Login"
      }</button>
    </form>
  );
}