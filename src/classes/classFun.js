CoreFun.PrintHeading('classFun.js');

(function () {

    class Item {
        constructor() {
            this.cost = 19.99;
        }
    }

    class Order{
        constructor(){
            this.someText = 'testtest';
            this.items = new Item[0];
        }
    }

    let item = new Item();
    item.cost++;
    CoreFun.Print(item);

    var order = new Order();
    CoreFun.Print(order);
    
})();