import { useState } from "react";

function Messages({ id, secret }) {
    const [userMessage, setUserMessage] = useState([])
    
    // Funcion asincrona para get con autorizacion
    //Funcion para obtener el token de autenticacion
    function authToken(id, secret) {
        // En autenticación Basic, usuario y contraseña se separan con ':'
        const authToken = `${id}:${secret}`;
        // Y se codifican en Base64
        const base64token = btoa(authToken);
        return `Basic ${base64token}`;
    }
    const token = authToken(id, secret)
    async function authGetMessages(token) {
        const response = await fetch(
            "https://web-develop-react-express-chat.herokuapp.com/messages",
            { 
                headers: {
                    Authorization: token
                }
            }
        );
        const data = await response.json();
        return data;
    }
    async function get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
   
    const arrayMessage=[]

    async function getMessages() {
        const obtainMessages = await authGetMessages(token);
        //Mensaje final vacio:
        //var finalMessage=""
        //Obtener usuarios
        const users = await get("https://web-develop-react-express-chat.herokuapp.com/users/");        
        for (let item of obtainMessages) {
            for (let things of users) {
                if (item.source === things.id) {
                    
                    
                    function addZero(i) {
                        if (i < 10) {i = "0" + i}
                        return i;
                      }
                      const d = new Date(item.time);
                      let h = addZero(d.getHours());
                      let m = addZero(d.getMinutes());
                      let s = addZero(d.getSeconds());
                      let time = h + ":" + m;

                    arrayMessage.push([`${time} ${things.name}: ${item.content}`])
                   // finalMessage += things.name + " ha dicho: " + item.content + " "
                   
                }
            }
        }
       // const stringToArray = JSON.stringify(arrayMessage);
        setUserMessage(<ul>
            {arrayMessage.map((arrayMessage) => (
                <li>{arrayMessage}</li>
            ))}
            </ul>);
    }


    return (
        <>
         <h1>Mensajes:</h1>
         {userMessage}        
         <input type="button" value="Show new messages" onClick={getMessages} />

        </>
    );
}

export default Messages