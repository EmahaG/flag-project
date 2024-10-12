// src/pages/CountryPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryPage.css";
import backArrow from "./assets/arrow-left-dark.svg";

const CountryPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Failed to fetch country details", error);
      }
    };

    const fetchAllCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setAllCountries(data);
      } catch (error) {
        console.error("Failed to fetch all countries", error);
      }
    };

    fetchCountry();
    fetchAllCountries();
  }, [name]);

  if (!country) return <p>Loading country details...</p>;

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : country.name.common;

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <div className="country-page">
      <div className="container">
        <div className="back-container">
          <Link to="/" className="back">
            <img 
                className="back-arrow" 
                src={backArrow}
                alt="back arrow icon"
            />
            <p>BACK</p>
          </Link>
        </div>
        <div className="country-container">
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
          <div className="country-textbox">
            <h1>{country.name.common}</h1>
            <div className="country-data">
              <div className="country-data-left">
                <p><span className="label">Population:</span> {country.population}</p>
                <p><span className="label">Region:</span> {country.region}</p>
                <p><span className="label">Capital:</span> {country.capital ? country.capital[0] : "N/A"}</p>
                <p><span className="label">Native name:</span> {nativeName}</p>
              </div>
              <div className="country-data-right">
                <p><span className="label">Top level domain:</span> {country.tld ? country.tld[0] : "N/A"}</p>
                <p><span className="label">Currencies:</span> {currencies}</p>
                <p><span className="label">Language:</span> {languages}</p>
              </div>
            </div>
            <div className="border-countries">
            <span className="label" id="border-label">Border countries:</span>
              <div className="borders-buttons">
                {country.borders && country.borders.length > 0
                  ? country.borders
                      .map((border) => {
                        // Find the country name corresponding to the border code
                        const borderCountry = allCountries.find(
                          (c) => c.cca3 === border
                        ); // Use cca3 for 3-letter country codes

                        // Ensure borderCountry exists before trying to access its name
                        if (borderCountry) {
                          return (
                            <Link
                              key={border}
                              to={`/country/${borderCountry.name.common}`}
                              className="border-link"
                            >
                              {borderCountry.name.common}{" "}
                              {/* Display the name instead of the code */}
                            </Link>
                          );
                        } else {
                          return null; // Return null if no border country is found
                        }
                      })
                      .reduce((prev, curr) => [prev, " ", curr]) // This adds spaces between the links
                  : "This country has no border countries"}
              </div>
            </div>
          </div>

          {/* <div className="border-countries">
            <p>Border Countries:</p>
            {country.borders && country.borders.length > 0 ? (
              <ul>
                {country.borders.map((borderCode) => (
                  <p key={borderCode}>
                    <Link className="borders" to={`/country/${borderCode}`}>
                      {borderCode}
                    </Link>
                  </p>
                ))}
              </ul>
            ) : (
              <p>None</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
