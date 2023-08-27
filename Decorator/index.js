/*
programme permettant de preparer des boissons
permet de repondre a des besoins aujourd'hui et dans le future
*/
//objet type
let Drink = function (size = "regular") {
    this.size =size;
}
 let Coffee = function(drink,flavor){
    this.drink = drink;
    this.flavor = flavor;
    this.price = drink.size  == "extra" ? "300 XFA" : " 200 XAF";
 }

 Coffee.prototype.toString = function () {
    console.log("la preparation de votre commande de cafe " + this.flavor + " et le prix est " + this.price)
 }
 let Cappuccino = function(drink,coffee){
    this.drink = drink;
    this.coffee = coffee;
    this.flavor =  "cocoa";
    this.price = drink.size  == "extra" ? "850 XFA" : " 500 XAF";

 }
 Cappuccino.prototype.toString = function () {
    console.log("la preparation de votre commande de cappucino  :  "+ this.flavor + " et le prix est " + this.price)
 }

 let Tea= function(drink,flavor){
    this.drink = drink;
    this.flavor = flavor;
    this.price = drink.size  == "extra" ? "200 XFA" : " 150 XAF";
 }

 Tea.prototype.toString = function () {
    console.log("la preparation de votre commande de tea  :  "+ this.flavor + " et le prix est " + this.price)
 }
  

 let drink = new Drink()
 let drink_extra = new Drink("extra")

 let coffee = new  Coffee(drink_extra, "arabica")  
 let tea = new Tea(drink, "green tea")
 let cappucino = new Cappuccino(drink_extra, coffee)


 coffee.toString()
 tea.toString()  
 cappucino.toString()
