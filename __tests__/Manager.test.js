const Manager = require('../lib/Manager');
const manager = new Manager('alex', '2468', 'alex@gmail.com', '0987')

test('test the constructor for the manager', () => {
  expect(manager.name).toBe('alex');
  expect(manager.id).toBe('2468');
  expect(manager.email).toBe('alex@gmail.com')
});

test('test the name for getName()', () => {
  expect(manager.getName()).toBe('alex');
})

test('test the id for getId()', () => {
  expect(manager.getId()).toBe('2468');
})

test('test the email for getEmail()', () => {
  expect(manager.getEmail()).toBe('alex@gmail.com')
})

test('test the officeIdNumber for officeIdNumber()', () => {
  expect(manager.getOfficeIdNumber()).toBe('0987')
})
test('test the role for getRole()', () => {
  expect(manager.getRole()).toBe('Manager')
})
