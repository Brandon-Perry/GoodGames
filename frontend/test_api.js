const fetch = require('node-fetch')
const test = async() => {
    const res = await fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/');

    const resJson = await res.json();

    const apps = resJson.applist.apps 

    for (let i = 0; i < 10; i++) {
        console.log(apps[i])
    }

}

test()