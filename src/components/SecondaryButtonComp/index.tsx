import { Button } from "@mui/material";
import { primary } from "../../theme/palette";
import React from "react";

interface SecondaryButton {
    children: React.ReactNode;
    onClick?: () => void;
}

export default function SecondaryButtonComp({ children, onClick }: SecondaryButton) {

    return (
        <Button sx={{
            width: '64px',
            height: "44px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px',
            border: `1px solid ${primary.main}`,
            borderRadius: '4px',
        }}
        onClick={onClick}
        >
            <img src={`${children}`} alt="" />
        </Button>
    )
}