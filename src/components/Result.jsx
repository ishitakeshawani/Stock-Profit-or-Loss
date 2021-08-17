import React from "react";

const Result = ({ stats }) => {
    return (
        <div className="container__result">
            {stats ? (
                stats.init && stats.current && stats.number ? (
                    <Calculate stats={stats} />
                ) : (
                    <p>No pain No gain, and no gain no pain :)</p>
                )
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default Result;

const Calculate = ({ stats }) => {
    const init = stats.init;
    const number = stats.number;
    const current = stats.current;
    const invested = init * number;
    const currentValue = current * number;
    const value = invested - currentValue;

    const percentage = (current / init) * 100;

    if (value > 0) {
        return (
            <p style={{ color: "red" }}>
                Whoops!! Your loss is {Math.abs(value)} and loss Percentage is{" "}
                {(100 - percentage).toFixed(2)}% :(
            </p>
        );
    } else {
        return (
            <p style={{ color: "green" }}>
                Yay!! Your Profit is {Math.abs(value)} and profit Percentage is{" "}
                {(percentage - 100).toFixed(2)}%
            </p>
        );
    }
};
