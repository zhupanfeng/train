import {INCREMENT} from "../action-types"
import {push} from "connected-react-router"

export default{
    increment(){
        return {type:INCREMENT}
    },
    goto(path){
        // history.push(path)
        // return {type:"xxx"}

        return push(path)
    }
}