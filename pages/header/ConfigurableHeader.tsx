/** @author gyaposz */
import React from "react"
import HamburgerIcon from "./HamburgerIcon"
import Separator from "../util/Separator"
import { format } from "util"

/**
 * Properties for {@link ConfigurableHeader}.
 */
interface ConfigurableHeaderProps {
    /**
     * Defines is header is sticky or regular. (Optional, default value = false)
     */
    stickyHeader : boolean,
    /**
     * Additional stylesheet classes. (Optional)
    */
    class : string,
    /**
     * Unique identifier of the header. (Required)
     */
    id : string,
    /**
     * Id of a refernce element. Given user scrolls vertically, once top pixel
     * of reference element is no longer visible, sticky header is shown.
     * Once its top pixel is visible again, sticky header is hidden.
     * Regular header ignores this object. (Required)
     */
    followedObject : string
    /**
     * whether menu is currently open or not. (Required)
     */
     isMenuOpen : boolean
    /**
     * Callback that must be called when menu gets open. (Required)
     */
    onMenuChange : Function
}

/** Class for headers that are shown */
const SHOWN_CLASS_NAME = "headerShown"

/** Class for headers that are hidden */
const HIDDEN_CLASS_NAME = "headerHidden"

/** Class for headers that are sticky */
const STICKY_CLASS_NAME = "sticky"

/**
 * Component representing the header section shown on top of the page. It can
 * be either stikcy header or normal one.
 */
export default class ConfigurableHeader
    extends React.Component<ConfigurableHeaderProps> {
    
    /**
     * Default values for optional properties
     */
    static defaultProps = {
        stickyHeader : false,
        class : "",
    }

    /**
     * @constructor
     * @param props {@link ConfigurableHeaderProps} defines if header is sticky
     * or not, what the next object on the page that decides when the sticky
     * header should be shown, what id and class the header has.
     */    
    constructor(props : ConfigurableHeaderProps) {
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    /**
     * Rendering method. 
     * @returns the rendered content
     */
    render() : React.ReactNode {
        var className = format("%s %s %s",
            this.props.class,
            SHOWN_CLASS_NAME,
            (this.props.stickyHeader ? STICKY_CLASS_NAME : "")) 
        return (
            <div className={className} id={this.props.id}> 
                <Separator />
                <div>
                    <a href="https://www.tomisabetti.com">TOMISA BETTI</a>
                </div>
                <HamburgerIcon isMenuOpen={this.props.isMenuOpen}
                    onMenuChange={this.props.onMenuChange}
                    id={(this.props.stickyHeader ? STICKY_CLASS_NAME : "") + "icon"} />
            </div>
        )
    }

    /**
     * Callback to support actions needed to be done after document is loaded.
     */
    componentDidMount() {
        if (this.props.stickyHeader) {
            var stickyHeader = document.getElementById(this.props.id)
            var content = document.getElementById(this.props.followedObject)
            var contentTop = content?.offsetTop || 0
            // First setting before any event happens.
            this.scrollHandler(contentTop, stickyHeader)
    
            window.onscroll = e => this.scrollHandler(contentTop, stickyHeader)
        }
    }
    
    /**
     * This function toggles classes of stickyHeader. If enduser scrolled under
     * the top of the contents, sticky header is shown. If enduser scrolled
     * above the top of the contents, sticky header is hidden.
     *
     * @param contentTop top location of the content below header
     * @param stickyHeader the sticky header that should be shown
     */
    scrollHandler(contentTop : number, stickyHeader : any) : void {
        if (this.props.stickyHeader) {
            if (contentTop !== undefined && window.pageYOffset > contentTop) {
                stickyHeader?.classList.remove(HIDDEN_CLASS_NAME)
                stickyHeader?.classList.add(SHOWN_CLASS_NAME)
            } else {
                stickyHeader?.classList.add(HIDDEN_CLASS_NAME)
                stickyHeader?.classList.remove(SHOWN_CLASS_NAME)
            }
        }
    }
}