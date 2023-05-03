import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const names = ['Shan Joel', 'Shan Joel', 'Shan Joel', 'Shan Joel', 'Shan Joel'];

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: index < 5 ? names[index] : faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

// Sort users by custom names first, followed by fake names
users.sort((a, b) => {
  if (a.name === b.name) return 0;
  if (a.name === 'Custom Name') return -1;
  if (b.name === 'Custom Name') return 1;
  return a.name.localeCompare(b.name);
});

export default users;
