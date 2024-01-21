let Products = JSON.parse(localStorage.getItem("Products")) || [
    {
        "id":1,
        "images":["/images/jacketProduct.jpg" , "/images/jacket1.jpg", "/images/jacket2.jpg"],
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":2,
        "images":[ "/images/hoodie.jpg"],
        "name": "hoodie",
        "price": "15$",
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": true
    },
    {
        "id":3,
        "images": ["/images/jacketProduct.jpg" , "/images/jacket1.jpg", "/images/jacket2.jpg"],
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": false
    },
    {
        "id":4,
        "images": ["/images/jacketProduct.jpg" , "/images/jacket1.jpg", "/images/jacket2.jpg"],
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": true,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":5,
        "images": ["/images/jacketProduct.jpg" , "/images/jacket1.jpg", "/images/jacket2.jpg"],
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": false
    },
    {
        "id":6,
        "images": ["/images/jacketProduct.jpg" , "/images/jacket1.jpg", "/images/jacket2.jpg"],
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":7,
        "images":[ "/images/hoodie.jpg"],
        "name": "hoodie",
        "price": "15$",
        "isLiked": true,
        "hasGift": true,
        "hasFreeShipping": true
    }
]


export default Products