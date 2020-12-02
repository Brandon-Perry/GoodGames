const fetch = require('node-fetch')
const key =require('../api_key')
const steamId = require('../backend/user_ids')
// const steamId = BigInt(76561198083486927)


const test = async (steamId) => {
    try {
        console.log(steamId)
        const res = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&format=json&steamid=${steamId}`);
        const data = await res.json();
        console.log(data)
    
        const userData = data.response
        
        if (res.ok) {
            return data
        }
    } catch(e) {
        console.error(e)
    }

    // const userDataRes = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&format=json&steamids=${steamId}`)
    // const userDataJson = await userDataRes.json()
    // console.log(userDataJson)
    // return userDataJson
}

console.log(test(steamId[0]))