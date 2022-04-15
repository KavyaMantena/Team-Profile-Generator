const Engineer = require('../lib/Engineer');
const engineer = new Engineer('tom', '6789', 'tom@gmail.com')
test('test the constructor for the employee.object', () => {
  expect(engineer.name).toBe('tom');
  expect(engineer.id).toBe('6789');
  expect(engineer.email).toBe('tom@gmail.com')
});

test('test the name from getName()', () => {
  expect(engineer.getName()).toBe('tom');
})

test('test the id from getId()', () => {
  expect(engineer.getId()).toBe('6789');
})

test('test the email form getEmail()', () => {
  expect(engineer.getEmail()).toBe('tom@gmail.com')
})