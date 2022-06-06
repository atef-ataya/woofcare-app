import React from "react";
import Modal from "../../../../components/Modal";
import {
  Box,
  Button,
  Grid,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { StyledUploadImage } from "../../../UserInfo/components/styles";
import ButtonComponent from "../../../../components/Button";
import Profile from "../../../../assets/images/profile.png";
import StyledFormItem from "../../../../components/Input";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function AddNewDog({ modalVisible, setModalVisible }) {
  return (
    <Modal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      textAlign="start"
      bodyContent={
        <>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <StyledUploadImage mb={3} height="100px" width="100px">
                <img src={Profile} alt="profile" style={{ height: "50px" }} />
              </StyledUploadImage>
              <label htmlFor="contained-button-file" style={{ margin: "auto" }}>
                <Box display="none">
                  <Input accept="image/*" multiple type="file" />
                </Box>
                <Box display="flex" justifyContent="center">
                  <ButtonComponent
                    text="Upload Photo"
                    className="font-regular"
                    secondary
                  />
                </Box>
              </label>
            </Grid>
            <Grid item lg={12}>
              <StyledFormItem label="Name" mt="10px">
                <TextField
                  size="small"
                  placeholder="Enter Name"
                  type="text"
                  color="secondary"
                />
              </StyledFormItem>
            </Grid>
            <Grid item lg={12}>
              <StyledFormItem label="Breed" mt="10px">
                <Select
                  size="small"
                  className="font-semibold"
                  placeholder="Select"
                  type="text"
                  defaultValue="unset"
                  color="secondary"
                  IconComponent={KeyboardArrowDown}
                >
                  <MenuItem value="unset" hidden selected disabled>
                    Select
                  </MenuItem>
                  <MenuItem value="yes">Breed1</MenuItem>
                  <MenuItem value="no">Breed2</MenuItem>
                </Select>
              </StyledFormItem>
            </Grid>
            <Grid item lg={12}>
              <StyledFormItem label="Age" mt="10px">
                <Select
                  size="small"
                  className="font-semibold"
                  placeholder="Select"
                  type="text"
                  defaultValue="unset"
                  color="secondary"
                  IconComponent={KeyboardArrowDown}
                >
                  <MenuItem value="unset" hidden selected disabled>
                    Select
                  </MenuItem>
                  <MenuItem value="yes">1</MenuItem>
                  <MenuItem value="no">2</MenuItem>
                </Select>
              </StyledFormItem>
            </Grid>
            <Grid item lg={12}>
              <StyledFormItem label="Chip No" mt="10px">
                <TextField
                  size="small"
                  placeholder="Enter Name"
                  type="text"
                  color="secondary"
                  className="font-semibold"
                />
              </StyledFormItem>
            </Grid>
            <Grid item lg={12}>
              <Button
                variant="contained"
                color="success"
                className="font-regular"
                fullWidth
                sx={{ mt: 2, mb: 1 }}
                onClick={() => setModalVisible(false)}
              >
                Add New Dog
              </Button>
              <Button
                variant="text"
                color="inherit"
                className="font-regular"
                fullWidth
                onClick={() => setModalVisible(false)}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </>
      }
    />
  );
}
