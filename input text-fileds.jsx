import React, { useState } from 'react';

const InputFields = () => {
  const [numFields, setNumFields] = useState(0);
  const [inputs, setInputs] = useState([]);

  const handleNumFieldsChange = (e) => {
    const { value } = e.target;
    setNumFields(parseInt(value) || 0);
    setInputs([]);
  };

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const renderInputFields = () => {
    const inputFields = [];
    for (let i = 0; i < numFields; i++) {
      inputFields.push(
        <input
          key={i}
          type="text"
          value={inputs[i] || ''}
          onChange={(e) => handleInputChange(e, i)}
          placeholder={`Input ${i + 1}`}
        />
      );
    }
    return inputFields;
  };

  const displayInputs = inputs.map((input, index) => (
    <div key={index}>
      <p>Input {index + 1}: {input}</p>
    </div>
  ));

  return (
    <div>
      <input
        type="number"
        value={numFields}
        onChange={handleNumFieldsChange}
        placeholder="Number of input fields"
      />
      <div>
        {renderInputFields()}
      </div>
      <div>
        {displayInputs}
      </div>
    </div>
  );
};

export default InputFields;