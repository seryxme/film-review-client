import Hero from "../hero/Hero";

const Home = ({ films }) => {
  console.log(films);
  return <Hero films={films} />;
};

export default Home;
