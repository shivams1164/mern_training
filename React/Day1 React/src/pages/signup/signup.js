import { useState } from "react";
import Navbar from "../common/navbar";

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, SetPassword] = useState("")
    const handleClick = async () => {
        console.log(email, password)
        if (!email && !password) {
            return;
        }
        const res = await fetch(`${process.env.backend_url_signup}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
        const data = await res.json();
        console.log(data);
    }
    return (
        <div>
            <Navbar page='signup' />
            <div>
                <input onChange={(e) => setEmail(e.target.value)} />
                <input onChange={(e) => SetPassword(e.target.value)} />
                <button onClick={handleClick}>Signup</button>
            </div>
        </div>
    )
}

export default Signup;