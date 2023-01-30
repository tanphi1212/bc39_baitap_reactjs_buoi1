import data from './danhSachGhe.json'
const initialState = {
    seatsList: data,   
    qty: "",
    name: "",
}

const tickerReducer = (state = initialState)=>{
    return {...state}
}

export default tickerReducer;