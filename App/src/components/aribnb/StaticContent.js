import React from "react";
import img from "./ui.png"
export default function StaticContent(){
    return(
        <section className="static-content">
            <br></br>
            <img src={img} className="content-img" alt="img"/>{""}
            <h1 className="content-header">Online Experiences</h1>
            <p className="content-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
    )
}