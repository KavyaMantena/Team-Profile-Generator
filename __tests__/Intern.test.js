const Intern = require('../lib/Intern');
const intern = new Intern('emily', '1357', 'emily@gmail.com', 'MontaVista')

test('test the constructor for the employee.object', () => {
  expect(intern.name).toBe('emily');
  expect(intern.id).toBe('1357');
  expect(intern.email).toBe('emily@gmail.com')
  expect(intern.school).toBe('MontaVista')
});

test('test the name for getName()', () => {
  expect(intern.getName()).toBe('emily');
})

test('test the id for getId()', () => {
  expect(intern.getId()).toBe('1357');
})

test('test the email for getEmail()', () => {
  expect(intern.getEmail()).toBe('emily@gmail.com');
})

test('test the school for getSchool() method', () => {
  expect(intern.getSchool()).toBe('MontaVista');
})