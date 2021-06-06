class ChuckNorrisApi {
    static BASE_URL = 'https://api.chucknorris.io';

    static getJoke = async () => {
        await fetch(`${ChuckNorrisApi.BASE_URL}/jokes/random`)
            .then(response => {
                console.log(response.json());
                return response.json()
            });
    }
}

module.exports = ChuckNorrisApi;
/*
    Object {
        "categories": Array [],
        "created_at": "2020-01-05 13:42:26.194739",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "sUFYBjyUT4KThhZYC_-jOg",
        "updated_at": "2020-01-05 13:42:26.194739",
        "url": "https://api.chucknorris.io/jokes/sUFYBjyUT4KThhZYC_-jOg",
        "value": "Never look a gift Chuck Norris in the mouth, because he will bite your damn nose off.",
    }
*/