import React from "react";
import Drumpad from './Drumpad';

export default function Drumpads({ drums }) {
    return (
        <div className="drumpads">
            <div className="drumpads__grid">
                { drums.map((drum, index) => {
                    return <Drumpad key={index} drum={drum} />
                }) }
            </div>
        </div>
    );
}