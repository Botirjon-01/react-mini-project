import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./BasicTabs.css"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs(props) {


    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
       <div className='tablist'>
           
        <div className='tabscontent'>

                <div className='boxmessage'>

                    <div className="tabmodel">
                        <h2> {props.til} darslari to'liq kurs</h2><br />
                        <p>
                           {props.post}
                            
                            </p>

                    </div>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Tavsif" {...a11yProps(0)} />
                                <Tab label="dastur" {...a11yProps(1)} />
                                <Tab label="Sharh" {...a11yProps(2)} />
                                <Tab label="mentor" {...a11yProps(3)} />

                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>

                            <h2>Ma'lumot</h2>  <p>Nest.JS - bu Node.JS server ilovalarini yaratishga yordam beradigan framework. Nest frameworki TypeScript yordamida yaratilgan bo'lib, u ishlab chiquvchilarga yuqori darajada kengaytiriladigan va sinovdan o'tkaziladigan ilovalarni yaratishga imkon beradi. Nest.JS nima uchun ishlatiladi? NestJs monolitlar hamda mikroservislar uchun yaratilgan. U bilan siz Rest API, MVC ilovalari, GraphQL ilovalari, Web Sockets yoki CLI va CRON ishlarini yaratishingiz mumkin. Nest ilovalari TypeScript-da yozilganligi sababli, kompilyatsiya vaqtida xatolarni aniqlash kodni himoya qiladi va bir xil javob rejimiga ega bo'lgan bir nechta mikroservislarni yozishda xatolardan qochadi. NestJS dasturchilarga ajoyib, tartibli va engil mikroservislarni yaratish imkonini beradi.</p>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <h2>Kurs Dasturi</h2>
                            <span>1ta Bo'lim</span> <li>16ta Darslik</li>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <h2>Sharhlar</h2>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <h2>Mentor</h2>
                        </TabPanel>
                    </Box>
                   
                </div>

                <div className="boximg">
                    <img src={props.img} alt="node" />
                    <button> Kurslar </button>

                    <h2>Darslar</h2>
                    <h2>Umumiy soat</h2>
                    <h2>Darajasi</h2>
                    <h2>Til</h2>
                </div>
        </div>
       </div>
    );
}