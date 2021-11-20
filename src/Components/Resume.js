import React from "react";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import bootstrap from "../img/bootstrap.png";
import ts from "../img/ts.png";
import mongoDB from "../img/mongoDB.png";
import express from "../img/express.png";
import react from "../img/react.png";
import postgre from "../img/postgre.png";
import git from "../img/git.png";
import github from "../img/github.png";
import heroku from "../img/heroku.png";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <br />
        <br />
        <div className="skills-img">
          <img className="skills-img-css" src={html} alt="" />
          <img className="skills-img-css" src={css} alt="" />
          <img className="skills-img-css" src={js} alt="" />
          <img className="skills-img-css" src={ts} alt="" />
          <img className="skills-img-css" src={bootstrap} alt="" />
          <img className="skills-img-css" src={mongoDB} alt="" />
        </div>

        <div className="skills-img-second-line">
          <img className="skills-img-css" src={express} alt="" />
          <img className="skills-img-css" src={react} alt="" />
          <img className="skills-img-css" src={postgre} alt="" />
          <img className="skills-img-css" src={git} alt="" />
          <img className="skills-img-css" src={github} alt="" />
          <img className="skills-img-css" src={heroku} alt="" />
        </div>

        {/* 
        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Resume;
