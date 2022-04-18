const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generate.site')

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Enter your employee Id (Required)',
        validate: employeeIdInput => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log('Please enter your employee Id.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeIdNumber',
        message: 'Enter your office id number (Required).',
        validate: officeIdNumberInput => {
          if (officeIdNumberInput) {
            return true;
          } else {
            console.log('Please enter the office id number');
            return false;
          }
        }
      },
    ]).then(userInput => {
      console.log(userInput)
      return {
        manager: new Manager(userInput.name, userInput.employeeId, userInput.email, userInput.officeIdNumber)
      };

    })

}

const promptNew = newData => {

  console.log(`
  ==============
  Build the Team
  `)
  console.log(newData);
  if (!newData.team) {
    newData.team = [];
  }
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'adding',
        message: 'Please select an option',
        choices: ['add an engineer', 'add an intern', 'stop and build the team'],
      }
    ]).then(choiceInput => {
      console.log(choiceInput);
      switch (choiceInput.adding) {
        case 'add an engineer':
          return promptEngineer(newData);
        case 'add an intern':
          return promptIntern(newData);
        default:
          return buildTheTeam(newData);
      }

    })
};

const promptEngineer = (newData) => {
  console.log(`
  =================
  Add an Engineer
  =================
  `)
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of engineer? (Required)',
        validate: engineerInput => {
          if (engineerInput) {
            return true;
          } else {
            console.log('Please enter the name of engineer.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Id',
        message: 'Enter the Id of the engineer (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter the Id.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the email address of the engineer (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address of the engineer.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'githubName',
        message: 'Enter the github username of the engineer (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your github username of the engineer.');
            return false;
          }
        }
      },
    ]).then(engInput => {
      console.log(newData)
      newData.team.push(new Engineer(engInput.name, engInput.Id, engInput.email, engInput.githubName));
      return promptNew(newData);
    })

}

const promptIntern = (newData) => {
  console.log(`
  ===============
  Add a new Intern
  ===============
  `)
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern? (Required)',
        validate: internInput => {
          if (internInput) {
            return true;
          } else {
            console.log('Please enter the name of intern.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Id',
        message: 'Enter the Id of the intern (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter the Id.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the email address of the intern (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address of the intern.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter the school name (Required)',
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log('Please enter the school name.');
            return false;
          }
        }
      },
    ])
    .then(intInput => {
      newData.team.push(new Intern(intInput.name, intInput.Id, intInput.email, intInput.school));
      return promptNew(newData);
    })

}

const buildTheTeam = (newData) => {
  console.log(`
  =============
  Finished building the team!
  ===========`)
  fs.writeFile('index.html', generatePage(newData), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
  });
  return newData
}

promptUser()
  .then(answers => {

    return promptNew(answers)
  })
  .then(teamAnswers => {
    console.log(teamAnswers)
  });


