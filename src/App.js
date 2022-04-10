import './App.css';
import store from './store';

console.log(store);

function App() {
  return (
    
      <div className="buttons">
        <h1>Title</h1>
        <button className="add">Add Book</button>
        <button className="mark-as-read">Mark as read</button>
        <button className="delete">Delete</button>
      </div>
    
  );
}

export default App;
