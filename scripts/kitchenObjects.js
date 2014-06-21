var Kitchen = (function() {
    var MAX_RECIPE_RATING = 5;

    function Product(name, image, type, unit, quantity, expirationDate) {
        this.name = name;
        this.image = 'images/products/coffee_pot.png';
        this.type = type;
        this.unit = unit;
        this.quantity = quantity;
        this.purchaseDate = new Date();
        if(expirationDate) {
            this.expirationDate = formatExpirationDate(expirationDate);
        }
        else {
            this.expirationDate = expirationDate || getExpirationDate(this.purchaseDate, GlobalConstants.DEFAULT_EXPIRATION_DATES[type]);
        }
    }

    function Recipe(name, image, description, products) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.products = products;
        var ratings = [];

        this.voteUp = function() {s
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

    function getExpirationDate(currentDate, days) {
        var date = new Date(currentDate);
        date.setDate(currentDate.getDate() + days);
        var formattedExpirationDate = formatExpirationDate(date);

        return formattedExpirationDate;
    }

    function formatExpirationDate(expirationDate) {
        var day = expirationDate.getDate();
        var month = GlobalConstants.MONTHS_NAMES[expirationDate.getMonth()];
        var formattedDate = day + ' ' + month;

        return formattedDate;
    }

    return {
        Product: Product,
        Recipe: Recipe,
        ShoppingList: ShoppingList
    }
}());
