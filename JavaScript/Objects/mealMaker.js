let menu = {
    _meal: '',
    set meal(mealToCheck){
      if (typeof mealToCheck === 'string'){
        menu._meal = mealToCheck;
      } else {
        return 'You must assign a string to meal';
      }
    },
  
    _price: 0,
    set price(priceToCheck){
      if (typeof priceToCheck === 'number'){
        menu._price = priceToCheck;
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's special is ${menu._meal} for $${menu._price}.`
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  };
  menu.todaysSpecial;
  
  menu._meal = 'Pesto Alfredo';
  menu._price = 23.33;
  console.log(menu.todaysSpecial);
  
  