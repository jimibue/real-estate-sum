import React, { useState, useEffect } from "react";
import AvailableTable from "./AvailableTable";
import axios from "axios";

export default function Available() {
  const [agents, setAgents] = useState([]);

  // formatData(data){
  //   []

  // }

  async function getAgentData() {
    let res = await axios.get("/api/properties");

    //TODO:  Format data
    formatData(res.data);
    debugger;

    // {beds: 4
    //   baths: 8
    // city: "Sandy"
    // email: "xuan@rohan.com"
    // first_name: "Earlean"
    // id: 1
    // last_name: "O'Hara"
    // price: 620756
    // sold: false
    // sq_ft: 5335
    // street: "228 Abernathy Burg"
    // zip: "31593-7711"}
  }

  useEffect(() => {
    //TODO: setup axios call
    getAgentData();

    setAgents([
      {
        agent_id: "1",
        first_name: "John",
        last_name: "",
        properties: [
          {
            id: 1,
            price: "12341234",
            beds: 2,
            baths: 3,
            sq_ft: 2334,
            street: "131233",
            city: "131df233",
            zip: "131df233",
          },
          {
            id: 1,
            price: "12341234",
            beds: 2,
            baths: 3,
            sq_ft: 2334,
            street: "131233",
            city: "131df233",
            zip: "131df233",
          },
        ],
      },
      {
        agent_id: "1",
        first_name: "John",
        last_name: "",
        properties: [
          {
            id: 3,
            price: "12asfd341234",
            beds: 2,
            baths: 3,
            sq_ft: 2334,
            street: "131233",
            city: "131df233",
            zip: "131df233",
          },
          {
            id: 4,
            price: "sdf41234",
            beds: 2,
            baths: 3,
            sq_ft: 2334,
            street: "131233",
            city: "131df233",
            zip: "131df233",
          },
        ],
      },
    ]);
  }, []);

  return (
    <div>
      {agents.map((agent) => (
        <div>
          <h1> {agent.first_name}</h1>
          <AvailableTable properties={agent.properties} />
          <hr />
        </div>
      ))}
    </div>
  );
}
