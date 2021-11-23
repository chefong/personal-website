import gaEvents from './gaEvents';

export default [
    {
        name: 'GitHub',
        icon: ['fab', 'github'],
        link: 'https://github.com/chefong',
        clickEventId: gaEvents.GITHUB_CLICKED,
    },
    {
        name: 'LinkedIn',
        icon: ['fab', 'linkedin-in'],
        link: 'https://www.linkedin.com/in/ericong18/',
        clickEventId: gaEvents.LINKEDIN_CLICKED,
    },
    {
        name: 'Spotify',
        icon: ['fab', 'spotify'],
        link: 'https://open.spotify.com/user/ericong18?si=H0kHkFdxQ-GyKIlfLWzDqg',
        clickEventId: gaEvents.SPOTIFY_CLICKED,
    },
    {
        name: 'Medium',
        icon: ['fab', 'medium'],
        link: 'https://medium.com/@ericong18',
        clickEventId: gaEvents.MEDIUM_CLICKED,
    },
    {
        name: 'Email',
        icon: 'envelope',
        link: 'mailto:ericong18@gmail.com',
        clickEventId: gaEvents.MAIL_CLICKED,
    },
];
