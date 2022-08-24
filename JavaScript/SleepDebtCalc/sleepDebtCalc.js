let getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 10;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 5;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 10;
        break;
      default:
        return 'Invalid';
        break;
    }
  };
  // console.log(getSleepHours('sunday'))
  
  const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
   const getIdealSleepHours = () => {
     let idealHours = 8;
     return idealHours * 7;
   }
  
  //console.log(getActualSleepHours());
  //console.log(getIdealSleepHours());
  
  let calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep this week!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got' + ' '+(actualSleepHours- idealSleepHours)+ ' ' + 'hours more sleep.');
    } else if (actualSleepHours < idealSleepHours){
      console.log('You need' + ' '+(idealSleepHours - actualSleepHours)+' '+ 'hours of sleep.');
    }
  };
  
  calculateSleepDebt();
    