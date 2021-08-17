import React from "react";

const Input = ({ callback }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const val = {
            init: parseInt(e.target.initPrice.value),
            number: parseInt(e.target.number.value),
            current: parseInt(e.target.currentPrice.value),
        };

        callback(val);
    };

    return (
        <div className="container__input">
            <div className="wrapper">
                <div className="title">
                    <h2>Where's my Stonks?</h2>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="initPrice"
                        id="initPrice"
                        placeholder="Enter inital price here"
                        required
                    />
                    <input
                        type="number"
                        name="number"
                        id="number"
                        placeholder="Enter Number of Stocks here"
                        required
                    />
                    <input
                        type="number"
                        name="currentPrice"
                        id="currentPrice"
                        placeholder="Enter Current Price Here"
                        required
                    />
                    <input type="submit" value="TELL ME!" />
                </form>
            </div>
        </div>
    );
};


export default Input;
