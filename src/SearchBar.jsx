const SeachBar = () => {
    return (
        <div className='container-fluid p-4 d-flex flex-column justify-content-center'>
            <div className='row px-5 d-flex justify-content-center'>
                <input className='form-control col m-2' type="text" placeholder="Enter your place..." />
                <input className='form-control col m-2' type="number" placeholder="Enter number of restaurants..." min="1" max="20"/>
            </div>
            <div className='row col m-2 d-flex justify-content-center'>
                <button className='btn btn-primary m-2 d-flex justify-content-center' type='submit' style={{width: '5rem'}}>Search</button>
            </div>
                    </div>
    );
}

export default SeachBar;