import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "react-bootstrap/Table";
import "../styles/categories.css";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Form,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Categories = () => {
  const categories = [
    {
      id: 123,
      name: "Milk",
      description: "lorem jnjnjnjabja",
      status: true,
    },
    {
      id: 125,
      name: "Fruits",
      description: "lorem syywyvgwgvgvgw",
      status: false,
    },
    {
      id: 189,
      name: "vegetables",
      description: "loabhbhbwk",
      status: true,
    },
  ];

  return (
    <div className="dashboard">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="jumbotron jumbotron-fluid container">
        {/* <h1>Junmkamdk</h1> */}

        <div className="tabledata">
          <div className="tblheader">
            <h3 className="text-dark">Categories</h3>
            <div className="mt-5 searchbar">
             
                  <Form className="d-flex">
                    <InputGroup>
                      <InputGroup.Text className="bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9.5 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM1 9.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M16.853 16.854a.5.5 0 0 0 .707 0l3.793-3.793a.5.5 0 0 0 0-.707l-3.793-3.793a.5.5 0 0 0-.707.707L19.293 12H10.5a.5.5 0 0 0 0 1h8.793l-2.646 2.646a.5.5 0 0 0 0 .707z"
                          />
                        </svg>
                      </InputGroup.Text>
                      <FormControl
                        type="search"
                        className="me-2"
                        placeholder="Search"
                      />
                    </InputGroup>
                  </Form>
               
            </div>
            <button className="btn addbtn">Add Categories</button>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th> Name</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((data, key) => {
                return (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.description}</td>
                    <td>
                      {" "}
                      {data.status ? (
                        <Badge bg="success">Active</Badge>
                      ) : (
                        <Badge bg="danger">Inactive</Badge>
                      )}
                      <div className="controls">
                        <div className="ml-5 mr-5">
                          <FontAwesomeIcon icon={faEdit} />
                        </div>
                        <div className="ml-5">
                          {" "}
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
