const Employee = require('../lib/Employee');
const employee = new Employee('davis', '2345', 'davis@gmail.com')

test('test the constructor for the employee.object', () => {
  expect(employee.name).toBe('davis');
  expect(employee.id).toBe('2345');
  expect(employee.email).toBe('davis@gmail.com')
});

test('test the name for getName()', () => {
  expect(employee.getName()).toBe('davis');
})

test('test the id for getId()', () => {
  expect(employee.getId()).toBe('2345');
})

test('test the email for getEmail()', () => {
  expect(employee.getEmail()).toBe('davis@gmail.com')
})

test('test the role for getRole()', () => {
  expect(employee.getRole()).toBe('Employee')
})
