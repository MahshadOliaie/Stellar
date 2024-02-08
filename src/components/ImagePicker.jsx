

function ImagePicker({onClick , item , image , index}) {
    return (
        <div key={item} className="photos__picker__image" onClick={() => onClick(item , index)}>
            <img src={item} className={(item == image) && "current"} alt="" />
        </div>
    )
}

export default ImagePicker;