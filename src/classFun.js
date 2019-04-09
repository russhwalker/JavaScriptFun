CoreFun.PrintHeading('classFun.js');

(function () {

    class Dog {
        constructor(name) {
            this.name = name;
        }
    }

    class Park {
        constructor() {
            this.parkName = 'my dog park';
            this.dogs = [
                new Dog("fido"),
                new Dog("roxie")
            ];
        }
        addNew(dog) {
            this.dogs.push(dog);
        }
    }

    var park = new Park();
    CoreFun.Print(park);

    park.addNew(new Dog("spot"));
    CoreFun.Print(park);
})();