let Products = JSON.parse(localStorage.getItem("Products")) || [
    {
        "id":1,
        "images":["/images/jacketProduct.jpg" , "/images/jacket1.jpg", "/images/jacket2.jpg"],
        "name": "jeans jacket",
        "price": "30$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":2,
        "images":[ "/images/hoodie.jpg"],
        "name": "hoodie",
        "price": "25$",
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": true
    },
    {
        "id":3,
        "images": ["/images/sweater1.jpg" ,"/images/sweater2.jpg"],
        "name": "sweater",
        "price": "15$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": false
    },
    {
        "id":4,
        "images": ["/images/cropLongSleeve1.jpg" , "/images/cropLongSleeve2.jpg"],
        "name": "long sleeve crop",
        "price": "17$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":5,
        "images": ["/images/crop1.jpg" , "/images/crop2.jpg", "/images/crop3.jpg"],
        "name": "crop t-shirt",
        "price": "23$",
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": false
    },
    {
        "id":6,
        "images": ["/images/jeanJacket1.jpg" , "/images/jeanJacket2.jpg"],
        "name": "jeans jacket",
        "price": "25$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":7,
        "images":[ "/images/knittedTurtlene1.jpg", "/images/knittedTurtlene2.jpg","/images/knittedTurtlene3.jpg"],
        "name": "knitted turtlene",
        "price": "18$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":8,
        "images":[ "/images/textHoodie1.jpg", "/images/textHoodie2.jpg"],
        "name": "hoodie",
        "price": "20$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":9,
        "images":[ "/images/greenHoodie1.jpg", "/images/greenHoodie2.jpg","/images/greenHoodie3.jpg" , "/images/greenHoodie4.jpg"],
        "name": "hoodie",
        "price": "21$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":10,
        "images":[ "/images/MSweatshirts1.jpg", "/images/MSweatshirts2.jpg"],
        "name": "sweatshirts",
        "price": "19$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":11,
        "images":[ "/images/H&MHoodie2.jpg", "/images/H&MHoodie1.jpg"],
        "name": "hoodie",
        "price": "30$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":12,
        "images":[ "/images/blueHoodie.jpg"],
        "name": "hoodie",
        "price": "30$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":13,
        "images":[ "/images/tshirt.jpg"],
        "name": "t-shirt",
        "price": "10$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":14,
        "images":[ "/images/TTshirt1.jpg", "/images/TTshirt2.jpg"],
        "name": "t-shirt",
        "price": "13$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    },
    {
        "id":15,
        "images":[ "/images/t-shirt1.jpg", "/images/t-shirt2.jpg"],
        "name": "t-shirt",
        "price": "13$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true
    }
]


export default Products