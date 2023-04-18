import React, { useState } from "react";
import "./style.css";

const Auto = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const countries = [
    {id: 1, name: "Belgium"},
    {id: 2, name: "India"},
    {id: 3, name: "Bolivia"},
    {id: 4, name: "Ghana"},
    {id: 5, name: "Japan" },
    {id: 6, name: "Canada" },
    {id: 7, name: "New Zealand" },
    {id: 8, name: "Italy"},
    {id: 9, name: "South Africa"},
    {id: 10, name: "China" },
    {id: 11, name: "Paraguay" },
    {id: 12, name: "Usa"},
    {id: 13, name: "France" },
    {id: 14, name: "Botswana" },
    {id: 15, name: "Spain" },
    {id: 16, name: "Senegal" },
    {id: 17, name: "Brazil" },
    {id: 18, name: "Denmark"},
    {id: 19, name: "Mexico" },
    {id: 20, name: "Australia"},
    {id: 21, name: "Tanzania"},
    {id: 22, name: "Bangladesh"},
    {id: 23, name: "Portugal" },

  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="main_box">
    <div style={{display:"flex" , justifyContent: "space-between"}}>
      <input
        className="input_box"
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      />
      <button>🔍</button>
    </div>

      {showSuggestions && (
        <div className="results">
          {countries
            .filter((val) => {
              if (searchInput === "") {
                return null;
              } else if (
                val.name.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div>
                  <p key={val.id} className="value">
                    {val.name}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Auto;
