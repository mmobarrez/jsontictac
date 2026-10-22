import React from 'react';
import { Button } from '@mui/material';

function JsonDemo() {
    const student = {
        name: "Student",
        course: "Business Information Technology",
        year: 2026
    };

    const [jsonText, setJsonText] = React.useState("");

    function convertToJson() {
        const result = JSON.stringify(student, null, 2);
        setJsonText(result);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>JSON Demo</h2>

            <p>Convert a JavaScript object into JSON.</p>

            <Button
                variant="contained"
                onClick={convertToJson}
            >
                Convert to JSON
            </Button>

            <pre style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
                {jsonText}
            </pre>
        </div>
    );
}

export default JsonDemo;
