import "./Country.scss"
function Country(){
    const country = [
        {
            id: 1,
            name:"Viet Nam",
            city: [
                {
                    id:1,
                    name:"Ha Noi",
                },
                {
                    id:2,
                    name:"Da Nang",
                },
                {
                    id:3,
                    name:"Ho Chi Minh",
                },
            ],
        },
        {
            id:2,
            name:"Thai Lan",
            city: [
                {
                    id:1,
                    name:"Bang Coc",
                },
                {
                    id:2,
                    name:"Phuket",
                },
            ],
        },
        {
            id:3,
            name:"Han Quoc",
            city: null
        }
    ];

    return (
        <>
            <ul className="country">
                {(country || []).map(itemCountry => (
                    <li key={itemCountry.id} className="country__item"> 
                        <div className="country__title">
                            {itemCountry.name}
                        </div>
                        <ul className="country__sub">
                            {(itemCountry.city || []).map(item =>(
                                <li key={item.id} className="country__sub--item">
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Country;