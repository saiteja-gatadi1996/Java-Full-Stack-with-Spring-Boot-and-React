import React, {Component} from 'react';
// import FirstComponent from './components/learning-examples/FirstComponent.jsx'
// import SecondComponent from './components/learning-examples/SecondComponent.jsx'
// import ThirdComponent from './components/learning-examples/ThirdComponent.jsx'
import TodoApp from './components/todo/TodoApp'
import './bootstrap.css';
import './App.css';


class App extends Component{
  render(){
  return (
    <div className="App">
     {/* <Counter/> */}
     <TodoApp/>
    </div>
  );
}
}

export default App;

//Added new one

// class LearningComponents extends Component{
// render(){
//   return (
//     <div className="LearningComponents">
//     <FirstComponent></FirstComponent>
//     <SecondComponent></SecondComponent>
//     <ThirdComponent></ThirdComponent>
//     </div>
//   );
// }
// }



//Code for logo
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }