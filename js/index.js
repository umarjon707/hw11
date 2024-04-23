class wild_animals {   
constructor(animal,specie){
this.animal=animal
this.specie=specie
}

eat() {
    return this.animal + ' get your prey'
}
run() {
    return this.specie +' eating your prey '
}
    }
const eagle= new wild_animals(' lion' , ' animal')
 const bear= new wild_animals(' lion' , ' animal')
 const gepard= new wild_animals(' lion' , ' animal')
 const wolf =  new wild_animals(' lion' , ' animal')
 const snake = new wild_animals(' lion' , ' animal')
 const lion = new wild_animals(' lion' , ' animal')
const tiger = new wild_animals(' tiger');
  console.log(
    eagle.eat(),bear.eat(),gepard.eat(),wolf.eat(),snake.eat(),lion.eat()
    );
  console.log(
    eagle.run(),bear.run(),gepard.run(),wolf.run(),snake.run() ,tiger.eat()
  );
    

let domestic_anmilas = new wild_animals()
domestic_anmilas.forEach((animal)=>{
    const house_animal = new wild_animals(animal.eat())
    console.log(house_animal.eat());
})



