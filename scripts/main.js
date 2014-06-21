(function() {
    var kitchenManager = new kitchenManager.KitchenManager();
    var productsListManager = new shoppingListManager.ShoppingListManager();
    var recipesManager = new recipesManager.RecipesManager();

    initializeData(kitchenManager, productsListManager, recipesManager);


    function initializeData(kitchenManager, productsListManager, recipesManager) {
        kitchenManager.availableProducts = data.currentProducts;
        productsListManager.currentList = data.shoppingList;
        recipesManager.recipiesList = data.currentRecipies;
    }
}());
