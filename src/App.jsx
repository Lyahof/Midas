import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import MainPage from "./pages/MainPage";
import Bakery from "./pages/Bakery";
import Cold from "./pages/Cold";
import Deserts from "./pages/Deserts";
import Drinks from "./pages/Drinks";
import Hinkali from "./pages/Hinkali";
import Hot from "./pages/Hot";
import Promotions from "./pages/Promotions";
import Soups from "./pages/Soups";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Feedback from "./pages/Feedback";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Contacts from "./pages/Contacts";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import Salads from "./pages/Salads";
import Sauces from "./pages/Sauces";
import FoodPage from "./pages/FoodPage";
import useLoadCart from "./hooks/useLoadCart";
import Spinner from "./ui/Spinner";
import ScrollToTop from "./hooks/ScrollToTop";
import { MobBtnProvider } from "./contexts/MobBtnContext";
import { CartIconProvider } from "./contexts/CartIconContext";
import { ActivateDeliveryContextProvider } from "./contexts/ActivateDeliveryContext";
import { HiddenOrderContextProvider } from "./contexts/HiddenOrderContext";
import { OpenCloseModalProvider } from "./contexts/OpenCloseModalContext";

const Account = lazy(() => import("./pages/Account"));
const PlacingOrder = lazy(() => import("./pages/PlacingOrder"));
const Cart = lazy(() => import("./pages/Cart"));

const queryClient = new QueryClient();

function App() {
  useLoadCart();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <OpenCloseModalProvider>
        <CartIconProvider>
          <GlobalStyles />
          <MobBtnProvider>
            <ActivateDeliveryContextProvider>
              <HiddenOrderContextProvider>
                <Suspense fallback={<Spinner />}>
                  <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                      <Route element={<AppLayout />}>
                        <Route index element={<Navigate to="main" />} />
                        <Route path="main" element={<MainPage />} />

                        <Route
                          path="main/promotions"
                          element={<Promotions />}
                        />

                        <Route path="main/bakery" element={<Bakery />} />
                        <Route
                          path="main/bakery/:productId"
                          element={<FoodPage />}
                        />

                        <Route path="main/salads" element={<Salads />} />
                        <Route
                          path="main/salads/:productId"
                          element={<FoodPage />}
                        />

                        <Route path="main/cold" element={<Cold />} />
                        <Route
                          path="main/cold/:productId"
                          element={<FoodPage />}
                        />

                        <Route path="main/deserts" element={<Deserts />} />
                        <Route
                          path="main/deserts/:productId"
                          element={<FoodPage />}
                        />

                        <Route path="main/sauces" element={<Sauces />} />
                        <Route
                          path="main/sauces/:productId"
                          element={<FoodPage />}
                        />

                        <Route path="main/drinks" element={<Drinks />} />
                        <Route
                          path="main/drinks/:productId"
                          element={<FoodPage />}
                        />

                        <Route path="main/hinkali" element={<Hinkali />} />
                        <Route
                          path="main/hinkali/:productId"
                          element={<FoodPage />}
                        />

                        <Route path="main/soups" element={<Soups />} />
                        <Route
                          path="main/soups/:productId"
                          element={<FoodPage />}
                        />

                        <Route path="main/hot" element={<Hot />} />
                        <Route
                          path="main/hot/:productId"
                          element={<FoodPage />}
                        />
                        <Route path="main/account" element={<Account />} />

                        <Route path="main/cart" element={<Cart />} />

                        <Route
                          path="main/cart/placingOrder"
                          element={<PlacingOrder />}
                        />
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
                </Suspense>
              </HiddenOrderContextProvider>
            </ActivateDeliveryContextProvider>
          </MobBtnProvider>
        </CartIconProvider>
      </OpenCloseModalProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 8000,
          },
          error: {
            duration: 7000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--yellow-color)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
