import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
    const [strawberry, setStrawberry] = useState(0)
    const [banana, setBanana] = useState(0)
    const [apples, setApples] = useState(0)
    const [kiwis, setKiwis] = useState(0)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [zipcode, setZipcode] = useState("")
    const [formComments, setFormComments] = useState('');
    const [formConditions, setFormConditions] = useState(false);
    const [delivery, toggleDelivery] = useState()
    const [time, toggleTime] = useState()



    function resetButton () {
        setStrawberry(0);
        setBanana(0);
        setApples(0);
        setKiwis(0);
    }

    function clickHandleChange (e) {
        e.preventDefault()
        console.log(`
        firstName: ${firstName}
        lastName: ${lastName}
        age: ${age}
        zipcode: ${zipcode}
        delivery: ${delivery}
        time: ${time}
        formComments: ${formComments}
        strawberry: ${strawberry}, banana: ${banana}, apples: ${apples}, kiwis: ${kiwis}`);
    }



  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <fieldset>
        <Counter
            fruitName="🍓 Aardbeien"
            type="button"
            fruitValue={strawberry}
            increment={() => setStrawberry(strawberry => strawberry + 1)}
            decrement={() => setStrawberry(strawberry => strawberry - 1)}
            isDisabled={strawberry === 0}
        />
        </fieldset>
        <fieldset>
        <Counter
            fruitName="🍌 Bananen"
            type="button"
            fruitValue={banana}
            increment={() => setBanana(banana => banana + 1)}
            decrement={() => setBanana(banana => banana - 1)}
            isDisabled={banana === 0}
        />
        </fieldset>
        <fieldset>
        <Counter
            fruitName="🍏 Appels"
            type="button"
            fruitValue={apples}
            increment={() => setApples(apples => apples + 1)}
            decrement={() => setApples(apples => apples - 1)}
            isDisabled={apples === 0}
        />
        </fieldset>
        <fieldset>
        <Counter
            fruitName="🥝 Kiwi's"
            type="button"
            fruitValue={kiwis}
            increment={() => setKiwis(kiwis => kiwis + 1)}
            decrement={() => setKiwis(kiwis => kiwis - 1)}
            isDisabled={kiwis === 0}
        />
        </fieldset>

        <fieldset>
            <Button
                type="button"
                clickHandler={resetButton}>Reset</Button>
        </fieldset>
        <fieldset>
        <form onSubmit={clickHandleChange}>
            <Form
                label="Voornaam"
                name="firstName"
                type="text"
                value={firstName}
                changeHandler={setFirstName}
            />

            <Form
                    label="Achternaam"
                    id="form-lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    changeHandler={setLastName}
            />
            <Form
                    label="Leeftijd"
                    name="age"
                    type="number"
                    value={age}
                    changeHandler={setAge}
                />
                <Form
                    label="Postcode"
                    name="zipcode"
                    type="text"
                    value={zipcode}
                    changeHandler={setZipcode}
                />

                <label htmlFor="delivery"> <h5>Bezorgfrequentie</h5></label>
            <select
                name="delivery"
                id="delivery"
                value={delivery}
                onChange= {(e) => toggleDelivery(e.target.value) }
            >
                <option value="choose">Kies jouw optie</option>
                <option value="every-week">Iedere week</option>
                <option value="every-other-week">Om de week</option>
                <option value="monthly">Iedere maand</option>
            </select>


            <div className="radio">
                <label htmlFor="overdag">
                <input
                    type="radio"
                    id="overdag"
                    value="overdag"
                    name="day"
                    checked={time === 'overdag'}
                    onChange={(e) => toggleTime(e.target.value) }
                />
                    Overdag
                </label>
                <label htmlFor="savonds">
                <input
                    type="radio"
                    id="savonds"
                    value="savonds"
                    name="evening"
                    checked={time === 'savonds'}
                    onChange={(e) => toggleTime(e.target.value) }
                />
                    's Avonds
                </label>
            </div>

                <label id="comments-area" htmlFor="form-comments">
                Opmerkingen:
            <textarea
                name="comments"
                id="form-comments"
                cols="30"
                rows="10"
                value={formComments}
                onChange={(event) => setFormComments(event.target.value)}
            >
            </textarea>
                </label>

            <label htmlFor="form-conditions">
                <input
                    type="checkbox"
                    id="form-conditions"
                    name="therms-and-conditions"
                    checked={formConditions}
                    onChange={() => setFormConditions(!formConditions)}
                />
                Ik ga akkoord met de voorwaarden
            </label>
            <Button type="submit">Versturen</Button>
        </form>
        </fieldset>
    </>
  );
}


export default App;
