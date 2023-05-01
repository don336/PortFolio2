import { Grid, Typography, colors } from "@mui/material";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import { COLORS } from "../../Styles/Theme";
import { StyledTypography, StyledBox, StyledContainer } from "./showcase.style";

const Showcase = () => {
  return (
    <StyledContainer id="Home">
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
          <BackgroundAnimation />
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
            <Typography variant="h1" color={COLORS.LINEN}>
              <span className="primary">HELLO THERE</span>,
            </Typography>
            <StyledTypography variant="h5" color={COLORS.LINEN}>
              I simplify the complex.
            </StyledTypography>
          </StyledBox>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Showcase;
