// import Card from "../../Components/Card";
import Cards from "../../Components/Cards";
import Carousel from "../../Components/Carousel";
import CreateButton from "../../Components/CreateButton";
import Hero from "../../Components/Hero";
import Posts from "../../Components/Posts";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Carousel/> */}
      <Cards />
      {/* <Card/> */}
      <Posts />
      {localStorage.getItem("userToken") ? <CreateButton /> : " "}
    </div>
  );
};

export default Home;
