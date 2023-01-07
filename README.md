# Weather app
> Simple weather app created with Node.js


## About
* [Introduction](#introduction)
* [Technologies](#technologies-used)
* [Setup](#setup)
* [Project Status](#project-status)
* [Contact](#contact)


## Introduction
The project was created to learn and solidify my knowledge of pure Node.js.
With this application, you can check the weather in a city of your choice in Poland (the city must be on the provided list). You can also check which city in Poland is currently the warmest and coldest.


## Technologies Used
* Node.js
* Node fetch
* Api (https://danepubliczne.imgw.pl/api/data/synop)


## Setup
To run this project, follow these steps:

1. Clone the repository to your local machine.
2. Open the 'node_weather_app' directory as a project in your IDE.
3. In the terminal, enter one of the following commands:

* To check the weather in a city in Poland, enter:
```
$node index.js polishCityName
```


Replace 'polishCityName' with the name of a city from the following list:
Szczecin, Resko, Kołobrzeg, Gorzów, Słubice, Kalisz, Piła, Poznań, Legnica, Koszalin, Świnoujście, Zielona Góra, Toruń, Koło, Wieluń, Ustka, Szczecinek, Leszno, Warszawa, Platforma, Łódź, Płock, Chojnice, Tarnów, Racibórz, Sulejów, Częstochowa, Kłodzko, Lębork, Łeba, Hel, Sandomierz, Wrocław, Opole, Kozienice, Przemyśl, Bielsko Biała, Lublin, Kraków, Rzeszów, Kielce, Mława, Krosno, Nowy Sącz, Elbląg, Gdańsk, Olsztyn, Katowice, Lesko, Kętrzyn, Ostrołęka, Siedlce, Zamość, Mikołajki, Jelenia Góra, Włodawa, Terespol, Zakopane, Śnieżka, Białystok, Kasprowy Wierch, Suwałki

* To check the warmest and coldest cities in Poland, enter:
```
$node warmestPlaceInPoland.js
```


The data will be saved in the 'data' directory, in the following files:

* 'polishCityName.txt' for weather data for a specific city.
* 'WarmestAndColdestCities.txt' for data on the warmest and coldest cities in Poland.


## Project Status
Project is: _in progress_


## Contact
Created by [@IGoB](https://igobb-portfolio.netlify.app/) - feel free to contact me!