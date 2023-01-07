const fetch = require('node-fetch');
const { appendFile } = require('fs').promises;
const {normalize, resolve} = require('path')

function safeJoin(base, target) {
    const targetPath = '.' + normalize('/' + target)
    return resolve(base, targetPath)
}

const getDataFileName = city => safeJoin(`./data/`, `${city}.txt`)

// const processWeatherData = (data) => {
//     const foundData = data.find((stationData) => {
//         if (stationData.stacja === cityName) {
//             return true;
//         } else {
//             return false;
//         }
//     })
//
//     if (foundData === undefined) {
//         console.log("Nie posiadamy informacji o pogodzię dla miasta ",cityName)
//     } else {
//         console.log(foundData)
//     }
// }

//FASTER

const processWeatherData = async (data, cityName) => {
    const foundData = data.find(stationData => stationData.stacja === cityName)

    if (!foundData) {
        throw new Error("Nie posiadamy informacji o pogodzię dla miasta " + cityName)
    }

    const {
        cisnienie: pressure,
        wilgotnosc_wzgledna: humidity,
        temperatura: temperature,
    } = foundData;

    const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure} hPa.`;

    console.log(weatherInfo)

    const dateTimeString = new Date().toLocaleString();

    await appendFile(getDataFileName(cityName), `${dateTimeString}\n${weatherInfo}\n`)
};

const checkCityWeather = async cityName => {
    try {
        const result = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await result.json();
        await processWeatherData(data, cityName);
    } catch (err) {
        console.log('We have some problems: ', err);
    }
}

const cityName = process.argv[2]

checkCityWeather(cityName)

