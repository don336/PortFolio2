import { Grid, Typography, colors } from "@mui/material";
import CustomButtom from "../../Elements/CustomButton/CustomButton";
import { COLORS } from "../../Styles/Theme";
import { StyledTypography, StyledBox, StyledContainer } from "./showcase.style";
import home from "../../assets/pic2.jpg";

const Showcase = () => {
  return (
    <StyledContainer>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 4 }}
      >
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          sx={{
            marginBottom: "30px",
          }}
        >
          <img src={home} alt="img" width={300} className="img1" />
        </Grid>
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          sx={{
            marginBottom: "30px",
            borderRadius: "360px",
          }}
        >
          {" "}
          <StyledBox>
            <Typography variant="h2" color={COLORS.LINEN}>
              HELLO, I'M SSEMUGABI MARTIN.
            </Typography>
            <Typography variant="h2" color={COLORS.LINEN}>
              A SOFTWARE <span style={{
                color: `${COLORS.CINNARBAR}`
              }}>DEVELOPER</span>
            </Typography>
            <StyledTypography variant="h6">
              "Welcome to my portfolio! My name is Ssemugabi Martin, and I am a
              passionate frontend developer. With a one year of experience in
              web development, I have honed my skills in creating dynamic and
              engaging user interfaces that deliver seamless user experiences".
            </StyledTypography>
          </StyledBox>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Showcase;
