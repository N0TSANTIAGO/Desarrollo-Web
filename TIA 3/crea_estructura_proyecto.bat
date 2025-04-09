:: Crear estructura de directorios
mkdir PRo-api
mkdir piscinas-api\server
mkdir piscinas-api\server\config
mkdir piscinas-api\server\models
mkdir piscinas-api\server\repositories
mkdir piscinas-api\server\routes
mkdir piscinas-api\server\migrations
mkdir piscinas-api\client
mkdir piscinas-api\client\css
mkdir piscinas-api\client\js

:: Crear archivos
type nul > piscinas-api\server\config\database.js
type nul > piscinas-api\server\models\Usuario.js
type nul > piscinas-api\server\repositories\usuarios.js
type nul > piscinas-api\server\routes\usuarios.js
type nul > piscinas-api\server\server.js
type nul > piscinas-api\server\migrations\001-create-usuarios.sql
type nul > piscinas-api\client\index.html
type nul > piscinas-api\client\css\style.css
type nul > piscinas-api\client\js\app.js
type nul > piscinas-api\package.json