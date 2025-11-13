import { memo, useCallback, useState } from "react";

const ChildComponent1 = memo(({ value, onIncrease }) => {
  console.log("re-render1");
  return (
    <button
      className="border-2 p-2 cursor-pointer rounded-xl bg-blue-400"
      onClick={onIncrease}
    >
      Child 1 Count :{value}
    </button>
  );
});

const ChildComponent2 = memo(
  ({ value, onIncrease }) => {
    console.log("re-render2");
    return (
      <button
        className="border-2 p-2 cursor-pointer rounded-xl bg-blue-400"
        onClick={onIncrease}
      >
        Child 2 Count :{value}
      </button>
    );
  },
  (prev, next) => {
    return prev.value === next.value;
  }
);

const ReactMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  return (
    <div className="p-4 flex gap-2">
      <ChildComponent1 value={count1} onIncrease={handleIncrease} />

      <ChildComponent2
        value={count2}
        onIncrease={() => {
          setCount2(count2 + 1);
        }}
      />
    </div>
  );
};
export default ReactMemo;
