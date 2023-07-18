import React, { useRef } from 'react'

function UnControlledComponent() {
    const nameref = useRef();
    const userNameref = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nameref.current.value);
        console.log(userNameref.current.value);
    }
    return (
        <div>
            <form>
                <label htmlFor='name'>Name:-</label>
                <input type="text" name="Name" id="name" ref={nameref} />
                <label htmlFor='name'>UserName:-</label>
                <input type="text" name="UserName" id="name" ref={userNameref} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UnControlledComponent
