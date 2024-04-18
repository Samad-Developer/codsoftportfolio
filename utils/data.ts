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
      href: '/about',
    },
    {
      title: 'Skills',
      href: '/skills',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Resume',
      href: '/resume',
    },
    {
      title: 'Contact',
      href: '/contact',
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
        title: 'Web Development',
        description: 'HTML5, CSS3, JavaScript, React, Node.js',
    },
    {
        id: 2,
        title: 'Data Science',
        description: 'Python, Machine Learning, Data Visualization',
    },
    {
      id: 2,
      title: 'Data Science',
      description: 'Python, Machine Learning, Data Visualization',
  },
  {
    id: 2,
    title: 'Data Science',
    description: 'Python, Machine Learning, Data Visualization',
},
{
  id: 2,
  title: 'Data Science',
  description: 'Python, Machine Learning, Data Visualization',
},
{
  id: 2,
  title: 'Data Science',
  description: 'Python, Machine Learning, Data Visualization',
},
{
  id: 2,
  title: 'Data Science',
  description: 'Python, Machine Learning, Data Visualization',
},
{
  id: 2,
  title: 'Data Science',
  description: 'Python, Machine Learning, Data Visualization',
},
{
  id: 2,
  title: 'Data Science',
  description: 'Python, Machine Learning, Data Visualization',
},
    // Add more skills as needed
];

  