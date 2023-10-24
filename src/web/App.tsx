import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

export const App = () => {
  const [cityName, setCityName] = useState<string>("");
  const [countryName, setCountryName] = useState<string>("");

  const [countries, setCountries] = useState<
    { name: string | null; id: string }[]
  >([]);

  const [cities, setCities] = useState<{ name: string | null; id: string }[]>(
    []
  );

  const addCountry = useCallback(() => {
    window.api.invoke
      .insertCountry({ id: v4(), name: countryName })
      .then((v) => {
        if (v) {
          alert("Added Country");
        } else {
          alert("Unable to add country");
        }
      });
  }, [countryName]);

  useEffect(() => {
    console.log("Here");

    window.api.invoke.geCountries().then((v) => {
      setCountries(v);
    });

    window.api.invoke.getCities().then((v) => {
      setCities(v);
    });
  }, [setCities, setCountries]);

  const addCity = useCallback(() => {
    window.api.invoke.insertCity({ id: v4(), name: cityName });
  }, [cityName]);

  const deleteCity = useCallback((id: string) => {
    window.api.invoke.deleteCity(id);
    alert("City Deleted");
  }, []);

  const deleteCountry = useCallback((id: string) => {
    window.api.invoke.deleteCountry(id);
    alert("Country Deleted");
  }, []);

  return (
    <div className="container">
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <input
            type="text"
            onChange={(e) => setCountryName(e.currentTarget.value)}
            placeholder="Country Name"
          />
          <button onClick={addCountry}>add country</button>
          <input
            type="text"
            onChange={(e) => setCityName(e.currentTarget.value)}
            placeholder="City Name"
          />
          <button onClick={addCity}>add city</button>
        </div>

        <div style={{ marginTop: "10px" }}>
          {countries.length === 0 && cities.length === 0 && (
            <h4 style={{ textAlign: "center" }}>No Data</h4>
          )}

          {countries.map((v) => {
            return (
              <div
                key={v.id}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {v.name}
                <button id="delete" onClick={() => deleteCountry(v.id)}>
                  delete
                </button>
              </div>
            );
          })}
          {cities.map((v) => {
            return (
              <div
                style={{
                  marginTop: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                }}
                key={v.id}
              >
                {v.name}
                <button id="delete" onClick={() => deleteCity(v.id)}>
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
