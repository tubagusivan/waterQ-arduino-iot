import React from 'react';
import { Wave, Status } from './Fish'
import kotor from '../assets/kotor.png'
import jernih from '../assets/jernih.png'

const Fishpond = (props) => {
    const {data} = props
    
    const setLevel =(level) => {
        let height = Math.floor(600*7) / level;
        return height + 'px';
    }

    const setTdsQuality = (level) => {
        let background = jernih;
        
        if(level < 130) {
            background = kotor;
        } else if (level > 130) {
            background = jernih;
        }
        return background;
    }

    return (
        <div className="App ">
            {
                data && data.map((value, key) => {
                    return (
                        <div key={key}>
                            <div>
                                <Status status={value.status}/>
                                <div style={{width: '100%', margin: '0px', padding: '10px 0px', backgroundColor: `${value.status === 'ready' ? 'green' : 'red'}`}}>
                                    <span style={{textTransform: 'capitalize', padding: '10px', color: 'white', fontWeight: 'bold', fontSize: '14px'}}>{`${value.name}: ${value.status}`}</span>
                                </div>
                            </div>
                            <div
                                style={{
                                    backgroundImage: `url("https://1.bp.blogspot.com/-yPWx-JutH3Y/WvPaRY0NBDI/AAAAAAAAAQU/A0hywJIxitEVpbeMMlPeXAvTBT96-iCPgCLcBGAs/s1600/tumblr_om4mnjEVt81uro097o1_400.gif")`
                                }}
                                className="card"
                            >
                            <div className="card-info">
                                <h4 className="card-title">{`Id : ${value.id}`}</h4>
                                <h4 className="card-title">{`Name : ${value.name}`}</h4>
                                <p className="card-description">{`Description : ${value.description}`}</p>
                                <Wave height={setLevel(value.calibration.water_level)} bg={setTdsQuality(value.calibration.tds_quality)}/>
                                <div>
                                    <h3>Standard Quality of {value.description}</h3>
                                    <div>
                                        <p>Min TDS Quality: {value.standard_quality.min_tds_quality}</p>
                                        <p>Min Water Level: {value.standard_quality.min_temperature}</p>
                                    </div>
                                </div>
                                <div>
                                    <h3>Calibration</h3>
                                    <p>TDS Quality: {value.calibration.tds_quality}</p>
                                    <p>Water Level: {value.calibration.water_level}</p>
                                </div>
                            </div>
                            </div>
                            {/* <div className="card-button">
                                <button>Optimize</button>
                            </div> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Fishpond;