// write a function that returns a new array containing the names of all people who are 18 years old or older

function personName(arr){

    //created an empty array
    var result=[];
    //looping through the array
    for(i=0;i< arr.length;i++){
        //passing condition of >=18 years
        if(arr[i].age >= 18){

            result.push(arr[i].name)
        }
    }
    return result;
    

}
const people=[
    {name:"Alice",age:17},
    {name:"Eunice",age:22},
    {name:"Charlie",age:14},
    {name:"Max",age:19},

]
console.log(personName(people))

//The function should return an object that groups the products by their categories, 
//with the category names as keys and the arrays of products as values.
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
  function category(array){
    return products.reduce((acc,product) => {
        if(!acc[product.category]){
            acc[product.category]=[]
        }
        acc[product.category].push(product);
        return acc


    })

  }
  console.log(category(products));

//function that returns a new array containing the names of all students 
//whose average score is greater than or equal to 85.

const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];

  function highScoringStudents(students) {
     return students.filter(student => {
      const average = student.scores.reduce((a, b) => a + b, ) / student.scores.length;
      return average >= 85;
    }).map(student => student.name);
  }
  console.log(highScoringStudents(students));

//age method should return the current age of the car based on the current year
//and the car's year property
  const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
   function getAgeMethod(car){
    car.age = function(){
    const newCurrentYear= new Date().getFullYear();
    return newCurrentYear - (car.year)


    }
        return car
   }
    const updated = getAgeMethod(car)
   console.log(updated.age());