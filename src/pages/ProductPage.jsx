import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getFullDetailProduct } from "../api/ProductApi";
import serverAddress from "../utils/serverAddress";
import MyHeader from "../components/MyHeader";
import Products from "../Model";

function ProductPage() {

    let id = location.pathname.replaceAll("/product/", "");
    let product = Products.filter(item => {
        if (item.id == id)
            return item
    })
    const { images, name, price , colors } = product[0];
    // const [product,setProduct]=useState(null)
    // const {id}=useParams()
    // const [selectedSize,setSelectedSize]=useState()
    // const [availableColors,setAvailableColors]=useState()

    // useEffect(()=>{
    //     getFullDetailProduct(id,setProduct)


    // },[])
    // useEffect(()=>{
    //     changeSizeEvent(selectedSize)



    // },[selectedSize])
    // useEffect(()=>{
    //     setSelectedSize(product?.size[Object.keys(product?.size)[0]])

    // },[product])
    // const changeSizeEvent=(sizeKey)=>{
    //     setAvailableColors(product?.size[sizeKey])



    // }
    // return(
    //     <>
    //     <MyHeader headerState="header sticky" />
    //     <div className="containerProduct">
    //         <div className="photos">
    //             <div className="photos__main">
    //                 <img src={serverAddress+product?.mainImg} alt="" />

    //                 <div className="photos__main__dots">
    //                     {product?.images?.map((image,index)=>{

    //                         return(
    //                             <div className="photos__main__dots__dot " id={`dot${index}`}></div>

    //                         )


    //                     })}
    //                     <div className="photos__main__dots__dot currentDot" id="dotp1"></div>
    //                     <div className="photos__main__dots__dot" id="dotp2"></div>
    //                     <div className="photos__main__dots__dot" id="dotp3"></div>
    //                     <div className="photos__main__dots__dot" id="dotp4"></div>
    //                     <div className="photos__main__dots__dot" id="dotp5"></div>

    //                 </div>
    //             </div>

    //             <div className="photos__picker">
    //                 {product?.images?.map((image,index)=>{

    //                     return(
    //                         <img src={serverAddress+image.url} id={`p${index}`} alt="" className="photos__picker__image" onClick={() => showPhoto(serverAddress+image.url)} />

    //                     )


    //                 })}
    //                 <img src="/src/images/jacket1.jpg" id="p1" alt="" className="photos__picker__image currentPhoto" onClick={() => showPhoto("/src/images/jacket1.jpg")} />
    //                 <img src="/src/images/jacketProduct.jpg" id="p2" alt="" className="photos__picker__image" onClick={() => showPhoto("/src/images/jacketProduct.jpg")} />
    //                 <img src="/src/images/jacket2.jpg" id="p3" alt="" className="photos__picker__image" onClick={() => showPhoto("/src/images/jacket2.jpg")} />
    //                 <img src="/src/images/jacket2.jpg" id="p4" alt="" className="photos__picker__image" onClick={() => showPhoto("/src/images/jacket2.jpg")} />
    //                 <img src="/src/images/jacket2.jpg" id="p5" alt="" className="photos__picker__image" onClick={() => showPhoto("/src/images/jacket2.jpg")} />
    //             </div>
    //         </div>

    //         <div className="about">
    //             <div className="about__title">
    //                 <p className="about__title__name">{product?.name}</p>
    //                 <p className="about__title__price">{product?.price} T</p>
    //             </div>

    //             <div className="about__colorPicker">
    //                 {availableColors?.map((color,index)=>{
    //                     return(
    //                         <div style={{backgroundColor:color.value}} className="about__colorPicker__color" id={"color"+index}></div>

    //                     )

    //                             // <option value={size}>{size.key}</option>


    //                 })}

    //                 <div className="about__colorPicker__color" id="color1"></div>
    //                 <div className="about__colorPicker__color" id="color2"></div>
    //                 <div className="about__colorPicker__color" id="color3"></div>
    //                 <div className="about__colorPicker__color" id="color4"></div>
    //             </div>

    //             <div className="options">
    //                 <div className="options__size">
    //                     <label className="options__size__lable" htmlFor="size">size</label>
    //                     <select name="size" id="size"  onChange={(e)=>setSelectedSize(e.target.value)} >
    //                         {Object.keys(product?.size).map((size)=>{
    //                             return(
    //                                 <option value={size}>{size}</option>

    //                             )



    //                         })}
    //                         <option value="XS">XS</option>
    //                         <option value="S">S</option>
    //                         <option value="M">M</option>
    //                         <option value="L">L</option>
    //                         <option value="XL">XL</option>
    //                         <option value="XXL">XXL</option>
    //                     </select>
    //                     <a href="#" className="sizeGuide">Size Guide</a>
    //                 </div>

    //                 <div className="options__qty">
    //                     <label className="options__qty__lable" htmlFor="qty">Qty</label>
    //                     <input className="options__qty__input" type="number" id="qty" name="qty" defaultValue={1} min={1} contentEditable />
    //                 </div>
    //             </div>


    //             <div className="addBtn">
    //                 <p className="addBtn__text">ADD TO BAG</p>
    //                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyUlEQVR4nO3YrUpEURSG4QcVRLAojJOmDUybOuAV2r0Au8EueKLa/AmCzSRYLHoBWnaaLMhafA/stNMLZ5+z9iEiIiIiIv7XDZ5worhb/OAZxwqb4WXEPOJIYXO8jpg7HCpsgbcRM+FAYUu8j5hr7CtshY8Rc4U9ha3xOWIusauwDb5GzAV2FHaK7xFzvr05jY2K62x7JGgR0ubRqmLT4bCvO7x+Vx0+iMsOI8qiw9A47zDGz7pcrO67XHUnPHT4+RARERER4c/9AoxmkwPuIygtAAAAAElFTkSuQmCC"></img>
    //             </div>

    //         </div>
    //     </div>



    // </>

    // )


    const [image, setImage] = useState(images[0])
    const [dot , setDot] = useState("0")
    const [color, setColor] = useState(0)

    function select(item , index) {
        setImage(item)
        setDot(index)
    }

    function handleColor(index){
        setColor(index)
    }

    return (
        <>
            <MyHeader />
            <div className="containerProduct">
                <div className="photos">
                    <div className="photos__main">
                        <img src={image} alt="" />

                        <div className="photos__main__dots">
                            {images.map((item , index) =>{
                                return  <div className={(dot == index) && "currentDot"}></div>
                            })}
                        </div>
                    </div>

                    <div className="photos__picker">
                        {images.map((item , index) => {
                            return <div key={item} className="photos__picker__image" onClick={() => select(item , index)}>
                                <img src={item} className={(item == image) && "current"} alt="" />
                            </div>
                        })}
                    </div>
                </div>

                <div className="about">
                    <div className="about__title">
                        <p className="about__title__name">{name}</p>
                        <p className="about__title__price">{price}</p>
                    </div>

                    <div className="about__colorPicker">
                        {colors.map((item , index) =>{
                            return <div className={(index == color)&& "currentColor"} style={{backgroundColor: item}} onClick={() => handleColor(index)}></div>
                        })}
                    </div>

                    <div className="options">
                        <div className="options__size">
                            <label className="options__size__lable" htmlFor="size">size</label>
                            <select name="size" id="size">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                            <a href="#" className="sizeGuide">Size Guide</a>
                        </div>

                        <div className="options__qty">
                            <label className="options__qty__lable" htmlFor="qty">Qty</label>
                            <input className="options__qty__input" type="number" id="qty" name="qty" defaultValue={1} min={1} contentEditable />
                        </div>
                    </div>


                    <div className="addBtn">
                        <p className="addBtn__text">ADD TO BAG</p>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyUlEQVR4nO3YrUpEURSG4QcVRLAojJOmDUybOuAV2r0Au8EueKLa/AmCzSRYLHoBWnaaLMhafA/stNMLZ5+z9iEiIiIiIv7XDZ5worhb/OAZxwqb4WXEPOJIYXO8jpg7HCpsgbcRM+FAYUu8j5hr7CtshY8Rc4U9ha3xOWIusauwDb5GzAV2FHaK7xFzvr05jY2K62x7JGgR0ubRqmLT4bCvO7x+Vx0+iMsOI8qiw9A47zDGz7pcrO67XHUnPHT4+RARERER4c/9AoxmkwPuIygtAAAAAElFTkSuQmCC"></img>
                    </div>

                </div>
            </div>



        </>


    )
}

export default ProductPage;

