// import Card from "../../Components/Card";
import Cards from "../../Components/Cards";
import CreateButton from "../../Components/CreateButton";
import Hero from "../../Components/Hero";
import PostForm from "../../Components/PostForm";
import Posts from "../../Components/Posts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero />

      <Cards />
      {/* <Card/> */}
      <Posts />
      <CreateButton/>
    </div>
  );
};

export default Home;
