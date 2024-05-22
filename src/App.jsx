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
import FoodPage from "./pages/FoodPage";

import { MobBtnProvider } from "./contexts/MobBtnContext";
import { CartIconProvider } from "./contexts/CartIconContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CartIconProvider>
        <GlobalStyles />
        <MobBtnProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate to="main" />} />
                <Route path="main" element={<MainPage />} />

                <Route path="main/promotions" element={<Promotions />} />

                <Route path="main/bakery" element={<Bakery />} />
                <Route path="main/bakery/:productId" element={<FoodPage />} />

                <Route path="main/salads" element={<Salads />} />
                <Route path="main/salads/:productId" element={<FoodPage />} />

                <Route path="main/cold" element={<Cold />} />
                <Route path="main/cold/:productId" element={<FoodPage />} />

                <Route path="main/deserts" element={<Deserts />} />
                <Route path="main/deserts/:productId" element={<FoodPage />} />

                <Route path="main/sauces" element={<Sauces />} />
                <Route path="main/sauces/:productId" element={<FoodPage />} />

                <Route path="main/drinks" element={<Drinks />} />
                <Route path="main/drinks/:productId" element={<FoodPage />} />

                <Route path="main/hinkali" element={<Hinkali />} />
                <Route path="main/hinkali/:productId" element={<FoodPage />} />

                <Route path="main/soups" element={<Soups />} />
                <Route path="main/soups/:productId" element={<FoodPage />} />

                <Route path="main/hot" element={<Hot />} />
                <Route path="main/hot/:productId" element={<FoodPage />} />

                <Route path="main/login" element={<Login />} />
                <Route path="main/cart" element={<Cart />} />
                <Route path="main/placingOrder" element={<PlacingOrder />} />
                <Route path="main/feedback" element={<Feedback />} />
                <Route path="main/delivery" element={<Delivery />} />
                <Route path="main/payment" element={<Payment />} />
                <Route path="main/contacts" element={<Contacts />} />
                <Route path="main/policy" element={<Policy />} />
                <Route path="main/terms" element={<Terms />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </MobBtnProvider>
      </CartIconProvider>
    </QueryClientProvider>
  );
}

export default App;
