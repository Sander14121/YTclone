import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    },
};

export const fetchFromAPI = async (url) => {
    console.log('API key: ',process.env.REACT_APP_API_KEY)
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};