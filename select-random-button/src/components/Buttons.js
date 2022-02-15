import React, { useState, useRef } from 'react';


const Buttons = () => {

    const ref = useRef(null);

    const [state, setState] = useState("a");

    const [selectedButton, setSelectedButton] = useState(null);

    const buttonsIdArr = ["button1", "button2", "button3", "button4"];


    const handleClick = () => {
        console.log('butona basildi');
    }

    const chooseButton = () => {
        const index = Math.floor(Math.random()*buttonsIdArr.length);
        setState("b");
        const findItem = buttonsIdArr[index];
        setSelectedButton(findItem);

        setSelectedArea();
        
        console.log(findItem);
    }

    const reset = () => {
        setState("a");
    }

    const isSelectedButton = id => {
        if(id === selectedButton){
            return true;
        }
        return false;
    }

    const setSelectedArea = () => {
    }
    
    return ( 
        <div>
            {state === "a" ? 
                <div>
                <button style={{visibility: "visible"}} id='button1' onClick={handleClick}>button1</button>
                <button style={{visibility: "visible"}} id='button2' onClick={handleClick}>button2</button>
                <button style={{visibility: "visible"}} id='button3' onClick={handleClick}>button3</button>
                <button style={{visibility: "visible"}} id='button4' onClick={handleClick}>button4</button> 
                </div> : null 
            }
            <button id='selectRandomButton' onClick={chooseButton}>SELECT RANDOM BUTTON</button>
            <button id='resetButton' onClick={reset}>RESET</button>

            {isSelectedButton('button1') ?  
                <div>
                <button style={{visibility: "visible"}} id='button1' onClick={handleClick}>button1</button>
                <button style={{visibility: "hidden"}} id='button2' onClick={handleClick}>button2</button>
                <button style={{visibility: "hidden"}} id='button3' onClick={handleClick}>button3</button>
                <button style={{visibility: "hidden"}} id='button4' onClick={handleClick}>button4</button>
                </div> : null
            }
            {isSelectedButton('button2') ?  
                <div>
                <button style={{visibility: "hidden"}} id='button1' onClick={handleClick}>button1</button>
                <button style={{visibility: "visible"}} id='button2' onClick={handleClick}>button2</button>
                <button style={{visibility: "hidden"}} id='button3' onClick={handleClick}>button3</button>
                <button style={{visibility: "hidden"}} id='button4' onClick={handleClick}>button4</button> 
                </div> : null 
            }
            {isSelectedButton('button3') ?  
                <div>
                <button style={{visibility: "hidden"}} id='button1' onClick={handleClick}>button1</button>
                <button style={{visibility: "hidden"}} id='button2' onClick={handleClick}>button2</button>
                <button style={{visibility: "visible"}} id='button3' onClick={handleClick}>button3</button>
                <button style={{visibility: "hidden"}} id='button4' onClick={handleClick}>button4</button> 
                </div> : null 
            }
            {isSelectedButton('button4') ?  
                <div>
                <button style={{visibility: "hidden"}} id='button1' onClick={handleClick}>button1</button>
                <button style={{visibility: "hidden"}} id='button2' onClick={handleClick}>button2</button>
                <button style={{visibility: "hidden"}} id='button3' onClick={handleClick}>button3</button>
                <button style={{visibility: "visible"}} id='button4' onClick={handleClick}>button4</button> 
                </div> : null 
            }

        </div>
    );
};

export default Buttons;
