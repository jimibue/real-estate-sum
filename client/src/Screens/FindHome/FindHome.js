import React, { useState, useEffect } from "react";
import { Form, List } from "semantic-ui-react";
import axios from "axios";

export default function (props) {
  const [agents, setAgents] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [showBuyers, setShowBuyers] = useState(false);
  async function getAgents() {
    //TODO: axios call here
    try {
      //assuming when api is ready
      let res = await axios.get("/api/agents");
      setAgents(res.data);
      setShowBuyers(true);
    } catch (e) {
      //TODO: error handling
    }
  }
  useEffect(() => {
    getAgents();
  }, []);
  function getAgentsOptions() {
    return agents.map((agent) => ({
      key: agent.id,
      text: `${agent.first_name} ${agent.last_name}`,
      value: agent.id,
    }));
  }
  function getBuyersOptions() {
    return buyers.map((buyer) => ({
      key: buyer.id,
      text: `${buyer.first_name} ${buyer.last_name}`,
      value: buyer.id,
    }));
  }

  async function getBuyers(e, { value }) {
    console.log(value);
    const agentId = value;
    //TODO axios call using value(ie agent id) to get buyers
    try {
      const res = await axios.get(`/api/agents/${agentId}`);
      setBuyers(res.data);
    } catch (e) {
      //TODO: add error handling
    }
  }
  async function getBuyersList(e, { value }) {
    console.log(value);
    const buyerId = value;
    try {
      const res = await axios.get(`/api/xbuyers_list/${buyerId}`);
      setProperties(res.data); // this might not be res.data need to check
    } catch (e) {
      setProperties([
        { sq_ft: 123124, city: "Sandy", price: 123232.0 },
        { sq_ft: 23124, city: "Draper", price: 13232.0 },
      ]);
    }
  }

  const getProperties = () => {
    return properties.map((p) => {
      return (
        <List key={p.id}>
          <List.Content>
            <List.Header>
              ${p.price} - square feet: {p.sq_ft}
            </List.Header>
            <List.Header>{p.city}</List.Header>
          </List.Content>
        </List>
      );
    });
  };
  return (
    <div>
      <h1>Find Home</h1>
      <Form.Select options={getAgentsOptions()} onChange={getBuyers} />
      {showBuyers && (
        <Form.Select options={getBuyersOptions()} onChange={getBuyersList} />
      )}
      {properties.length > 0 && getProperties()}
    </div>
  );
}
