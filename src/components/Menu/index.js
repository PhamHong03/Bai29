

function Menu(props) {
    console.log(props);
    const {menu = []} = props;
    return (
        <>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Menu;