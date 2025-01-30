import React from "react"
export default class Event extends React.Component{
    render(){
        return(
            <div>
                <hr />
                <h1>React Events</h1>
                <p>Just like HTML DOM events, React can perform actions based on user events.</p>
                <p>React has the same events as HTML: click, change, mouseover etc.</p>
                <h3>Adding Events</h3>
                <p>React events are written in camelCase syntax:</p>
                <ul>
                    <li>onClick instead of onclick.</li>
                </ul>
                <p>React event handlers are written inside curly braces:</p>
                <ul>
                    <li>onClick={'shoot'}  instead of onclick="shoot()".</li>
                </ul>
                <h2>React Event</h2>
                <p><button onClick={'shoot'}>Take the Shot!</button></p>
                <h2>HTML Event</h2>
                <p><button onclick="shoot()">Take the Shot!</button></p>
            </div>
        )
    }
}
