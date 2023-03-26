## Introduction

Basic Tax Rate Calculator built in React

### Setup

- Ensure the test server is running

  -  `docker pull ptsdocker16/interview-test-server`

   -  `docker run --init -p 5000:5000 -it ptsdocker16/interview-test-server`
 -  Clone repo locally
    -  git clone https://github.com/s2-datong/points-tax-calculator.git
    -   cd points-tax-calculator
    - npm install

  

### Running the Project

- Update the 'REACT_APP_TAX_API_URL' config in .env to point to the root url of the backend service

-  `npm run start`
- This should launch the browser, if not, visit http://localhost:3000 in your browser

  

### Testing

#### Unit testing

-  `npm run test`

#### Manual Testing
- A simple input and button view is presented
- Type in your salary and click the 'Get Tax Bracket' button
- This should either display an error message if there is an error or display a table showing the various brackets with the bracket you fall into being highlighted.