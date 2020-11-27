const fetch = require('node-fetch')
const key =require('../api_key')
const test = async() => {
    
    const res = await fetch(`https://steamspy.com/api.php?request=top100in2weeks`);

    const resJson = await res.json();

    console.log(resJson.response)
}

test()