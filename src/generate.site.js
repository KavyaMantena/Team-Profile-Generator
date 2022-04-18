const { it } = require("jest-circus");
const { choices } = require("yargs");

function generateEngineerCard(engineer) {
  return `
  <div>${engineer.getName()}</div>
  <div>${engineer.getRole()}</div>
  <div>${engineer.getId()}</div>
  <div>${engineer.getEmail()}</div>
  <div>${engineer.getGithub()}</div>
  `
}

function generateInternCard(intern) {
  return `
  <div>${intern.getName()}</div>
  <div>${intern.getRole()}</div>
  <div>${intern.getId()}</div>
  <div>${intern.getEmail()}</div>
  <div>${intern.getSchool()}</div>
  `
}

function generateManagerCard(manager) {
  return `
  <div>${manager.getName()}</div>
  <div>${manager.getRole()}</div>
  <div>${manager.getId()}</div>
  <div>${manager.getEmail()}</div>
  <div>${manager.getOfficeIdNumber()}</div>
  `
}

function generateTeamCards(teamMembers) {
  return `
      ${teamMembers
      .map((teamMember) => {
        if (teamMember.getRole() === 'Engineer') {
          return generateEngineerCard(teamMember)
        } else {
          return generateInternCard(teamMember)
        }
      })
      .join('')}
  `;
}

function generatePage(teamData) {

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    My Team
  </header>
  <main class="container my-5">
  ${generateManagerCard(teamData.manager)}
  ${generateTeamCards(teamData.team)}
  </main>
  <footer>
  </footer>
</body>
</html>
`

}

module.exports = generatePage
