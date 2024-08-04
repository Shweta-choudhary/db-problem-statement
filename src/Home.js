import React, { useState } from "react";
import "./Home.css";

const bondsData = [
  { id: 1, name: "Bond A", value: 100 },
  { id: 2, name: "Bond B", value: 200 },
  { id: 3, name: "Bond C", value: 150 },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [bonds, setBonds] = useState(bondsData);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortValue(value);
    if (value === "asc") {
      setBonds([...bonds].sort((a, b) => a.value - b.value));
    } else if (value === "desc") {
      setBonds([...bonds].sort((a, b) => b.value - a.value));
    }
  };

  const filteredBonds = bonds.filter((bond) =>
    bond.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <nav className="navbar">
        <h2>Bond Dashboard</h2>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search bonds..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="dashboard">
        <div className="sort-dropdown">
          <label>Sort by value:</label>
          <select value={sortValue} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <table className="bonds-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {filteredBonds.map((bond) => (
              <tr key={bond.id}>
                <td>{bond.id}</td>
                <td>{bond.name}</td>
                <td>{bond.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
