import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MainPage from "./pages/MainPage";
import Bakery from "./pages/Bakery";
import Cart from "./pages/Cart";
import Cold from "./pages/Cold";
import Deserts from "./pages/Deserts";
import Drinks from "./pages/Drinks";
import Hinkali from "./pages/Hinkali";
import Hot from "./pages/Hot";
import PlacingOrder from "./pages/PlacingOrder";
import Promotions from "./pages/Promotions";
import Soups from "./pages/Soups";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Contacts from "./pages/Contacts";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import Salads from "./pages/Salads";
import Sauces from "./pages/Sauces";
import { MobBtnProvider } from "./contexts/MobBtnContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <MobBtnProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to="main" />} />
              <Route path="main" element={<MainPage />} />
              <Route path="promotions" element={<Promotions />} />
              <Route path="bakery" element={<Bakery />} />
              <Route path="salads" element={<Salads />} />
              <Route path="cold" element={<Cold />} />
              <Route path="deserts" element={<Deserts />} />
              <Route path="sauces" element={<Sauces />} />
              <Route path="drinks" element={<Drinks />} />
              <Route path="hinkali" element={<Hinkali />} />
              <Route path="hot" element={<Hot />} />
              <Route path="soups" element={<Soups />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
              <Route path="placingOrder" element={<PlacingOrder />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="delivery" element={<Delivery />} />
              <Route path="payment" element={<Payment />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="policy" element={<Policy />} />
              <Route path="terms" element={<Terms />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </MobBtnProvider>
    </QueryClientProvider>
  );
}

export default App;
