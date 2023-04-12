import React from "react";
import './projects.css';
import { Projects } from "./Projects";

export const Project = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent Projects</span>

      <Projects />
    </section>
  )
}