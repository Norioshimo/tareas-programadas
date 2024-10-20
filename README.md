# Servicio de Tareas Programadas

## Descripción del Proyecto
Este proyecto en Node.js se conecta a una base de datos NoSQL (MongoDB) y proporciona un servicio para gestionar tareas programadas. Actualmente, está en desarrollo y se incluyen las siguientes funcionalidades:

- **Inserción de Registros**: Permite agregar nuevas tareas a la base de datos.
- **Ejecución Programada**: Un cron que se ejecuta diariamente a las 7 a.m. (en desarrollo).
- **Notificación por Correo**: Envía un correo con un archivo Excel que contiene los datos de los registros insertados (en desarrollo).

## Tecnologías
- **MongoDB**: Base de datos NoSQL.
- **TypeScript**: Para un desarrollo más estructurado y seguro.
- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.

## Pasos para Levantar el Proyecto
1- Para instalar las dependencias del proyecto, ejecuta el siguiente comando: `npm install`.

2- Para iniciar el servidor de desarrollo, utiliza el siguiente comando: `npm run dev`.

## Endpoints

### Crear Tarea
**POST** `http://localhost:3000/api/tareas`
```json
{
    "descripcion": "Tarea 2",
    "responsable": "Norio Shimomoto",
    "prioridad": 2
}
```

### Obtener Tareas
**GET** `http://localhost:3000/api/tareas`

### Eliminar Tarea
**DELETE** `http://localhost:3000/api/tareas?id=671578699d312d88f63229df`

## Autor
Este proyecto fue desarrollado por Norio Shimomoto.
