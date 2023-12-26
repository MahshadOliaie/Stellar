import React from 'react'
import { useNavigate } from "react-router-dom";


function Category(Props) {
    const Navigate = useNavigate()
    return (
        <div onClick={Props.clickevent} className="category" id={Props.id} >
            <div className="category__inside" id={Props.insideId}>
                <p className="category__inside__title">{Props.title}</p>
            </div>
        </div>
    )
}

export default Category;

