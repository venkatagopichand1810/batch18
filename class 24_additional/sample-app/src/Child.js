
function Child({onButtonClick}) {

    const sendData = (buttonType) => {

        let data = '';

        switch (buttonType) {
            case 'button1' :
                data = "Data from the Button 1";
                break;

            case 'button2' :
                data = "Data from the Button 2";
                break;
            
            case 'button3' :
                data = "Data from the Button 3";
                break;
            default:
                break;

        }
        onButtonClick(data); //send the data to the parent based on the button click
    }



    return (
        <div>
            <h2>Child component</h2>
            <button onClick = {() => sendData("button1")}>Button 1</button>
            <button onClick = {() => sendData("button2")}>Button 2</button>
            <button onClick = {() => sendData("button3")}>Button 3</button>
        </div>
    )
    
}

export default Child