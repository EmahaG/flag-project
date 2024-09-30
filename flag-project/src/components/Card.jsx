import './Card.css'
import { Link, useLoaderData } from "react-router-dom";

const Card = ({countries}) => {
    // const countries = useLoaderData()

    return ( 
        <div className="card-container">
            {countries.map((country, i) => {
                return (
                    <Link to={`/country/${country.name.common}`} className="card" key={i}>
                        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                        <div className="country-text">
                            <h3>{country.name.common}</h3>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
     );
}

export const countriesLoader = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    if (!res.ok) {
        throw new Error ('Failed to fetch countries');
    }

    const data = await res.json();
    const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
    );
    return sortedCountries;
}
 
export default Card;