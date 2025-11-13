import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRef } from "react";
import NewTextInput from "@/components/NewTextInput";

const UseRef = () => {
  const clickBtn = useRef(0);
  const inputRef = useRef();
  const newInputRef = useRef();

  return (
    <div className="p-4">
      <Button
        onClick={() => {
          clickBtn.current++;
          {
            clickBtn.current % 5 === 0
              ? alert(`Click ${clickBtn.current} lần!`)
              : "";
          }
        }}
      >
        Click me
      </Button>
      <div className="h-16">
        <TextInput ref={inputRef} />
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            inputRef?.current?.focus();
          }}
        >
          Focus
        </Button>
        <Button
          onClick={() => {
            inputRef?.current?.remove();
          }}
        >
          Remove
        </Button>
      </div>
      <NewTextInput ref={newInputRef} />
      <Button
        onClick={() => {
          newInputRef?.current?.focus();
        }}
      >
        Focus NEW INPUT
      </Button>
    </div>
  );
};
export default UseRef;
