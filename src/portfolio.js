// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Pun Magar Sumit",
    message: "I am a skilled system development engineer with nearly 4 years of experience in full-stack development, specializing in TypeScript, JavaScript, and Java. I create scalable, high-performance solutions while collaborating with cross-functional teams to ensure successful project delivery. Passionate about learning new technologies, I continuously strive to build innovative, future-proof applications that exceed client expectations..",
    basedLocation: "Yokohama, Japan",
    resumeLink: "https://drive.google.com/file/d/1BT3WBmcAZIot7_BbzS3zUw4NuLmwW9wB/view?usp=drive_link", // recommended: google drive file share link (change to "anyone on the internet can view")
    resumeShow : false,
    logo: {
        link: "images/initials.PNG", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/Photoroom_20240910_145817.jpeg'
}

const socialMediaLinks = {
    github: "",
    linkedin: "https://www.linkedin.com/in/sumit-pun-magar-ba04522ab?trk=contact-info",
    medium: "",
    stackoverflow: "",
    xtwitter: "",
    facebookLink :"https://www.facebook.com/punsumit3939",
    instagramLink: "https://www.instagram.com/sumit_punn",
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I am a system development engineer with a Bachelor’s degree in Information Media from Wakkanai Hokusei Gakuen University, Japan. With nearly 4 years of professional experience at New Wave System Laboratory Co. Ltd, I have honed my expertise in full-stack development, database management, and mobile application integration. I am passionate about creating innovative, scalable solutions that drive business growth while staying committed to continuous learning and adapting to the latest technologies in the ever-evolving IT landscape."
    ], // Separated items are paragraphs
    techStack: [
        "Java",
        "HTML",
        "CSS",
        "Python",
        "C#",
        "JavaScript",
        "TypeScript",
        "Dart",
        "MySQL",
        "PostgreSQL",
        "Microsoft SQL"
    ],
    // photo1Link: "images/portrait1.jpeg",
    // photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/Photoroom_20240910_145817.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Web Developer",
        company: {
            name: "New Wave System Laboratory Co. Ltd",
            link: "https://www.new-wave.jp/"
        },
        duration: "Oct 2020 - present",
        bulletPoints: [
            "Contributed to the design, development, and maintenance of multiple web-based applications and enterprise systems.",
            "Utilized TypeScript to create robust, maintainable front-end interfaces, ensuring an intuitive and responsive user experience.",
            "Led back-end development using Java, Spring Boot, PostgreSQL, MySQL  and Microsoft SQL Server for secure data management and optimized performance.",
            "Integrated mobile functionalities into web systems, ensuring cross-platform compatibility and enhanced performance across devices.",
            "Collaborated with cross-functional teams, including project managers and QA, to ensure project milestones were achieved on time.",
            "Optimized database queries and structures for complex applications, improving overall system efficiency and reducing load times.",
        ],
        hashtags: [
            "Java",
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Spring Boot",
            "PostgreSQL",
            "Microsoft SQL","MySQL",
            "React",
            "Vue.js",
        ]
    },
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Web Application Development for Academic Institutions",
        yearCompleted: "October 2020 - June 2022",
        description: "Participated in the design, analysis, development, and deployment phases of Direct Mail Service System, Web Conference Reservation System and Event Management System, contributing to the project's start-up phase and mock screens development.\nDeveloped the web application using Spring MVC, jQuery, HTML5, Bootstrap.\nUtilized Hibernate for object-to-database table persistency, improving data retrieval and manipulation efficiency.\nWorked with Core Java technologies to implement back-end business logic, enhancing application functionality.\nIntegrated Spring and Hibernate ORM framework for persistence, improving data access efficiency.\nUtilized MySQL and stored procedures for database interaction, performed CRUD operations using Hibernate.\nWrote client-side code using Next.js and Thymeleaf, enhancing user interface interactivity.\nWorked on migration to AWS from prem servers, developed AWS S3 to copy project artifacts into S3 bucket, and integrated Open stack API with Amazon EC2 cloud-based architecture in AWS.\nWorked scripts to automate AWS services, improving system scalability and reliability.\n",
        techStack: "Java, Spring Boot, Hibernate, Thymeleaf, HTML5, JavaScript, Node JS, TypeScript, MySQL, GitHub, AWS - EC2, AWS -RDS, AWS -S3, Redmine",
        links: [
            // {
            //     label: "",
            //     type: "git",
            //     url: "#"
            // },
            // {
            //     label: "",
            //     type: "external",
            //     url: "#"
            // }
        ],
        imageLink: "",
        alignLeft: true
    },
    {
        projectName: "Building information management system - Web application development",
        yearCompleted: "July 2022 - March 2023",
        description: "Collaborated closely with cross-functional teams to understand project requirements and implemented tailored solutions to meet specific needs, aligning technology with business objectives.\nEmployed technologies such as Spring MVC, jQuery, HTML5, and Bootstrap to deliver a robust and user-friendly interface for enhanced user experience and operational efficiency.\nImplemented PostgreSQL for database management, ensuring data integrity and accessibility in support of the web application's functionalities.",
        techStack: "Java, Spring Boot, Hibernate, HTML5, JavaScript, jQuery, PostgreSQL, GitHub, Docker, Backlog",
        links: [],
        imageLink: "",
        alignLeft: true
    },
    {
        projectName: "Premium Coupon QR code payment service for Local Government - Web application",
        yearCompleted: "April 2023 - September 2024",
        description: "Participated in the development, and deployment of a web application for a premium coupon QR code payment service aimed at local governments. Contributed to both front-end and back-end development, playing a key role in the project's lifecycle.",
        techStack: "Java, Spring Boot, TypeScript, JavaScript, Microsoft SQL, Vue.js, GitHub, Docker, Jira, Swagger, AWS",
        links: [],
        imageLink: "",
        alignLeft: true
    },
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [], // paragraph breaks will be entered after each item,
        link: {
            email: "xuemmet45@gmail.com", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}