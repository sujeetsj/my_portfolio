import React from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaDatabase, FaAws, FaReact } from 'react-icons/fa';
import { SiDjango, SiSqlite, SiRedis, SiCelery, SiJavascript } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

// Import all project images
import moneyyImage from '../../assets/images/projects/moneyy-project.png';
import imageUploaderImage from '../../assets/images/projects/image-uploader.png';
import crudAppImage from '../../assets/images/projects/crud-app.png';
import weatherAppImage from '../../assets/images/projects/weather-app.png';
import aiGeneratorImage from '../../assets/images/projects/ai-generator.png';
import ecommerceImage from '../../assets/images/projects/ecommerce.png';

const projectsData = [
  {
    id: 1,
    name: 'Financial Platform Backend (moneyy.ai)',
    tags: ['python', 'django', 'aws', 'fintech'],
    img: moneyyImage,
    desc: 'Contributed to the backend development of moneyy.ai, an innovative financial platform offering AI-powered investment strategies. Implemented core functionalities using Django and AWS services.',
    gitLink: '#', // Replace with actual repo if public
    live: 'https://www.moneyy.ai/',
    tech: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Database', icon: <FaDatabase /> },
    ],
    features: [
      'Backend logic for investment strategies',
      'Integration with AWS services',
      'API development for frontend support',
      'Scalable cloud infrastructure'
    ]
  },
  {
    id: 2,
    name: 'AI Image Generator',
    tags: ['python', 'django', 'celery', 'redis', 'api'],
    img: aiGeneratorImage,
    desc: 'Developed an AI Image Generator using Django, Celery, Redis, and the Stability AI API. This application allows users to generate unique images based on text prompts, leveraging advanced AI algorithms.',
    gitLink: 'https://github.com/sujeetsj/Assignment-Chaotix_ai',
    live: '#',
    tech: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Celery', icon: <SiCelery /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'API', icon: <TbApi /> },
    ],
    features: [
      'Text-to-image generation using Stability AI API',
      'Asynchronous task processing with Celery',
      'Redis for efficient caching and task queue',
      'User-friendly interface for prompt input and image display'
    ]
  },
  {
    id: 3,
    name: 'E-commerce Website',
    tags: ['python', 'django', 'javascript', 'rest-framework'],
    img: ecommerceImage,
    desc: 'Built a fully-functional e-commerce website using Django, integrating HTML, CSS, JavaScript for the frontend, and Django REST Framework for authentication and API endpoints.',
    gitLink: 'https://github.com/yourusername/django-ecommerce',
    live: '#',
    tech: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'REST Framework', icon: <SiDjango /> },
    ],
    features: [
      'User authentication and authorization',
      'Product catalog with categories',
      'Shopping cart functionality',
      'Checkout process with payment integration',
      'RESTful API for mobile app support'
    ]
  },
  {
    id: 4,
    name: 'Image Uploader App',
    tags: ['python', 'django', 'web-app'],
    img: imageUploaderImage,
    desc: 'A web application for uploading and displaying images. Users can choose and upload image files, which are then displayed in a grid layout.',
    gitLink: 'https://github.com/sujeetsj/Image-Uploader',
    live: '#',
    tech: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
    ],
    features: [
      'Image upload functionality',
      'Grid display of uploaded images',
      'User-friendly interface'
    ]
  },
  {
    id: 5,
    name: 'CRUD App in Django',
    tags: ['python', 'django', 'database'],
    img: crudAppImage,
    desc: 'A Django-based web application demonstrating basic CRUD (Create, Read, Update, Delete) operations. Manages student information with search and edit capabilities.',
    gitLink: 'https://github.com/sujeetsj/Crud-Project',
    live: '#',
    tech: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'SQLite', icon: <SiSqlite /> },
    ],
    features: [
      'Student information management',
      'Search functionality',
      'Add, edit, and delete operations'
    ]
  },
  {
    id: 6,
    name: 'Weather App in Django',
    tags: ['python', 'django', 'api-integration'],
    img: weatherAppImage,
    desc: 'A Django-based weather application that allows users to check weather conditions for different locations. Integrates with a weather API for real-time data.',
    gitLink: '#',
    live: '#',
    tech: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'API', icon: <TbApi /> },
    ],
    features: [
      'Real-time weather data',
      'Location-based weather information',
      'User-friendly interface'
    ]
  },
];

export default projectsData;