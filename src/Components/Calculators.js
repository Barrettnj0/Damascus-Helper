// React imports
import React, { useState } from "react";

// Stylesheet
import "../Stylesheets/Calculators.css";

const Calculators = () => {

    // Player Stat States
    const [damage1, setDamage1] = useState(0);
    const [damage2, setDamage2] = useState(0);
    const [atkSpd, setAtkSpd] = useState(0.0);
    const [accuracy, setAccuracy] = useState(0);
    const [defense, setDefense] = useState(0);
    const [melee, setMelee] = useState(0);
    const [ranging, setRanging] = useState(0);
    const [psychic, setPsychic] = useState(0);
    const [type, setType] = useState("Melee");

    // Player Armor Stat States
    const [meleeDef, setMeleeDef] = useState(0);
    const [rangeDef, setRangeDef] = useState(0);
    const [psyDef, setPsyDef] = useState(0);
    const [meleeAcc, setMeleeAcc] = useState(0);
    const [rangeAcc, setRangeAcc] = useState(0);
    const [psyAcc, setPsyAcc] = useState(0);

    // Enemy Stat States
    const [badDamage, setBadDamage] = useState(0);
    const [badAtkSpd, setBadAtkSpd] = useState(0.0);
    const [badAccuracy, setBadAccuracy] = useState(0);
    const [badDefense, setBadDefense] = useState(0);
    const [badMelee, setBadMelee] = useState(0);
    const [badRanging, setBadRanging] = useState(0);
    const [badPsychic, setBadPsychic] = useState(0);
    const [badType, setBadType] = useState("Melee");

    // Dps and other Output States
    const [rawPlayerDps, setRawPlayerDps] = useState(0);
    const [truePlayerDps, setTruePlayerDps] = useState(0);
    const [trueEnemyDps, setTrueEnemyDps] = useState(0);
    const [hitChance, setHitChance] = useState(0);
    const [badHitChance, setBadHitChance] = useState(0);
    const [sustainRatio, setSustainRatio] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        let armorAcc, armorDef, primaryStat, secondaryStat, badPrimaryStat, badSecondaryStat;

        
        switch (type) {
            case "Melee":
                armorAcc = meleeAcc;
                primaryStat = melee;
                badSecondaryStat = badMelee;
                break;
            case "Ranging":
                armorAcc = rangeAcc;
                primaryStat = ranging;
                badSecondaryStat = badRanging;
                break;
            case "Psychic":
                armorAcc = psyAcc;
                primaryStat = psychic;
                badSecondaryStat = badPsychic;
                break;
        }

        switch (badType) {
            case "Melee":
                armorDef = meleeDef;
                secondaryStat = melee;
                badPrimaryStat = badMelee;
                break;
            case "Ranging":
                armorDef = rangeDef;
                secondaryStat = ranging;
                badPrimaryStat = badRanging;
                break;
            case "Psychic":
                armorDef = psyDef;
                secondaryStat = psychic;
                badPrimaryStat = badPsychic;
                break;
        }

        let accNumer = accuracy + armorAcc + (primaryStat/4);
        let accDenom = accNumer + badDefense + (badSecondaryStat/4);
        let hitChanceCopy = (accNumer/accDenom).toFixed(4);

        let badAccNumer = badAccuracy + (badPrimaryStat/4);
        let badAccDenom = badAccNumer + defense + armorDef + (secondaryStat/4);
        let badHitChanceCopy = (badAccNumer/badAccDenom).toFixed(4);
        
        let avgDmgTotal = (damage1 + damage2) / 2;
        let rawPlayerDpsCopy = (avgDmgTotal / atkSpd).toFixed(3);
        let truePlayerDpsCopy = (rawPlayerDpsCopy * hitChanceCopy).toFixed(3);
        
        let rawEnemyDps = (badDamage / 2) / badAtkSpd;
        let trueEnemyDpsCopy = (rawEnemyDps * badHitChanceCopy).toFixed(3);
        
        setRawPlayerDps(rawPlayerDpsCopy);
        setTruePlayerDps(truePlayerDpsCopy);
        setTrueEnemyDps(trueEnemyDpsCopy);
        setHitChance(hitChanceCopy);
        setBadHitChance(badHitChanceCopy);
        setSustainRatio((truePlayerDpsCopy/trueEnemyDpsCopy).toFixed(4));
    }

    return (
        <div>
            <h2>DPS Calculators</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-boxes">
                    <div className="stats-box"> 
                        <h3>Player Stats:</h3>
                        <div className="minor-stat-block">
                            <h4>Combat Stats:</h4>
                            <div>
                                <label>
                                    Damage Range:
                                    <input type="number" value={damage1} onChange={x=>setDamage1(parseInt(x.target.value))}/>
                                    -
                                    <input type="number" value={damage2} onChange={x=>setDamage2(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Attack Speed:
                                    <input type="number" step="0.5" value={atkSpd} onChange={x=>setAtkSpd(parseFloat(x.target.value))}/>
                                    s
                                </label>
                            </div>

                            <div>
                                <label>
                                    Accuracy Level:
                                    <input type="number" value={accuracy} onChange={x=>setAccuracy(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Defense Level:
                                    <input type="number" value={defense} onChange={x=>setDefense(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Melee Level:
                                    <input type="number" value={melee} onChange={x=>setMelee(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Ranging Level:
                                    <input type="number" value={ranging} onChange={x=>setRanging(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Psychic Level:
                                    <input type="number" value={psychic} onChange={x=>setPsychic(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Combat Type:
                                    <select type="text" value={type} onChange={x=>setType(x.target.value)}>
                                        <option>Melee</option>
                                        <option>Ranging</option>
                                        <option>Psychic</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className="minor-stat-block">
                            <h4>Armor Stats:</h4>
                            <div>
                                <label>
                                    Melee Defense:
                                    <input type="number" value={meleeDef} onChange={x=>setMeleeDef(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Ranging Defense:
                                    <input type="number" value={rangeDef} onChange={x=>setRangeDef(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Psychic Defense:
                                    <input type="number" value={psyDef} onChange={x=>setPsyDef(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Melee Accuracy:
                                    <input type="number" value={meleeAcc} onChange={x=>setMeleeAcc(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Ranging Accuracy:
                                    <input type="number" value={rangeAcc} onChange={x=>setRangeAcc(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Psychic Accuracy:
                                    <input type="number" value={psyAcc} onChange={x=>setPsyAcc(parseInt(x.target.value))}/>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="stats-box">
                        <h3>Enemy Stats:</h3>

                        <div className="minor-stat-block">
                            <h4>Combat Stats:</h4>
                            <div>
                                <label>
                                    Max Damage:
                                    <input type="number" value={badDamage} onChange={x=>setBadDamage(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Attack Speed:
                                    <input type="number" step="0.5" value={badAtkSpd} onChange={x=>setBadAtkSpd(parseFloat(x.target.value))}/>
                                    s
                                </label>
                            </div>

                            <div>
                                <label>
                                    Accuracy:
                                    <input type="number" value={badAccuracy} onChange={x=>setBadAccuracy(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Defense:
                                    <input type="number" value={badDefense} onChange={x=>setBadDefense(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Melee:
                                    <input type="number" value={badMelee} onChange={x=>setBadMelee(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Ranging:
                                    <input type="number" value={badRanging} onChange={x=>setBadRanging(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Psychic:
                                    <input type="number" value={badPsychic} onChange={x=>setBadPsychic(parseInt(x.target.value))}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Combat Type:
                                    <select type="text" value={badType} onChange={x=>setBadType(x.target.value)}>
                                        <option>Melee</option>
                                        <option>Ranging</option>
                                        <option>Psychic</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <input className="submit" type="submit" value="Submit" />
            </form>

            <div className="output-boxes">
                <div className="stats-box">
                    <h3>Output:</h3>

                    <div>Player Hit Chance: {hitChance}</div>
                    <div>Enemy Hit Chance: {badHitChance}</div>

                    <div>Raw DPS: {rawPlayerDps}</div>
                    <div>True DPS: {truePlayerDps}</div>
                    <div>Enemy True DPS: {trueEnemyDps}</div>
                    <div>Sustainability Ratio: {sustainRatio}</div>
                </div>
            </div>
        </div>
    )
}

export default Calculators;