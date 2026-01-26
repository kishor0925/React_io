import React from "react";
import Navbar from "./Components/Navbar";
import Courselist from "./Components/Courselist";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5 px-3">
        <div className="row g-4 justify-content-center">
          
          <Courselist/>

        </div>
      </div>
    </>
  );
};

export default App;
