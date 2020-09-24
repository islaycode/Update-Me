import * as actionTypes from "../actions/actionTypes";

const initialState = {
    loading: false,
    apikey: '859ff048ac6d4f71b92214e4fee2e854',
    generalData: [],
    technicalData: [],
    sportsData: [],
    error: ''
}

const reducer = (state = initialState,action) => {
    
    switch(action.type){

        case actionTypes.FETCH_GENERAL_DATA:
            return{
                ...state,
                loading: true,
                generalData: action.payload                
            }
  
        case actionTypes.FETCH_TECHNICAL_DATA:
            return{
                ...state,
                loading: true,
                technicalData: action.payload
            }

        case actionTypes.FETCH_SPORTS_DATA:
            return{
                ...state,
                loading: true,
                sportsData: action.payload
            }
        
        case actionTypes.FETCHING_FAILED:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;