const fetch = require('node-fetch');
const {normalize, resolve} = require("path");
const { appendFile } = require('fs').promises;

function safeJoin(base, target) {
    const targetPath = '.' + normalize('/' + target)
    return resolve(base, targetPath)
}

const getDataFileName = () => safeJoin(`./data/`, `WarmestAndColdestCities.txt`)

const processWeatherData = async (data) => {
    const sorted = [...data].sort((a, b) => Number(b.temperatura) - Number(a.temperatura));

    const {
        stacja: warmestStation,
        temperatura: highestTemperature,
    } = sorted[0]

    const {
        stacja: coldestStation,
        temperatura: lowestTemperature,
    } = sorted[sorted.length - 1]

    const dateTimeString = new Date().toLocaleString()

    let sortResult = [];

    for (const station of sorted) {
        sortResult.push(`${station.stacja}: ${station.temperatura}\n`);
    }

    const infoAboutWarmestAndColdestCityInPoland = `The warmest city in Poland for now (${dateTimeString}) is ${warmestStation}, and temperature here is ${highestTemperature} °C\nThe coldest city in Poland for now (${dateTimeString}) is ${coldestStation}, and temperature here is ${lowestTemperature}. \nCities in Poland from highest temperature to lowest: \n${sortResult}`

    await appendFile(getDataFileName(), `Date of file save: ${dateTimeString}\n${infoAboutWarmestAndColdestCityInPoland}\n`)

    console.log('File is save')

};

const findWarmestPlaceInPoland = async () => {
    try {
        const result = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await result.json();
        await processWeatherData(data);
    } catch (err) {
        console.log('We have some problems: ', err);
    }
};

findWarmestPlaceInPoland();

