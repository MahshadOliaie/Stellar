

function Category(Props) {
    return (

        <div className="category" id={Props.id}>
            <div className="category__inside" id={Props.insideId}>
                <p className="category__inside__title">{Props.title}</p>
            </div>

        </div>

    )
}

export default Category;