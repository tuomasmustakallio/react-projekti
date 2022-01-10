import React from "react";

export function Slider(){

    return(
        <div class="mdc-slider mdc-slider--discrete">
            <input class="mdc-slider__input" type="range" min="0" max="100" value="50" name="volume" step="10" aria-label="Discrete slider demo"/>
            <div class="mdc-slider__track">
                <div class="mdc-slider__track--inactive"></div>
                <div class="mdc-slider__track--active">
                <div class="mdc-slider__track--active_fill"></div>
                </div>
            </div>
            <div class="mdc-slider__thumb">
                <div class="mdc-slider__value-indicator-container" aria-hidden="true">
                <div class="mdc-slider__value-indicator">
                    <span class="mdc-slider__value-indicator-text">
                    50
                    </span>
                </div>
                </div>
                <div class="mdc-slider__thumb-knob"></div>
            </div>
            </div>
    );
}