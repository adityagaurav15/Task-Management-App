Create one task management application
**Description: **
Create a Task Management App with user authentication, task management, role-based access, performance optimization, analytics, report generation, and an admin dashboard. Users should be able to export reports in different formats, and the admin should have access to detailed analytics for improving the application.
**Features: **

1. **User Authentication: **

- Sign up, login, and logout functionality.
- Secure password handling.

2. **Task Management:**

- Add new tasks with a title and description.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as complete/incomplete.

3. \*_Task List?_

- Display a list of tasks with the ability to filter by status (all, completed, incomplete).
- Use local storage/session storage or an APl to persist tasks.

4. **User Interface: **

- Responsive design to work on both desktop and mobile.
- Clean and user-friendly Ul.

5. **State Management:**

- Use a state management library Redux to manage the application's state.

6. **Routing:**

- Implement client-side routing using React Router.
- Create different pages for login, sign-up, task list, and admin dashboard.

7. **Error Handling:**

- Handle errors gracefully (e.g., form validation errors, network errors).

8. **Role-Based Access Control:**

- Implement different user roles (e.g., admin, regular user).
- Restrict access to certain features based on user roles (e.g. only admins can delete tasks). 9.**Analytics：**
- Track user interactions (e.g. task creation, task completion).
- Display basic analytics on a dashboard (e.g., total tasks created, tasks completed).

10. **Performance Optimization:**

- Code splitting using React.lazy and Suspense.
- Memoization using React.memo and useMemo.
- Optimize re-renders.
- Efficient state management to minimize unnecessary renders.
- Debouncing or throttling of input events (e.g., search or filter functionality).

11. **Report Generation:**

- Generate reports on task data (e.g. tasks created, tasks completed over time).
- Display reports using graphs and charts (e.g., line charts, bar charts).
- Allow users to export reports in different formats (e.g... PDF, CSV).

12. **File Handling:**

- Handle file downloads for report exports.
- Allow users to upload files (e.g., bulk task upload).

13. **Admin Dashboard: **

- Provide a dashboard for admin users to view detailed analytics.
- Include charts and graphs to visualize data (eg. user activity, task completion rates).
- Display useful data for application improvement (eg. user feedback, performance metrics).

**Technical Requirements:**

- Use functional components and React Hooks.
- Demonstrate knowledge of component lifecycle.
- Apply best practices for component structure and file organization.
- Include comments and documentation for the code.
- Ensure the application is performant and handles large datasets efficiently.
- Implement role-based access using a library like "react-router" for protected routes or custom logic in components.
- Implement basic analytics using a custom tracking solution.
- Use a charting library Highcharts for displaying graphs.
- Implement file handling for report exports (e.g., for PDF generation or for CSV).
  **Steps to Implement: **

1. **Setup and Authentication: **

- Setup a React project and configure routing.
- Implement user authentication and role-based access control.

2. \*_Task Managementm_

- Create components for adding, editing, deleting, and viewing tasks.
- Use Context API or Redux for state management.

3. **Admin Dashboard:**

- Create a dashboard accessible only to admin users.
- Use a charting library to display data visualizations.
- Implement performance optimizations (e.g., memoization, code splitting).

4. **Analytics and Reporting:**= Track user interactions and store analytics data.

- Create reports based on analytics data.
- generate and export reports in PDF and CSV formats.

5. **File Handling: **

- Implement functionality for exporting reports.
- Allow file uploads if necessary.

6. **Ul and UX: **

- Ensure a responsive and user-friendly interface.
- Handle errors and edge cases gracefully.

7. **Testing and Documentation: **

- Write tests to ensure the functionality works as expected.
- Document the code and provide usage instructions.
