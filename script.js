'use strict' ;

class GameMachine{
  constructor(number){
    this.number = number;
  }
  
  get money(){
    return this.number;
  }
  
  takeMoney(number){
    
    if((this.number - number) < 0){
      console.log('It is not enough money in the GameMachine');
    }else{
      this.number -= number;
    }
  }
  
  putMoney(number){
    this.number += number;
  }
  
  Play(number){
    this.number += number;
    var min = 100;
    var max = 999;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    var digits = (""+random).split("");
    digits.sort();
    if(digits[0]==digits[1] && digits[1]==digits[2]){
      console.log("Congratulations, you've won jackpot!");
      
      if((this.number - 3*number) < 0){
      console.log('Sorry, it is not enough money in the GameMachine');
      }else{
      this.number -= 3*number;
      return 3*number;
      }
    }else if(digits[0]==digits[1] || digits[1]==digits[2] || digits[0]==digits[2]){
      console.log("Congratulations, you've won!");
      
      if((this.number - 2*number) < 0){
      console.log('Sorry, it is not enough money in the GameMachine');
      }else{
      this.number -= 2*number;
      return 2*number;
      }
    }
  }

}

class User{
  constructor(name, money){
    this.name = name;
    this.money = money;
  }
  play(money){
    
  }
}

class SuperAdmin extends User{

  createCasino(name){
    return new Casino(name);
  }
  
  createGameMachine(money){
    return new GameMachine(money);
  }
  
  takeMoney(number){
     
  }
  
  putMoney(number){
    
  }
  
  deleteGameMachine(machine){
    
  }
}

class Casino{
  constructor(name){
    this.name = name;
  }
  
  getMoney(){
    return;
  }
  
  getMachineCount(){
    return;
  }
}
