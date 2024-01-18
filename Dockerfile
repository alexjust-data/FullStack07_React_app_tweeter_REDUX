# Utiliza una imagen base de node versión 20 con alpine como sistema operativo por ser ligero.
FROM node:20-alpine as builder

# Establece el directorio de trabajo en /app dentro del contenedor. Si no existe, lo crea.
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si existe) al directorio de trabajo actual (/app).
COPY package*.json ./

# Ejecuta el comando npm install para instalar las dependencias definidas en package.json.
RUN npm install 

# Copia todos los archivos del directorio actual en el host al directorio de trabajo en el contenedor.
COPY . .

# Ejecuta el comando para construir la aplicación (por ejemplo, si es una aplicación React, esto crea la build de producción).
RUN npm run build

# Inicia una nueva etapa de construcción utilizando una imagen base de nginx, que es un servidor web ligero.
FROM nginx:stable-alpine

# Copia los archivos estáticos generados build al directorio de nginx donde servirá los archivos estáticos.
COPY --from=builder /app/build /usr/share/nginx/html

# Reemplaza la configuración por defecto de nginx con la configuración personalizada (si existe).
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# Informa a Docker que el contenedor escuchará en el puerto 80 en tiempo de ejecución.
EXPOSE 80 

# Define el comando que se ejecutará cuando se inicie el contenedor.
# Aquí está diciendo que ejecute nginx en primer plano.
CMD ["nginx", "-g", "daemon off;"]
