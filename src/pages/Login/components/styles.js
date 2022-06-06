import styled from "styled-components";

const StyledSection = styled.div`
  padding: 0px 50px;
  height: 100vh;
  background-color: #0f172a;
  color: #fff;
  .image-container {
    text-align: center;
    padding-bottom: 50px;
  }
  .logo-image {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    & img {
      margin-right: 10px;
    }
  }
  /* mobile screens */
  @media screen and (max-width: 789px) {
    .image-container img {
      height: 330px;
    }
    .social-icons {
      padding: 20px 0px;
    }
    .logo-image {
      padding-bottom: 20px;
    }
    p {
      font-size: 12px;
    }
  }
  /* tablet screens */
  @media screen and (min-width: 789px) {
    .image-container img {
      height: 330px;
    }
    .social-icons {
      padding: 20px 0px;
    }
    .logo-image {
      padding-bottom: 20px;
    }
    p {
      font-size: 12px;
    }
  }
  /* medium screens */
  @media screen and (min-width: 1280px) {
    .image-container img {
      height: 320px;
    }
    .social-icons {
      padding: 20px 0px;
    }
    .logo-image {
      padding-bottom: 20px;
      img {
        height: 35px;
      }
    }
  }
  /* large screens */
  @media screen and (min-width: 1440px) {
    .image-container img {
      height: 470px;
    }
    .social-icons {
      padding: 50px 0px;
    }
    .logo-image {
      padding-bottom: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const StyledContainer = styled.div`
  padding: 50px;
  a {
    text-decoration: none;
  }
  .forgot-password {
    float: right;
    color: #0f172a;
    font-size: 14px;
  }
  .register a {
    color: #0f172a;
  }
  .register {
    font-size: 14px;
  }
  .MuiTextField-root {
    margin: 10px 0px;
  }
  .MuiInputLabel-root {
    margin-left: -10px;
  }
  .email-input .MuiInputBase-root {
    margin-bottom: 20px;
  }
  .display-grid {
    display: grid;
    margin-top: 20px;
  }
  .login-btn {
    text-transform: capitalize;
    color: #000;
    background-color: #ddf96f;
  }
  .login-btn:hover {
    background-color: #ddf96f;
  }
  & > *,
  .children-margin > * {
    margin: 10px 0px;
  }
  .children-margin .MuiInputBase-root {
    margin-bottom: 0 !important;
    width: auto;
  }
  .text-center {
    text-align: center;
  }
`;

const StyledButtons = styled.div`
  .MuiButton-root {
    background-color: #f6f6f6;
    text-transform: capitalize;
    font-size: 15px;
    width: 150px;
    margin-right: 10px;
    color: #000;
    /* mobile screens */
    @media screen and (max-width: 789px) {
      width: 100px;
      font-size: 13px;
    }
    /* medium screen */
    @media screen and (min-width: 789px) {
      width: 120px;
    }
  }
`;

export { StyledSection, StyledContainer, StyledButtons };
