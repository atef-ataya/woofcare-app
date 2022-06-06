import * as React from "react";
import { Modal, Box, Typography } from "@mui/material";

export default function ModalComponent({
  modalVisible,
  setModalVisible,
  titleImage = null,
  title,
  bodyContent,
  textAlign = "center",
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    background: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderRadius: "5px",
    padding: textAlign === "center" ? "40px 20px" : "20px",
    textAlign: textAlign,
  };

  return (
    <Modal
      open={modalVisible}
      onClose={() => setModalVisible(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {titleImage && (
          <Box
            sx={{
              width: "48px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#0F172A",
              borderRadius: "100%",
              mx: "auto",
              mb: 2,
            }}
          >
            <img src={titleImage} alt="modalimage" />
          </Box>
        )}
        {title && (
          <Typography variant="p" className="font-bold">
            {title}
          </Typography>
        )}

        <Box>{bodyContent}</Box>
      </Box>
    </Modal>
  );
}
