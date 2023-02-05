require('dotenv').config()
module.exports = { fetchnews: fetchnews, fetchjoke: fetchjoke, };
const https = require("https");

const chalk = require('chalk');

async function fetchnews(name) {
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': process.env.NEWS_KEY
        }
    }
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_KEY}`
    console.log(`Fetching the data from global databases ${name}!!`)
    const index = Math.floor(Math.random() * 150);

    const responce = await fetch(url, options);
    var data = await responce.json();

    console.log(chalk.white.bgGreen.bold('Fetching data from global databases...'));
    console.log(chalk.green(data.articles[index].title));
    console.log(chalk.blue(data.articles[index].description));


    


}




async function fetchjoke() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.JOKE_KEY,
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
            NSFW: true
        }
    };
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const responce = await fetch(url, options);
    var data = await responce.json();
    console.log(chalk.white.bgGreen.bold('Fetching data from global databases...'));
    console.log(chalk.cyan(data.body[0].setup));
    console.log(chalk.green(data.body[0].punchline));

}