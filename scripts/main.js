var globalManager = (function () {
    var kitchenManager = new kitchen.KitchenManager();
    var recipesManager = new recipes.RecipesManager();
    var shoppingListManager = new shoppingList.ShoppingListManager();

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


