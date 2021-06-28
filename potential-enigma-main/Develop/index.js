// Adding Inquirer and fs to use throughout project
const inquirer = require('inquirer')
const fs = require('fs');
// Connecting to generateMarkdown.js (will keep code cleaner and more organized)
const generateMarkdown = require("./utils/generateMarkdown");
// Function that will take user input and check against validate on required inputs
const promptUser = () => {
    return inquirer
    .prompt([
        // Title Input
        {
            type: "input",
            name: "readmeTitle",
            message: "Insert the title for your readme... (required)",
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                }
                console.log("Title is required. Please insert a readme Title to continue");
                return false;
            }
        },
        // Description Input
        {
            type: "input",
            name: "readmeDescription",
            message: "Provide a description of your project. (required)",
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                }
                console.log ("Description is required. Please insert a readme Description to continue");
                return false;
            }
        },
        // Installation Input
        {
            type: "input",
            name: "readmeInstallation",
            message: "Provide Installation Instructions (if applicable)",
        },
        // Usage Input
        {
            type: "input",
            name: "readmeUsage",
            message: "Provide a description of your applications usage",
        },
        // Tests Input
        {
            type: "input",
            name: "readmeTests",
            message: "Provide a description of your applications tests",
        },
        // Contributing Input
        {
            type: "input",
            name: "readmeContributing",
            message: "Add Contributors?"
        },
        // Technologies
        {
            type: "checkbox",
            name: "readmeTechnologies",
            message: "Which Technologies were used in your projects production? (Select all which are applicable)",
            choices: [
                "HTML",
                "CSS",
                "JavaScript",
                "jQuery",
                "ES6",
                "Node.js",
            ]
        },
        // github username input
        {
            type: "input",
            name: "readmeGithubUser",
            message: "Please provide your Github Username. (required)",
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                }
                console.log("Please provide your Github Username.");
                return false;
            }
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err) throw err;
        console.log("Your Readme file was successfully created!")
    })
}

promptUser()
.then(readMe => {
    writeToFile("ezREADME.md", generateMarkdown(readMe))
});