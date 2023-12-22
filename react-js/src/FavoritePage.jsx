import MyHeader from "./MyHeader";
import Product, { liked } from "./Product";



function FavoritePage() {
    console.log(liked)
    return (
        <>
            <MyHeader headerState="header sticky" />
            <div className="favoriteContainer">
                {<FavoriteItems />}
            </div>

        </>
    )
}

export default FavoritePage;


function FavoriteItems() {
    let items = []
    for(let i=0 ; i<liked.length ; i++){
        items.push(<Product isLiked="true" id={i} />)
    }
    return (
        <>
           {items}
        </>
    )
}
