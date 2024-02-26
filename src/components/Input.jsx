import { useState } from "react";
import eye from "../assets/eye.png";

export default function Input({
  label,
  name,
  id,
  value,
  setValue,
  type,
  required,
}) {
  const [typeChange, setTypeChange] = useState(type);
  return (
    <div className="flex flex-col gap-1 relative">
      {type === "password" ? (
        <img
          className="absolute bottom-5 right-5"
          src={eye}
          alt="показать пароль"
          onClick={() =>
            setTypeChange(typeChange === "password" ? "text" : "password")
          }
        />
      ) : (
        ""
      )}

      <label
        htmlFor={id}
        className="pl-6 text-xl font-[UbuntuMedium] text-opacity-80"
      >
        {label} {required ? "*" : ""}
      </label>
      <input
        type={typeChange}
        name={name}
        value={value}
        id={id}
        onChange={setValue}
        required={required}
        className="w-[448px] h-16 border-4 border-blue-950 border-solid rounded-3xl pl-3 text-xl"
      />
    </div>
  );
}
