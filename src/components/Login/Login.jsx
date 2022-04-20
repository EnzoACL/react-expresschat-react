import { useEffect, useState } from "react";

function Login() {
    const [newUserName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()
    const [registered2, setRegistered2] = useState(true)

   
    

    
    
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
    
    async function assignUserData() {
       await userPostLogin(urlLink, usuarioDatos)
        window.location.reload();


    }

    return (
        <>
            <div className='crt'>

            <div className="regpag">
                <h1>Registrase en el chat:</h1>
                <p>Usuario:</p>
                <input type="text" onChange={getUserName} />
                <p>Contraseña:</p>
                <input type="text" onChange={getUserPassword} />
                <p><input type="button" value="Registrarse" onClick={assignUserData} /></p>
                </div>
            </div>
        </>
    );
}

export default Login
