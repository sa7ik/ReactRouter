import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 

function LoginPage() {
    const navigate=useNavigate();
    return (
        <div className='login' style={{
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: "cyan"
        }}>
            <div >
                <label>Email</label><br />
                <input type='text' placeholder='Email'/><br />
                <label>Password</label><br />
                <input type='password' placeholder='Password'/><br />
                <button onClick={()=>navigate("/Homepage")} style={{ marginRight: "50px" }}>Sign Up</button>
                <Link to={"/Registration"}>Create Account?</Link>
            </div>
        </div>
    )
}

export default LoginPage