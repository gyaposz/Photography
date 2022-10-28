/** @author gyaposz */
import React from "react"
import ConfigurableHeader from "./ConfigurableHeader"

/**
 * Component representing the header section
 */
export default class Header extends React.Component {

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
        return (
            <div className="header" id="Header">
                <ConfigurableHeader id="StickyHeader"
                    followedObject="content"
                    stickyHeader={true} />
                <ConfigurableHeader id="NormalHeader"
                    followedObject="content"/>
            </div>
        )
    }
}