export type Resume = {
    dates: {
        start: string,
        end: string
    },
    title: string,
    company: string,
    description: string,
    keyAchievements?: string[],
    href: null | string
}

export const resumeJson: Resume[] = [
    {
        dates: {
            start: 'January 2018',
            end: 'Present'
        },
        title: 'Freelance Web Developer',
        company: "Self-employed",
        description: "In-depth experience building client-facing, marketing-driven websites — mostly built using CMS platforms (mostly Wordpress and Shopify).",
        href: null
    },
    {
        dates: {
            start: 'April 2021',
            end: 'November 2023'
        },
        title: 'Full Stack Software Engineer',
        company: "Paymerang",
        description: "As a full stack software developer at Paymerang, I worked in a fast-paced environment, contributing to the development of complex web applications using a diverse set of cutting-edge technologies. My primary focus was on building responsive user interfaces using React with the Remix framework (JavaScript/Typescript), and designing/implementing scalable back-end systems using Hasura (GraphQL & SQL). In this role, I was responsible for the complete software development lifecycle, including design, development, creating unit tests, and providing deployment instructions. I collaborated closely with cross-functional teams, including product managers, designers, and other engineers, ensuring alignment with the company's business goals and user needs.",
        keyAchievements: [
            "Consistently provided bug fixes and implemented new features to enhance the stability and usability of the organization's Invoice Automation application.",
            "Served as Team Lead for the App Support team during a 4-week period, overseeing a team consisting of 2 developers, a Customer Support specialist, and a QA engineer.",
            "Effectively redesigned Paymerang's core service (Payment Automation) on React using the Remix framework, leading to improved speed, security, and efficiency for users.",
            "Introduced a new onboarding service that significantly reduced implementation time for new clients from a few weeks to just a couple of days.",
            "Upgraded the backend system by replacing outdated API endpoints with Hasura (GraphQL) endpoints, optimizing performance and leveraging our Amazon Aurora (PostgreSQL) database."
        ],
        href: 'https://www.paymerang.com/'
    },
    {
        dates: {
            start: 'September 2018',
            end: 'July 2020'
        },
        title: 'Director of Customer Marketing',
        company: "FreshLime",
        description: "Managed a team of 10 contributors—ranging from creatives to event planners to college interns. Defined the company's mission & purpose in a brand foundation booklet. Rebuilt the company website, taking lead on both content & development. Launched a company-wide referral marketing program.",
        href: 'https://www.freshlime.com/'
    },
    {
        dates: {
            start: 'September 2017',
            end: 'September 2019'
        },
        title: 'Chief Brandsmith & Managing Partner',
        company: "Moniker Branding",
        description: "Acted as Managing Partner of the startup branding agency. Created and updated company digital presence to enhance marketing efforts through a professional website, and optimized social media profiles. Oversaw the agency's brand and marketing efforts to enhance its visibility and reputation. Guided clients through a structured branding workshop, facilitating the development of their brand story.",
        href: 'https://www.monikerbranding.com/'
    },
    {
        dates: {
            start: 'August 2016',
            end: 'September 2017'
        },
        title: 'Director of E-Commerce',
        company: "BetterBody Foods",
        description: "As the E-Commerce Manager, it was my responsibility to manage all online sales—from our website and from our Amazon Seller Central account. This meant that I worked in many different areas such as email marketing, conversion rate optimization, Wordpress maintenance, sponsored ads, etc.",
        keyAchievements: [
            "Acted as Interim VP of Marketing for 3 months after my immediate supervisor's exit.",
            'Helped develop the PBfit "Opposites" commercial which was cut down to a 30-second spot which aired regionally during Super Bowl LI.',
            "Created an Amazon inventory tracking report, and managed the relationship with our Amazon Seller Central consultant.",
            "Managed the internal team (5 key contributors) and outside vendor that redesigned the BetterBody Foods website."
        ],
        href: 'https://www.betterbodyfoods.com/'
    },
    {
        dates: {
            start: 'August 2015',
            end: 'August 2016'
        },
        title: 'Digital Marketing Specialist',
        company: "Revere Health",
        description: "As the Digital Marketing Specialist, I worked closely with the Director of Marketing to develop successful online marketing campaigns for Revere Health physicians/departments. I worked extensively with a number of digital marketing platforms such as Wordpress, HubSpot, and Mailchimp.",
        keyAchievements: [
            "Managed the relationships Revere Health had with multiple online marketing vendors.",
            'Implemented and fulfilled on inbound marketing strategies.',
            "Oversaw all website updates—design, content, and technical.",
            "Created comprehensive online marketing campaigns for physicians/clinics which included blog posts, pay per click ads, and email nurture campaigns."
        ],
        href: 'https://www.reverehealth.com/'
    },
    {
        dates: {
            start: 'November 2010',
            end: 'August 2015'
        },
        title: 'Enterprise SEO Analyst',
        company: "OrangeSoda",
        description: "I helped many national brands and organizations grow their companies online through successful organic marketing. My main responsibilities included taking lead on planning content marketing strategies, completing detailed website analyses, and offering in-depth onsite optimizations for each SEO client in my book of business. I aided in product testing, created templates used throughout the company (such as the website analysis and landing page optimization templates), and trained other SEO strategists throughout the company.",
        keyAchievements: [
            "Managed over $80,000 in monthly SEO spend for clients.",
            'Coordinated around 20 blog posts per month with clients and content team.',
            "Successfully removed Google penalties from client websites."
        ],
        href: null
    },
]