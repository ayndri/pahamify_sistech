import React, { Children, ReactNode } from "react";
import { Input } from "../Input";
import PropTypes from 'prop-types';
import { Tab, Tabs, Typography, Box } from '@mui/material';
import { Course } from "../Card";
import { Benefit } from "../Card/Benefit";

type SoalProps = {
    title: string;
    description: string;
}

const courses = [
    {
        id: 1,
        title: "IPA X",
        courses: [
            {
                id: 1,
                title: "Matematika Wajib",
                image: "/images/Courses/matematika.png",
            },
            {
                id: 2,
                title: "Sejarah Wajib",
                image: "/images/Courses/sejarah.png",
            },
            {
                id: 3,
                title: "Ekonomi",
                image: "/images/Courses/ekonomi.png",
            },
            {
                id: 4,
                title: "Sosiologi",
                image: "/images/Courses/sosiologi.png",
            },
            {
                id: 5,
                title: "Geografi",
                image: "/images/Courses/geografi.png",
            },
            {
                id: 6,
                title: "Sejarah Peminatan",
                image: "/images/Courses/sejarahpeminatan.png",
            },
            {
                id: 7,
                title: "Bahasa Inggris",
                image: "/images/Courses/inggris.png",
            },
            {
                id: 8,
                title: "Bahasa Indonesia",
                image: "/images/Courses/indonesia.png",
            },
        ],
    },
    {
        id: 2,
        title: "IPA XI",
        courses: [
            {
                id: 1,
                title: "Matematika Wajib",
                image: "/images/Courses/matematika.png",
            },
            {
                id: 2,
                title: "Geografi",
                image: "/images/Courses/geografi.png",
            },
            {
                id: 3,
                title: "Sejarah Peminatan",
                image: "/images/Courses/sejarahpeminatan.png",
            },
            {
                id: 4,
                title: "Bahasa Inggris",
                image: "/images/Courses/inggris.png",
            },
            {
                id: 5,
                title: "Bahasa Indonesia",
                image: "/images/Courses/indonesia.png",
            },
        ],
    },
    {
        id: 3,
        title: "IPA XII",
        courses: [
            {
                id: 1,
                title: "Matematika Wajib",
                image: "/images/Courses/matematika.png",
            },
            {
                id: 2,
                title: "Geografi",
                image: "/images/Courses/geografi.png",
            },
            {
                id: 3,
                title: "Bahasa Inggris",
                image: "/images/Courses/inggris.png",
            },
            {
                id: 4,
                title: "Bahasa Indonesia",
                image: "/images/Courses/indonesia.png",
            },
        ],
    },
    {
        id: 4,
        title: "IPS X",
        courses: [
            {
                id: 1,
                title: "Sejarah Wajib",
                image: "/images/Courses/sejarah.png",
            },
            {
                id: 2,
                title: "Ekonomi",
                image: "/images/Courses/ekonomi.png",
            },
            {
                id: 3,
                title: "Sosiologi",
                image: "/images/Courses/sosiologi.png",
            },
            {
                id: 4,
                title: "Geografi",
                image: "/images/Courses/geografi.png",
            },
            {
                id: 5,
                title: "Bahasa Indonesia",
                image: "/images/Courses/indonesia.png",
            },
        ],
    },
    {
        id: 5,
        title: "IPS XI",
        courses: [
            {
                id: 1,
                title: "Ekonomi",
                image: "/images/Courses/ekonomi.png",
            },
            {
                id: 2,
                title: "Sosiologi",
                image: "/images/Courses/sosiologi.png",
            },
            {
                id: 3,
                title: "Geografi",
                image: "/images/Courses/geografi.png",
            },
            {
                id: 4,
                title: "Sejarah Peminatan",
                image: "/images/Courses/sejarahpeminatan.png",
            },
        ],
    },
    {
        id: 6,
        title: "IPS XII",
        courses: [
            {
                id: 1,
                title: "Sejarah Wajib",
                image: "/images/Courses/sejarah.png",
            },
            {
                id: 2,
                title: "Ekonomi",
                image: "/images/Courses/ekonomi.png",
            },
            {
                id: 3,
                title: "Bahasa Inggris",
                image: "/images/Courses/inggris.png",
            },
            {
                id: 4,
                title: "Bahasa Indonesia",
                image: "/images/Courses/indonesia.png",
            },
        ],
    },
    {
        id: 7,
        title: "UTBK",
        courses: [
            {
                id: 1,
                title: "Sosiologi",
                image: "/images/Courses/sosiologi.png",
            },
            {
                id: 2,
                title: "Geografi",
                image: "/images/Courses/geografi.png",
            },
            {
                id: 3,
                title: "Sejarah Peminatan",
                image: "/images/Courses/sejarahpeminatan.png",
            },
            {
                id: 4,
                title: "Bahasa Inggris",
                image: "/images/Courses/inggris.png",
            },
            {
                id: 5,
                title: "Bahasa Indonesia",
                image: "/images/Courses/indonesia.png",
            },
        ],
    },
    {
        id: 8,
        title: "MANDIRI",
        courses: [
            {
                id: 1,
                title: "Matematika Wajib",
                image: "/images/Courses/matematika.png",
            },
            {
                id: 2,
                title: "Sejarah Wajib",
                image: "/images/Courses/sejarah.png",
            },
            {
                id: 3,
                title: "Geografi",
                image: "/images/Courses/geografi.png",
            },
            {
                id: 4,
                title: "Sejarah Peminatan",
                image: "/images/Courses/sejarahpeminatan.png",
            },
            {
                id: 5,
                title: "Bahasa Indonesia",
                image: "/images/Courses/indonesia.png",
            },
        ],
    },
];

function TabPanel(props: { children: ReactNode; value: number; index: number }) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>

                    {/* <Typography> */}
                    <div className="tabcontent">
                        {children}
                    </div>

                    {/* </Typography> */}

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

function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

function Soal({ title, description }: SoalProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    return (
        <section className="course">
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="search-container">
                <Input />
                </div>
                
                <div className="tabsoal">
                    <Tabs value={value} onChange={handleChange} aria-label="Course Tabs">
                        {courses.map((item: any, index: number) => (
                            <Tab className="tablinks" key={index} label={item.title} />
                        ))}
                    </Tabs>

                    {courses.map((item: any, index: number) => (
                        <TabPanel key={index} value={value} index={index}>
                            <Benefit pelajaran={item.courses} />
                        </TabPanel>
                    ))}
                </div>
            </div>
        </section>
    )
}

export { Soal };