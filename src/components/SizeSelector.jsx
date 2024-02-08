

function SizeSelector({onChange}) {
    return (
        <select name="size" id="size" onChange={onChange}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
    )
}

export default SizeSelector;