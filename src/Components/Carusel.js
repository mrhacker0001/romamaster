import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import "./Carusel.css"

const images = [
    {
        text: 'Не увидел на сайте фотогалереи Ваших работ. Выше у Вас написано: "Только квалифицированные специалисты с образованием". Есть ли гарантия, что не придет слесарь с годовалым "опытом работ" с образованием историк и не сделает так, что через два года все потечет? Есть ли у Вас возможность посмотреть на фотографии работ Ваших мастеров и выбрать мастера по его работе? С какими материалами труб Вы работаете: пропилен, металлопластик, медь, сталь ...',
        ism: 'Елена'
    },
    {
        text: 'Не увидел на сайте фотогалереи Ваших работ. Выше у Вас написано: "Только квалифицированные специалисты с образованием". Есть ли гарантия, что не придет слесарь с годовалым "опытом работ" с образованием историк и не сделает так, что через два года все потечет? Есть ли у Вас возможность посмотреть на фотографии работ Ваших мастеров и выбрать мастера по его работе? С какими материалами труб Вы работаете: пропилен, металлопластик, медь, сталь ...',
        ism: 'Елена'
    },
    {
        text: 'Не увидел на сайте фотогалереи Ваших работ. Выше у Вас написано: "Только квалифицированные специалисты с образованием". Есть ли гарантия, что не придет слесарь с годовалым "опытом работ" с образованием историк и не сделает так, что через два года все потечет? Есть ли у Вас возможность посмотреть на фотографии работ Ваших мастеров и выбрать мастера по его работе? С какими материалами труб Вы работаете: пропилен, металлопластик, медь, сталь ...',
        ism: 'Елена'
    },
    {
        text: 'Не увидел на сайте фотогалереи Ваших работ. Выше у Вас написано: "Только квалифицированные специалисты с образованием". Есть ли гарантия, что не придет слесарь с годовалым "опытом работ" с образованием историк и не сделает так, что через два года все потечет? Есть ли у Вас возможность посмотреть на фотографии работ Ваших мастеров и выбрать мастера по его работе? С какими материалами труб Вы работаете: пропилен, металлопластик, медь, сталь ...',
        ism: 'Елена'
    },
    {
        text: 'Не увидел на сайте фотогалереи Ваших работ. Выше у Вас написано: "Только квалифицированные специалисты с образованием". Есть ли гарантия, что не придет слесарь с годовалым "опытом работ" с образованием историк и не сделает так, что через два года все потечет? Есть ли у Вас возможность посмотреть на фотографии работ Ваших мастеров и выбрать мастера по его работе? С какими материалами труб Вы работаете: пропилен, металлопластик, медь, сталь ...',
        ism: 'Елена'
    },
    {
        text: 'Не увидел на сайте фотогалереи Ваших работ. Выше у Вас написано: "Только квалифицированные специалисты с образованием". Есть ли гарантия, что не придет слесарь с годовалым "опытом работ" с образованием историк и не сделает так, что через два года все потечет? Есть ли у Вас возможность посмотреть на фотографии работ Ваших мастеров и выбрать мастера по его работе? С какими материалами труб Вы работаете: пропилен, металлопластик, медь, сталь ...',
        ism: 'Елена'
    },
];

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <div className="Carusel">
            <Box sx={{ maxWidth: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        backgroundColor: '#0f0f30',
                    }}
                >
                    <h1 style={{ fontWeight: '700', fontSize: '36px', color: '#fff', marginBottom: '30%' }}>Отзывы о нашей работе</h1>
                </Paper>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 2s ease-in-out' }}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="p"
                                    sx={{
                                        height: 555,
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        width: '80%',
                                        backgroundColor: '#fff',
                                        borderRadius: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '5% 4%',
                                    }}
                                >
                                    <p style={{ fontFamily: 'SF Pro Display', lineHeight: '35px', fontSize: "24px", textAlign: "center" }}>{step.text}</p>
                                    <h1>{step.ism}</h1>
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </SwipeableViews>

                <MobileStepper
                    sx={{
                        backgroundColor: '#0f0f30',
                        width: '10%',
                        display: 'flex',
                        gap: '10%',
                        marginTop: '3%'
                    }}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            sx={{
                                width: "100px",
                                height: '60px',
                                backgroundColor: 'rgba(247, 164, 0, 1)',
                                borderRadius: '20px',
                                fontSize: "50px"
                            }}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}
                            sx={{
                                width: "100px",
                                height: '60px',
                                backgroundColor: 'rgba(247, 164, 0, 1)',
                                borderRadius: '20px',
                                fontSize: "50px"
                            }}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }
                />
            </Box>
        </div>
    );
}

export default Carousel;
