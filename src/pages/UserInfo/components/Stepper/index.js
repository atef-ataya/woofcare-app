import * as React from "react";
// material import
import {
  Grid,
  Paper,
  StepLabel,
  Step,
  Stepper,
  styled,
  Hidden,
} from "@mui/material";
// images
import Profile from "../../../../assets/images/user.png";
import Camera from "../../../../assets/images/camera.png";
import Phone from "../../../../assets/images/mobile.png";
import Card from "../../../../assets/images/personalcard.png";
import Pet from "../../../../assets/images/pet.png";
// styles
import { StyledBox } from "../styles";
import Button from "../../../../components/Button";
// stepper components
import UploadPhoto from "../Steps/UploadPhoto";
import PersonalInfo from "../Steps/PersonalInfo";
import VerifyPhone from "../Steps/VerifyPhone";
import IDVerification from "../Steps/IDVerification";
import ChooseService from "../Steps/ChooseService";
import TitleItem from "../TitleItem";
import { useNavigate } from "react-router-dom";

// steps data
const steps = [
  {
    label: "Personal Information",
    description: `Lorem ipsum dolor sit emet conseteur.`,
  },
  {
    label: "Upload Profile Picture",
    description: `Lorem ipsum dolor sit emet conseteur.`,
  },
  {
    label: "Verify Phone Number",
    description: `Lorem ipsum dolor sit emet conseteur.`,
  },
  {
    label: "Passport/ID Verfication ",
    description: `Upload a goverment-issued ID that clearly shows your full name and
    complete photo.The doucment must be a cleared high-resolution color copy of
    the complete (uncropped) orginal doucment with no information obscured by
    camera’s flash.`,
  },
  {
    label: "Choose Services",
    description: `Lorem ipsum dolor sit emet conseteur.`,
  },
];

// items data
const items = [
  {
    label: "Personal Information",
    description: `Enter and Complete`,
    image: Profile,
  },
  {
    label: "Upload Profile Picture",
    description: `Upload Information`,
    image: Camera,
  },
  {
    label: "Verify Phone Number",
    description: `Register Phone Number`,
    image: Phone,
  },
  {
    label: "Passport/ID Verfication ",
    description: `Verfiy yourself`,
    image: Card,
  },
  {
    label: "Select Services",
    description: `Choose Services you want`,
    image: Pet,
  },
];

export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const history = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      history("/");
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  // handle change step component
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo step={activeStep} />;
      case 1:
        return <UploadPhoto step={activeStep} />;
      case 2:
        return <VerifyPhone step={activeStep} />;
      case 3:
        return <IDVerification step={activeStep} />;
      case 4:
        return <ChooseService step={activeStep} />;
    }
  };

  // custom circle
  const QontoStepIconRoot = styled("div")(() => ({
    "& .active-circle": {
      width: 24,
      height: 24,
      borderRadius: "50%",
      backgroundColor: "#ddf96f",
      border: "4px solid #000",
    },
    "& .disabled-circle": {
      width: 24,
      height: 24,
      borderRadius: "50%",
      backgroundColor: "#94A3B8",
      border: "4px solid #F1F5F9",
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot
        ownerState={{ active, completed }}
        className={className}
      >
        {active || completed ? (
          <div className="active-circle" />
        ) : (
          <div className="disabled-circle" />
        )}
      </QontoStepIconRoot>
    );
  }
  return (
    <React.Fragment>
      <Grid container justifyContent="center">
        <Grid item lg={10} md={11} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={3}>
              <StyledBox>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel StepIconComponent={QontoStepIcon}>
                        <Hidden mdDown>
                          <TitleItem
                            icon={items[index].image}
                            title={items[index].label}
                            description={items[index].description}
                            // disabled={index > activeStep}
                          />
                        </Hidden>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </StyledBox>
            </Grid>
            <Grid item lg={8} md={9}>
              {handleSteps(activeStep)}
              <Grid container justifyContent="flex-end" sx={{ my: 2 }}>
                <Grid item>
                  <Paper square elevation={0}>
                    <Button
                      sx={{ mt: 1, mr: 1 }}
                      text="Skip"
                      onClick={() => history("/")}
                    />
                    <Button
                      primary
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                      text={activeStep === steps.length - 1 ? "Finish" : "Next"}
                      href={activeStep === steps.length && "/"}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
