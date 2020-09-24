//action Creator

import Axios from "axios"
import { FETCH_GENERAL_DATA, FETCH_TECHNICAL_DATA,FETCH_SPORTS_DATA } from "./actionTypes"

export const fetchGeneralData =()=>{
    return async dispatch=>{
        const response = await Axios.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=859ff048ac6d4f71b92214e4fee2e854')
        dispatch({ type: FETCH_GENERAL_DATA, payload:response.data.articles })
    }
}

export const fetchTechnicalData =()=>{
    return async dispatch =>{
        const response = await Axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=859ff048ac6d4f71b92214e4fee2e854')
        dispatch({ type: FETCH_TECHNICAL_DATA,payload: response.data.articles })
    }
}
export const fetchSportsData =()=>{
    return async dispatch =>{
        const response = await Axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=859ff048ac6d4f71b92214e4fee2e854')
        dispatch({ type: FETCH_SPORTS_DATA,payload: response.data.articles })
    }
}