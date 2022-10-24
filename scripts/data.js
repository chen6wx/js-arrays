// with thanks to https://catalog.jmu.edu/content.php?filter%5B27%5D=CS&filter%5B29%5D=&filter%5Bcourse_type%5D=-1&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=50&expand=&navoid=2576&search_database=Filter#acalog_template_course_filter

// probably helpful to have a few more in here
const data = {
  items: [
    {
      prefix: "CS",
      number: 149,
      title: "Introduction to Programming",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257219",
      desc: "Fundamental problem-solving techniques using a modern programming language. Topics include variables, input/output, decisions, loops, functions, arrays, and objects. Students learn about algorithm development, testing strategies, and software tools.",
      prereqs: [],
      credits: 3,
    },
    {
      prefix: "CS",
      number: 159,
      title: "Advanced Programming",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257220",
      desc: "Students use advanced problem-solving strategies to develop algorithms using classes and objects and techniques such as recursion, exceptions and file I/O. This course also focuses on designing small applications and effective testing strategies.",
      prereqs: [149],
      credits: 3,
    },
    {
      prefix: "CS",
      number: 343,
      title: "Application Development",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=264748",
      desc: "Overview of application software development fundamentals and their use in building stand-alone applications, visualizing and interacting with complex data representations, and controlling the Internet of Things. This course provides an introduction to the technologies used to create modern user interfaces (e.g., web technologies), establishing a common foundation for later application-focused courses.",
      prereqs: [159],
      credits: 3,
    },
    {
      prefix: "CS",
      number: 445,
      title: "Machine Learning",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=260659",
      desc: "An introduction to the field of machine learning. Explores key problems and algorithms in machine learning from both a theoretical and an applied perspective. Specific topics include supervised and unsupervised learning, anomaly detection, text mining and experimental design.",
      prereqs: [327],
      credits: 3,
    },
    {
      prefix: "CS",
      number: 444,
      title: "Artificial Intelligence",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257224",
      desc: "Students will study the history, premises, goals, social impact and philosophical implications of artificial intelligence. Students will study heuristic algorithms for large state spaces and learn to develop recursive and non-deterministic algorithms.",
      prereqs: [],
      credits: 3,
    },
    {
      prefix: "CS",
      number: 354,
      title: "Introduction to Autonomous Robotics",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257223",
      desc: "A hands-on introduction to programming autonomous mobile robots. The focus of this course is on designing robotic systems that navigate independently in complex environments. Specific topics include localization, mapping, kinematics, path planning and computer vision.",
      prereqs: [],
      credits: 3,
    }
  ],
};
