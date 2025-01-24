//import { useHistory } from "react-router-dom"; para versão do react abaixo da versão 6
//utilização:
//history.push('/pagina')

import { useState } from "react";

//import { useNavigate } from "react-router-dom";// versão 6 ou superior

export const Login =()=>{   
    const [password,setPassword]= useState('');
    const [email,setEmail]= useState('');

    const handleEntrar = () => {
        console.log(email)
        console.log(password)
    }
    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}