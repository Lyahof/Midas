import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import TabletNav from "./TabletNav";
import MobileNav from "./MobileNav";
import { useMobBtnContent } from "../contexts/MobBtnContext";
import MobileHeader from "./MobileHeader";
import Breadcrumbs from "./Breadcrumbs";

const Container = styled.div`
  max-width: 154rem;
  padding: 0 2rem;
  margin: 0 auto;
`;

const Main = styled.main`
  min-height: 100vh;
`;

function AppLayout() {
  const { isOpenMenu } = useMobBtnContent();
  const isTabletDevice = useMediaQuery(
    "only screen and (max-width : 64em) and (min-width : 37em)"
  );
  const isMobileDevice = useMediaQuery("only screen and (max-width : 37em)");

  return (
    <>
      <Container>
        {isMobileDevice ? <MobileHeader /> : <Header />}

        <Main>
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
