

function QtySelector({onChange , Qty}){
    return(
        <input className="options__qty__input" type="number" id="qty" name="qty" value={Qty} min={1} contentEditable  onChange={onChange}/>
    )
}

export default QtySelector;