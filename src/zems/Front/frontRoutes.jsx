import FlashSale from "./Pages/FlashSale";
import HomePage from "./Pages/HomePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ProductPage from "./Pages/ProductPage";

const frontRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductPage /> },
  { path: "/flash-sale", element: <FlashSale /> },
  { path: "/product-details/:id", element: <ProductDetailsPage /> },
];
export default frontRoutes;
