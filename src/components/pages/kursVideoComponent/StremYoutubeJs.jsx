import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import data from "../../DB/VideoDBjs";

import { Box, Grid, Link } from "@mui/material";
import ReactPlayer from "react-player";


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function StremYoutubeJs() {

    const [expanded, setExpanded] = React.useState("");

    const [Url, setUrl] = React.useState();
    const handleChange = (panel, link) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        console.log(link);
        setUrl(link);
    };

    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    {data.map((d) => (
                        <Accordion
                            key={d.id}
                            expanded={expanded === d.id}
                            onChange={handleChange(d.id, d.linkvideo)}
                        >
                            <AccordionSummary
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                            >
                                <Typography>{d.kName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link>{d.linkvideo}</Link>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
                <Grid item xs={4}>
                    <ReactPlayer url={Url} controls />
                </Grid>
            </Grid>
        </Box>
    );
}

