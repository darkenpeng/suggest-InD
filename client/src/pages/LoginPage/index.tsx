import login1 from "../../assets/login/login1.jpg";
import login2 from "../../assets/login/login2.jpg";
import login3 from "../../assets/login/login3.jpg";
import steam from "../../assets/login/steam.png";
import * as lc from "./styles";

const LoginPage = () => {
  console.log(typeof login1);
  return (
    <>
      <lc.LoginWrapper>
        <lc.BackWrapper>
          <lc.BackImage src={login1}></lc.BackImage>
        </lc.BackWrapper>
        <lc.LBContainer>
          <lc.LSButton
            onClick={() => {
              console.log(1);
            }}
          >
            <lc.LSlogo src={steam} />
          </lc.LSButton>
        </lc.LBContainer>
      </lc.LoginWrapper>
    </>
  );
};

export default LoginPage;
