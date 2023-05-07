import React from "react";
import Nav from "../Components/Nav";
import TableFilterTicket from "../Components/TableFilterTicket";
import bgHome from "../assets/img/castle.webp";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="relative">
        <img src={bgHome} className="opacity-60" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <button className="bg-blue-600 text-white text-xl px-10 py-3 rounded-lg shadow-xl  ">
            Create Ticket
          </button>
        </div>
      </div>
      <TableFilterTicket />
    </>
  );
};

export default Home;
