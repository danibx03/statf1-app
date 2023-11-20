import React, { useState } from 'react';
import axios from 'axios';
import '../pages/SearchBar.css';

export const SearchBar = ({ driverChoice }) => {
  const [input, setInput] = useState("");
  const [info, setInfo] = useState({
    qualyinfo: null,
    raceinfo: null,
  });

  const fetchData = async () => {
    try {
      const qualy_results = await axios.get(`http://ergast.com/api/f1/2023/circuits/${input}/drivers/${driverChoice}/qualifying.json`);
      const race_results = await axios.get(`http://ergast.com/api/f1/2023/circuits/${input}/drivers/${driverChoice}/results.json`);

      setInfo({
        qualyinfo: qualy_results.data,
        raceinfo: race_results.data,
      });
    } catch (error) {
      console.error("Issue accessing driver's racing data: ", error);
    }
  };

  const getData = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div className='infobox'>
      <div className='bardesign'>
        <input
          placeholder="Search 2023 Circuits"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={getData}
        />
      </div>
      <div className="item">
        Qualifying Result: {info.qualyinfo?.MRData?.RaceTable?.Races[0]?.QualifyingResults[0]?.position}
      </div>
      <div className='item'>
        Final Race Position: {info.raceinfo?.MRData?.RaceTable?.Races[0]?.Results[0]?.position}
      </div>
    </div>
  );
};
