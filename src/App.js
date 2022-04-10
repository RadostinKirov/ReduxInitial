import './App.css';
import store from './store';



function App() {

  const onAddBookClickHandler = (e) => {
    e.preventDefault();
    store.dispatch(
      {
        type: "bookAdded",
        payload: {
          description: `book title`
        }
      }
    )
    console.log(store.getState());
  }

  const onDeleteClickHandler = (e) => {
    e.preventDefault();
    store.dispatch(
      {
        type: "delete",
        payload: {
          id: 1
        }
      }
    )
    console.log(store.getState());
  }


  return (

    <div className="buttons">
      <h1>Title</h1>
      <button onClick={onAddBookClickHandler} className="add">Add Book</button>
      <button className="mark-as-read">Mark as read</button>
      <button onClick={onDeleteClickHandler} className="delete">Delete</button>
    </div>

  );
}

export default App;
