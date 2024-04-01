import { useState } from "react";

import { Typography } from "@mui/material";
import { success } from "../../theme/palette";
import { pxToRem } from "../../theme/typography";

const STRINGLENGTH = 25;

export default function AdaptiveNameWineComp({ children }: { children: string }) {
    const [isShownFullName, setIsShownFullName] = useState(false);
    
    const conditionLength = children.length <= STRINGLENGTH;
    const cuttedName = children.substring(0, STRINGLENGTH) + '...';

    function handleChangeFullName() {
        if (isShownFullName) {
        return  setIsShownFullName(false)
        }
        setIsShownFullName(true)
    }

    return (
       conditionLength ? (<Typography 
          sx={{
            lineHeight: "normal",
            fontSize: pxToRem(18),
          }}
          variant="subtitle2"
        >
         {children}
        </Typography>) : <button style={{
                display: 'inline-block',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                padding: 0,
                textAlign: 'start',
                fontFamily: 'inherit',
                fontSize: pxToRem(18),
                fontWeight: 600,
                lineHeight: 'normal',
                color: success.dark,
                cursor: 'pointer',
            }} type="button" onClick={handleChangeFullName}>
                {isShownFullName ? children : cuttedName}
            </button>
    )
}