import React from "react";
import Drumpads from './components/Drumpads';

export default class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drumMachinePack: [
                {
                    keyName: 'q', 
                    keyCode: 81, 
                    oneShotName: 'Kick', 
                    oneShotAudio: '/oneShots/oneshot_kick.wav'
                },
                {
                    keyName: 'w', 
                    keyCode: 87, 
                    oneShotName: 'Snare', 
                    oneShotAudio: '/oneShots/oneshot_snare.wav'
                },
                {
                    keyName: 'e', 
                    keyCode: 69, 
                    oneShotName: 'HiHat', 
                    oneShotAudio: '/oneShots/oneshot_hihat.wav'
                },
                {
                    keyName: 'a', 
                    keyCode: 65, 
                    oneShotName: 'Crash', 
                    oneShotAudio: '/oneShots/oneshot_crash.wav'
                },
                {
                    keyName: 's', 
                    keyCode: 83, 
                    oneShotName: 'Percussion', 
                    oneShotAudio: '/oneShots/oneshot_perc.wav'
                },
                {
                    keyName: 'd', 
                    keyCode: 68, 
                    oneShotName: 'Shaker', 
                    oneShotAudio: '/oneShots/oneshot_shaker.wav'
                }
            ]
        };
    }

    render() {
        return (<>
            <h1 className="title">Drum Machine</h1>
            <Drumpads drums={this.state.drumMachinePack} />
        </>)
    }
}