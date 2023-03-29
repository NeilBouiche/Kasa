import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import data from "../datas/logements.json";

function Home() {
  return (
    <div>
      <Banner />
      <Gallery data={data} />
    </div>
  );
}

export default Home;
