import { ChangeEvent, FormEvent, useState } from "react";

interface FormProps {
  addItem: (content: string) => void;
}

const Form: React.FC<FormProps> = ({ addItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      addItem(inputValue);
      setInputValue("");
    }
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
