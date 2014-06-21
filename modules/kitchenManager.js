var kitchenManager = (function () {
    function KitchenManager() {
        this.availableProducts = data.currentProducts;
    }

    function addProduct(product) {
        this.currentProducts.push(product);
    }

    function removeProduct(product) {
        
    }


    return {
        KitchenManager: KitchenManager
    }
}());