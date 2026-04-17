import { use, useState } from "react"

export default function Batsman() {
    const batsmanStyle = {
        border: '2px solid blue',
        borderRadius: '20px',
        padding: '10px'
    }

    const [runs, setRuns] = useState(0);
    const [single, setSingle] = useState(0);
    const [four, setFour] = useState(0);
    const [six, setSix] = useState(0);

    const handleSingle = () => {
        const newRun = runs + 1;
        const updatedSingle = single+1;
        setSingle(updatedSingle);
        setRuns(newRun);
    }
    const handleFour = () => {
        const updateRuns = runs+4;
        const updatedFour = four+1;
        setFour(updatedFour);
        setRuns(updateRuns);
    }
    const handleSix = () => {
        const updateRuns = runs+6;
        const updatedSixes = six+1;
        setSix(updatedSixes);
        setRuns(updateRuns);
    }
    const runStyle={
        display: 'flex',
        gap: '7px',
        justifyContent: 'center',
        borderRadius: '20px',
        padding: '10px'
    }
    return (
        <div style={batsmanStyle}>
            <h2>Bangla Batsman</h2>

            {
                runs > 50 && <p>Your Score is 50+ !</p>
            }
            {
                runs > 100 && <p>Your Score is 100+ !</p>
            }

            <h5>Single : {single}</h5>
            <h5>Four : {four}</h5>
            <h5>Six : {six}</h5>
            <h4>Runs : {runs}</h4>
            <div style={runStyle}>
                <button onClick={handleSingle}>Single</button>
                <button onClick={handleFour}>Four</button>
                <button onClick={handleSix}>Six</button>
            </div>
        </div>
        
    )

    
}