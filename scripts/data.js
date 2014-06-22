var data = (function() {
    var currentProducts = [
        new Kitchen.Product('Apple', 'images/products/apple.png', 'Fruits', 'pcs', 5),
        new Kitchen.Product('Banana', 'images/products/banana.png', 'Fruits', 'pcs', 3),
        new Kitchen.Product('Pork', 'images/products/pork.png', 'Meats', 'kg', 1.5, new Date(2014, 6, 27)),
        new Kitchen.Product('Salmon', 'images/products/salmon.png', 'Meats', 'kg', 0.5),
        new Kitchen.Product('Milk', 'images/products/milk.png', 'Dairy', 'kg', '1', new Date(2014, 6, 29)),
        new Kitchen.Product('Cheese', 'images/products/cheese.png', 'Dairy', 'kg', '2.5', new Date(2014, 6, 11)),
        new Kitchen.Product('Chicken', 'images/products/chicken.png', 'Meats', 'kg', 0.6),
        new Kitchen.Product('Tomato', 'images/products/tomato.png', 'Fruits', 'kg', 5, new Date(2014, 2, 21)),
        new Kitchen.Product('Carrot', 'images/products/carrot.png', 'Fruits', 'kg', 0.3, new Date(2014, 5, 5)),
        new Kitchen.Product('Turkey', 'images/products/turkey.png', 'Meats', 'kg', 2)
    ];

    var allProducts = [

    ];

    var currentLists = [];

    var currentRecipies = [
        new Kitchen.Recipe('Зелева салата с пилешко месо и ананас', 'images/recipies/pineapple-chicken-salad.jpg', 'Месото (200 г) се сварява в подсолена вода. Отцежда се и се накъсва. Зелето (100 г) се настъргва на ситното ренде. Половината от ананаса се нарязва на шайби, а другата – на кубчета. Месото, зелето и кубчетата ананас се смесват и овкусяват със сол, зехтин и лимонов сок. Салата се поднася върху салатен лист, декорирана с ананасови шайби и маслини.', [
            new Kitchen.Product('Chicken', 'images/products/chicken.png', 'Fruits', 'pcs', 5),
            new Kitchen.Product('Cabbage', '', 'Vegetables', 'kg', 0.1),
            new Kitchen.Product('Pineapple', 'images/products/ananas.png', 'Fruits', 'pcs', 1),
            new Kitchen.Product('Salt', 'images/products/salt.png', 'Seasonings'),
            new Kitchen.Product('Lemon Juice', '', 'Juices', 'table spoon', 2),
            new Kitchen.Product('Olive oil', '', 'Seasonings', 'table spoon', 1)
        ]),
        new Kitchen.Recipe('Салата с авокадо и бекон', 'images/recipies/avocado-bacon-salad.jpg', 'Зелената салата (1 връзка) се измива старателно и се нарязва на едри парчета или за по-лесно се накъсва. Поставя се в дълбока купа. Авокадото (1 бр) се обелва, семката му се отстранява и се нарязва на ивици. Прибавя се към зелената салата и двата продукта се овкусяват със сол, лимонов сок (2 с.л.) и зехтин (4 с.л.). Беконът (100 г) също се нарязва на ивици и заедно с белените слънчогледови семки (3 с.л.) се поръсва върху салатата.', [
            new Kitchen.Product('Green Salad', '', 'Vegetables', 'pcs', 1),
            new Kitchen.Product('Avocado', '', 'Fruits', 'pcs', 1),
            new Kitchen.Product('Bacon', 'images/products/bacon.png', 'Meat', 'kg', 0.1),
            new Kitchen.Product('Sunflower seeds', '', 'Nuts', 'table spoon', 3),
            new Kitchen.Product('Lemon Juice', '', 'Juices', 'table spoon', 2),
            new Kitchen.Product('Olive oil', '', 'Seasonings', 'table spoon', 4),
            new Kitchen.Product('Salt', 'images/products/salt.png', 'Seasonings', 'kg')
        ])
    ];

    var shoppingList = new Kitchen.ShoppingList();
    shoppingList.products = [
        new Kitchen.Product('Green Salad', '', 'Vegetables', 'pcs', 1),
        new Kitchen.Product('Avocado', '', 'Fruits', 'pcs', 1),
        new Kitchen.Product('Bacon', '', 'Meats', 'kg', 0.1),
        new Kitchen.Product('Sunflower seeds', '', 'Nuts', 'table spoon', 3),
        new Kitchen.Product('Lemon Juice', '', 'Juices', 'table spoon', 2),
        new Kitchen.Product('Olive oil', '', 'Seasonings', 'table spoon', 4),
        new Kitchen.Product('Salt', '', 'Seasonings', 'kg')
    ];

    return {
        currentProducts: currentProducts,
        shoppingList: shoppingList,
        currentRecipes: currentRecipies
    }
}());
