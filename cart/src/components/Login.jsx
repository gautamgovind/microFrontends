import React, { useState } from 'react';
import { useLoggedIn, login } from './Cart';

const Login = () => {
    const loggedIn = useLoggedIn();
    const [showLogin, setShowLogin] = useState(false);
    const [username, setUsername] = useState("sally");
    const [password, setPassword] = useState("123");

    if(loggedIn) return null;
  return (
    <div>
        <span onClick={()=> setShowLogin(!showLogin)}>
            <i className='ri-fingerprint-line text-2xl' id="showlogin"></i>
        </span>
        {showLogin && (
            <div
                className='bg-white text-green-900 absolute p-5 border-4 border-blue-400'
                style={{width: 300, top: '2rem', left: -250}}
            >
                <input type="text" placeholder="User Name" 
                        value={username}
                        onChange={e=>setUsername(e.target.value)}
                        className="border text-sm border-gray-400 p-2 rounded-md w-full"
                />
                <input type="password" placeholder="User Password" 
                        value={username}
                        onChange={e=>setPassword(e.target.value)}
                        className="border text-sm border-gray-400 p-2 rounded-md w-full"
                />
                <button
                    className='bg-green-900 text-white py-2 px-5 rounded-md w-full'
                    onClick={()=>login(username, password)}
                    id="loginbtn"
                >
                    Login
                </button>
            </div>
        )}
    </div>
  )
}

export default Login