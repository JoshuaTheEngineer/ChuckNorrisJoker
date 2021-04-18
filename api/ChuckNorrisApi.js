class ChuckNorrisApi {
    static BASE_URL = 'https://api.chucknorris.io';

    static getJoke = () => {
        fetch(`${ChuckNorrisApi.BASE_URL}/jokes/random`)
            .then(response => response.json())
            .then(data => console.log(data));
    }
}

module.exports = ChuckNorrisApi;