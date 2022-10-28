/** @author gyaposz */
import React from "react"
import { SplideSlide } from "@splidejs/react-splide"
import MultiSourceImage from "./util/MultiSourceImage"

/**
 * Properties for Slide component
 */
interface SlideProps {
    /**
     * Number of the slide. It is similar to page number of books. (Optional)
     */
    slideNumber: number
}

/**
 * StickHeader component that always flows atop of the UI
 */
export default class Slide extends React.Component<SlideProps> {

    /**
     * @constructor
     * @param props {@link SlideProps} makes it possible to provide numbering of
     * the slides. Possible property value is slideNumber.
     */
    constructor(props : SlideProps) {
        super(props)
    }

    /**
     * Rendering method. 
     * @returns the rendered content
     */
    render() : React.ReactNode {
        var desktopImage = "/" + this.props.slideNumber + ".jpg"
        var tabletImage = "/" + this.props.slideNumber + "_t.jpg"
        var mobileImage = "/" + this.props.slideNumber + "_m.jpg"
        return (
            <SplideSlide>
                <div className="slide">
                    <MultiSourceImage desktopImage={desktopImage}
                        tabletImage={tabletImage}
                        mobileImage={mobileImage}
                    />
                </div>
            </SplideSlide>
        )
    }
}