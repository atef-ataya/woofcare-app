import React from "react";
import { Box, IconButton, Typography } from "@mui/material";

export default function About({
  mode,
  editInput,
  editIcon,
  inputVisible,
  setInputVisible,
}) {
  const Description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.";
  return (
    <>
      <Box mb={3}>
        <Typography variant="h6" className="font-semibold">
          Bio
        </Typography>
        <Box display="flex" alignItems="center">
          {inputVisible === "bio" ? (
            editInput({
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu dictum aliquam nisl maecenas mattis molestie velit.",
              type: "textarea",
            })
          ) : (
            <Typography
              variant="p"
              className="font-regular"
              sx={{ color: "#64748B" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              dictum aliquam nisl maecenas mattis molestie velit.
            </Typography>
          )}
          {mode === "edit" && (
            <IconButton
              onClick={() =>
                inputVisible === "bio"
                  ? setInputVisible("")
                  : setInputVisible("bio")
              }
              sx={{ ml: 1 }}
              size="small"
              disableRipple
            >
              {editIcon("bio")}
            </IconButton>
          )}
        </Box>
      </Box>
      <Box mb={3}>
        <Typography variant="h6" className="font-semibold">
          Description
        </Typography>
        <Box display="flex" alignItems="center">
          {inputVisible === "desc" ? (
            editInput({
              value: Description,
              type: "textarea",
            })
          ) : (
            <Typography
              variant="p"
              className="font-regular"
              sx={{ color: "#64748B" }}
            >
              {Description}
            </Typography>
          )}
          {mode === "edit" && (
            <IconButton
              onClick={() =>
                inputVisible === "desc"
                  ? setInputVisible("")
                  : setInputVisible("desc")
              }
              sx={{ ml: 1 }}
              size="small"
              disableRipple
            >
              {editIcon("desc")}
            </IconButton>
          )}
        </Box>
      </Box>
    </>
  );
}
