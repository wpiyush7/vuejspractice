export type Person = {
  name: string;
  email: string;
  role: string;
  imageUrl: string;
  lastSeen: string | null;
  lastSeenDateTime?: string;
};

export const peopleMock: Person[] = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5',
    lastSeen: '10m ago',
    lastSeenDateTime: '2023-01-23T15:40Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    lastSeen: '1h ago',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    lastSeen: '2h ago',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    lastSeen: null,
  },

  // 🔽 Additional fake data

  {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'Product Manager',
    imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
    lastSeen: '5m ago',
  },
  {
    name: 'Daniel Moore',
    email: 'daniel.moore@example.com',
    role: 'Backend Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    lastSeen: '30m ago',
  },
  {
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'UX Researcher',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    lastSeen: null,
  },
  {
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    role: 'DevOps Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    lastSeen: '4h ago',
  },
  {
    name: 'Olivia Martinez',
    email: 'olivia.martinez@example.com',
    role: 'Marketing Lead',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    lastSeen: '15m ago',
  },
  {
    name: 'William Brown',
    email: 'william.brown@example.com',
    role: 'QA Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c',
    lastSeen: null,
  },
  {
    name: 'Sophia Taylor',
    email: 'sophia.taylor@example.com',
    role: 'Content Strategist',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
    lastSeen: '50m ago',
  },
  {
    name: 'Ethan Anderson',
    email: 'ethan.anderson@example.com',
    role: 'Mobile Developer',
    imageUrl: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0',
    lastSeen: '2h ago',
  },
  {
    name: 'Isabella Thomas',
    email: 'isabella.thomas@example.com',
    role: 'HR Manager',
    imageUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b',
    lastSeen: null,
  },
  {
    name: 'Noah Lee',
    email: 'noah.lee@example.com',
    role: 'Data Analyst',
    imageUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b4',
    lastSeen: '25m ago',
  },
  {
    name: 'Ava White',
    email: 'ava.white@example.com',
    role: 'Customer Success',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7',
    lastSeen: '3h ago',
  },
  {
    name: 'Lucas Harris',
    email: 'lucas.harris@example.com',
    role: 'Sales Executive',
    imageUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
    lastSeen: null,
  },
  {
    name: 'Mia Clark',
    email: 'mia.clark@example.com',
    role: 'Support Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-cc5f0f3b8a11',
    lastSeen: '45m ago',
  },
];
