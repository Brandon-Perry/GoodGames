const fetch = require('node-fetch')
const key =require('../api_key')


const test = async () => {
    
    const res = await fetch(`http://localhost:8080/api/users/1/library_games/1`);
    const data = await res.json();
    // console.log(data)

    // data = {...data.user_games, ...game_info}
    
    let newData = []
    
    data.user_games.forEach((el,i) => {
        let newObj = {...data.user_games[i], ...data.game_info[i]}
        newData.push(newObj)
    })
    console.log(newData)
}

test()