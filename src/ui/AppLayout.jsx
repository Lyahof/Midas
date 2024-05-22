import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import TabletNav from "./TabletNav";
import MobileNav from "./MobileNav";
import MobileHeader from "./MobileHeader";
import useStyckyHeader from "../hooks/useStyckyHeader";
import { useMobBtnContent } from "../contexts/MobBtnContext";

const Container = styled.div`
  max-width: 154rem;
  padding: 0 2rem;
  margin: 0 auto;
`;

const Main = styled.main`
  min-height: 100vh;
  &.compensate-hight {
    padding-top: 9rem;
  }
`;

function AppLayout() {
  const { isOpenMenu } = useMobBtnContent();
  const isTabletDevice = useMediaQuery(
    "only screen and (max-width : 64em) and (min-width : 37em)"
  );
  const isMobileDevice = useMediaQuery("only screen and (max-width : 37em)");

  const { headerHeight, mobileHeaderHeight } = useStyckyHeader();

  return (
    <>
      <Container>
        {isMobileDevice ? <MobileHeader /> : <Header />}
        <Main id="main">
          {isOpenMenu && isTabletDevice && <TabletNav />}
          {isOpenMenu && isMobileDevice && <MobileNav />}
          <Outlet />
        </Main>
      </Container>
      <Footer />
    </>
  );
}

export default AppLayout;
