import OfflineBanner from "./challenge6_pwa/OfflineBanner";
import Navbar from "./challenge5_theme/Navbar";
import Home from "./challenge5_theme/Home";
import WorkoutTracker from "./challenge7_workout/WorkoutTracker";
import ProductsPage from "./challenge8_redux/ProductsPage";

export default function App() {
  return (
    <>
      <OfflineBanner />
      <Navbar />
      <Home />
      <WorkoutTracker />
      <ProductsPage />
    </>
  );
}