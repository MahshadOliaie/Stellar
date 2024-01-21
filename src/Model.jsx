let Products = JSON.parse(localStorage.getItem("Products")) || [
    {
        "id":1,
        "image": "/public/images/jacketProduct.jpg",
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":2,
        "image": "/public/images/hoodie.jpg",
        "name": "hoodie",
        "price": "15$",
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": true
    },
    {
        "id":3,
        "image": "/public/images/jacketProduct.jpg",
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": false
    },
    {
        "id":4,
        "image": "/public/images/jacketProduct.jpg",
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": true,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":5,
        "image": "/public/images/jacketProduct.jpg",
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": false
    },
    {
        "id":6,
        "image": "/public/images/jacketProduct.jpg",
        "name": "jeans jacket",
        "price": "23$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":7,
        "image": "/public/images/hoodie.jpg",
        "name": "hoodie",
        "price": "15$",
        "isLiked": true,
        "hasGift": true,
        "hasFreeShipping": true
    }
]


export default Products