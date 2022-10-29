/** @author gyaposz */
import React from "react"
import { HAMBURGER_ICON } from "../util/Constants"

/** Id helper for top line */
const TOP = "top"
/** Id helper for middle line */
const MID = "middle"
/** Id helper for bottom line */
const BOTTOM = "bottom"
/**
 * Properties definition for {@link HamburgerIcon}.
 */
interface HamburgerIconProps {
    /**
     * Unique identifier of the HamburgerIcon. (Required)
     */
    id : string
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
 * State definition for {@link HamburgerIcon}.
 */
interface HamburgerIconState {
    
}

/**
 * Component for hamburger icon on the header.
 */
export default class HamburgerIcon
    extends React.Component<HamburgerIconProps, HamburgerIconState> {

    /**
     * @constructor
     * @param props {@link HamburgerIconProps} defines if menu is open and
     * defines a callback method that can be used to report changes in menu.
     */    
    constructor(props : HamburgerIconProps) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
    }

    /**
     * EventHandler that captures click on the hamburger icon.
     * It also makes sure that HTML is no longer scrollable.
     * @param e {@link MouseEvent} the captured click event
     */
    handleToggle = (e : React.MouseEvent) => {
        window.scroll(0, 0);
        var page = document.getElementsByTagName("html").item(0)
        page?.classList.toggle("noScroll")
        this.props.onMenuChange(!this.props.isMenuOpen)
    }

    /**
     * Rendering method. 
     * @returns the rendered content
     */
    render() : React.ReactNode {
        var open = this.props.isMenuOpen ? " open" : ""
        return (
            <div className={HAMBURGER_ICON + open} onClick={this.handleToggle}>
                <div id={this.props.id + TOP} className="icon-1" />
                <div id={this.props.id + MID} className="icon-2" />
                <div id={this.props.id + BOTTOM} className="icon-3" />
            </div>
        )
    }
}

