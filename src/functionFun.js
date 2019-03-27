
CoreFun.PrintHeading('functionFun.js');

(function () {
    var arrowFunction = (text) => {
        CoreFun.Print(text);
    };
    arrowFunction('arrow function works');

    var nonDefinedArguments = function () {
        var output = '';
        for (var i = 0; i < arguments.length; i++) {
            output += arguments[i] + ' ';
        }
        CoreFun.Print(output);
    };
    nonDefinedArguments(1, 'test', 3, { id: 1 });

    var restParameters = function (...someArgs) {
        CoreFun.Print(someArgs.join(' '));
    };
    restParameters(1, 2, "test", 4, { id: 1 });

    CoreFun.PrintLine();
    function Dog(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
    }
    Dog.prototype.bark = function () {
        return "ruff";
    }
    Dog.barkAgain = function () {
        return "ruff2";
    }
    var dog = new Dog('Spot', 'Johnson');
    CoreFun.Print(dog);
    dog.age = 3;
    CoreFun.Print(dog);
    dog.humanAge = function () {
        return this.age * 7;
    };
    CoreFun.Print(dog.humanAge);
    CoreFun.Print(dog.humanAge());
    CoreFun.Print(dog.bark());
    //CoreFun.Print(dog.barkAgain());EXCEPTION Object doesn't support property or method 'barkAgain'
    CoreFun.Print(Dog.barkAgain());

    CoreFun.PrintLine();

})();