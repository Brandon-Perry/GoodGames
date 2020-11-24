const fetch = require('node-fetch')
const key =require('../api_key')
const test = async() => {
    
    const res = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&format=json&steamids=76561198083486927`);

    const resJson = await res.json();

    console.log(resJson.response)
}

test()