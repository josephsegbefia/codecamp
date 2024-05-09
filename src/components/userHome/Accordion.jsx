/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Accordion = ({ title, children, number }) => {
  const [state, setState] = useState({ cardState: false });

  const toggleCardState = () => {
    setState({ cardState: !state.cardState });
  };

  const { cardState } = state;

  return (
    <div className="a">
      <div className="card" aria-hidden={cardState ? "false" : "true"}>
        <header
          className="card-header is-flex is-align-items-center "
          style={{ cursor: "pointer" }}
          onClick={toggleCardState}
        >
          <span className="circle">{number}</span>

          <p className="p-5 has-text-weight-medium is-size-5">{title}</p>
        </header>
        <div
          className="card-content"
          style={{
            maxHeight: cardState ? 1000 : 0,
            padding: cardState ? null : 0,
            overflow: "hidden",
            transition: "padding 250ms ease"
          }}
        >
          <div className="content">{children} </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
