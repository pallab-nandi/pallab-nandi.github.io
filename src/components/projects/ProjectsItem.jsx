import React from "react";

export const ProjectsItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.url} className="work__button">
        View on Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}