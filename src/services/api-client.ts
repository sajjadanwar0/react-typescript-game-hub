import axios from "axios"


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a848b138f4eb473ead353d25b6579c6f'
    },
})

