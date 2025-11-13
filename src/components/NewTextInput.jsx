import { forwardRef, useImperativeHandle, useRef } from "react";

const NewTextInput = forwardRef(
  ({ type = "text", placeholder, onChange, ...passProps }, ref) => {
    const inputRef = useRef();
    useImperativeHandle(
      ref,
      () => {
        return {
          focus() {
            inputRef?.current?.focus();
          },
        };
      },
      []
    );
    return (
      <label className="block mt-4  p-2 h-16">
        NewTextInput :
        <input
          type={type}
          ref={inputRef}
          placeholder={placeholder}
          onChange={onChange}
          {...passProps}
          className=" ml-2 border-2 pl-2"
        />
      </label>
    );
  }
);
NewTextInput.displayName = "newTextInput";
export default NewTextInput;
