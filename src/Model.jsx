let Products = JSON.parse(localStorage.getItem("Products")) || [
    {
        "id": 1,
        "images": ["/images/jacketProduct.jpg", "/images/jacket1.jpg", "/images/jacket2.jpg"],
        "name": "jeans jacket",
        "price": "30$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#b5bac4", "#779dc0"]
    },
    {
        "id": 2,
        "images": ["/images/hoodie.jpg"],
        "name": "hoodie",
        "price": "25$",
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": true,
        "colors": ["#7a797b"]

    },
    {
        "id": 3,
        "images": ["/images/sweater1.jpg", "/images/sweater2.jpg"],
        "name": "sweater",
        "price": "15$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": false,
        "colors": ["#52ae5b", "#adabac"]

    },
    {
        "id": 4,
        "images": ["/images/cropLongSleeve1.jpg", "/images/cropLongSleeve2.jpg"],
        "name": "long sleeve crop",
        "price": "17$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#d9d3cc", "#646663"]

    },
    {
        "id": 5,
        "images": ["/images/crop1.jpg", "/images/crop2.jpg", "/images/crop3.jpg"],
        "name": "crop t-shirt",
        "price": "23$",
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": false,
        "colors": ["#e86339", "#366e50"]

    },
    {
        "id": 6,
        "images": ["/images/jeanJacket1.jpg", "/images/jeanJacket2.jpg"],
        "name": "jeans jacket",
        "price": "25$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#2b4369"]

    },
    {
        "id": 7,
        "images": ["/images/knittedTurtlene1.jpg", "/images/knittedTurtlene2.jpg", "/images/knittedTurtlene3.jpg"],
        "name": "knitted turtlene",
        "price": "18$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#863f42", "#5b5c5a" , "#fbf5eb"]

    },
    {
        "id": 8,
        "images": ["/images/textHoodie1.jpg", "/images/textHoodie2.jpg"],
        "name": "hoodie",
        "price": "20$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#df5196", "#699bc6"]

    },
    {
        "id": 9,
        "images": ["/images/greenHoodie1.jpg", "/images/greenHoodie2.jpg", "/images/greenHoodie3.jpg", "/images/greenHoodie4.jpg"],
        "name": "hoodie",
        "price": "21$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#c5c7d600", "#779dc0"]

    },
    {
        "id": 10,
        "images": ["/images/MSweatshirts1.jpg", "/images/MSweatshirts2.jpg"],
        "name": "sweatshirts",
        "price": "19$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#aeafb2"]

    },
    {
        "id": 11,
        "images": ["/images/H&MHoodie2.jpg", "/images/H&MHoodie1.jpg"],
        "name": "hoodie",
        "price": "30$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#e9e8dc"]

    },
    {
        "id": 12,
        "images": ["/images/blueHoodie.jpg"],
        "name": "hoodie",
        "price": "30$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#b7b5af"]

    },
    {
        "id": 13,
        "images": ["/images/tshirt.jpg"],
        "name": "t-shirt",
        "price": "10$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#3a2a2a"]

    },
    {
        "id": 14,
        "images": ["/images/TTshirt1.jpg", "/images/TTshirt2.jpg"],
        "name": "t-shirt",
        "price": "13$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#000000", "#e7e7e7"]

    },
    {
        "id": 15,
        "images": ["/images/t-shirt1.jpg", "/images/t-shirt2.jpg"],
        "name": "t-shirt",
        "price": "13$",
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#e7e7e7", "#f1efe8"]

    }
]


export default Products