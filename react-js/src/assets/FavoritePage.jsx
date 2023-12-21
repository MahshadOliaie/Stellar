import MyHeader from "./MyHeader";
import Product from "./Product";



function FavoritePage() {
    return (
        <>
            <MyHeader headerState="header sticky" />
            <div className="favoriteContainer">
                <FavoriteItems />
            </div>

        </>
    )
}

export default FavoritePage;


function FavoriteItems() {
    return (
        <>
            <Product isLiked="true" />
            <Product isLiked="true" />
            <Product isLiked="true" />
            <Product isLiked="true" />
        </>
    )
}