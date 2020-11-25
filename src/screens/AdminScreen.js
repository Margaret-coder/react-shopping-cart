import React, {Component} from "react"
import Orders from "../Components/Orders"

export default class AdminScreen extends Component{
    render(){
        console.log("Admin_screen render")
        return(
            <div>
                <Orders/>
            </div>           
        )
    }
}