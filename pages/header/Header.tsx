/** @author gyaposz */
import React from "react"
import ConfigurableHeader from "./ConfigurableHeader"
import OverlayMenu from "./OverlayMenu"

/**
 * State of Header
 */
interface HeaderState {
    /**
     * whether menu is currently open or not.
     */
    isMenuOpen : boolean
}

/**
 * Component representing the header section
 */
export default class Header extends React.Component<any, HeaderState> {

    /**
     * @constructor
     * @param props No special properites.
     */    
    constructor(props : any) {
        super(props)
        this.state = {
            isMenuOpen : false
        }
        this.onMenuChange = this.onMenuChange.bind(this)
    }

    /**
     * Tracks changes whether mneu is open or closed. If menu is opened, the
     * input param is true, otherwise false.
     * @param menuOpen updated state of menu
     */
    onMenuChange(menuOpen : boolean) {
        this.setState({isMenuOpen : !this.state.isMenuOpen});
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
                    stickyHeader={true}
                    isMenuOpen={this.state.isMenuOpen}
                    onMenuChange={this.onMenuChange} />
                <ConfigurableHeader id="NormalHeader"
                    followedObject="content"
                    isMenuOpen={this.state.isMenuOpen}
                    onMenuChange={this.onMenuChange} />
                <OverlayMenu isMenuOpen={this.state.isMenuOpen}
                    onMenuChange={this.onMenuChange} />
            </div>
        )
    }
}