import React from "react";
import "./header.css";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lets Build Something Amazing Using GPT-3 Open AI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          veritatis dolores, quos non perferendis doloribus repudiandae at! Eos
          quo excepturi delectus unde ut, error dolores animi, soluta
          perspiciatis esse ad.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" srcset="" />
          <p>1600 people requested the access in last 24 hour.</p>
        </div>
      </div>
      
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
