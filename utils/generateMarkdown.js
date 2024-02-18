// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ## Installation

  \`\`\`bash
  ${data.installation}
  \`\`\`

  ## Usage
  \`\`\`bash
  ${data.usage}
  \`\`\`

  ## Tests
  \`\`\`bash
  ${data.test}
  \`\`\`


  ## Contributing
  ${data.contributing}


  ## License
  [${data.license}](https://choosealicense.com/licenses/${data.license})


  ## Questions

  If you have Any question please don't hesitate to contact
 [Email Me](mailto:${data.email}) or reach out to me in 
 [Github](https://github.com/${data.githubUsername})

`;
}

module.exports = generateMarkdown;
