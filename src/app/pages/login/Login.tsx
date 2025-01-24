//import { useHistory } from "react-router-dom"; para versão do react abaixo da versão 6
//utilização:
//history.push('/pagina')

//import { useNavigate } from "react-router-dom";// versão 6 ou superior

export const Login =()=>{   
    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input></input>
                </label>
                <label>
                    <span>Senha</span>
                    <input></input>
                </label>
            </form>
        </div>
    );
}