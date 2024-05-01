# Project EducaData

Welcome !
This is the frontend of the EducaData Project, created entirely by me. A crud where it is possible to search, delete, create and update students.

## Tecnologies Used

![TypeScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![REACT-ICONS](https://img.shields.io/badge/React_Icons-0F0F0F?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)



## A Little Bit of Each Technology

Creating a project using the following technologies was an incredibly enriching experience:

- **JavaScript**: The dynamic and interpreted programming language brought flexibility and ease of use to the project. Its event-driven nature made user interface manipulation and interaction smooth and intuitive. This resulted in faster development and an enhanced user experience.

- **React**: Allowed for the creation of reusable and dynamic components, making the code more organized and the user interface more interactive.

- **React-Icons**: Incorporated a wide variety of accessible and customizable icons into the project, enhancing aesthetics and usability. The ability to import only the icons used helped keep the bundle size small, resulting in faster load times and overall better application performance.

- **Styled Components**: Brought a unique approach to styling React components. This allowed style to be an integral part of the component, improving code readability and making style maintenance easier.

- **Docker**: The use of Docker in the project has streamlined the process of setting up and managing the application's development environment. By containerizing the application and its dependencies, Docker has ensured consistency across multiple development and production environments. This has led to fewer 'it works on my machine' scenarios, increased productivity, and more time spent on developing features that add value to the application.




## Developer

- Luiz Pedro Galdino Silva

## Project Features

1. Register
2. Update
3. Delete
4. Search


## How to run the project

After cloning the repository, make sure Docker is installed on your system. If not, you can download and install it from the official Docker website.

Once Docker is installed, follow these steps to run the project:

1. Make sure the server (EducaData-Back) is running on port 8080.

2. To check if the server is running, type in your browser: 

```
localhost:8080/graphql
```

3. If the graphical part of graphql appears, then the server is running correctly

4. Bring down any old versions of the project that might be running with the following command:

```
docker-compose down
```
5. Build the Docker Compose project with the following command:

```
docker-compose build
```
6. Build the Docker Compose project with the following command:

```
docker-compose up

```

After running the above command, the server will automatically initialize and will be available at localhost:8083. If the browser does not automatically open, you will need to copy and paste this link into your browser.

## How to test the project

1. To test the project, in the root of the project, simply type the following command:

```
npx jest --env=jsdom
```

## Conclusion

In summary, each of these technologies played a vital role in the project, contributing to its success. The combination of these tools resulted in clean, efficient, and secure code. It was a valuable learning journey that will surely have a positive impact on future projects.
