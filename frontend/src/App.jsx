import { useState } from "react";

function App() {
    const [names, setNames] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        // Comma-separated string into array of strings, remove space & empty string
        const namesArray = names
            .split(",")
            .map((n) => n.trim())
            .filter(Boolean);

        try {
            const res = await fetch("http://localhost:3001/api/assign", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ names: namesArray }),
            });

        const json = await res.json();
        setResponse(JSON.stringify(json, null, 2));

        } catch (err) {
            setResponse("Unexpected error: " + err.message);
        }
    };

    return (
        <div>
        <h1>Assign names</h1>

        <form onSubmit = {handleSubmit}>
            <input
            type = "text"
            placeholder = "Type names here"
            value = {names}
            onChange = {(e) => setNames(e.target.value)}
            />
            <button type = "submit">Send</button>
        </form>

        <h2>Assignment:</h2>
        <pre>{response}</pre>
        </div>
    );
}

export default App;
