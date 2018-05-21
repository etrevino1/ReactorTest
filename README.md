ReactorTest
Hola
 
 
Les comparto el código de la prueba,
 
 
Esta construido con gradle, 
 
la carga esta en el puerto 8080,
el proyecto con spring boot 1 esta en el 8081 y el que trae spring boot 2 esta en el 8082
 
para correr las pruebas con gatling el proyecto esta dentro de applications/load-scripts
 
y lo podrian correr de esta manera 
 
boot 2 3000 usuarios concurrentes
./gradlew -p applications/load-scripts  -DTARGET_URL=http://localhost:8082 -DSIM_USERS=3000 gatlingRun

 
 

boot 1 300 usuarios concurrentes
./gradlew -p applications/load-scripts  -DTARGET_URL=http://localhost:8081 -DSIM_USERS=300 gatlingRun

 
Saludos