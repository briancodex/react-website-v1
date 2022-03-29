import React from 'react'
import './ScrollDownButton.css'

const ScrollDownButton = () => {
    return <a href='#carousel'>
        <svg class="arrows">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
    </a>
}

export default ScrollDownButton;