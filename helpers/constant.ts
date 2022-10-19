import SizeyLogo from "../assets/logo/sizey.png";
import EargoLogo from "../assets/logo/eargo.png";
import FidelixLogo from "../assets/logo/Fidlix.png";
import GetStatusLogo from "../assets/logo/GS grey.png";
import { BiPhoneCall } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineFieldTime } from "react-icons/ai";
import { ChatIcon, CheckCircleIcon, SunIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import two from '../assets/career/two.png'
import bday from '../assets/career/bday.png'
import three from '../assets/career/three.png'

export const SERVER_URL = "http://localhost:8000";

export const CONTACT_INFO: any = [
    {
      heading: "Call us",
      Icon: BiPhoneCall,
      content: "1(234)567-890 or 0(987)654-321",
    },
    {
      heading: "Location",
      Icon: SiGooglemaps,
      content: "Building no. 591, Sector-14 -125001, Hisar (Haryana)",
    },
    {
      heading: "Business Hours",
      Icon: AiOutlineFieldTime,
      content: "Mon-Fri.....9 am-6 pm, Sat-Sun.....Closed",
    },
  ];

export const WHY_ORGANISATION_OPTIONS = [
  {
    logo: GetStatusLogo,
    height: '40px',
    logoWidth: 120,
    bgColor: '#b1e2bf',
    title: "Leading technology for project management in urban renewal.",
    description: "An urban renewal project is a complex and long project involving many professionals. To help you succeed in the long and complicated process, the Get Status technological system was developed. The system contributes efficiency and satisfaction of the apartment owners",
    benefits: [
      {
        label: "Customer Accessbility",
        description: "Secure access to the project status - through the computer, mobile phone and app."
      },
      {
        label: "Easy Management",
        description: "You can assign tasks to the relevant parties, reminders, updates application and more"
      }
    ]
  },
  {
    logo: EargoLogo,
    logoWidth: 130,
    bgColor: '#b4c2e9',
    title: "HEARING MADE SIMPLE.",
    description: "Eargo is a medical device company on a mission to improve hearing health. Our innovative product and go-to-market approach address the major challenges of traditional hearing aid adoption, including social stigma, accessibility and cost.",
    benefits: [
      {
        label: "Remote Support",
        description: "No Appoinments And Lifetime, remote support in telecare hearing health."
      },
      {
        label: "Quality Product",
        description: "You can hear crisp and clear enter your in ear naturally."
      }
    ]
  },
  {
    logo: FidelixLogo,
    logoWidth: 110,
    bgColor: '#ecccb7',
    title: "Building Automation, Management and Security systems.",
    description: "The aim is to produce buildings with user-oriented digitalization and optimum conditions all the time, without any waste of energy and other resources. And always cost-effectively, too. Improves the customer experience and productivity and also makes life easier for property owners",
    benefits: [
      {
        label: "Reporting",
        description: "Up-to-date information to support decision-making. Clear reports on current conditions"
      },
      {
        label: "User Oriented",
        description: "Fidelix solutions provides manageable dashboard and helps the user to conserve energy and resources."
      }
    ]
  },
  {
    logo: SizeyLogo,
    logoWidth: 110,
    bgColor: '#eadab8',
    title: "The world's most accurate size recommendation tool for fashion e-ecommerce.",
    description: "MySizey creates a seamless shopping experience by offering automated size recommendations and a virtual fitting room that allows shoppers to try on clothes in the comfort of their own homes.MySizey is a web-based plugin that integrates with fashion ecommerce sites to generate automatic sizing recommendations for shoppers based on their profile.",
    benefits: [
      {
        label: "Perfect Size",
        description: "No more return on e-commerce with accurate measurements on your products"
      },
      {
        label: "Virtual experience",
        description: "Creating a 3D Virtual Fitting Room that shoppers can use in the comfort of their homes."
      }
    ]
  }
]

export const ALL_REPOZITORY_WAYS: any = [
  {
    label: 'Providing easy solutions',
    bottom: '10%',
    left: '30%',
    icon: TimeIcon,
    iconBg: '#e8f3fe',
    iconColor: '#569aeb'
  },
  {
    label: 'Better code quality',
    top: '5%',
    left: '30%',
    icon: SunIcon,
    iconBg: '#fceeef',
    iconColor: '#e6717b'
  }, 
  {
    label: 'Better time management',
    top: '30%',
    left: '-14%',
    icon: TimeIcon,
    iconBg: '#e8f3fe',
    iconColor: '#569aeb'
  },
  {
    label: 'Using always updated technology',
    right: '8%',
    bottom: '-20%',
    icon: ViewIcon,
    iconBg: '#eef9f2',
    iconColor: '#96e1c2'
  },
  {
    label: 'Waterfall model',
    right: '8%',
    top: '-20%',
    icon: CheckCircleIcon,
    iconBg: '#ebf4fe',
    iconColor: '#5f8bce'
  },
  {
    label: 'Providing better user experience',
    right: '8%',
    bottom: '30%',
    icon: ChatIcon,
    iconBg: '#eef9f2',
    iconColor: '#96e1c2'
  }
]


export const CAREER_INFO = [
{
    images: two,
    heading: "LOREM IPSUM",
    subheading: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which",
  },
{
    images: three,
    heading: "LOREM IPSUM",
    subheading: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which",
  },
{
    images: bday,
    heading: "LOREM IPSUM",
    subheading: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which",
  },
]
