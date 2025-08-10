
import { memo } from "react"

function Title(){
    console.log("1. Title")

}

export default memo(Title)

// when we use memo, only if there is a change in the prop and prop should pass