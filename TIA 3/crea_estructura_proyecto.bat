:: Crear estructura de directorios
mkdir proyectos_pia
mkdir proyectos_pia\server
mkdir proyectos_pia\server\config
mkdir proyectos_pia\server\models
mkdir proyectos_pia\server\repositories
mkdir proyectos_pia\server\routes
mkdir proyectos_pia\server\migrations
mkdir proyectos_pia/server
mkdir proyectos_pia\client\css
mkdir proyectos_pia\client\js

:: Crear archivos
type nul > proyectos_pia\server\config\database.js
type nul > proyectos_pia\server\models\Usuario.js
type nul > proyectos_pia\server\repositories\usuarios.js
type nul > proyectos_pia\server\routes\usuarios.js
type nul > proyectos_pia\server\server.js
type nul > proyectos_pia\server\migrations\001-create-usuarios.sql
type nul > proyectos_pia\client\index.html
type nul > proyectos_pia\client\css\style.css
type nul > proyectos_pia\client\js\app.js
type nul > proyectos_pia\package.json