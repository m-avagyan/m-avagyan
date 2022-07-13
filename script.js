/* JavaScript file */

const user = {
  firstName: 'Martik',
  lastName: 'Avagyan',
  userName: 'm-avagyan',
  email: 'martikavagyan1@gmail.com',
  location: 'Yerevan, Armenia',
  birthday: '02-11-2000',
  gender: 'male',
  role: 'Front-End Developer',
  skills: ['HTML', 'CSS', 'SASS', 'LESS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Recoil', 'MaterialUI', 'git', 'GitHub', 'npm', 'yarn'],
};

function getUser() {
  if (Object.values(user) === 0 || !user) {
    console.log('Can not get the user data');
  } else {
    console.log('User:', user);
  }
}

function getUserContacts() {
  const contacts = {};
  
  if (user.phone) {
    contacts.phone = user.phone;
  }
  
  if (user.email) {
    contacts.email = user.email;
  }
  
  return contacts;
}

getUser();

const contacts = getUserContacts();

console.log(contacts)
