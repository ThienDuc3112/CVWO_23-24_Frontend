import { styled } from "@mui/material";

const Img = styled("img")({
  width: "100%",
  position: "absolute",
  zIndex: -1,
  height: "130px",
  objectFit: "cover",
  objectPosition: "50% 30%",
  top: 0,
  left: 0,
});

const Background = () => (
  <Img src="https://i.pinimg.com/originals/bf/93/46/bf93460fb652070085b4e6dd39afe263.jpg"></Img>
);

export default Background;
