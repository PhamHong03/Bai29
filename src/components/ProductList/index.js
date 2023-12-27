import ProductItem from "./ProductItem";

function ProductList () {

    const productList = [
        {
            id: 1,
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw1n9rN6JvEGuGVjMr_CYU_F&ust=1703730065103000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOCU_p3HroMDFQAAAAAdAAAAABAE",
            name: "Product 1",
            price: "20.000VND",
        },
        {
            id: 2,
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw1n9rN6JvEGuGVjMr_CYU_F&ust=1703730065103000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOCU_p3HroMDFQAAAAAdAAAAABAE",
            name: "Product 2",
            price: "20.000VND",
        },
        {
            id: 3,
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw1n9rN6JvEGuGVjMr_CYU_F&ust=1703730065103000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOCU_p3HroMDFQAAAAAdAAAAABAE",
            name: "Product 3",
            price: "20.000VND",
        },
    ]

    return (
        <>
            <div className="product-list">
                {productList.map(item => (
                    // <div key={item.id} className="product-item">
                    //     {item.name}
                    // </div>
                    <ProductItem key={item.id} item={item}/>
                ))}
            </div>
        </>
    )
}

export default ProductList;