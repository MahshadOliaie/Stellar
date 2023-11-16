

function Category(Props){
    return(
    <div className="category" id={Props.id}>
        <p className="category__title">{Props.title}</p>
    </div>
    )
}

export default Category;