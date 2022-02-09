import React, { useState } from 'react';


const Buttons = () => {

    const [state, setState] = useState("a");

    const [selectedButton, setSelectButton] = useState(null);

    let randomButton = null;
    const buttonsIdArr = ["button1", "button2", "button3", "button4"];

    const handleClick = () => {
        console.log('butona basildi');
    }

    const chooseButton = () => {
        setState("b");
        const findItem = buttonsIdArr[Math.floor(Math.random()*buttonsIdArr.length)];
        setSelectButton(findItem);
        console.log(findItem);
    }

    const isSelectedButton = id => {
        if(id === selectedButton){
            console.log(id);
            return true;
        }
        return false;
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
