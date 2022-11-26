import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,incrementBy, decrementBy, } from "./components/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(10))}>Increment 10</button>
      <button onClick={() => dispatch(decrementBy(10))}>Decrement 10</button>
    </div>
  );
}

export default App;
