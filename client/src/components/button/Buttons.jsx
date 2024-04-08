import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Button, Typography } from "@mui/material";

function Buttons(props) {
    const { typographyCustomClass, text, handleOnClick, src, customClasses, bgColor, type, customClssSrc } = props;
    console.log("props: ", props);
    return (
        <Stack direction="row" spacing={2}>
            <Button className={customClasses} onClick={handleOnClick} type={type}>
                <Box sx={{
                    display: "flex",
                    textTransform: "none",
                    color: "black",
                    bgcolor:{bgColor}
                }}>
                    <Box className={customClssSrc}>
                        {src}
                    </Box>
                    <Typography sx={{
                        fontFamily: "Inter"
                    }} className={typographyCustomClass}>
                        {text}
                    </Typography>
                </Box>
            </Button>
        </Stack>
    );
}

export default Buttons;
