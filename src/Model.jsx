const Products = JSON.parse(localStorage.getItem("Products")) || [
    {
        "id": 1,
        "images": ["/images/jacketProduct.jpg", "/images/jacket1.jpg", "/images/jacket2.jpg"],
        "name": "jeans jacket",
        "category":["unisex"],
        "price": 30,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#b5bac4", "#779dc0"]
    },
    {
        "id": 2,
        "images": ["/images/hoodie.jpg"],
        "name": "hoodie",
        "category":["unisex"],
        "price": 25,
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": true,
        "colors": ["#7a797b"]

    },
    {
        "id": 3,
        "images": ["/images/sweater1.jpg", "/images/sweater2.jpg"],
        "name": "sweaters",
        "category":["women"],
        "price": 15,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": false,
        "colors": ["#52ae5b", "#adabac"]

    },
    {
        "id": 4,
        "images": ["/images/cropLongSleeve1.jpg", "/images/cropLongSleeve2.jpg"],
        "name": "long sleeve crop",
        "category":["women"],
        "price": 17,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#d9d3cc", "#646663"]

    },
    {
        "id": 5,
        "images": ["/images/crop1.jpg", "/images/crop2.jpg", "/images/crop3.jpg"],
        "name": "crop t-shirt",
        "category":["women"],
        "price": 23,
        "isLiked": false,
        "hasGift": false,
        "hasFreeShipping": false,
        "colors": ["#e86339", "#366e50"]

    },
    {
        "id": 6,
        "images": ["/images/jeanJacket1.jpg", "/images/jeanJacket2.jpg"],
        "name": "jeans jacket",
        "category":["unisex"],
        "price": 25,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#2b4369"]

    },
    {
        "id": 7,
        "images": ["/images/knittedTurtlene1.jpg", "/images/knittedTurtlene2.jpg", "/images/knittedTurtlene3.jpg"],
        "name": "knitted turtlene",
        "category":["women"],
        "price": 18,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#863f42", "#5b5c5a" , "#fbf5eb"]

    },
    {
        "id": 8,
        "images": ["/images/textHoodie1.jpg", "/images/textHoodie2.jpg"],
        "name": "hoodie",
        "category":["unisex"],
        "price": 20,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#df5196", "#699bc6"]

    },
    {
        "id": 9,
        "images": ["/images/greenHoodie1.jpg", "/images/greenHoodie2.jpg", "/images/greenHoodie3.jpg", "/images/greenHoodie4.jpg"],
        "name": "hoodie",
        "category":["unisex"],
        "price": 21,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#aeaeac", "#c3aa8a"]

    },
    {
        "id": 10,
        "images": ["/images/MSweatshirts1.jpg", "/images/MSweatshirts2.jpg"],
        "name": "sweatshirts",
        "category":["unisex"],
        "price": 19,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#aeafb2"]

    },
    {
        "id": 11,
        "images": ["/images/H&MHoodie2.jpg", "/images/H&MHoodie1.jpg"],
        "name": "hoodie",
        "category":["unisex"],
        "price": 30,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#e9e8dc"]

    },
    {
        "id": 12,
        "images": ["/images/blueHoodie.jpg"],
        "name": "hoodie",
        "category":["unisex"],
        "price": 30,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#b7b5af"]

    },
    {
        "id": 13,
        "images": ["/images/tshirt.jpg"],
        "name": "t-shirt",
        "category":["unisex"],
        "price": 10,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#3a2a2a"]

    },
    {
        "id": 14,
        "images": ["/images/TTshirt1.jpg", "/images/TTshirt2.jpg"],
        "name": "t-shirt",
        "category":["unisex"],
        "price": 13,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#000000", "#e7e7e7"]

    },
    {
        "id": 15,
        "images": ["/images/t-shirt1.jpg", "/images/t-shirt2.jpg"],
        "name": "t-shirt",
        "category":["unisex"],
        "price": 13,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#e7e7e7", "#f1efe8"]

    },
    {
        "id": 16,
        "images": ["/images/KnittedSweaters1.jpg", "/images/KnittedSweaters2.jpg", "/images/KnittedSweaters3.jpg"],
        "name": "knitted sweaters",
        "category":["men"],
        "price": 20,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#A48F6E", "#726F65"]

    },
    {
        "id": 17,
        "images": ["/images/DropShoulderSweater1.jpg", "/images/DropShoulderSweater2.jpg"],
        "name": "Drop Shoulder Sweaters",
        "category":["men"],
        "price": 22,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#DFE1E2", "#3F2E29"]

    },
    {
        "id": 18,
        "images": ["/images/shirt1.jpg", "/images/shirt2.jpg"],
        "name": "shirt",
        "category":["men"],
        "price": 13,
        "isLiked": false,
        "hasGift": true,
        "hasFreeShipping": true,
        "colors": ["#71695C", "#8593A4"]

    }
]


export default Products