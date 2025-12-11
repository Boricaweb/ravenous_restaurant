import { useState } from "react";
import SearchBar from "./SearchBar";
import Business from "./Business";
import BusinessList from "./BusinessList";

const App = () => {
  //Set Hook useState part
  const [placePara, setPlacePara] = useState(""); //Store place input
  const [numberPara, setNumberPara] = useState(""); //Store number input
  const [restaurants, setRestaurants] = useState([]); //Store fetched restaurant data

  //Function to receive input values from SearchBar component
  const searchValue = (place, number) => {
    setPlacePara(place);
    setNumberPara(number);
  };

  //Function to receive fetched data from Business component
  const returnData = (data) => {
    setRestaurants(data);
  };

  return (
    <>
      <SearchBar onSearch={searchValue} />
      {placePara !== "" && numberPara !== "" ? (
        <Business
          userPlace={placePara}
          userNumber={numberPara}
          onFetchApi={returnData}
        />
      ) : null}
      {placePara !== "" && numberPara !== "" ? (
        <BusinessList userRes={restaurants} />
      ) : (
        <p className="error-text text-center text-danger py-5 m-2">
          Please enter a new location and number of restaurants to search.
        </p>
      )}
    </>
  );
};

export default App;
