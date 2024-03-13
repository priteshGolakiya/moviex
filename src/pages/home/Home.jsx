import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Populer from "./populer/Populer";

function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Populer />
      <div className="" style={{ height: "1000px" }}></div>
    </div>
  );
}

export default Home;
