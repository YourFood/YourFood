var globalManager = (function () {
    var kitchenManager = new kitchenManager.KitchenManager();
    var recipesManager = new recipesManager.RecipesManager();
    var shoppingListManager = new shoppingListManager.ShoppingListManager();

    initializeData();

    function initializeData() {
        kitchenManager.availableProducts = data.currentProducts;
        recipesManager.recipiesList = data.currentRecipes;
        shoppingListManager.currentList = data.shoppingList;
    }

    return {
        kitchenManager: kitchenManager,
        recipesManager: recipesManager,
        shoppingListManager: shoppingListManager
    }
}());


