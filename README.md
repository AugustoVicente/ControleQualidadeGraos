# Controle de qualidade de grãos

O objetivo do projeto se tratava de automatizar a classificação de grãos, realizada previamente manualmente, o que a torna sujeita a fraudes.
Esta automação é feita por um aplicativo que se comunica com um dispositivo de IoT via bluetooth. 
Tal dispositivo recolhe as informações da classificação de grãos via comunicação serial e repassa ao aplicativo do dispositivo conectado.
O app salva as informações no banco de dados, juntamente com algumas observações e imagens e, após isso, imprime um ticket via bluetooth de uma impressoara serial.

## Prerequisites

* NPM 6.4.1
* Ionic 3.20.0
* Apache Server

## Installing

* Clone the folder
* Install all dependencies: npm i
* Move the files: "Conexao.php", "persistencia.php", "webservice.php" to the apache server folder

## Running

* Run "ionic cordova build android" at the prompt in the cloned folder