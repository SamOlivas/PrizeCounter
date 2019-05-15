const data = {
    customers: {
      Moe: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      },
      Larry: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      },
      Curly: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      }
    },
    prizes: {
      Foo: 1,
      Bar: 3,
      Bazz: 5
    }
  };


const customerArray = Object.keys(data.customers).map(function (key){
  return [key , data.customers[key]];
})
const prizeArray = Object.keys(data.prizes).map(function (key){
  return [key, data.prizes[key]];
})



console.log(customerArray)
console.log(prizeArray)

