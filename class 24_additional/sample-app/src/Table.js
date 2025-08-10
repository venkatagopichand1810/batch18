

function Table({columns, data}) {

    return (
        <table>
            <thead>
                <tr>
                   {columns.map((column) => (
                    <th>{column}</th>
                   ))} 
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr>
                        {columns.map((column) => (
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default Table
{/* <tr>
    <td>

    </td> */}