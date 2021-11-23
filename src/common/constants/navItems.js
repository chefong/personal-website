import gaEvents from './gaEvents';

export default [
    {
        to: 'about',
        num: '01.',
        name: 'About',
        clickEventId: gaEvents.ABOUT_NAV_CLICKED,
    },
    {
        to: 'projects',
        num: '02.',
        name: 'Projects',
        clickEventId: gaEvents.PROJECTS_NAV_CLICKED,
    },
    {
        to: 'experience',
        num: '03.',
        name: 'Experience',
        clickEventId: gaEvents.EXPERIENCE_NAV_CLICKED,
    },
];
