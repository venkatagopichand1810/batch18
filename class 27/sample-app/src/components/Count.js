import { memo } from "react"
function Count({ count }) {

    console.log("2. Count")

    return (
        <>
            <h1>Count is:{count}</h1>

        </>
    )

}

export default memo(Count)