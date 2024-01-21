
import MyHeader from "../components/MyHeader";
import Product, { liked } from "../components/Product";



function FavoritePage() {
    console.log(liked)
    return (
        <>
            <MyHeader />
            <div className="favoriteContainer">
                {<FavoriteItems />}
            </div>

        </>
    )
}

export default FavoritePage;


function FavoriteItems() {
    let items = []
    for (let i = 0; i < liked.length; i++) {
        items.push(<Product isLiked="true" id={liked[i]} />)
    }
    return (
        <>
            {items}
        </>
    )
}
