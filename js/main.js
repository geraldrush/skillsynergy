"use strict";
(function ($) {
    

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
       navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
            
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  // Define the categories and their courses

  const categories = [
    {
      name: "Financial Management",
      description: "Unlock the secrets of effective financial stewardship. Our Financial Management courses provide the skills and insights needed to navigate the complex landscape of budgeting, investment, and fiscal responsibility.",
      link: "fin-management.html",
      courses: [
        {
          name: "Financial Planning and Analysis",
          description: "Financial Planning and Analysis (FP&A) is a comprehensive course that equips individuals with the skills to develop, analyse, and interpret financial plans and budgets. Participants will gain insights into forecasting, variance analysis, and strategic financial decision-making.",
          outline: [
            "Introduction to Financial Planning",
            "Budgeting and Forecasting Techniques",
            "Financial Modelling",
            "Variance Analysis",
            "Performance Metrics and KPIs",
            "Strategic Financial Decision-Making"
          ]
        },
        {
          name: "Investment Management",
          description: "Investment Management explores the principles and strategies behind effective investment decision-making. Participants will learn how to analyse various investment opportunities, construct portfolios, and manage risks in the dynamic world of investments.",
          outline: [
            "Introduction to Investment Management",
            "Securities Analysis",
            "Portfolio Construction and Diversification",
            "Risk Management in Investments",
            "Investment Strategies",
            "Ethical Considerations in Investment"
          ]
        },
        {
          name: "Risk Management",
          description: "Risk Management is a crucial aspect of financial decision-making. This course provides participants with the tools and methodologies to identify, assess, and mitigate financial risks in an organisation.",
          outline: [
            "Introduction to Risk Management",
            "Types of Financial Risks",
            "Risk Assessment and Measurement",
            "Risk Mitigation Strategies",
            "Regulatory Compliance",
            "Case Studies in Risk Management"
          ]
        },
        {
          name: "Financial Reporting and Compliance",
          description: "Financial Reporting and Compliance focuses on the preparation, presentation, and interpretation of financial statements. Participants will also delve into regulatory compliance, ensuring financial reporting aligns with industry standards.",
          outline: [
            "Principles of Financial Reporting",
            "International Financial Reporting Standards (IFRS)",
            "Regulatory Compliance and Reporting",
            "Financial Statement Analysis",
            "Reporting for Publicly Traded Companies",
            "Case Studies in Financial Reporting"
          ]
        },
        {
          name: "Financial Inclusion and Microfinance",
          description: "Financial Inclusion and Microfinance explore strategies to provide financial services to underserved communities. This course covers microfinance principles, inclusive banking, and the role of financial institutions in poverty alleviation.",
          outline: [
            "Introduction to Financial Inclusion",
            "Microfinance Models and Practices",
            "Inclusive Banking Strategies",
            "Social Impact of Microfinance",
            "Regulatory Considerations",
            "Case Studies in Financial Inclusion"
          ]
        },
        {
          name: "Computerised Financial Systems",
          description: "Computerised Financial Systems delves into the integration of technology in financial processes. Participants will gain direct experience with financial software, automated reporting, and data analysis tools.",
          outline: [
            "Introduction to Computerised Financial Systems",
            "Financial Software Applications",
            "Automated Reporting Systems",
            "Data Analysis and Visualisation",
            "Integration with ERP Systems",
            "Cybersecurity in Financial Systems"
          ]
        },
        {
          name: "Public Finance and Budgeting",
          description: "Public Finance and Budgeting provides an understanding of the financial management practices within government entities. Participants will learn budget formulation, execution, and evaluation for effective public financial management.",
          outline: [
            "Introduction to Public Finance",
            "Budget Formulation and Allocation",
            "Public Expenditure Management",
            "Revenue Generation and Taxation",
            "Fiscal Policy and Economic Development",
            "Performance-Based Budgeting"
          ]
        }
      ]
    }
    ,
{ 
name: "Management Assistant, Administration and Secretarial",
description: "Become the backbone of organisational success. Our courses in Management Assistance, Administration, and Secretarial skills empower you to handle the pivotal tasks that keep businesses running smoothly.",
link:"mang-assist.html",
courses: [
  {
    name: "Office Management",
    description: "Office Management is a comprehensive course designed to equip individuals with the skills and knowledge to efficiently oversee the day-to-day operations of an office. Participants will learn essential managerial and organisational skills to enhance productivity and effectiveness in a professional setting.",
    outline: [
      "Introduction to Office Management",
      "Role and Responsibilities of an Office Manager",
      "Office Organisation and Layout",
      "Administrative Procedures",
      "Team Leadership and Collaboration",
      "Technology Integration in Office Management"
    ]
  },
  {
    name: "Administrative Procedures and Systems",
    description: "Administrative Procedures and Systems is a course focused on developing expertise in creating, implementing, and optimizing administrative processes within an organisation. Participants will learn to streamline workflows and enhance operational efficiency.",
    outline: [
      "Principles of Administrative Procedures",
      "Workflow Analysis and Optimization",
      "Document Management Systems",
      "Standard Operating Procedures (SOPs)",
      "Quality Assurance in Administrative Processes",
      "Continuous Improvement Strategies"
    ]
  },
  {
    name: "Professional Communication Skills",
    description: "Professional Communication Skills is a fundamental course for individuals aiming to enhance their verbal and written communication abilities in a professional environment. The course covers effective communication strategies, interpersonal skills, and professional etiquette.",
    outline: [
      "The Importance of Professional Communication",
      "Verbal Communication Techniques",
      "Written Communication Skills",
      "Interpersonal Communication in the Workplace",
      "Cross-Cultural Communication",
      "Communication Technology Tools"
    ]
  },
  {
    name: "Secretarial Duties and Responsibilities",
    description: "Secretarial Duties and Responsibilities is a specialized course designed to provide individuals with the skills and knowledge required to excel in a secretarial role. Participants will learn about administrative support, scheduling, and task management.",
    outline: [
      "The Role of a Secretary in the Modern Workplace",
      "Administrative Support Functions",
      "Appointment Scheduling and Calendar Management",
      "Meeting Coordination and Minute-Taking",
      "Managing Correspondence and Communication",
      "Time and Task Management for Secretaries"
    ]
  },
  {
    name: "Time Management and Organisation",
    description: "Time Management and Organisation is a practical course designed to help individuals optimize their time, prioritize tasks, and enhance overall organizational skills. Participants will learn strategies for effective time utilization and maintaining an organized work environment.",
    outline: [
      "Principles of Time Management",
      "Goal Setting and Prioritization",
      "Task Planning and Scheduling",
      "Effective Delegation",
      "Initiative-taking Problem Solving",
      "Maintaining an Organized Workspace"
    ]
  }
]
},
{ 
name: "Financial Services",
description: "Dive into the dynamic world of Financial Services. Our courses offer a comprehensive understanding of banking, insurance, and investment, preparing you for a rewarding career in the financial sector.",
courses: [
  {
    name: "Banking Operations",
    description: "Banking Operations is a foundational course that provides an in-depth understanding of the day-to-day operations within a banking institution. Participants will gain knowledge about core banking functions, transaction processing, and customer service in a banking context.",
    outline: [
      "Introduction to Banking Operations",
      "Core Functions of Commercial Banks",
      "Retail Banking Operations",
      "Electronic Banking and Digital Transactions",
      "Regulatory Compliance in Banking",
      "Customer Service in Banking"
    ]
  },
  {
    name: "Insurance and Risk Management",
    description: "Insurance and Risk Management explore the principles and practices of the insurance industry. Participants will learn about risk identification, assessment, and mitigation strategies, as well as the various types of insurance products and their applications.",
    outline: [
      "Introduction to Insurance",
      "Principles of Risk Management",
      "Types of Insurance (Life, Health, Property, etc.)",
      "Underwriting and Claims Management",
      "Regulatory Environment in Insurance",
      "Emerging Trends in Insurance"
    ]
  },
  {
    name: "Investment Banking",
    description: "Investment Banking is a specialized course focusing on the financial services related to capital markets, mergers and acquisitions, and corporate finance. Participants will gain insights into investment banking functions, financial modeling, and deal structuring.",
    outline: [
      "Introduction to Investment Banking",
      "Capital Markets and Securities",
      "Mergers and Acquisitions (M&A)",
      "Financial Modeling for Investment Banking",
      "Valuation Techniques",
      "Deal Structuring and Negotiation"
    ]
  },
  {
    name: "Financial Regulation and Compliance",
    description: "Financial Regulation and Compliance is a course designed to provide a comprehensive understanding of the regulatory landscape governing financial institutions. Participants will explore compliance frameworks, risk management, and legal considerations.",
    outline: [
      "Overview of Financial Regulation",
      "Compliance Frameworks in Financial Institutions",
      "Anti-Money Laundering (AML) and Know Your Customer (KYC) Regulations",
      "Regulatory Reporting",
      "Ethics and Professional Conduct in Finance",
      "Regulatory Changes and Updates"
    ]
  },
  {
    name: "Wealth Management",
    description: "Wealth Management is a specialized course that addresses the holistic management of high-net-worth clients' financial portfolios. Participants will learn about investment strategies, estate planning, and personalized financial advisory services.",
    outline: [
      "Introduction to Wealth Management",
      "Investment Strategies for High-Net-Worth Individuals",
      "Estate Planning and Wealth Transfer",
      "Risk Management for Wealthy Clients",
      "Tax Planning in Wealth Management",
      "Client Relationship Management in Wealth Management"
    ]
  }
]
},
{ 
name: "Urban Development Planning",
description: "Shape the cities of tomorrow. Explore the intricacies of Urban Development Planning and contribute to sustainable, vibrant communities with our specialised courses.",
courses: [
  {
    name: "Urban Design and Architecture",
    description: "Urban Design and Architecture is a comprehensive course that explores the principles and practices of designing and shaping urban spaces. Participants will delve into architectural aesthetics, spatial organisation, and the integration of design elements into urban environments.",
    outline: [
      "Introduction to Urban Design and Architecture",
      "Principles of Architectural Design",
      "Spatial Planning in Urban Environments",
      "Sustainable Design Practices",
      "Historic Preservation in Urban Design",
      "Urban Design Case Studies"
    ]
  },
  {
    name: "Land Use Planning",
    description: "Land Use Planning is a course that focuses on the systematic allocation and organisation of land for various purposes to ensure sustainable development. Participants will learn about zoning regulations, environmental considerations, and the impact of land use on communities.",
    outline: [
      "Introduction to Land Use Planning",
      "Zoning Regulations and Ordinances",
      "Environmental Impact Assessment (EIA)",
      "Land Use and Transportation Planning",
      "Smart Growth Strategies",
      "Land Use Planning Case Studies"
    ]
  },
  {
    name: "Sustainable Urban Development",
    description: "Sustainable Urban Development explores strategies and principles for creating environmentally, socially, and economically sustainable urban spaces. Participants will learn about green infrastructure, renewable energy, and community-based development.",
    outline: [
      "Principles of Sustainable Development",
      "Green Infrastructure and Urban Ecology",
      "Renewable Energy in Urban Areas",
      "Social Sustainability and Inclusion",
      "Economic Strategies for Sustainable Development",
      "Sustainable Urban Development Projects"
    ]
  },
  {
    name: "Infrastructure Planning",
    description: "Infrastructure Planning is a course that focuses on the systematic development and management of critical infrastructure such as transportation, water, and energy systems. Participants will explore planning strategies, funding mechanisms, and the integration of infrastructure into urban environments.",
    outline: [
      "Introduction to Infrastructure Planning",
      "Transportation Planning and Management",
      "Water and Wastewater Infrastructure",
      "Energy Infrastructure Planning",
      "Funding and Financing Infrastructure Projects",
      "Infrastructure Resilience and Sustainability"
    ]
  },
  {
    name: "Community Engagement in Planning",
    description: "Community Engagement in Planning is a course that emphasises the importance of involving communities in the urban planning process. Participants will learn about participatory methods, stakeholder engagement, and effective communication strategies.",
    outline: [
      "Importance of Community Engagement in Planning",
      "Participatory Planning Methods",
      "Stakeholder Identification and Analysis",
      "Communication Strategies for Community Engagement",
      "Conflict Resolution in Community Planning",
      "Evaluating the Impact of Community Engagement"
    ]
  },
  {
    name: "Local Government Management",
    description: "Local Government Management is a course that provides insights into the functions and responsibilities of local governments. Participants will learn about governance structures, public administration, and the effective management of local government resources.",
    outline: [
      "Introduction to Local Government Management",
      "Governance Structures in Local Government",
      "Public Administration and Service Delivery",
      "Financial Management in Local Government",
      "Community Development and Engagement",
      "Local Government Case Studies"
    ]
  }
  ]
},
{ 
name: "Environmental Management",
description: "Guardians of the planet, welcome! Our Environmental Management courses equip you with the knowledge and skills to address environmental challenges and champion sustainable practices.",
courses: [
  {
    name: "Environmental Impact Assessment (EIA)",
    description: "Environmental Impact Assessment (EIA) is a course that focuses on the systematic evaluation of potential environmental consequences of development projects. Participants will learn how to assess, mitigate, and manage the environmental impacts of various activities.",
    outline: [
      "Introduction to Environmental Impact Assessment",
      "Regulatory Framework for EIA",
      "EIA Process and Methodologies",
      "Social and Cultural Impact Assessment",
      "Ecological Impact Assessment",
      "Case Studies in Environmental Impact Assessment"
    ]
  },
  {
    name: "Conservation and Biodiversity Management",
    description: "Conservation and Biodiversity Management is a course that addresses the preservation and sustainable management of biological diversity. Participants will explore strategies for biodiversity conservation, habitat restoration, and ecosystem management.",
    outline: [
      "Introduction to Conservation Biology",
      "Threats to Biodiversity",
      "Conservation Strategies and Approaches",
      "Wildlife Management and Protection",
      "Habitat Restoration and Conservation",
      "Indigenous Knowledge in Biodiversity Management"
    ]
  },
  {
    name: "Pollution Control and Remediation",
    description: "Pollution Control and Remediation is a course that examines strategies and technologies for preventing, controlling, and remediating environmental pollution. Participants will learn about the sources of pollution, regulatory frameworks, and remediation techniques.",
    outline: [
      "Introduction to Pollution Control",
      "Air and Water Pollution Control",
      "Soil Contamination and Remediation",
      "Industrial Waste Management",
      "Regulatory Compliance and Reporting",
      "Emerging Technologies in Pollution Control"
    ]
  },
  {
    name: "Environmental Policy and Law",
    description: "Environmental Policy and Law is a course that explores the legal and regulatory frameworks governing environmental protection. Participants will gain insights into the development, implementation, and enforcement of environmental policies and laws.",
    outline: [
      "Principles of Environmental Policy",
      "National and International Environmental Laws",
      "Regulatory Compliance and Enforcement",
      "Environmental Impact Assessment (EIA) in Policy Development",
      "Public Participation in Policy-making",
      "Case Studies in Environmental Policy and Law"
    ]
  },
  {
    name: "Sustainable Resource Management",
    description: "Sustainable Resource Management is a course that addresses the responsible use and conservation of natural resources. Participants will learn about sustainable practices, resource economics, and the integration of environmental and social considerations.",
    outline: [
      "Principles of Sustainable Resource Management",
      "Renewable and Non-renewable Resources",
      "Resource Economics and Valuation",
      "Sustainable Agriculture and Forestry",
      "Circular Economy Concepts",
      "Sustainable Resource Management in Practice"
    ]
  }
  ]
},
{ 
name: "Travel and Tourism Management",
description: "Embark on a journey to excellence. Our Travel and Tourism Management courses offer insights into the dynamic world of hospitality, tourism, and event management.",
courses: [
  {
    name: "Tourism Marketing and Promotion",
    description: "Tourism Marketing and Promotion is a dynamic course that explores strategies for attracting visitors to destinations. Participants will learn about market segmentation, promotional techniques, and digital marketing in the context of the tourism industry.",
    outline: [
      "Introduction to Tourism Marketing",
      "Market Segmentation and Targeting",
      "Branding and Positioning in Tourism",
      "Digital Marketing Strategies for Tourism",
      "Destination Promotion and Advertising",
      "Marketing Analytics in Tourism"
    ]
  },
  {
    name: "Hospitality Management",
    description: "Hospitality Management is a comprehensive course covering the principles and practices of managing hotels, resorts, and other hospitality establishments. Participants will gain insights into customer service, operations, and strategic management in the hospitality industry.",
    outline: [
      "Introduction to Hospitality Management",
      "Front Office and Housekeeping Operations",
      "Food and Beverage Management",
      "Customer Service Excellence",
      "Human Resource Management in Hospitality",
      "Trends and Innovations in Hospitality"
    ]
  },
  {
    name: "Event Planning and Management",
    description: "Event Planning and Management is a course that delves into the intricacies of organising successful events. Participants will learn about event conceptualisation, logistics, budgeting, and marketing strategies.",
    outline: [
      "Introduction to Event Planning",
      "Event Conceptualisation and Design",
      "Venue Selection and Logistics",
      "Budgeting and Financial Planning for Events",
      "Marketing and Promotion of Events",
      "Risk Management in Event Planning"
    ]
  },
  {
    name: "Cultural Tourism",
    description: "Cultural Tourism explores the intersection of tourism and cultural heritage. Participants will learn about the importance of preserving and promoting cultural assets, fostering cultural exchange, and ensuring sustainable tourism practices.",
    outline: [
      "Introduction to Cultural Tourism",
      "Preservation of Cultural Heritage",
      "Cultural Exchange and Interactions",
      "Tourism and Indigenous Communities",
      "Cultural Tourism Policies and Regulations",
      "Case Studies in Cultural Tourism"
    ]
  },
  {
    name: "Sustainable Tourism Practices",
    description: "Sustainable Tourism Practices is a course that emphasises responsible and environmentally friendly tourism. Participants will learn about sustainable tourism development, eco-friendly practices, and community engagement for sustainable tourism.",
    outline: [
      "Principles of Sustainable Tourism",
      "Eco-Friendly Practices in Tourism",
      "Community Engagement and Empowerment",
      "Certification and Standards for Sustainable Tourism",
      "Responsible Wildlife Tourism",
      "Sustainable Tourism Case Studies"
    ]
  },
  {
    name: "Hospitality Grading System",
    description: "Hospitality Grading System is a specialised course that explores the rating and classification of hospitality establishments based on established standards. Participants will gain an understanding of the criteria and evaluation processes used in grading.",
    outline: [
      "Introduction to Hospitality Grading",
      "Criteria for Grading Hotels and Resorts",
      "Quality Standards in Hospitality",
      "Evaluation Processes and Assessments",
      "Impacts of Grading on Business",
      "Global Trends in Hospitality Grading"
    ]
  }
  ]
},
{ 
name: "Leadership and Strategic Management",
description: "Forge the path to leadership excellence. Our courses in Leadership and Strategic Management empower you to lead with vision, drive organisational success, and navigate complex challenges.",
courses: [
  {
    name: "Strategic Planning and Execution",
    description: "Strategic Planning and Execution is a comprehensive course that focuses on the development and implementation of organisational strategies. Participants will learn about strategic analysis, goal-setting, and the execution of strategic initiatives.",
    outline: [
      "Introduction to Strategic Planning",
      "Environmental Analysis and SWOT Analysis",
      "Goal Setting and Objective Development",
      "Strategy Formulation and Implementation",
      "Strategic Performance Measurement",
      "Monitoring and Adjusting the Strategic Plan"
    ]
  },
  {
    name: "Organisational Leadership",
    description: "Organisational Leadership is a course that explores theories and practices of effective leadership within an organisational context. Participants will learn about leadership styles, communication strategies, and fostering a positive organisational culture.",
    outline: [
      "Introduction to Organisational Leadership",
      "Leadership Theories and Models",
      "Emotional Intelligence in Leadership",
      "Leading Change and Innovation",
      "Ethical Leadership",
      "Building and Leading Diverse Teams"
    ]
  },
  {
    name: "Change Management",
    description: "Change Management is a course that addresses the processes and strategies for managing organisational change successfully. Participants will learn about change models, communication strategies, and overcoming resistance to change.",
    outline: [
      "Introduction to Change Management",
      "Theories and Models of Change",
      "Planning and Implementing Change",
      "Communication Strategies in Change",
      "Overcoming Resistance to Change",
      "Evaluation and Continuous Improvement"
    ]
  },
  {
    name: "Decision-making Strategies",
    description: "Decision-making Strategies is a course designed to enhance participants' decision-making skills in a professional context. Participants will learn about decision models, risk assessment, and strategic decision-making processes.",
    outline: [
      "Introduction to Decision-making",
      "Decision Models and Techniques",
      "Data-Driven Decision-making",
      "Risk Assessment and Mitigation",
      "Group Decision-making",
      "Ethical Considerations in Decision-making"
    ]
  },
  {
    name: "Leading High-Performance Teams",
    description: "Leading High-Performance Teams is a course that focuses on developing leadership skills to inspire and manage teams for optimal performance. Participants will learn about team dynamics, motivation, and fostering a culture of collaboration and innovation.",
    outline: [
      "Introduction to High-Performance Teams",
      "Team Dynamics and Communication",
      "Motivation and Team Productivity",
      "Conflict Resolution in Teams",
      "Building a Collaborative Culture",
      "Leadership for Innovation in Teams"
    ]
  }
  ]
},
{ 
name: "Human Capital Management",
description: "Unleash the potential of your greatest asset – people. Our Human Capital Management courses delve into effective HR strategies, talent development, and organisational culture.",
courses: [
  {
    name: "Talent Acquisition and Recruitment",
    description: "Talent Acquisition and Recruitment is a course designed to equip individuals with the skills and knowledge to attract, assess, and select the right talent for an organisation. Participants will learn about recruitment strategies, sourcing methods, and the entire recruitment life cycle.",
    outline: [
      "Introduction to Talent Acquisition",
      "Job Analysis and Position Specification",
      "Recruitment Strategies and Planning",
      "Sourcing Methods: Traditional and Digital",
      "Selection Techniques and Assessment",
      "Onboarding and Integration"
    ]
  },
  {
    name: "Employee Training and Development",
    description: "Employee Training and Development is a course that focuses on enhancing the skills, knowledge, and abilities of employees to improve their performance and contribute to organisational goals. Participants will learn about training needs analysis, program design, and evaluation.",
    outline: [
      "Introduction to Training and Development",
      "Training Needs Analysis",
      "Learning and Development Program Design",
      "Delivery Methods: Classroom and Online",
      "Evaluation of Training Effectiveness",
      "Career Development and Succession Planning"
    ]
  },
  {
    name: "Performance Management",
    description: "Performance Management is a course that addresses the systematic process of setting goals, assessing performance, providing feedback, and improving employee performance. Participants will learn about performance appraisal methods, feedback techniques, and performance improvement plans.",
    outline: [
      "Introduction to Performance Management",
      "Goal Setting and Alignment",
      "Performance Appraisal Methods",
      "Continuous Feedback and Coaching",
      "Performance Improvement Plans",
      "Performance Management Technologies"
    ]
  },
  {
    name: "Diversity and Inclusion in the Workplace",
    description: "Diversity and Inclusion in the Workplace is a course that explores the importance of creating inclusive environments that celebrate and leverage diverse perspectives. Participants will learn about diversity awareness, inclusive leadership, and fostering an inclusive culture.",
    outline: [
      "Introduction to Diversity and Inclusion",
      "Understanding and Managing Bias",
      "Inclusive Leadership Practices",
      "Building a Diverse Talent Pipeline",
      "Employee Resource Groups",
      "Measuring and Evaluating Inclusion"
    ]
  },
  {
    name: "Employee Relations and Engagement",
    description: "Employee Relations and Engagement is a course that focuses on building positive relationships between employees and the organisation. Participants will learn about employee engagement strategies, conflict resolution, and creating a positive workplace culture.",
    outline: [
      "Introduction to Employee Relations and Engagement",
      "Building Positive Workplace Culture",
      "Employee Communication Strategies",
      "Conflict Resolution and Mediation",
      "Employee Recognition and Rewards",
      "Measuring and Improving Employee Engagement"
    ]
  }
  ]
},
{ 
name: "ICT and Cybersecurity Management",
description: "Navigate the digital frontier with confidence. Our ICT and Cybersecurity Management courses provide the skills to safeguard data, manage technology, and mitigate cyber threats.",
courses: [
  {
    name: "Information Security Management",
    description: "Focuses on the principles and practices of securing an organisation's information assets.",
    outline: [
      "Introduction to Information Security",
      "Risk Assessment and Management",
      "Security Policies and Procedures",
      "Access Control and Authentication",
      "Cryptography and Data Protection",
      "Security Incident Management"
    ]
  },
  {
    name: "Cyber Threat Intelligence",
    description: "Explores the collection, analysis, and utilisation of intelligence to identify and respond to cyber threats.",
    outline: [
      "Introduction to Cyber Threat Intelligence",
      "Threat Intelligence Lifecycle",
      "Threat Actor Profiling",
      "Indicators of Compromise (IoCs)",
      "Threat Intelligence Sharing",
      "Threat Intelligence Platforms"
    ]
  },
  {
    name: "IT Governance and Compliance",
    description: "Focuses on establishing and maintaining effective governance frameworks and ensuring compliance with relevant regulations and standards.",
    outline: [
      "Introduction to IT Governance",
      "COBIT and ITIL Frameworks",
      "Regulatory Compliance (e.g., GDPR, HIPAA)",
      "IT Auditing and Assurance",
      "Risk Management in IT Governance",
      "IT Governance Best Practices"
    ]
  },
  {
    name: "Network Security",
    description: "Addresses the protection of an organisation's network infrastructure from unauthorized access, attacks, and data breaches.",
    outline: [
      "Introduction to Network Security",
      "Firewalls and Intrusion Prevention Systems",
      "Virtual Private Networks (VPNs)",
      "Network Access Control (NAC)",
      "Wireless Network Security",
      "Network Security Monitoring"
    ]
  },
  {
    name: "Incident Response and Management",
    description: "Focuses on preparing for, detecting, and responding to cybersecurity incidents.",
    outline: [
      "Introduction to Incident Response",
      "Incident Response Planning",
      "Incident Detection and Analysis",
      "Incident Containment and Eradication",
      "Post-Incident Recovery and Analysis",
      "Legal and Ethical Considerations in Incident Response"
    ]
  },
  {
    name: "Data Analytics for Policy Decision-Making",
    description: "Explores the use of data analytics to inform and support decision-making in policy development and implementation.",
    outline: [
      "Introduction to Data Analytics for Policy",
      "Data-Driven Decision-Making",
      "Data Collection and Analysis Tools",
      "Predictive Analytics in Policy",
      "Policy Evaluation Metrics",
      "Ethical Considerations in Data Analytics for Policy"
    ]
  }
]
},
{ 
name: "Agricultural Sciences",
description: "Cultivate knowledge for a sustainable future. Explore the science behind agriculture with our courses, equipping you to address challenges in farming, agribusiness, and food security.",
courses: [
  {
    name: "Crop Science",
    description: "Focuses on the principles and practices of crop production.",
    outline: [
      "Introduction to Crop Science",
      "Plant Physiology and Growth",
      "Crop Genetics and Breeding",
      "Agronomic Practices",
      "Crop Protection and Pest Management",
      "Sustainable Crop Production"
    ]
  },
  {
    name: "Animal Husbandry",
    description: "Covers the management and care of domesticated animals for various purposes.",
    outline: [
      "Introduction to Animal Husbandry",
      "Animal Nutrition and Feeding",
      "Breeding and Genetics in Animal Husbandry",
      "Health and Disease Management",
      "Livestock Production Systems",
      "Ethical Considerations in Animal Husbandry"
    ]
  },
  {
    name: "Agribusiness Management",
    description: "Combines agricultural principles with business management strategies.",
    outline: [
      "Introduction to Agribusiness Management",
      "Market Analysis and Pricing Strategies",
      "Financial Management in Agriculture",
      "Supply Chain Management in Agribusiness",
      "Entrepreneurship in Agriculture",
      "Sustainable Agribusiness Practices"
    ]
  },
  {
    name: "Sustainable Agriculture",
    description: "Emphasizes environmentally friendly and socially responsible farming practices.",
    outline: [
      "Introduction to Sustainable Agriculture",
      "Organic Farming Practices",
      "Agroecology and Permaculture",
      "Conservation Agriculture",
      "Sustainable Resource Management",
      "Sustainable Agriculture Policy and Certification"
    ]
  },
  {
    name: "Precision Agriculture and Technology",
    description: "Explores the use of advanced technologies in agriculture for optimizing efficiency and productivity.",
    outline: [
      "Introduction to Precision Agriculture",
      "Precision Farming Technologies (GPS, GIS)",
      "Data Analytics in Agriculture",
      "Remote Sensing and Drones in Agriculture",
      "Smart Farming Systems",
      "Adoption and Integration of Precision Agriculture Technologies"
    ]
  }
]
},
{ 
name: "International Relations and Diplomacy",
description: "Become a global player. Our International Relations and Diplomacy courses offer insights into global affairs, diplomacy, and international cooperation.",
courses: [
  {
    name: "Diplomatic Protocol and Etiquette",
    description: "Focuses on the formalities and conventions observed in diplomatic and international relations.",
    outline: [
      "Introduction to Diplomatic Protocol",
      "Diplomatic Ceremonies and Procedures",
      "Communication Etiquette in Diplomacy",
      "Cultural Sensitivity and Awareness",
      "Protocol for State Visits and Events",
      "Crisis Communication in Diplomacy"
    ]
  },
  {
    name: "Global Governance",
    description: "Explores the structures and mechanisms through which international cooperation and coordination are achieved.",
    outline: [
      "Introduction to Global Governance",
      "International Organisations (UN, WTO, IMF)",
      "Multilateral Diplomacy and Cooperation",
      "Global Policymaking and Decision-Making",
      "Challenges to Global Governance",
      "Emerging Trends in Global Governance"
    ]
  },
  {
    name: "Conflict Resolution and Peacebuilding",
    description: "Addresses the theories and practices of resolving conflicts and promoting peace in international relations.",
    outline: [
      "Introduction to Conflict Resolution",
      "Theories of Conflict and Peacebuilding",
      "Mediation and Negotiation Techniques",
      "Peacekeeping Operations",
      "Post-Conflict Reconstruction",
      "Transitional Justice"
    ]
  },
  {
    name: "International Law and Organisations",
    description: "Examines the legal frameworks governing states' interactions and the role of international organisations.",
    outline: [
      "Introduction to International Law",
      "Sources of International Law",
      "Treaty Law and Conventions",
      "International Courts and Tribunals",
      "Role of International Organisations (ICJ, ICC, UN)",
      "Human Rights Law"
    ]
  },
  {
    name: "Cross-Cultural Communication",
    description: "Addresses effective communication across diverse cultural contexts.",
    outline: [
      "Introduction to Cross-Cultural Communication",
      "Cultural Dimensions and Variations",
      "Communication Styles in Different Cultures",
      "Stereotypes and Cultural Misunderstandings",
      "Building Intercultural Competence",
      "Cross-Cultural Communication in Diplomacy and Business"
    ]
  }
]
},
{ 
name: "Energy Management",
description: "Powering progress sustainably. Our Energy Management courses provide the expertise needed to navigate the complexities of energy production, distribution, and sustainability.",
courses: [
{
  name: "Energy Policy and Regulation",
  description: "Examines the development, implementation, and evaluation of policies and regulations in the energy sector.",
  outline: [
    "Introduction to Energy Policy and Regulation",
    "Policy Development and Implementation",
    "Regulatory Frameworks in the Energy Sector",
    "Environmental Considerations",
    "Market Structures and Competition",
    "Case Studies in Energy Policy and Regulation"
  ]
},
{
  name: "Renewable Energy Technologies",
  description: "Explores various technologies used for harnessing renewable energy sources.",
  outline: [
    "Introduction to Renewable Energy",
    "Solar Energy Technologies",
    "Wind Energy Technologies",
    "Hydropower and Ocean Energy",
    "Geothermal Energy Systems",
    "Integration of Renewable Energy Systems"
  ]
},
{
  name: "Energy Efficiency and Conservation",
  description: "Focuses on strategies to optimize energy use and reduce waste.",
  outline: [
    "Introduction to Energy Efficiency and Conservation",
    "Energy Audits and Assessment",
    "Energy-Efficient Technologies",
    "Building Design and Energy Conservation",
    "Industrial and Transportation Efficiency",
    "Behavioral Aspects of Energy Conservation"
  ]
},
{
  name: "Energy Economics",
  description: "Examines the economic principles and factors influencing the production, distribution, and consumption of energy.",
  outline: [
    "Introduction to Energy Economics",
    "Supply and Demand in Energy Markets",
    "Pricing Mechanisms in Energy Markets",
    "Economic Impacts of Energy Policies",
    "Energy Trading and Risk Management",
    "Case Studies in Energy Economics"
  ]
},
{
  name: "Energy Project Management",
  description: "Covers the planning, execution, and monitoring of projects in the energy sector.",
  outline: [
    "Introduction to Energy Project Management",
    "Project Planning and Scheduling",
    "Risk Management in Energy Projects",
    "Stakeholder Engagement and Communication",
    "Project Execution and Monitoring",
    "Case Studies in Energy Project Management"
  ]
}
]
},
{ 
name: "Logistics and Supply Chain Management",
description: "Optimise, streamline, and excel. Our Logistics and Supply Chain Management courses equip you with the skills to master the intricacies of supply chain dynamics.",
courses: [
  {
    name: "Supply Chain Planning and Design",
    description: "Explores the strategic aspects of designing and planning efficient and effective supply chain networks.",
    outline: [
      "Introduction to Supply Chain Planning and Design",
      "Demand Forecasting and Planning",
      "Network Design and Optimization",
      "Inventory Planning Strategies",
      "Distribution Network Design",
      "Strategic Considerations in Supply Chain Design"
    ]
  },
  {
    name: "Inventory Management",
    description: "Addresses the principles and practices of managing inventory throughout the supply chain.",
    outline: [
      "Introduction to Inventory Management",
      "Inventory Control Models (ABC analysis, EOQ)",
      "Demand Forecasting for Inventory Planning",
      "Technology in Inventory Management (RFID, IoT)",
      "Multi-Echelon Inventory Optimization",
      "Inventory Management Best Practices"
    ]
  },
  {
    name: "Transportation and Distribution Management",
    description: "Focuses on the efficient movement of goods within the supply chain.",
    outline: [
      "Introduction to Transportation and Distribution Management",
      "Transportation Modes and Selection",
      "Route Optimization and Scheduling",
      "Last-Mile Delivery Strategies",
      "Warehousing and Distribution Centres",
      "Environmental Considerations in Transportation"
    ]
  },
  {
    name: "Procurement and Supplier Management",
    description: "Covers the sourcing and management of suppliers to ensure a reliable and cost-effective supply of goods and services.",
    outline: [
      "Introduction to Procurement and Supplier Management",
      "Strategic Sourcing and Supplier Selection",
      "Contract Negotiation and Management",
      "Supplier Relationship Management (SRM)",
      "Supplier Risk Assessment and Mitigation",
      "Sustainable Procurement Practices"
    ]
  },
  {
    name: "Global Supply Chain Logistics",
    description: "Addresses the complexities of managing supply chain activities on a global scale.",
    outline: [
      "Introduction to Global Supply Chain Logistics",
      "International Trade and Regulations",
      "Cross-Border Transportation and Customs",
      "Global Logistics Network Design",
      "Risk Management in Global Logistics",
      "Technology and Innovation in Global Supply Chain Logistics"
    ]
  }
]
},
{ 
name: "Project Management",
description: "Turn ideas into reality. Our Project Management courses provide the tools and methodologies to plan, execute, and deliver successful projects.",
courses: [
  {
    name: "Project Planning and Execution",
    description: "Covers the key principles and processes involved in successfully planning and executing projects.",
    outline: [
      "Introduction to Project Planning and Execution",
      "Project Initiation and Definition",
      "Work Breakdown Structure (WBS)",
      "Project Scheduling and Gantt Charts",
      "Resource Allocation and Management",
      "Project Closure and Evaluation"
    ]
  },
  {
    name: "Risk Management in Projects",
    description: "Addresses the identification, assessment, and mitigation of risks throughout the project life cycle.",
    outline: [
      "Introduction to Risk Management in Projects",
      "Risk Identification and Assessment",
      "Qualitative and Quantitative Risk Analysis",
      "Risk Response Planning",
      "Monitoring and Controlling Risks",
      "Lessons Learned and Continuous Improvement"
    ]
  },
  {
    name: "Agile Project Management",
    description: "Introduces agile methodologies for managing projects with a focus on adaptability, collaboration, and iterative development.",
    outline: [
      "Introduction to Agile Project Management",
      "Agile Manifesto and Principles",
      "Scrum Framework",
      "Kanban and Lean Practices",
      "Agile Planning and Estimation",
      "Agile Team Collaboration"
    ]
  },
  {
    name: "Project Budgeting and Finance",
    description: "Delves into the financial aspects of project management, including budget development, cost estimation, and financial control.",
    outline: [
      "Introduction to Project Budgeting and Finance",
      "Cost Estimation Techniques",
      "Budget Development and Monitoring",
      "Financial Control and Reporting",
      "Return on Investment (ROI) Analysis",
      "Financial Considerations in Project Decision-Making"
    ]
  },
  {
    name: "Stakeholder Management",
    description: "Focuses on identifying, engaging, and managing the expectations of project stakeholders.",
    outline: [
      "Introduction to Stakeholder Management",
      "Stakeholder Identification and Analysis",
      "Communication Planning for Stakeholders",
      "Stakeholder Engagement and Influence",
      "Managing Stakeholder Expectations",
      "Conflict Resolution in Stakeholder Management"
    ]
  }
]
},
{ 
name: "Public Relations and Marketing Management",
description: "Craft compelling narratives and build brands. Our Public Relations and Marketing Management courses empower you to excel in the ever-evolving world of communication and promotion.",
courses: [
  {
    name: "Strategic Brand Management",
    description: "Focuses on the development, maintenance, and enhancement of brand equity.",
    outline: [
      "Introduction to Strategic Brand Management",
      "Brand Positioning and Differentiation",
      "Brand Identity and Image",
      "Brand Architecture and Portfolio Management",
      "Brand Extension and Co-branding",
      "Measuring and Managing Brand Equity"
    ]
  },
  {
    name: "Digital Marketing Strategies",
    description: "Explores the use of digital channels and technologies to create effective marketing campaigns.",
    outline: [
      "Introduction to Digital Marketing Strategies",
      "Search Engine Optimisation (SEO)",
      "Social Media Marketing",
      "Content Marketing and Blogging",
      "Email Marketing and Automation",
      "Analytics and Measurement in Digital Marketing"
    ]
  },
  {
    name: "Crisis Communication",
    description: "Addresses strategies and practices for managing communication during times of crisis.",
    outline: [
      "Introduction to Crisis Communication",
      "Crisis Planning and Preparedness",
      "Risk Assessment and Crisis Identification",
      "Crisis Communication Strategies",
      "Media Handling in Crisis Situations",
      "Post-Crisis Communication and Reputation Management"
    ]
  },
  {
    name: "Media Relations",
    description: "Focuses on building positive relationships with media outlets to enhance the organisation's visibility and manage its public image.",
    outline: [
      "Introduction to Media Relations",
      "Building and Maintaining Media Contacts",
      "Writing Effective Press Releases",
      "Media Interviews and Spokesperson Training",
      "Crisis Communication with the Media",
      "Monitoring and Measuring Media Coverage"
    ]
  },
  {
    name: "Public Relations Campaigns",
    description: "Covers the strategic planning and execution of public relations initiatives to achieve specific organisational objectives.",
    outline: [
      "Introduction to Public Relations Campaigns",
      "Campaign Planning and Research",
      "Target Audience Analysis",
      "Message Development and Positioning",
      "Implementation and Execution",
      "Evaluation and Measurement of Campaign Effectiveness"
    ]
  }
]
},
{ 
name: "Public Service Delivery",
description: "Serve with excellence. Our Public Service Delivery courses are designed to enhance your skills in delivering effective and citizen-centric public services.",
courses: [
  {
    name: "Citizen-Centric Service Design",
    description: "Focuses on designing public services with a primary focus on meeting the needs and expectations of citizens.",
    outline: [
      "Introduction to Citizen-Centric Service Design",
      "User-Centred Design Principles",
      "Service Delivery Optimisation",
      "Incorporating Citizen Feedback",
      "Technology and Innovation in Service Design",
      "Case Studies in Citizen-Centric Service Design"
    ]
  },
  {
    name: "Public Policy Analysis",
    description: "Delves into the systematic evaluation and assessment of public policies.",
    outline: [
      "Introduction to Public Policy Analysis",
      "Policy Formulation and Development",
      "Policy Implementation Strategies",
      "Policy Evaluation Methods",
      "Cost-Benefit Analysis in Public Policy",
      "Ethical Considerations in Policy Analysis"
    ]
  },
  {
    name: "Government Program Evaluation",
    description: "Focuses on assessing the effectiveness and efficiency of government programs.",
    outline: [
      "Introduction to Government Program Evaluation",
      "Evaluation Design and Methodologies",
      "Data Collection and Analysis",
      "Utilising Evaluation Results for Decision-Making",
      "Performance Metrics and Key Performance Indicators",
      "Continuous Improvement in Government Programs"
    ]
  },
  {
    name: "Public-Private Partnerships",
    description: "Explores collaborative arrangements between public and private sectors to deliver public services and infrastructure projects.",
    outline: [
      "Introduction to Public-Private Partnerships",
      "Types of PPP Models",
      "Risk Allocation and Mitigation",
      "Legal and Regulatory Considerations",
      "Financial Structuring of PPPs",
      "Case Studies in Successful PPPs"
    ]
  },
  {
    name: "Public Service Innovation",
    description: "Focuses on fostering creativity and innovation in the delivery of public services.",
    outline: [
      "Introduction to Public Service Innovation",
      "Innovation Frameworks and Models",
      "Technology Adoption in Public Services",
      "Creating a Culture of Innovation",
      "Implementing and Scaling Innovations",
      "Measuring and Evaluating Innovation Impact"
    ]
  },
  {
    name: "Education Policy and Administration",
    description: "Addresses the formulation, implementation, and evaluation of policies in the education sector.",
    outline: [
      "Introduction to Education Policy and Administration",
      "Governance Structures in Education",
      "Curriculum Development and Implementation",
      "Educational Leadership and Management",
      "Teacher Training and Professional Development",
      "Education Policy Evaluation"
    ]
  },
  {
    name: "Public Health Administration",
    description: "Covers the principles and practices of managing public health organisations.",
    outline: [
      "Introduction to Public Health Administration",
      "Healthcare Policy and Legislation",
      "Epidemiology and Disease Control",
      "Health Promotion and Education",
      "Healthcare Financing and Budgeting",
      "Crisis Management in Public Health"
    ]
  },
  {
    name: "Community Development and Social Services",
    description: "Addresses strategies and practices for promoting social well-being and community empowerment.",
    outline: [
      "Introduction to Community Development and Social Services",
      "Community Needs Assessment",
      "Social Service Delivery Models",
      "Community Engagement and Empowerment",
      "Advocacy and Social Justice",
      "Evaluating Impact in Community Development"
    ]
  }
]
},
{ 
name: "Non-Governmental Organisation Management",
description: "Drive positive change. Our courses in NGO Management prepare you to lead and manage impactful initiatives, making a difference in the non-profit sector.",
courses: [
  {
    name: "NGO Leadership and Governance",
    description: "Focuses on building the leadership skills and governance structures necessary for effective NGO management.",
    outline: [
      "Introduction to NGO Leadership and Governance",
      "Strategic Leadership in NGOs",
      "Ethical Considerations in NGO Management",
      "Board Governance and Accountability",
      "Decision-Making and Conflict Resolution",
      "Leadership Development in NGOs"
    ]
  },
  {
    name: "Fundraising and Grant Management",
    description: "Addresses strategies for securing financial resources and managing grants effectively.",
    outline: [
      "Introduction to Fundraising and Grant Management",
      "Fundraising Strategies and Campaigns",
      "Grant Proposal Writing",
      "Budgeting and Financial Planning for Grants",
      "Grant Monitoring and Reporting",
      "Donor Relationship Management"
    ]
  },
  {
    name: "Advocacy and Social Change",
    description: "Explores the principles and practices of advocating for social issues and driving positive change.",
    outline: [
      "Introduction to Advocacy and Social Change",
      "Policy Advocacy and Analysis",
      "Grassroots Mobilisation and Community Organising",
      "Coalition Building and Partnerships",
      "Media and Communications in Advocacy",
      "Evaluating Impact in Advocacy Initiatives"
    ]
  },
  {
    name: "Monitoring and Evaluation in NGOs",
    description: "Covers the methodologies and tools for assessing the impact and effectiveness of NGO programs.",
    outline: [
      "Introduction to Monitoring and Evaluation in NGOs",
      "Designing Monitoring and Evaluation Frameworks",
      "Data Collection Methods and Tools",
      "Impact Assessment and Reporting",
      "Learning from Evaluation Results",
      "Integrating Monitoring and Evaluation into Program Management"
    ]
  },
  {
    name: "NGO Project Management",
    description: "Focuses on the principles and practices of managing projects within the context of non-governmental organisations.",
    outline: [
      "Introduction to NGO Project Management",
      "Project Planning and Proposal Development",
      "Stakeholder Engagement and Management",
      "Budgeting and Resource Allocation",
      "Monitoring and Evaluation in NGO Projects",
      "Project Closure and Learning from Experiences"
    ]
  }
]
},

{ name: "Z Or Other Courses", 
description: "Strive for excellence. We offer other critical courses that equips you with expert knowledge in the specific fields", 

courses: [
  {
    name: "Gender Studies and Women Empowerment",
    description: "Explores the social, cultural, and economic dimensions of gender, examining gender inequality, women's rights, and strategies for promoting empowerment and inclusivity.",
    outline: [
      "Introduction to Gender Studies",
      "Theoretical Perspectives on Gender",
      "Women's Rights and Empowerment",
      "Gender Mainstreaming in Policy and Programs",
      "Addressing Gender-Based Violence",
      "Case Studies in Women Empowerment Initiatives"
    ]
  },
  {
    name: "Crisis and Disaster Management",
    description: "Covers the principles and practices of managing crises and disasters, including risk assessment, emergency response planning, and recovery strategies.",
    outline: [
      "Introduction to Crisis and Disaster Management",
      "Risk Assessment and Preparedness",
      "Emergency Response and Coordination",
      "Crisis Communication and Public Information",
      "Recovery and Reconstruction",
      "Lessons Learned and Continuous Improvement"
    ]
  },
  {
    name: "Ethics and Anti-Corruption Compliance",
    description: "Addresses ethical considerations in various sectors and strategies for preventing and combating corruption.",
    outline: [
      "Introduction to Ethics and Anti-Corruption Compliance",
      "Codes of Conduct and Professional Ethics",
      "Anti-Corruption Laws and Regulations",
      "Compliance Frameworks and Internal Controls",
      "Whistleblower Protection and Reporting",
      "Case Studies in Ethical Decision-Making"
    ]
  },
  {
    name: "Social Innovation and Entrepreneurship",
    description: "Explores innovative solutions to social challenges and the role of entrepreneurship in creating positive social impact.",
    outline: [
      "Introduction to Social Innovation and Entrepreneurship",
      "Social Entrepreneurship Models",
      "Impact Measurement and Evaluation",
      "Funding and Financing Social Enterprises",
      "Sustainable Business Models",
      "Case Studies in Social Innovation"
    ]
  },
  {
    name: "Human Rights and Democracy Studies",
    description: "Examines the principles of human rights, democracy, and the challenges to their implementation.",
    outline: [
      "Introduction to Human Rights and Democracy Studies",
      "International Human Rights Law",
      "Democratic Governance and Institutions",
      "Human Rights Advocacy and Activism",
      "Challenges to Human Rights and Democracy",
      "Human Rights in Conflict and Post-Conflict Settings"
    ]
  },
  {
    name: "Occupational Health and Safety",
    description: "Addresses the principles and practices of ensuring the health and safety of workers in various environments.",
    outline: [
      "Introduction to Occupational Health and Safety",
      "Risk Assessment and Hazard Identification",
      "Workplace Safety Regulations and Compliance",
      "Emergency Response and Evacuation Procedures",
      "Health and Wellness Programs in the Workplace",
      "Continuous Improvement in Occupational Health and Safety"
    ]
  }
]
 }
];



  // Sort categories alphabetically
  categories.sort((a, b) => a.name.localeCompare(b.name));

  // Generate HTML for each category
  const accordion = document.getElementById("accordionExample");
  const categoryContainer = document.getElementById("categoryContainer");
  categories.forEach((category, index) => {
    const collapseId = `collapse${index + 1}`;
    const headingId = `heading${index + 1}`;

    const categoryHTML = `
      <div class="accordion-item">
        <h2 class="accordion-header" id="${headingId}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="true" aria-controls="${collapseId}" data-bs-parent="#accordionExample">
            ${category.name}
          </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${headingId}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p class="card-text">${category.description}</p>
            <p class="card-text"><strong>Courses:</strong></p>
            <ul>
              ${category.courses.map(course => `<li>${course.name}</li>`).join('')}
            </ul>
            <a href="#accordionExample" class="btn btn-primary learn-more-btn" data-category="${category.name}">Learn More</a>
          </div>
        </div>
      </div>
    `;

    accordion.innerHTML += categoryHTML;
  });


 // Add click event listener to "Learn More" buttons
let learnMoreButtons = document.querySelectorAll('.learn-more-btn');
let categrylist = document.getElementById("accordionExample");
let coursesInCategry= document.getElementById("coursesInCategry")
let backBtn = document.getElementById("backBtn");
learnMoreButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const categoryName = this.getAttribute('data-category');
    generateCategoryPage(categoryName);
    categrylist.style.display = 'none';
    coursesInCategry.innerHTML = categoryName + " Courses";
    backBtn.style.display = 'block';
  });
});

