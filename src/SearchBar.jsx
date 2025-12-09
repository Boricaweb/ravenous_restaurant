import { useState } from 'react';

const SearchBar = ({onSearch}) => {
    //Set Hook useState part
    const [place, setPlace] = useState(''); //Store place input
    const [number, setNumber] = useState(''); //Store number input

    //Function to return input values to App component
    const returnValue = (event) => {
        event.preventDefault();
        //Send input values to App component
        onSearch(place, number);
    }

    return (
    <>
        <div className="container-fluid p-4 d-flex flex-column justify-content-center">
            <form
            onSubmit={returnValue} /*when submit, call returnValue function*/
            className="d-flex flex-column align-items-center"
            >
                <div className="row w-75 d-flex justify-content-center">
                    <input
                    name="place"
                    className="form-control col m-2"
                    type="text"
                    placeholder="Enter your place..."
                    onChange={(e) => setPlace(e.target.value)} /*Return place name to useState*/
                    />
                    <input
                    name="number"
                    className="form-control col m-2"
                    type="number"
                    placeholder="Enter number of restaurants..."
                    min="1"
                    max="20"
                    onChange={(e) => setNumber(e.target.value)} /*Return number of place to useState*/
                    />
                </div>
                <button
                    className="btn btn-primary row m-2 d-flex justify-content-center"
                    type="submit"
                    style={{ width: "6rem" }}
                >
                    Let's go!
                </button>
            </form>
        </div>
    </>
    );
}

export default SearchBar;