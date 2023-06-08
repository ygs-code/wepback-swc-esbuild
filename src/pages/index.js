const a = (target) => {
  class B extends target {
    getName() {
       return  this.name
    }
  }

  return B;
};

@a
class A {
  constructor(name) {
    this.name = name; 
  }
}

let $a = new A('姚观寿');

 

console.log('$a ==',$a.getName() )
debugger