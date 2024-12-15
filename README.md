# Overview
This is a simple multi-step application developed using Next.js 15. The app consists of three main screens:

1. Login Screen: Where the user can log in using an email address and social login buttons.
2. OTP Screen: The user enters an OTP to proceed further.
3. Username Screen: The user sets their username with specific constraints.

## Features:
### * Login Screen:
* Social buttons that simply log to the console when clicked.
* Email validation with error messages if the email pattern is incorrect.
* Redirects to the OTP screen on valid email input.

### * OTP Screen:
* Validates the OTP input. If the OTP is 1111, the user is redirected to the username screen.
* Shows an error message if the OTP is invalid.

### * Username Screen:
* Allows the user to input a username with constraints:
* Only alphanumeric characters are allowed.
* Maximum length of 20 characters.
* No symbols.

## Tech Stack
* Next.js 15: Framework for React-based SSR and static site generation.
* zustand: For state management.
* Yup: For form validation schema.
* react-hook-form: For managing form states and input validation.
* @hookform/resolvers: For resolving Yup validation in React Hook Form.

## Setup Process
* Clone the repository
* Install Dependencies
* Copy `.env.sample` to `.env`
* Run the Application 
* Open your browser and go for: `http://localhost:3000`
