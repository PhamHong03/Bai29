
function ProductItem(props) {
    const { item } = props;
    return (
        <>
            <div key={item.id} className="product-item">
                <img src="{item.image}" alt="" style={{width:"200px", height:"auto"}} />
                <h3>
                    {item.name}
                </h3>
                <p>
                    {item.price}
                </p>
            </div>
        </>
    )
}

export default ProductItem