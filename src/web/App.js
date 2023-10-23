import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
export const App = () => {
    const [cityName, setCityName] = useState("");
    const [countryName, setCountryName] = useState("");
    const addCountry = useCallback(() => {
        window.api.invoke.insertCountry({ id: "", name: countryName }).then((v) => {
            if (v) {
                alert("Added Country");
            }
            else {
                alert("Unable to add country");
            }
        });
    }, []);
    const addCity = useCallback(() => {
        window.api.invoke.insertCity({ id: Math.random(), name: cityName });
    }, []);
    return (_jsxs("div", { children: [_jsx("input", { type: "text", onChange: (e) => setCountryName(e.currentTarget.value), placeholder: "Country Name" }), _jsx("button", { onClick: addCountry, children: "add country" }), _jsx("input", { type: "text", onChange: (e) => setCityName(e.currentTarget.value), placeholder: "City Name" }), _jsx("button", { onClick: addCity, children: "add city" })] }));
};
