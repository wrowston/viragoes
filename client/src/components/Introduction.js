import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Introduction extends Component {
    render() {
        return (
            <div className='introduction'>
                <div className='description-wrapper'>
                    <div className='description'>
                        <div className='title'>
                            WE'RE MORE THAN JUST TAMPONS.</div>

                        <div>IN AN EMERGENCY YOU DESERVE THE BEST,
                        THAT'S WHY ALL OUR PRODUCTS ARE 100%
                        ORGANIC NON-TOXIC AND PARABAN FREE.</div>
                        <Link to='/contact'>
                            <button>Request Information</button>
                        </Link>
                    </div>
                </div>
                <iframe
                    className='description'
                    width="653"
                    height="367"
                    src="https://www.youtube.com/embed/2-Vzcouh7pw"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
        )
    }
}
