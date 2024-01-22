import Title from "../components/Title";
import Category from "../components/Category";
import Product from "../components/Product";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsByTags } from "../api/ProductApi";
import Products from "../Model";
import MyHeader from "../components/MyHeader";

function Clothes() {
    const [qparams, setqparams] = useSearchParams()
    const [selectedCat, setSelectedCat] = useState('ALL')
    const [products, setProducts] = useState([1, 2])

    useEffect(() => {

        const tags = [qparams.get('category_id'), qparams.get('tag')]
        getProductsByTags(setProducts, tags)





    }, [qparams])
    const setTagFilter = (id) => {
        setqparams((prevQParams) => {
            prevQParams.set('tag', id)
            return prevQParams
        })

    }




    return (
        <>
            <MyHeader />
            <Title title="UNISEX" />
            <div className="categories">
                <Category id="jacket" insideId="jacketIn" title="JACKET" clickevent={() => setTagFilter(4)} />
                <Category id="hoodies" insideId="hoodiesIn" title="HOODIES" clickevent={() => setTagFilter(5)} />
                <Category id="tshirt" insideId="tshirtIn" title="T-SHIRT" clickevent={() => setTagFilter(6)} />
            </div>
            <Title title={selectedCat} />
            <div className="products">
                {Products.map((item) => {
                    return <Product {...item} key={item.id} />

                })}

            </div>
        </>
    )
}

export default Clothes;



