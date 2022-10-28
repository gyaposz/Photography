/** @author gyaposz */
import React from "react"

/**
 * A simple component that adds a default spacing between objects. 
 */
export default class Separator extends React.Component {

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
        return <div className="separator" />
    }
}
