import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

import ChuckNorrisApi from '../../api/ChuckNorrisApi';

const initialState = {
    icon_url: "",
    url: "",
    value: "Dummy",
}

const joke_reducer = (state = initialState, action) => {
    switch(action.type) {
        case "joke": {
            let joke = ChuckNorrisApi.getJoke();
            return { 
                ...state, 
                icon_url: joke.icon_url,
                url: joke.url,
                value: joke.value
            }
        }
        default: {
            return state;
        }
    }
}

export default joke_reducer;
