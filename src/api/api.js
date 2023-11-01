import axios from 'axios';

const apiUrl = `https://api.tmdb.org/3`;
const apiToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGZiZjMyYjY0ZmQwYTJlNzQ0NjBmYWVmOTI4ZTIyMSIsInN1YiI6IjY1M2QwM2Y1NTE5YmJiMDBmZTVjM2Q3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dZ_x-NgpAJnX0jPTOjKxvv3PHsjB2L_sV05XfDYhpww`;

export const getMovies = async () => {
    const options = {
        method: 'GET',
        url: `${apiUrl}/movie/popular`,
        params: { language: 'en-US', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiToken}`
        }
    };

    const { data } = await axios.request(options);
    const { results: movies } = data;
    return movies;
}

export const getMovieSearch = async (qSearch) => {
    const options = {
        method: 'GET',
        url: `${apiUrl}/search/movie`,
        params: { query: `${qSearch}`, include_adult: 'false', language: 'en-US', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiToken}`
        }
    };

    const { data } = await axios.request(options);
    const { results: movies } = data;
    return movies;
}

export const getTvList = async () => {
    const options = {
        method: 'GET',
        url: `${apiUrl}/movie/top_rated`,
        params: { language: 'en-US', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiToken}`
        }
    };

    const { data } = await axios.request(options);
    const { results: tv } = data;
    return tv
}