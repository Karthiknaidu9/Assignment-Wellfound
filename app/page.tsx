import DiscoverSection from "@/components/DiscoverSection";
import Navbar from "@/components/Navbar";
import Orders from "@/components/Orders";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import TrackingPage from "@/components/TrackingPage";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Orders />
      <PerformanceMetrics />
      <DiscoverSection />
    </div>
  );
}
