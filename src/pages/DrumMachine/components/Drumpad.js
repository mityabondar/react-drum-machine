import React from "react";

export default function Drumpad({ drum }) {
    const [isActive, setActivePad] = React.useState(false);

    const handleKeyPress = (e) => {
        if (e.keyCode === drum.keyCode) {
            playAudio()
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return() => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    })

    const audio = new Audio(drum.oneShotAudio);

    const highlightPad = () => {
        window.focus();
        setActivePad(true);
        setTimeout(() => setActivePad(false), 100);
    }

    const playAudio = () => {
        audio.currentTime = 0;
        audio.play();

        highlightPad();
    }

    return (
        <button type="button" className={`drumpad ${isActive && 'active'}`} onClick={playAudio}>
            <div className="drumpad__key">
                Press <span className="drumpad__keyname">{ drum.keyName.toUpperCase() }</span>
            </div>
            <div className="drumpad__name">
                { drum.oneShotName }
            </div>
        </button>
    );
}