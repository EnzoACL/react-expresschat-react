import { useState } from "react";

function SendMessage({ id, secret }) {
    async function authPost(url, token, data) {
        const response = await fetch(
            url,
            {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                }
            }
        );
        const responseData = await response.json();
        return responseData;
    }
    //Funcion para obtener el token de autenticacion
    function authToken(id, secret) {
        // En autenticación Basic, usuario y contraseña se separan con ':'
        const authToken = `${id}:${secret}`;
        // Y se codifican en Base64
        const base64token = btoa(authToken);
        return `Basic ${base64token}`;
    }

    const tokenMessage = authToken(id, secret)
    const [messageContent, setMessageContent] = useState()
    const messageContentWrite= (event) => {
        const preMessageContent = event.target.value;
        setMessageContent(JSON.stringify({ content: preMessageContent }));
    }
    const urlMessage ="https://web-develop-react-express-chat.herokuapp.com/message/"
    function postMessage() {
        authPost(urlMessage, tokenMessage, messageContent);
    }
    function principalPage() {
        window.location.reload();
    }
    return (
        <>
            <div className="sendMensajes">

                <input type="text" className="messageBox" onChange={messageContentWrite} />
                <input type="button" className="sendMessage" value=">" onClick={postMessage} />
                <input type="button" className="exitChat" value="Salir" onClick={principalPage} />
            </div>
        </>
    );
}
export default SendMessage;