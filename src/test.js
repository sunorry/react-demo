// import React from 'react'

// function FancyBorder (props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   )
// }

// function WelcomeDialog () {
//   return (
//     <FancyBorder color='blue'>
//       <h1 className='Dialog-title'>Welcome</h1>
//       <p>Thank you for visiting our spacecraft!</p>
//     </FancyBorder>
//   )
// }

// class TheChild extends React.Component {
//     myFunc() {
//         return 'hello'
//     }
// }

// class TheParent extends React.Component {
//     render() {
//         return (
//             <TheChild ref={(foo) => { this.foo = foo }} />
//         );
//     }

//     componentDidMount() {
//         const x = this.foo.myFunc() // x is 'hello'
//     }
// }
const data = {
  a: 1,
  add() {
    debugger
    this.a++
  }
}

export default data