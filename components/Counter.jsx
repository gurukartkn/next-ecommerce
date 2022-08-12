const Counter = ({ count, setCount }) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="flex gap-3 items-center w-36">
      <button
        className="px-2 py-1 text-sm font-semibold text-gray-700 border-2 border-black disabled:border-gray-300 rounded-md"
        onClick={decrement}
        disabled={count <= 1}
      >
        -
      </button>
      <div className="text-center text-sm font-semibold text-gray-700">
        {count}
      </div>
      <button
        className="px-2 py-1 text-sm font-semibold text-gray-700 border-2 border-black disabled:border-gray-300 rounded-md"
        onClick={increment}
        disabled={count >= 5}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
