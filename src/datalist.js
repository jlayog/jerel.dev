import hpIcon from './assets/hp-sprite.png';
import stamIcon from './assets/stamina-sprite.png';
import luckIcon from './assets/luck-sprite.png';
import defIcon from './assets/def-sprite.png';
import intelIcon from './assets/intelligence-sprite.png';
import magicIcon from './assets/magic-sprite.png';
import strIcon from './assets/str-sprite.png';
import bowIcon from './assets/bow-sprite.png';
import commencement from './assets/projectimgs/commencement.png'
import hamilton from './assets/projectimgs/hamilton.png'
import weatherapp from './assets/projectimgs/reactweatherapp.png'
import rc from './assets/projectimgs/rc.png'
import directory from './assets/projectimgs/directory.png'

const messages = [
"Hi, I am Jerel Layog. I am a Frontend Web Developer.",
"I love creating software and web apps.",
"Looking to hire?",
"Check out my work."
];

const skills = [
{ id: 1, skill: 'HTML', icon: hpIcon },
{ id: 2, skill: 'CSS', icon: stamIcon },
{ id: 3, skill: 'JavaScript', icon: strIcon },
{ id: 4, skill: 'React.Js', icon: defIcon },
{ id: 5, skill: 'Node.js', icon: intelIcon },
{ id: 6, skill: 'Terminalfour', icon: magicIcon },
{ id: 7, skill: 'Vue.js', icon: bowIcon },
{ id: 8, skill: 'PHP', icon: luckIcon },
];

const projects = [
{
title: "Commencement at University of Florida",
description:
"I was the lead developer for this project and worked alongside 2 other developers and a designer. This a high profile site for visitors and students to receive information related to graduation.",
image: commencement,
link: "https://commencement.ufl.edu",
},
{
title: "Hamilton Center",
description:
"Role: Lead Developer. I worked alongside 1 designer for this site, along with the client to deliver a site requested by the governor. A site to provide information about western history and it's curriculum.",
image: hamilton,
link: "https://hamilton.center.ufl.edu",
},
{
title: "React Weather App",
description:
"API and React.js practice. A site that provides weather forecasts for the day based on location input.",
image: weatherapp,
link: "https://weather-app-7dbc1.web.app",
},
{
title: "Research Computing at University of Florida",
description:
"A redesign and restructure of an existing site. As project lead and the help with a UX designer, we managed to reduce the subpages and orphan pages by a significant amount. It is a site aimed towards AI and research.",
image: rc,
link: "https://rc.ufl.edu",
},
{
title: "Directory for University of Florida",
description:
"Handled security issues, such as preventing sensitive student information from being displayed, and authorization for campus members.",
image: directory,
link: "https://directory.ufl.edu",
},
];

export { messages, skills, projects };