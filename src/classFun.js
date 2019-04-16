CoreFun.PrintHeading('classFun.js');

(function () {

    class Dog {
        constructor(name) {
            this.name = name;
        }
        bark() {
            CoreFun.Print('~~~~~~~~~~~~~~~~~~~~~~ruff~~~~~~~~~~~~~~~~~~~~~~');
        }
    }

    class Park {
        constructor() {
            this.parkName = 'my dog park';
            this.dogs = [
                new Dog("roxie")
            ];
        }
        addNew(dog) {
            this.dogs.push(dog);
        }
    }

    var spotDog = new Dog("spot");
    CoreFun.Print(spotDog);
    spotDog.bark();

    CoreFun.PrintLine();

    var park = new Park();
    park.addNew(spotDog);
    CoreFun.Print(park);

})();