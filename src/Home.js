import React from "react";
import "./styles/Home.css";
import Banner from "./components/Banner";
import Card from "./components/Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home_section">
        <Card
          src="https://i.pinimg.com/originals/62/d6/1d/62d61d24f5ab69b4673954fcdafd9c88.jpg"
          title="New York, USA"
          description="There are many fun activities to do in the beautiful New York City"
        />
        <Card
          src="https://i.pinimg.com/736x/85/a9/d8/85a9d8b54a454139e09780b34f4b0033.jpg"
          title="Maldives"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://i.pinimg.com/564x/f9/4e/43/f94e43ed0db2918a63745aa9ff0f8263.jpg"
          title="Positano, Italy"
          description="Italy is where the magic begins."
        />
      </div>
    </div>
  );
}

export default Home;
