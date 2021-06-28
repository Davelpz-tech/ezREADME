// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// Function that creates a README template which recieves user input from the index.js file
function generateMarkdown(readMe) {
  const title = readMe.readmeTitle;
  const description = readMe.readmeDescription;
  const installationInstructions = readMe.readmeInstallation;
  const usage = readMe.readmeUsage;
  const tests = readMe.readmeTests
  const technologies = readMe.readmeTechnologies
  const github = readMe.readmeGithubUser
  console.log(readMe)

  // readme Template that will recieve data
  return `
  
  # ${title}
  ## Description
  ${description}
  ## Table of Contents
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Technologies](#technologies)
  - [Questions](#questions)
  ## Installation Instructions
  ${installationInstructions}
  ## Usage
  ${usage}
  ## Tests
  ${tests}
  ## Technologies 
  ${technologies}
  ## Questions
  If you have any questions or concerns about the application feel free to contact me at the links provided below.
  Contact Me:
  github.com/${github}
`
};
// allows to export generateMarkdown function and use it in index.js
module.exports = generateMarkdown;