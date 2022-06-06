import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledCard } from "../../../../components/Card";
import Pet from "../../../../assets/images/rocky.png";
import Add from "../../../../assets/images/add.png";
import { Link } from "react-router-dom";
import AddNewDog from "../AddNewDog";

const petsData = [
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
  {
    name: "Rocky",
    breed: "Russian",
    age: 2,
    chip: 9282839292,
    img: Pet,
  },
];
export default function Pets({ mode }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Box>
      <Grid container spacing={2}>
        {mode === "edit" && (
          <Grid item lg={3} md={6}>
            <StyledCard
              sx={{
                height: "271px",
                maxWidth: "232px",
                mx: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onClick={() => setModalVisible(true)}
            >
              <Box
                sx={{
                  textAlign: "center",
                  backgroundColor: " #E2E8F0",
                  width: "88px",
                  height: "88px",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Add} alt="pet" />
              </Box>
              <Box textAlign="center" display="grid" mt={2}>
                <Typography
                  variant="body2"
                  className="font-regular"
                  sx={{ color: "#64748B" }}
                >
                  Add New Pet
                </Typography>
              </Box>
            </StyledCard>
          </Grid>
        )}
        {petsData.map((pet) => (
          <Grid item lg={3} md={6}>
            <StyledCard sx={{ height: "271px", maxWidth: "232px", mx: "auto" }}>
              <Box sx={{ textAlign: "center" }}>
                <img src={pet.img} alt="pet" height="106px" width="106px" />
              </Box>
              <Box textAlign="center" display="grid" mt={2}>
                <Typography variant="h6" className="font-semibold">
                  {pet.name}
                </Typography>
                <Typography
                  variant="body2"
                  className="font-regular"
                  sx={{ color: "#64748B" }}
                >
                  {pet.breed}
                </Typography>
                <Typography variant="body2" className="font-regular">
                  {pet.age} Years Old
                </Typography>
                <Link to="#">
                  <Typography
                    variant="body2"
                    className="font-regular"
                    sx={{ color: "#64748B" }}
                  >
                    ChipNo#{pet.chip}
                  </Typography>
                </Link>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <AddNewDog
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Box>
  );
}
