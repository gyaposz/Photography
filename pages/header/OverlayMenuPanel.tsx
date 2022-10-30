/** @author gyaposz */
import React from "react"

/**
 * Properties for {@link OverlayMenuPanel}.
 */
 interface OverlayMenuPanelProps {
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
 * Overlay Menu.
 */
export default class OverlayMenuPanel
    extends React.Component<OverlayMenuPanelProps> {

    /**
     * @constructor
     * @param props {@link OverlayMenuPanelProps} defines if menu is open and
     * defines a callback method that can be used to report changes in menu.
     */    
    constructor(props : OverlayMenuPanelProps) {
        super(props)
    }
   
    /**
     * Rendering method. 
     * @returns the rendered content
     */
    render() : React.ReactNode {
        return (
            <div className={
                "overlay overlayPanel " + (this.props.isMenuOpen
                ? "overlayPanelShown" : "noOverlayPanel")}>
                <a href="https://www.tomisabetti.com">TOMISABETTI</a>
                <a href="https://www.tomisabetti.com">TOMISABETTI</a>
                <a href="https://www.tomisabetti.com">TOMISABETTI</a>
            </div>
        )
    }
}