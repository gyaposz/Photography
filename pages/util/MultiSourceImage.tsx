/** @author gyaposz */
import React from "react"
import { DESKTOP_RULE, TABLET_RULE } from "./MediaRules"

/**
 * Properties definition for {@link MultiSourceImage}.
 */
interface MultiSourceImageProps {
    /**
     * Path of desktop friendly version of image. (Required)
     */
    desktopImage: string,
    /**
     * Path of tablet friendly version of image. (Required)
     */
    tabletImage: string,
    /**
     * Path of mobile friendly version of image. (Required)
     */
    mobileImage: string
}

/**
 * Component that allows image to show different sizes based on breakpoints.
 */
export default class MultiSourceImage extends
    React.Component<MultiSourceImageProps> {

    /**
     * @constructor
     * @param props {@link MultiSourceImageProps} defines paths to different
     * versions of the same image. Possible variables are: mobileImage,
     * tabletImage, dekstopImage
     */
    constructor(props : MultiSourceImageProps) {
        super(props)
    }

    /**
     * Rendering method. 
     * @returns the rendered content
     */
    render() : React.ReactNode {
        return (
            <picture className="slideImage">
                <source srcSet={this.props.desktopImage}
                        media={"(min-width: " + DESKTOP_RULE + ")" }/>
                <source srcSet={this.props.tabletImage}
                        media={"(min-width: " + TABLET_RULE + ")" }/>
                <source srcSet={this.props.mobileImage}/>
                <img src={this.props.mobileImage}
                     alt="Birth Image" />
            </picture>
        )
    }
}