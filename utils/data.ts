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
        description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A qquick brown fox jumps over the lazdy dog',
    },
    {
        id: 2,
        title: 'Data Science',
        description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A qquick brown fox jumps over the lazdy dog',
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A qquick brown fox jumps over the lazdy dog',
  },
  {
    id: 4,
    title: 'Data Science',
    description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A qquick brown fox jumps over the lazdy dog',
},
{
  id: 5,
  title: 'Data Science',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A qquick brown fox jumps over the lazdy dog',
},
{
  id: 6,
  title: 'Data Science',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A qquick brown fox jumps over the lazdy dog',
},
{
  id: 7,
  title: 'Data Science',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A qquick brown fox jumps over the lazdy dog',
},
{
  id: 8,
  title: 'Data Science',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A qquick brown fox jumps over the lazdy dog',
},
{
  id: 9,
  title: 'Data Science',
  description: 'A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog A qquick brown fox jumps over the lazdy dog',
},
    // Add more skills as needed
];

  