// Function to generate the category page
function generateCategoryPage(categoryName) {
  // Clear existing content in the category container
  categoryContainer.innerHTML = '';

  // Find the selected category
  const selectedCategory = categories.find(category => category.name === categoryName);


  // Generate HTML for each course in the selected category
  selectedCategory.courses.forEach(course => {
    const courseHTML = `
      <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 2%;">
        <div class="course-item bg-light">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="img/course-2.jpg" alt="">
            <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
            <a href="#overlay" type="button" class="flex-shrink-0 btn btn-sm btn-primary1"  px-3 border-end" style="border-radius: 30px 0 0 30px; background-color: #ff6600; color:white;">Read More</a>
              <a href="register.html" class="flex-shrink-0 btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;" >Join Now</a>
            </div>
          </div>
          <div class="text-center p-4 pb-0">
            <div class="mb-3">
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small>(Reviews)</small>
            </div>
            <h5 class="mb-4">${course.name}</h5>
          </div>
          <div class="d-flex border-top">
            <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>Certified Lecturer</small>
            <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>12 Hrs</small>
            <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>30 Students</small>
          </div>
        </div>
      </div>
    
    `;




  // Function to generate HTML for the overlay content with course details
function generateOverlayContent(course) {
  const overlayHTML = `
      <div class="overlay-header" style=" color:white;">
      <button id="closeOverlay" class="btn btn-primary py-2 px-lg-5 d-lg-block" style="margin-left:40%">Close</button>
          
      </div>
      <div class="overlay-body"  style="color:white; overflow: auto; ">
      <h2 style="color: white;">${course.name}</h2>
      <br>
      <h3 style="color: white;"> Description:</h3>
      <p>${course.description}</p>
      <p>Duration: 12 Hour Course</p>
      <p>Outline:</p>
      <ul>
      ${course.outline.map(item => `<li>${item}</li>`).join('')}
      </ul>
      </div>
  `;
  return overlayHTML;
}

// Add click event listener to a common parent element for "Read More" buttons
document.getElementById('categoryContainer').addEventListener('click', function (event) {
  // Check if a "Read More" button was clicked
  if (event.target.classList.contains('flex-shrink-0') && event.target.classList.contains('btn-primary1')) {
      event.preventDefault();
      event.stopPropagation();

      const courseName = event.target.closest('.course-item').querySelector('h5').textContent.trim();
      const selectedCategory = categories.find(category => category.courses.some(course => course.name === courseName));
      const course = selectedCategory.courses.find(course => course.name === courseName);

      // Generate HTML for the overlay content with course details
      const overlayHTML = generateOverlayContent(course);

      // Set the overlay content
      document.getElementById('overlay-content').innerHTML = overlayHTML;

      // Show the overlay
      document.getElementById('overlay').style.display = 'block';

      // Add click event listener to close the overlay
      document.getElementById('closeOverlay').addEventListener('click', function () {
          // Hide the overlay
          document.getElementById('overlay').style.display = 'none';
      });
  }
});

 
        
        
        
    // Append the course HTML to the category container
    categoryContainer.innerHTML += courseHTML;

  // Add click event listener to a common parent element for "Read More" buttons
 
      });
    }
   
});