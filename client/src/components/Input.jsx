const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  label,
  autoComplete,
  required,
}) => {
  return (
    <>
      <div className="flex items-start flex-col">
        <label className="text-md font-semibold p-1 mx-1 ">
          {label}
          <sup className="text-red-400">*</sup>:-
        </label>
        <input
          className="border-2 border-gray-300 rounded-md h-[6vh] p-1 outline-blue-300 w-[85vw] md:w-[35vw] lg:w-[28vw] bg-gray-100 mx-1"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          required={required}
          autoComplete={autoComplete}
        />
      </div>
    </>
  );
};

export default Input;
