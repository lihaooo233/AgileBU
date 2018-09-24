# AgileBU
Repo for Project of Product Design in ECE

## Description of Project
This product is a web application that will allow students to record, track and manage their sprints for agile development. This web application will be modeled after Atlassian's JIRA board (documentation here: https://www.atlassian.com/agile/tutorials/creating-your-agile-board) but with additional support for BU students by linking their school calendar, adding instructor support and any other supports deemed useful and/or necessary.

The web application created using React and a spring-boot backend with Kotlin, which will include a gateway API to channel database queries. Currently, this project will use a PostgreSQL database in the backend (although this may change).


## Draft of System Architecture
The following image shows the general overview of system architecture.
![draft](https://github.com/ayshimz/AgileBU/blob/master/DraftSystemArchitecture.jpg)

## Components of This Project
In this project, there are two parts: the front-end (with Node.js and React) and the backend (Kotlin).
* agilebu - contains the code for the front-end
* agilebuapi - contains the code for back-end

Directions on how to run the app is available in the ReadMe files in each compoennet.
