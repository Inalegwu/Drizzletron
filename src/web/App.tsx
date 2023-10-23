import { useCallback, useEffect, useState } from "react";

export const App = () => {
  const [cityName, setCityName] = useState<string>("");
  const [countryName, setCountryName] = useState<string>("");

  const [countries, setCountries] = useState<
    { name: string | null; id: string }[]
  >([]);

  const addCountry = useCallback(() => {
    window.api.invoke.insertCountry({ id: "", name: countryName }).then((v) => {
      if (v) {
        alert("Added Country");
      } else {
        alert("Unable to add country");
      }
    });
  }, []);

  useEffect(() => {
    window.api.invoke.geCountries().then((v) => {
      setCountries(v);
    });
  });

  const addCity = useCallback(() => {
    window.api.invoke.insertCity({ id: Math.random(), name: cityName });
  }, []);

  return (
    <div>
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

      {countries.map((v) => {
        return (
          <h1 key={v.id}>
            {v.id} -{v.name}
          </h1>
        );
      })}
    </div>
  );
};
