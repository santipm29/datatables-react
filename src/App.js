import React, { useState, useEffect } from "react";
import "./style.css";
import DataTable from "react-data-table-component";
import { ExpandedComponent } from "./components/ExpandedComponent";

export default function App() {
  / Configuration Datatable /;
  const columns = [
    { name: "Name", selector: "name", sortable: true },
    { name: "Region", selector: "region", sortable: true },
    { name: "Subregion", selector: "subregion", sortable: true },
    {
      name: "Numeric Code",
      selector: "numericCode",
      maxWidth: "10px",
      sortable: true
    },
    {
      name: "Flag",
      cell: row => (
        <img
          className="img-fluid rounded"
          height="55px"
          width="90px"
          alt={row.flag}
          src={row.flag}
        />
      )
    },
    {
      name: "Options",
      cell: row => (
        <a
          className="btn btn-info"
          href={row.flag}
          download={row.flag + ".jpg"}
        >
          Download
        </a>
      )
    }
  ];

  const [countries, setCountries] = useState([]);

  / Get countries /;
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(countriesResponse => setCountries(countriesResponse))
      .catch(() => alert("Error loading countries"));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-white">Learning datatables in React</h1>
      <DataTable
        title="Countries list"
        columns={columns}
        data={countries}
        expandableRows
        expandableRowsComponent={<ExpandedComponent />}
        pagination
      />
    </div>
  );
}
