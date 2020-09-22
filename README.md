# RetoExpress
Reto de websockets y API REST del curso ISIS3710.

Para ejercutar se debe poner el comando: npm start.

Luego, en el navegador entrar a la dirección localhost:3000. Se puede entrar al tiempo desde varias pestaña. En la página se pueden intercambiar mensaje usando un nombre de usuario, por defecto German Martinez. 

La API del proyecto es:

- POST /chat/api/messages -> envía un JSON para enviar un mensaje al chat. El JSON debe tener el siguiente formato: 

    { "message": "Mensaje a enviar", "author": "Autor del mensaje" }

- GET /chat/api/messages -> JSON con todos los mensajes que se han enviado.

- GET /chat/api/messages/{{ts}} -> JSON del mensaje con timestamp (ts) dado.

- PUT /chat/api/messages/{{ts}} -> envía un JSON para actualizar el mensaje con timestamp (ts) dado. El JSON debe tener el siguiente formato: 

    { "message": "Mensaje a enviar", "author": "Autor del mensaje" }

- DELETE /chat/api/messages/{{ts}} -> borra el mensaje con el timestamp (ts) dado.

Restricciones: 
- Todos los campos (message, author) son requeridos 
- El mensaje no puede tener menos de 5 caracteres 
- El autor debe tener un nombre y un apellido separados por un espacio
