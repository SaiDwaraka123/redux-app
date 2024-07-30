import { useState } from "react";

const intialState=300;

const updateValue=(state=intialState,action)=> {
    switch(action.type){
        case "Increment":
        return state+1;
        case "Decrement":
            return state-1;
        default:
            return state;
    }

}
export default updateValue;