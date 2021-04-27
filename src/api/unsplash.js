import axios from 'axios';

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: `Client-ID Gc2Mz5v8vjRVv7z8_Y1Aj-tJul2vsWPWIYUp7D5Qf3o`,
    },
});
