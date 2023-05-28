import { configureStore } from "@reduxjs/toolkit";

import { addCar,changeSearchTerm,removeCar,carsReducer } from "./slices/carsSlice";
import { changeName, changeCost,formReducers } from "./slices/formSlice";

const store = configureStore({
    reducer:{cars:carsReducer,form:formReducers}
})

export {store, addCar, changeCost, changeName, changeSearchTerm,removeCar}