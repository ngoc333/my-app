import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const navigate = useNavigate();
    const handleLogin = () => {

        navigate("/dashboard");
    };
    
    return (
        <div>
            <div >
                <input 
                    id="username" 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input 
                    id="password" 
                    type="password"  
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            {error && <div className="error">{error}</div>}
            <div>
                <input 
                    type="button" 
                    value={loading? "loading...": "Login" }
                    disabled ={loading}
                    onClick={handleLogin} 
                >
                </input>
            </div>
        </div>
    )
}

export default Login