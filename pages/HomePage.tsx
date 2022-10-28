/** @author gyaposz */
import React from "react"
import Header from "./header/Header"
import Button from "react-bootstrap/Button"
import Carousel from "./Carousel"

/**
 * Component that describes the main layout of the homepage.
 */
export default class HomePage extends React.Component {
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
            <div className="HomePage">
                <Header />
                <div id="content">
                    <Button as="a" variant="primary">
                        Button as link
                    </Button>
                    <Carousel />
                </div>
            </div>
        )
    }
}