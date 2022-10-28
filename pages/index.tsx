/** @author gyaposz */
import HomePage from "./HomePage"
import React from "react"

/**
 * Application starting point.
 */
export default class App extends React.Component {
    /**
     * @constructor
     * @param props No special properites.
     */    
     constructor(props : any) {
        super(props)
    }

    /**
     * Rendering method. 
     * @returns the rendered content
     */
    render() : React.ReactNode {
        return <HomePage />
    }
}