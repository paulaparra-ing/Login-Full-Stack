 **Sistema Full Stack de Autenticación**

Este proyecto corresponde al desarrollo de un ejercicio básico de autenticación de usuarios utilizando tecnologías de desarrollo web modernas. El objetivo principal fue crear un sistema de inicio de sesión que permitiera validar un usuario y una contraseña almacenados en una base de datos.

Para el desarrollo del proyecto se utilizaron las siguientes tecnologías:

**Node.js** como entorno de ejecución del servidor.
**Express.js** para la creación de la API REST y el manejo de peticiones HTTP.
**MySQL** para el almacenamiento de usuarios y contraseñas.
**React** para el diseño de una interfaz gráfica sencilla, dinámica e interactiva.

La API REST desarrollada permite recibir las credenciales ingresadas desde el frontend, consultar la base de datos y responder con un mensaje de autenticación correcta o error según corresponda.

**Registro manual del usuario en MySQL**

Para verificar la correcta conexión entre el sistema y la base de datos, se realizó el registro manual de un usuario y contraseña en la tabla usuarios.

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/c9045d8a-d522-4ef4-aec6-db75927ad245" />


**Parte del código desarrollado en App.js**

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/854ee0ad-7f9d-4466-ab6b-30f5e7df01ad" />


**Credenciales utilizadas para la prueba**
Usuario: admin
Contraseña: 123456

**Prueba de autenticación correcta**


<img width="1360" height="727" alt="image" src="https://github.com/user-attachments/assets/b26bb2d3-ff82-4e8c-8988-b2fa62af6ead" />



**Prueba de autenticación incorrecta**

<img width="1366" height="726" alt="image" src="https://github.com/user-attachments/assets/5f204a2c-2dff-419c-b056-3bb94ba36128" />



**Conclusión**

Mediante las pruebas manuales realizadas fue posible comprobar el correcto funcionamiento de la integración entre el frontend, la API REST y la base de datos. El sistema logró validar adecuadamente las credenciales ingresadas y mostrar mensajes de autenticación exitosa o error según el resultado de la consulta realizada en MySQL.





**////////////Segunda parte, pruebas con Postman//////////////////**

Metodo :  POST 
url : http://localhost:3000/login

Permite validar las credenciales del usuario consultando la base de datos MySQL.

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/e20c856e-2f0d-40ca-a850-51c2d0518612" />
