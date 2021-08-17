import React, { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import "./App.css";

function App() {
    const [stats, setStats] = useState(null);
    return (
        <div className="App">
            <Input callback={setStats} />
            <Result stats={stats} />
        </div>
    );
}

export default App;
