var shoppingListManager = function () {

    var historyLists = [];
    var currentLists = [];

    function ShoppingListManager(initializingList) {
        this.currentLists.push(initializingList);
    }

    function showHistoryLists(){
        // TODO: implement showing of lists
    }

    function showCurrentLists(){
        // TODO: implement showing of current lists
    }

    function getCurrentLists(){
        return currentLists;
    }

    function getHistory(){
        return historyLists;
    }

    function updateLists(){
        moveInnActivesToHistory();
    }

    function moveInnActivesToHistory(){
        for (var i = 0; i < currentLists.length; i+=1) {
            if(!currentLists[i].isActive){
                historyLists.push(currentLists[i]);
                currentLists.splice(i,1);
            }
        }
    }

    function changeListState(list){
        list.isActive = false;
        updateLists();
    }

    function addShoppingList(list){
        currentLists.push(list);
    }

    return {
        ChangeListState : changeListState(),
        ShowHistory : showHistoryLists(),
        ShowCurrent : showCurrentLists(),
        GetCurrentLists: getCurrentLists(),
        GetHistory: getHistory()
    }
};
