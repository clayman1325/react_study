import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store';

const Counter = () => {
  const counter  = useSelector(state => state.counter.value);
  const show     = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    console.log("jum")
    dispatch(counterActions.toogleCounter)
  };
  const incrementHandler = () => {
    console.log("increment")
    dispatch(counterActions.increment)
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement)
  };
  const increasetHandler = () => {
    dispatch(counterActions.increase(10))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increasetHandler}>Increase by </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
