import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}KM`;
}

export default function Distance() {
  const [value, setValue] = React.useState([10, 20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt={4}>
      <Slider
        getAriaLabel={() => "distance"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `${value}KM`}
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
