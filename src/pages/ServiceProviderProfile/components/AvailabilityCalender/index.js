import React from "react";
import { Typography } from "@mui/material";
import { StyledCard } from "../../../../components/Card";
import Datetime from "react-datetime";
import styled from "@emotion/styled";
import { css } from "styled-components";

const SyledCalenderView = styled(Datetime)`
  table {
    width: 100%;
    text-align: center;
    border-spacing: 0px;
  }
  th {
    padding: 10px 0px;
  }
  td {
    padding: 10px 0px;
  }
  tbody tr {
    background-color: #ecfdf5;
    margin: 10px;
  }
  .rdtPrev,
  .rdtNext span {
    cursor: pointer;
  }
  ${(props) =>
    !props.timeView &&
    css`
      tfoot {
        display: none;
      }
    `}
`;

function BasicDateTimePicker() {
  return (
    <StyledCard>
      <Typography
        variant="p"
        className="font-light"
        sx={{ mb: 1, color: "#9CA3AF" }}
      >
        Availablity Calender
      </Typography>
      <SyledCalenderView
        dateFormat="YYYY-MM-DD"
        input={false}
        timeView={false}
        className="font-regular"
      />
    </StyledCard>
  );
}

export default BasicDateTimePicker;
