import styled from "@emotion/styled";
import { Badge, Box, Tabs, Select } from "@mui/material";

const StyledImage = styled.img`
  border-radius: 5px;
  width: 93px;
  height: 93px;
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const StyledAvatar = styled(Box)`
  & .BaseBadge-badge {
    height: 15px;
    width: 15px;
    border-radius: 100%;
  }
`;

const StyledTabs = styled(Tabs)`
  .MuiTab-root {
    color: #94a3b8;
  }
  .Mui-selected {
    color: #0f172a !important;
  }
  .MuiTabs-indicator {
    background-color: #0f172a;
    height: 5px;
  }
`;

const StyledReviewsTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export {
  StyledImage,
  StyledBadge,
  StyledAvatar,
  StyledTabs,
  StyledReviewsTitle,
};
