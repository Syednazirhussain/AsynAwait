// Prototype Advantages

// No matter how many objects you created, function are loaded once in a memory
// Allow you to override function if required


function Employee(name) {
    this.name = name;
}

Employee.prototype.getName = function() {
    return this.name;
}

var e1 = new Employee('Sara');
var e2 = new Employee('Areeka');

document.write('1st Love '+ e1.getName() + '</br>');
document.write('2nd Love '+ e2.getName() + '</br>');