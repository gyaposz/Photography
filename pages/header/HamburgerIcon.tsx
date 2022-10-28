/** @author gyaposz */
import React from "react"
import { GrClose, GrMenu } from "react-icons/gr"

/**
 * Properties definition for {@link HamburgerIcon}.
 */
interface HamburgerIconProps {
}

/**
 * State definition for {@link HamburgerIcon}.
 */
interface HamburgerIconState {
    navbarOpen : boolean
}

/** Class for hamburger icons */
const HAMBURGER_ICON = "hamburgerIcon"
/** Default size of hamburger icons */
const DEFAULT_SIZE = "1.6rem"

/**
 * Component for hamburger icon on the header.
 */
export default class HamburgerIcon
    extends React.Component<HamburgerIconProps, HamburgerIconState> {

    /**
     * @constructor
     * @param props No special properites.
     */    
    constructor(props : any) {
        super(props)
        this.state = {
            navbarOpen: false
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    /**
     * EventHandler that captures click on the hamburger icon.
     * @param e {@link MouseEvent} the captured click event
     */
    handleToggle = (e : React.MouseEvent) => {
        this.setState((previousState, props) => ({
            navbarOpen: !previousState.navbarOpen,
        }))
    }

    /**
     * Rendering method. 
     * @returns the rendered content
     */
    render() : React.ReactNode {
        return (
            <div className={HAMBURGER_ICON} onClick={this.handleToggle}>
                {this.state.navbarOpen? <GrClose size={DEFAULT_SIZE}/>
                 : <GrMenu size={DEFAULT_SIZE}/>}
            </div>
        )
    }
}

