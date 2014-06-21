var Kitchen = (function() {
    var MAX_RECIPE_RATING = 5;

    function Product(name, image, type, unit, quantity, expirationDate) {
        this.name = name;
        this.image = image;
        this.type = type;
        this.unit = unit;
        this.quantity = quantity;
        this.expirationDate = expirationDate || GlobalConstants.DEFAULT_EXPIRATION_DATES[type];
        this.purchaseDate = new Date();
    }

    function Recipe(name, image, description, products) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.products = products;
        var ratings = [];

        this.voteUp = function() {
            ratings[0] += 1;
        }

        this.voteDown = function() {
            ratings[1] += 1;
        }

        this.getRating = function() {
            var upRatingCoefficient = ratings[0] / ratings.length;

            return upRatingCoefficient * MAX_RECIPE_RATING;
        }
    }

    function ShoppingList() {
        this.products = [];
        this.created = new Date();
        this.isActive = true;

        this.addProduct = function(product) {
            this.products.push(product);
        }
    }

    return {
        Product: Product,
        Recipe: Recipe,
        ShoppingList: ShoppingList
    }
}());
