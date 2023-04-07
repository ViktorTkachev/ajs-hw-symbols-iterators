import Team from '../app';

const members = [
  {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Viktor',
    type: 'Bowerman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  },
  {
    name: 'John',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  },
];

test('should create a new team with members', () => {
  const team = new Team(members);
  expect(team.members).toEqual(members);
});

test('should return an iterator with members', () => {
  const team = new Team(members);
  const iterator = team[Symbol.iterator]();
  expect(iterator.next()).toEqual({ value: members[0], done: false });
  expect(iterator.next()).toEqual({ value: members[1], done: false });
  expect(iterator.next()).toEqual({ value: members[2], done: false });
  expect(iterator.next()).toEqual({ done: true });
});
