import React, { useMemo } from "react";
export const ExpandedComponent = ({ data: country }) => {
  const fixedNumber = number => {
    if (!number) return 0;
    return number.toLocaleString();
  };
  return (
    <div className="row mt-5 mb-5 container-fluid">
      <div className="col-md-4">
        <h2 className="h2">Polutation: </h2>
        <div className="card" />
        <label className="list-group-item">
          {fixedNumber(country.population)}
        </label>
      </div>
      <div className="col-md-4">
        <h2 className="h2">Languages</h2>
        <div className="card">
          <ul className="list-group list-group-flush">
            {country.languages.map(language => (
              <li className="list-group-item" key={language.iso639_1}>
                {language.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <h2 className="h2">Borders</h2>
        <div className="card">
          <ul className="list-group list-group-flush">
            {country.borders.map(border => (
              <li className="list-group-item" key={border}>
                {border}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
