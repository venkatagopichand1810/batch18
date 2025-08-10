

function Child({ events, date }) {
    const todayEvents = events.filter(event => event.date === date)


    // return (
    //     <div className = "p-6">
    //       <h2 className = "text-xl font-bold mb-4">Events on {date}</h2>
    //         {todayEvents.length === 0 ? (
    //             <p>No Events on this day</p>
    //         ) : (
    //             <ul>
    //                 <ul>
    //                     {todayEvents.map((event, index) => (
    //                         <li>
    //                             {event.title}
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </ul>
    //         )}
    //     </div>
    // )

    if (todayEvents.length === 0) {
        return (
            <div>
                <h2 className="text-xl font-bold mb-4">Events on {date}</h2>
                <p>No Events on this day</p>
            </div>
        )

    }

    return (
        <div>
             <h2 className="text-xl font-bold mb-4">Events on {date}</h2>
            <ul>
                <ul>
                    {todayEvents.map((event, index) => (
                        <li>
                            {event.title}
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    )


}

export default Child

