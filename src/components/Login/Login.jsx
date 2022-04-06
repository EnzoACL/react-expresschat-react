import { useState } from "react";

function Login() {
    const [newUserName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()
    
    const getUserName= (event) => {
            const preUserName = event.target.value;
            setUserName(preUserName);
        }
    const getUserPassword = (event) => {
            const preUserPassword = event.target.value;
            
            setUserPassword(preUserPassword);
        }
    
    async function userPostLogin(url, data) {
        const response = await fetch(
            url,
            {
                method: 'POST',
                body: data,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        const responseData = await response.json();
        return responseData;
    }
    const usuarioDatos = JSON.stringify({userName: newUserName, password: userPassword });
    const urlLink = "https://web-develop-react-express-chat.herokuapp.com/login/"
    
    function assignUserData() {
        userPostLogin(urlLink, usuarioDatos)
        console.log(usuarioDatos);
    }

    return (
        <>
            <h1>Registro:</h1>
            <p>Usuario:</p>
            <input type="text" onChange={getUserName} />
            <p>Contraseña:</p>
            <input type="text" onChange={getUserPassword} />
            <input type="button" value="Registrarse" onClick={assignUserData} />
        </>
    );
}

export default Login
