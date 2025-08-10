
import { memo } from "react"

function CountBtn({handleCount}){

    
        console.log("3. Countbtn")

        return (
            <>
                <button onClick={handleCount}>
                    Increment Count
                </button>
            </>
        )
}

export default memo(CountBtn)