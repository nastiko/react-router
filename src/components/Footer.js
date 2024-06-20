import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  const goBack = () => {
    return navigate(-1)
    
  }

  const goForward = () => {
    return navigate(1)
    
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
