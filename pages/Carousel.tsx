/** @author gyaposz */
import React from "react"
import { Splide, SplideTrack } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Slide from "./Slide"

/**
 * Component for image carousel for birth images
 */
export default class Carousel extends React.Component {
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
            <Splide hasTrack = { false }
                    aria-label="Birth Images" 
                    options={{ type: "loop",
                               padding: "30%",
                               focus: "center",
                               autoplay: true,
                               fixedHeight: "40rem",
                               autoWidth: true,
                               omitEnd: true,
                               gap: "5rem"
                  }}>
                <SplideTrack>
                    <Slide slideNumber={1}/>
                    <Slide slideNumber={2}/>
                    <Slide slideNumber={3}/>
                </SplideTrack>
            </Splide>
        )
    }
}