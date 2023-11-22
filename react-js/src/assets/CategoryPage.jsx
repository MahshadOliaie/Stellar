import Title from "./Title";
import Category from "./category";
import Product from "./Product";
import MyHeader from "./MyHeader";

function CategoryPage() {
    return (
        <>
            <MyHeader headerState="header sticky" />
            <Title title="UNISEX" />
            <div className="categories">
                <Category id="jacket" insideId="jacketIn" title="JACKET" />
                <Category id="hoodies" insideId="hoodiesIn" title="HOODIES" />
                <Category id="tshirt" insideId="tshirtIn" title="T-SHIRT" />
            </div>
            <Title title="ALL" />
            <div className="products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </>
    )
}

export default CategoryPage;