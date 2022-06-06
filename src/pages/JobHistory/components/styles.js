import styled from "styled-components";
import { Table, Tabs } from "@mui/material";

const StyledTabs = styled(Tabs)`
  .MuiTab-root {
    align-items: flex-start;
    padding: 20px 40px;
    font-size: 14px;
    max-width: 100%;
    min-width: 100%;
  }
  .Mui-selected {
    background-color: #f8fafc;
  }
  .MuiTabs-indicator {
    left: 0;
    background-color: #7c9a06;
    width: 4px;
  }
`;

const StyledTable = styled(Table)`
  .MuiTableHead-root .MuiTableCell-root {
    font-size: 14px;
    color: #64748b;
    padding: 20px;
  }
`;

export { StyledTabs, StyledTable };
