import React from "react"
import { troll } from "../assets/images"


export default function Header() {
    return (
        <header className="header">
            <img 
                src={troll}
                className="header--image"
            />
            <h2 className="header--title">Lets generate some memes</h2>
            <h4 className="header--project"></h4>
        </header>
    )
}