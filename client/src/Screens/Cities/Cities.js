import React from "react";
import { Form, TableHeader, TableBody, Table } from "semantic-ui-react";
import Axios from "axios";

const cities = [
  "Sandy",
  "Draper",
  "SLC",
  "Orem",
  "Provo",
  "Ogden",
  "Layton",
  "Midvale",
  "Murray",
];
const options = cities.map((c) => {
  return { key: c, text: c, value: c };
});

export default class Cities extends React.Component {
  state = {
    city: "",
    properties: [],
  };

  // #TODO:: axios call and format data
  componentDidMount() {
    // axios call to get distinct cities
    // format data for options
    //const cities = ["draper", "sandy", "SLC"];
    // const options = cities.map((c) => {
    //   return { key: c, text: c, value: c };
    // });
  }
  handleChange = (e, { value }) => {
    console.log(e);
    console.log(value);
    // maybe api call or set state
    this.setState({ city: value, properties: [] }, () => {
      this.getProperties();
    });
  };
  getProperties() {
    const { city } = this.state;
    Axios.get(`/api/cities/${city}`)
      .then((res) => {
        console.log(res);
        this.setState({ properties: res.data });
      })
      .catch((e) => {
        //TODO handle error
      });
  }
  render() {
    const { properties } = this.state;
    return (
      <div>
        {/* select Input */}
        <Form.Select options={options} onChange={this.handleChange} />
        {/* Table */}
        <Table>
          <TableHeader>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Beds</Table.HeaderCell>
            <Table.HeaderCell>Bath</Table.HeaderCell>
            <Table.HeaderCell>Square Feet</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
          </TableHeader>
          <TableBody>
            {properties.map((p) => (
              <Table.Row>
                <Table.Cell>{p.price}</Table.Cell>
                <Table.Cell>{p.beds}</Table.Cell>
                <Table.Cell>{p.baths}</Table.Cell>
                <Table.Cell>{p.sq_ft}</Table.Cell>
                <Table.Cell>{p.street}</Table.Cell>
              </Table.Row>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
