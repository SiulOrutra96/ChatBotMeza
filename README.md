# ChatBotMeza
Este es el repositorio para el proyecto de Meza.

Consiste en un Chatbot que será capaz de dar asesorías sobre temaas básicos de programación así como evaluar por medio de examen diagnóstico el nivel de conocimineto de cada alumno.

El proyecto consite de un panel de control administrativo desrrollado en ángular y un chatbot creado a partir del api de Facebook Messengeren php. La base de datos es compartida entre las dos aplicaciones y está hecha en mySQL.

Para trabajar con el repositorio segir estos pasos

# 1. Hacer fork del repositorio
Dando click sobre el botón de arriba a la derecha que dice _fork_. Esto creará una copia del proyecto dentro de tus repositorios personales.

# 2. Clonar TU repositorio
Hay que clonar el fork que se creó, el comando debe ser *git clone < link dek fork >* hay que asegurarse de clonar **TU** reposiorio y no el que es de SiulOrutra96.

# 3. Agregar el repositorio remoto
Una vez clonado **TU FORK** hay que accedar a la carpeta que se creó que se llamará ChatBotMeza y agregar el repositorio remoto con el comando *git remote add remoto https://github.com/SiulOrutra96/ChatBotMeza.git* ten en cuenta que *remoto* es el nombre de este repositorio dentro de tu espacio de trabajo así que puedes agregar cualquier otro nombre como *remote* o *upstream* si te es más cómodo

Al ejecutar el comanto *git remote -v* deberías ver cuatro resultados dos lamados origin y dos con el nombre de tu remoto que en mi caso es remoto.

# 4. Cambiar a rama desarrollo
Todo debería estar listo para trabajar pero debes asegurarte de trabajar sobre la rama desarrollo para esto hay que ejecutar el comando *git checkout desarrollo*. Para comprobar que efectivamente estamos en la rama desarrollo y no en master ejecutamos *git branch* y deberías ver la rama desarrollo con un asterisco indicando que es la rama actual. 

Ahora si puedes hacer commits y colaborar en el proyecto.

# Hacer commits
Recuerda que para hacer un commit primero se ejecuta *git add .* para agregar todos los archivos modificados al commit, después se ejecuta *git commit -m "mensaje"* para crear un comit y añadir un mensaje. Los commits tendrán un formato específico detallado más abajo.

# Subir y bajar cambios
Para subir tus cambios al repositorio y que todos podamos verlos deben subirse al repositorio remoto, esto se hace con el comando *git push < repositorio remoto > < rama >*. Si agregaste el repositorio remoto como yo debe llamarse remoto y la rama sobre la que trabajaremos es desarrollo así que el comando especíico es *git push remoto desarrollo*.

Es probable que al intentar subir cambios marque un error debido a que hay cambios arriba que tu no tienes, en este caso se deben bajar esos cambios antes de subir los tuyos, esto se hace con *git pull < repositorio remoto > < rama >* Si agregaste el repositorio remoto como yo debe llamarse remoto y la rama sobre la que trabajaremos es desarrollo así que el comando especíico es *git pull remoto desarrollo*.

Recuerda push sube y pull baja.

# Especificaciones sobre los commits
Todos los commits deberán contener un mensaje que deberá tener el formato: *[etiqueta] <descripción brebe de lo que se realizó>*

**Etiquetas:**

- [Agregado] Cuando algún componente, funcionalidad, método, etc. que antes no estába en la aplicación sea agregado.
- [Removido] Cuando algún componente, funcionalidad, método, etc. que antes estába en la aplicación sea removido.
- [Modificado] Cuando algún componente, funcionalidad, método, etc. sea modificado de algún modo sin cambiar totalmente su funcionalidad.
- [Arreglado] Cuando se corriga algún error.
