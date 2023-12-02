
import CategoryPage from "./CategoryPage";
import React from 'react'
import ReactDOM from 'react-dom/client'



function Category(Props) {
    return (

        <div className="category" id={Props.id} onClick={renderCategoryPage}>
            <div className="category__inside" id={Props.insideId}>
                <p className="category__inside__title">{Props.title}</p>
            </div>
        </div>

    )
}

export default Category;


function renderCategoryPage() {
    topFunction();
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <CategoryPage />
        </React.StrictMode>,
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}