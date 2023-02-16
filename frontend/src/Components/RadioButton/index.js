import React from "react";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core";

import "./style.css";

function RadioButton({ selectedValue, handleChange}) {
  const CustomRadio = withStyles({
    root: {
      color: "#FFD3CA",
      "&$checked": { color: "#EB8F7A" },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
      <div className="radioOptions">
        <div>
        <CustomRadio 
          checked={selectedValue === 'all'} //1:08
          onChange={e => handleChange(e.target)}
          value="all"
        />
        <span>Todos</span>
      </div>
      <div>
        <CustomRadio 
          checked={selectedValue === 'true'}
          onChange={e => handleChange(e.target)}
          value="true"
        />
        <span>Prioridade</span>
      </div>
      <div>
        <CustomRadio 
          checked={selectedValue === 'false'} 
          onChange={e => handleChange(e.target)}
          value="false"
        />
        <span>Normal</span>
      </div>
    </div>
  );
}

export default RadioButton;
