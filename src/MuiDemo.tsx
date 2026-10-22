
import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

function MuiDemo() {
    const [heightModifier, setHeightModifier] = React.useState(1);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Material UI Demo</h2>

            <ButtonGroup
                variant="contained"
                size="medium"
                aria-label="button group"
            >
                <Button
                    onClick={() =>
                        setHeightModifier(heightModifier + 1)
                    }
                >
                    Increase shadow
                </Button>

                <Button
                    onClick={() =>
                        setHeightModifier(
                            Math.max(0, heightModifier - 1)
                        )
                    }
                >
                    Decrease shadow
                </Button>
            </ButtonGroup>

            <div style={{ marginTop: '20px' }}>
                <Button
                    variant="contained"
                    sx={{ boxShadow: heightModifier }}
                >
                    Shadow level: {heightModifier}
                </Button>
            </div>
        </div>
    );
}

export default MuiDemo;
