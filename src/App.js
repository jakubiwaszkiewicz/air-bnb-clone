import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./data.js";

function App() {
  const Data = data.map((x) => {
    return (
        <Card
            key = {x.id}
            item = {x}
        />
    );})
  return (
    <div className="container">
      <NavBar />
        <div className="content">
          <Hero />
          <section className="card--container">
            {Data}
          </section>
        </div>
    </div>
  );
}


export default App;
/*
id: 1,
    title: "Life Lessons with Roger Federer",
    description: "Federer and Novak Djokovic have won the second most Grand Slam tournament titles," +
                  " trailing only Rafael Nadal. He is the first men's singles player to have reached" +
                  " ten consecutive Grand Slam tournament finals and a total of 31 Grand Slam finals. He has earned a men's" +
                  " doubles gold medal, and a men's single silver medal at the Olympics in 2008 and 2012, respectively.",
    price: 1300,
    coverImg: "federer.png",
    stats: {
      rating: 5.0,
      reviewCount: 6
},
    location: "Online",
    openSpots: 0,*/
