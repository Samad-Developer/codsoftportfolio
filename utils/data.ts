
export interface NavItem {
    title: string;
    href: string;
  }
  const navigation: NavItem[] = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '#about',
    },
    {
      title: 'Skills',
      href: '#skills',
    },
    {
      title: 'Projects',
      href: '#project',
    },
    {
      title: 'Contact',
      href: '#contact',
    },
  ];
  
  export default navigation;

  export interface Skill {
    id: number;
    title: string;
    description: string;
}

export const myskills: Skill[] = [
    {
        id: 1,
        title: 'HTML',
        description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazdy dog',
    },
    {
        id: 2,
        title: 'CSS',
        description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A quick brown fox jumps over the lazdy dog',
    },
    {
      id: 3,
      title: 'Javascript',
      description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A quick brown fox jumps over the lazdy dog',
  },
  {
    id: 4,
    title: 'Typescript',
    description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A quick brown fox jumps over the lazdy dog',
},
{
  id: 5,
  title: 'Next.js',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A quick brown fox jumps over the lazdy dog',
},
{
  id: 6,
  title: 'Reactjs',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A quick brown fox jumps over the lazdy dog',
},
{
  id: 7,
  title: 'TailwindCSS',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A quick brown fox jumps over the lazdy dog',
},
{
  id: 8,
  title: 'Mongodb',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A quick brown fox jumps over the lazdy dog',
},
{
  id: 9,
  title: 'Nodejs',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A quick brown fox jumps over the lazdy dog',
},
    // Add more skills as needed
];

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}

export const myprojects: Project[] = [
  {
      id: 1,
      title: 'React 3d portfolio',
      description: 'Its a 3d porfolio website with modern and classic look. javascript and React these technologies are used in this project',
      imageUrl: '/portfolio.png', // Example image URL
      githubUrl: 'https://github.com/Samad-Developer/react-3d-portfolio',
      demoUrl: 'https://abdussamad.vercel.app/',
  },
  {
      id: 2,
      title: 'Acme Dashboard',
      description: 'Acme dashboard is a full stack project build with Next.js and postgress database It build with the help of nextjs team',
      imageUrl:'/dashboard.png', // Example image URL
      githubUrl: 'https://github.com/Samad-Developer/nextjs-dashboard',
      demoUrl: 'https://nextjs-dashboard-psi-rouge.vercel.app/dashboard',
  },
  {
    id: 2,
    title: 'Nikee',
    description: 'This is a frontend project made with tailwind css This project mainly focus on frontend modern technology',
    imageUrl:'/nikee.png', // Example image URL
    githubUrl: 'https://github.com/Samad-Developer/tailwindcss',
    demoUrl: 'https://tailwindcss-omega-wheat.vercel.app/',
},
{
  id: 2,
  title: 'Hilink.',
  description: 'This is another frontend project for tour guide this website also focus on only front end made with tailwind css',
  imageUrl:'/tour.png', // Example image URL
  githubUrl: 'https://github.com/Samad-Developer/travel_app',
  demoUrl: 'https://travel-app-delta-two.vercel.app/',
},
{
  id: 2,
  title: 'Car Showcase',
  description: 'A very fine project which show every type of car where use can see information and details about each car and can search every category',
  imageUrl:'/car.png', // Example image URL
  githubUrl: 'https://github.com/Samad-Developer/car-showcase',
  demoUrl: 'https://car-showcase-xi-eight.vercel.app/',
},
{
  id: 2,
  title: 'Ecommerce',
  description: 'This is an ecommerce website where user can see a lot of different items and it use api to fetch data i am working on this project for more..',
  imageUrl:'/ecommerce.png', // Example image URL
  githubUrl: 'https://github.com/Samad-Developer/e-commerece',
  demoUrl: 'https://e-commerece-tau.vercel.app/',
},
  // Add more projects as needed
];
