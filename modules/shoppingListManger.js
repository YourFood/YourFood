var shoppingList = (function () {
    function ShoppingListManager() {
        this.currentList = [];
        this.historyLists = [];
    }

    return {
        ShoppingListManager: ShoppingListManager
    }
}());