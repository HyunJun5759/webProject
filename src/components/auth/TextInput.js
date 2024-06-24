import { forwardRef } from "react";

const TextInput = forwardRef(function TextInput(
  { title, find, message, ...props },
  ref
) {
  const label = (
    <div className="flex items-center justify-between">
      <label
        htmlFor={props.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="text-red-500">{message}</div>
    </div>
  );

  return (
    <>
      {find ? (
        <div className="flex items-center justify-between">
          {label}
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {title}을/를 잊어버리셨나요?
            </a>
          </div>
        </div>
      ) : (
        label
      )}
      <div className="mt-2">
        <input
          ref={ref}
          {...props}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
});

export default TextInput;
