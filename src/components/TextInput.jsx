import { forwardRef } from "react";

const TextInput = forwardRef(
  ({ type = "text", placeholder, onChange, ...passProps }, ref) => {
    return (
      <label className="block mt-4  p-2 h-16">
        INPUT :
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          {...passProps}
          className=" ml-2 border-2 pl-2"
        />
      </label>
    );
  }
);
TextInput.displayName = "textInput";
export default TextInput;
