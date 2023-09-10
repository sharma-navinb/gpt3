import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featureData = [
  {
    title: "Improving e d distusts instantly",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur consequatur nemo eaque, cum non modi inventore recusandae nihil labore id! Corporis impedit iste quis repellendus modi quibusdam praesentium et natus.",
  },
  {
    title: "Become the trended active",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur consequatur nemo eaque, cum non modi inventore recusandae nihil labore id! Corporis impedit iste quis repellendus modi quibusdam praesentium et natus.",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur consequatur nemo eaque, cum non modi inventore recusandae nihil labore id! Corporis impedit iste quis repellendus modi quibusdam praesentium et natus.",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur consequatur nemo eaque, cum non modi inventore recusandae nihil labore id! Corporis impedit iste quis repellendus modi quibusdam praesentium et natus.",
  },
];
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="">Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((item,index) => { return <Feature key={item.title + index} title={item.title} text={item.text}/>
        })}
      </div>
    </div>
  );
};

export default Features;
