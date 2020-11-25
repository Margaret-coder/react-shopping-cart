import React, {Component} from "react"
import Filter from "../Components/Filter"
import Products from "../Components/Products"
import Cart from "../Components/Cart"

export default class HomeScreen extends Component{
    render(){
    console.log("Homescreen render")
        return(
            <div>
                <div className="content">
                    <div className="main">
                        <Filter></Filter>
                        <Products></Products>
                    </div>
                    <div className="sidebar">
                        <Cart/>
                    </div>
                </div>
            </div>
        )
    }
}