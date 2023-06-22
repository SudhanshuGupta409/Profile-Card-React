import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Master() {
  return (
    <div className="master">
      <App />
      <App />
      <App />
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skill="HTML/CSS💪" />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile-img/Program.jpg" alt="profile" />;
}

function Intro() {
  return (
    <div>
      <h1>Silent Stark</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis
        eligendi. Culpa saepe quibusdam explicabo velit possimus ipsam assumenda
        consequatur!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML/CSS 💪" color="red" />
      <Skill skill="JavaScript 💪" color="yellow" />
      <Skill skill="Web Design 💪" color="hotPink" />
      <Skill skill="React 💪" color="skyblue" />
      <Skill skill="Git and GitHub 👍" color="purple" />
      <Skill skill="Svelte 👦" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Master />
  </StrictMode>
);
