import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Nepali",
    value: "ne",
  },
];

function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">
        <Convert text={text} language={language} />
      </h3>
    </div>
  );
}

export default Translate;
