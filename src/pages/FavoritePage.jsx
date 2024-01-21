
import Products from "../Model";
import MyHeader from "../components/MyHeader";
import Product from "../components/Product";



function FavoritePage() {
    return (
        <>
            <MyHeader />
            <div className="favoriteContainer">
                {Products.map(obj =>{
                    if(obj.isLiked)
                    return <Product {...obj} key={obj.id}/>
                })}
            </div>

        </>
    )
}

export default FavoritePage;

