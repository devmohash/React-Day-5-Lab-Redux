import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Store/Slicers/counterSlicer";

const Counter = () => {
  const counterGlobalState = useSelector((state) => state.count.value);
  console.log(counterGlobalState);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    console.log("hello ++++");
    dispatch(increment());
  };
  const handleDecrement = () => {
    console.log("hello ------");
    dispatch(decrement());
  };

  return (
    <div className="d-flex align-items-center">
      <button
        role="button"
        className="btn btn-success me-4"
        onClick={handleIncrement}
      >
        +
      </button>
      <h5 className="m-0">{counterGlobalState}</h5>
      <button
        className="btn btn-danger ms-4"
        role="button"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
