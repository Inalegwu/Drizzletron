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
  }, []);

  useEffect(() => {
    console.log("Here");

    window.api.invoke.geCountries().then((v) => {
      console.log(v);
      setCountries((d) => [...d, ...v]);
    });

    window.api.invoke.getCities().then((v) => {
      console.log(v);
      setCities((d) => [...d, ...v]);
    });
  }, [setCities, setCountries]);

  const addCity = useCallback(() => {
    window.api.invoke.insertCity({ id: v4(), name: cityName });
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
      <button onClick={addCity}>add cities</button>

      {countries.map((v) => {
        return (
          <div key={v.id}>
            {v.id} -{v.name}
          </div>
        );
      })}
      {cities.map((v) => {
        return (
          <div key={v.id}>
            {v.id} -{v.name}
          </div>
        );
      })}
    </div>
  );
};
