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
        Bazz: 1
      }
    },
    prizes: {
      Foo: 1,
      Bar: 3,
      Bazz: 5
    }
  };

// HTML section object
const prizeSec = document.querySelector('#sec1')
const customerSec = document.querySelector('#sec2')

const state = {
  counter: 0,
}

// Maps global data object to separate cus & prize arrays
const customerState = Object.keys(data.customers).map(function (key){
  return [key , data.customers[key]];
})
const prizeState = Object.keys(data.prizes).map(function (key){
  return [key, data.prizes[key]];
})
console.log(data.customers.Moe)
console.log(prizeState)
console.log(prizeState[0])
let prize1 = prizeState[0]
console.log(prize1)
// Turn data into HTML elements to e displayed
const counterTemplate = (data) => {
  Object.keys(data.prizes).map( function (key) {
    `
    <div>
    <h3> Prize Counter </h3>
      <ul>
        <li> ${ key } </li>
      </ul>
    </div>
    `
  })
}

// const customerTemplate = (prizeState) => `
//   <div>
//     ${ datat [1] }
//     <br />
//     <button> - </button>
//     <button> + </button>
//   </div>
// `;

// Change inner html
const render = () =>  {
  prizeSec.innerHTML = counterTemplate(data)
//  customerSec.innerHTML = customerTemplate()
}
render()

//Event listeners
sec1.addEventListener('click', (ev) => {
  console.log('click')
  console.log(ev.target)
});
sec2.addEventListener('click', (ev) => {
  console.log('click')
  console.log(ev.target)
});

