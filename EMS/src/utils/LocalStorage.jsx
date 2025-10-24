const employees = [
  {
    id: 1,
    firstName: "Ahmed",
    name: "musahaf",
    email: "musahafali43@gmail.com",
    password: "khanali118",
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Compile sales and expenses into a detailed report",
        date: "2025-09-20",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Conduct weekly sync with project team",
        date: "2025-09-22",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Send updates to client regarding project status",
        date: "2025-09-23",
        category: "Communication",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Bilal",
    name: "bob",
    email: "bob.khan@company.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve authentication issue in the portal",
        date: "2025-09-19",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull request from junior developer",
        date: "2025-09-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Add latest API changes into developer docs",
        date: "2025-09-21",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Testing new feature",
        description: "Perform unit testing for new dashboard",
        date: "2025-09-22",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Ayesha",
    name: "carla",
    email: "carla.rose@company.com",
    password: "123",
    tasks: [
      {
        title: "Design homepage",
        description: "Create mockups for new website homepage",
        date: "2025-09-18",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Logo redesign",
        description: "Prepare updated brand logo concepts",
        date: "2025-09-19",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Create presentation",
        description: "Make slides for marketing campaign pitch",
        date: "2025-09-20",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Danish",
    name: "daniel",
    email: "daniel.ahmed@company.com",
    password: "123",
    tasks: [
      {
        title: "Database backup",
        description: "Perform scheduled backup of production database",
        date: "2025-09-17",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize query",
        description: "Improve performance of heavy SQL query",
        date: "2025-09-19",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server monitoring",
        description: "Check logs for any downtime alerts",
        date: "2025-09-20",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Deploy new build",
        description: "Push latest version to staging server",
        date: "2025-09-21",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Fatima",
    name: "emma",
    email: "emma.salim@company.com",
    password: "123",
    tasks: [
      {
        title: "Social media posts",
        description: "Schedule posts for company social accounts",
        date: "2025-09-18",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Email newsletter",
        description: "Draft and send September newsletter",
        date: "2025-09-19",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Market research",
        description: "Analyze competitor strategies",
        date: "2025-09-21",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Event planning",
        description: "Organize online webinar for customers",
        date: "2025-09-23",
        category: "Events",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskStats: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  }
];


const admin = {
  id: 99,
  email: "admin@company.com",
  password: "123",
  role: "admin"
};


export const setLocalStorage = () => {
    localStorage.setItem("employees" , JSON.stringify(employees))
    localStorage.setItem("admin" , JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    
    return {employees , admin};
    
    
}