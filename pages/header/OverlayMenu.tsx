/** @author gyaposz */
import React from "react"
import OverlayMenuPanel from "./OverlayMenuPanel"

/**
 * Properties for overlay
 */
interface OverlayMenuProps {
    /**
     * whether menu is currently open or not. (Required)
     */
     isMenuOpen : boolean
    /**
     * Callback that must be called when menu gets open. (Required)
     */
    onMenuChange : Function
}

/**
 * Simple component for overlay purpose.
 */
export default class OverlayMenu extends React.Component<OverlayMenuProps> {

    /**
     * @constructor
     * @param props {@link OverlayMenuProps} defines if menu is open and
     * defines a callback method that can be used to report changes in menu.
     */    
    constructor(props : OverlayMenuProps) {
        super(props)
    }

    /**
     * Rendering method. 
     * @returns the rendered content
     */
    render() : React.ReactNode {
        return (
            <div>
                <OverlayMenuPanel isMenuOpen={this.props.isMenuOpen}
                                  onMenuChange={this.props.onMenuChange}/>
                <div className={"overlay overlayInk " + (this.props.isMenuOpen
                     ? "overlayInkShown" : "noOverlayInk")} />
            </div>
        )
    }
}