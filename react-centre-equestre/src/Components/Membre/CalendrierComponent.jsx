import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';
import Modal from 'react-modal';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../Styles/Membre/Calendrier.css'

moment.locale('fr');
const localizer = momentLocalizer(moment);

const CalendrierCours = () => {
    
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const [availableSpots, setAvailableSpots] = useState({
        'Galop 2': {
            'Lundi': 10,
            'Mardi': 1,
            'Mercredi': 10,
            'Jeudi': 10,
            'Vendredi': 10,
        },
        'Cours d"informatique': {
            'Lundi': 10,
            'Mardi': 10,
            'Mercredi': 10,
            'Jeudi': 10,
            'Vendredi': 10,
        },
        'Cours de français': {
            'Lundi': 10,
            'Mardi': 10,
            'Mercredi': 10,
            'Jeudi': 10,
            'Vendredi': 10,
        },
        'Cours de sciences': {
            'Lundi': 10,
            'Mardi': 10,
            'Mercredi': 10,
            'Jeudi': 10,
            'Vendredi': 10,
        },
        'Cours d"histoire': {
            'Lundi': 10,
            'Mardi': 10,
            'Mercredi': 10,
            'Jeudi': 10,
            'Vendredi': 10,
        },
        'Cours de musique': {
            'Lundi': 10,
            'Mardi': 10,
            'Mercredi': 10,
            'Jeudi': 10,
            'Vendredi': 10,
        },
        'Cours de sport': {
            'Lundi': 10,
            'Mardi': 10,
            'Mercredi': 10,
            'Jeudi': 10,
            'Vendredi': 10,
        },
        // Add other courses as needed
    });

    const generateWeeklyEvents = (numberOfWeeks = 52) => {
        const weekdays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        const currentDate = moment();
        const weeklyEvents = [];

        for (let week = 0; week < numberOfWeeks; week++) {
            weekdays.forEach(day => {
                const courses = getCoursesForDay(day);

                courses.forEach(course => {
                    const start = moment(currentDate)
                        .day(day === 'Sunday' ? 7 : weekdays.indexOf(day) + 1)
                        .add(week, 'weeks')
                        .startOf('day')
                        .add(course.startHour, 'hours')
                        .toDate();

                    const end = moment(currentDate)
                        .day(day === 'Sunday' ? 7 : weekdays.indexOf(day) + 1)
                        .add(week, 'weeks')
                        .startOf('day')
                        .add(course.endHour, 'hours')
                        .toDate();

                    weeklyEvents.push({
                        title: course.title,
                        start,
                        end,
                        availableSpots: availableSpots[course.title][day], // Add availableSpots information to each event
                    });
                });
            });
        }

        return weeklyEvents;
    };

    const getCoursesForDay = (day) => {
        // Définissez les cours pour chaque jour de la semaine
        switch (day) {
            case 'Lundi':
                return [
                    { title: 'Galop 2', startHour: 16, endHour: 17 },
                    { title: 'Cours d"informatique', startHour: 14, endHour: 15 },
                ];
            case 'Mardi':
                return [
                    { title: 'Cours de français', startHour: 10, endHour: 11 },
                    { title: 'Galop 2', startHour: 9, endHour: 10 },
                    // Ajoutez d'autres cours au besoin
                ];
            case 'Mercredi':
                return [
                    { title: 'Cours de sciences', startHour: 11, endHour: 12 },
                ];
            case 'Jeudi':
                return [
                    { title: 'Cours d"histoire', startHour: 14, endHour: 15 },
                    { title: 'Cours de musique', startHour: 16, endHour: 17 },
                ];
            case 'Vendredi':
                return [
                    { title: 'Cours de sport', startHour: 15, endHour: 16 },
                ];
            default:
                return [];
        }
    };

    const events = generateWeeklyEvents();

    const handleSelectEvent = event => {
        setSelectedEvent(event);
    };




    const getFormattedDay = () => {
        if (selectedEvent) {
            const formattedDay = moment(selectedEvent.start).locale('fr').format('dddd');
            return formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1).toLowerCase();
        }
        return '';
    };


    const dayOfWeekFormatted = getFormattedDay();

    const handleRegister = () => {
        if (selectedCourse) {
            const title = selectedCourse.title;
            const dayOfWeekFormatted = getFormattedDay();
            const availableSpotsForDay = availableSpots[title];

            if (availableSpotsForDay && availableSpotsForDay[dayOfWeekFormatted] > 0) {
                setAvailableSpots((prevSpots) => {
                    const updatedSpots = { ...prevSpots };
                    updatedSpots[title] = { ...prevSpots[title] };
                    updatedSpots[title][dayOfWeekFormatted] -= 1;
                    return updatedSpots;
                });
                alert('Inscription réussie !');
                handleCloseModal();
            } else {
                alert('Désolé, toutes les places pour ce cours sont prises.');
            }
        }
    };


    const EventComponent = ({ event }) => {
        const isFull = event.availableSpots === 0;
        const eventClassName = `rbc-event ${isFull ? 'full' : ''}`;

        const handleEventClick = () => {
            if (!isFull) {
                setSelectedCourse(event);
                setIsModalOpen(true);
            }
        };
        return (
            <div className={eventClassName} onClick={handleEventClick}>
                <span className='evenement_titre'>{event.title}</span>
                <p className='places_dispo'>{isFull ? 'Complet' : `Places disponibles : ${event.availableSpots}`}</p>
            </div>
        );
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const CourseModal = () => {
        return (
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel="Cours Details Modal">
                <h2 className='cours_modal_title'>{selectedCourse ? selectedCourse.title : ''}</h2>
                <p className='nb_place'>Places disponibles : {selectedCourse ? selectedCourse.availableSpots : 0}</p>
                <div className='btn_modal'>
                    <button onClick={handleRegister}>S'inscrire</button>
                    <button onClick={handleCloseModal}>Fermer</button>
                </div>
            </Modal>
        );
    };


    //  useEffect(() => {
    //    console.log('Available Spots Updated:', availableSpots);
    //  }, [availableSpots]);




    return (
        <div className='calendrier_main'>
            {/* <h1 className="title_calendar">Calendrier des cours</h1> */}

            <Calendar
                localizer={localizer}
                events={generateWeeklyEvents()}
                startAccessor="start"
                endAccessor="end"
                views={['week']}
                step={60}
                timeslots={1}
                defaultView="week"
                defaultDate={moment().toDate()}
                components={{
                    timeSlotWrapper: (props) => <div {...props} style={{ height: '75px'}} />,
                    event: EventComponent,
                }}
                onSelectEvent={handleSelectEvent}
                min={moment().set({ hour: 9, minute: 0, second: 0, millisecond: 0 }).toDate()}
                max={moment().set({ hour: 21, minute: 0, second: 0, millisecond: 0 }).toDate()}
            />

            <CourseModal />
        </div>
    );
}

export default CalendrierCours;