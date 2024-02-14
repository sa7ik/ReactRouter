import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const RegistrationPage = () => {
const navigate=useNavigate();
    const handle = (e) => {
         console.log(e.target.value)
    }
      return (
        <div className='header' style={{
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: "cyan"
        }}>

            <div>
                <label>Username</label><br />
                <input type="text" placeholder='name' 
                onChange={handle}
                /><br />

                <label>Email</label><br />
                <input type='email' placeholder='Email' /><br />
                <label>Password</label><br />
                <input type="password" placeholder='password' /><br />
                <button onClick={()=>navigate("/Homepage")} style={{ marginRight: "50px" }}>Sign Up</button>
            <Link to={"/"}><button >Login</button></Link>   
            </div>
        </div>

    )
}

export default RegistrationPage