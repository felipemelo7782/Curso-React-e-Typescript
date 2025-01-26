import { useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/contexts";

interface IButonLoginProps {
    type?: "submit" | "reset" | "button" ;
    onClick: () => void;

    children: React.ReactNode;
}
export const ButtonLogin: React.FC<IButonLoginProps> = ({type, onClick, children}) => {

    const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

    return(
        <button type={type} onClick={onClick} >
            {nomeDoUsuario} {children}
        </button>
    )
}