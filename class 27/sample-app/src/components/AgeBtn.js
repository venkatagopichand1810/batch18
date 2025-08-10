import { memo } from "react"

function AgeBtn({handleAge}){

      console.log("5. Agebtn")

       return (
            <>
                <button onClick={handleAge}>
                    Increment Age
                </button>
            </>
        )
}

export default memo(AgeBtn)