import FreeWireLogo from "../assets/logo/freewire.png";
import SizeyLogo from "../assets/logo/sizey.png";
import FlhLogo from "../assets/logo/flh.png";
import CrayPayLogo from "../assets/logo/craypay.png";
import { ChatIcon, CheckCircleIcon, SunIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";

export const WHY_ORGANISATION_OPTIONS = [
  {
    logo: SizeyLogo,
    logoWidth: 110,
    bgColor: '#b1e2bf',
    title: "Software that digitize the eye test within five minutes",
    description: "…a digital platform which could be an alternative to the traditional lab coat and lens approach for diagnosis…",
    benefits: [
      {
        label: "Reduced eye test",
        description: "cost by 75%"
      },
      {
        label: "Complete eye test",
        description: "using smartphone within 10-15 minutes"
      }
    ]
  },
  {
    logo: FreeWireLogo,
    logoWidth: 200,
    bgColor: '#b4c2e9',
    title: "EV charging platform to revolutionize the way we power everything",
    description: "FreeWire‘s Mobi Gen product line offers clean and quiet on-site power to substitute…",
    benefits: [
      {
        label: "$125 Million",
        description: "Funding for Next Gen development"
      },
      {
        label: "Used by big companies",
        description: "Walmart, Uber, Volvo, Linkedin, BellEnergy"
      }
    ]
  },
  {
    logo: FlhLogo,
    logoWidth: 50,
    bgColor: '#ecccb7',
    title: "Improving the online web experience for International Hockey Federation (FIH)",
    description: "…they wanted increased user engagement, usability, discoverability, while providing…",
    benefits: [
      {
        label: "Completed website",
        description: "within 3 months before World Cup"
      },
      {
        label: "Scalable website",
        description: "to handle millions of visitors"
      }
    ]
  },
  {
    logo: CrayPayLogo,
    logoWidth: 120,
    bgColor: '#eadab8',
    title: "M-payment solution to modernise retail buying experience",
    description: "…over 70% of consumers say that if they get benefits of loyalty points or perks in retail stores, they are ready…",
    benefits: [
      {
        label: "10,000+ users",
        description: "60,000+ retail locations in USA"
      },
      {
        label: "Cryptocurrency",
        description: "was made spendable in retail store"
      }
    ]
  }
]

export const ALL_REPOZITORY_WAYS: any = [
  {
    label: 'Providing easy solutions',
    bottom: 50,
    left: 320,
    icon: TimeIcon,
    iconBg: '#e8f3fe',
    iconColor: '#569aeb'
  },
  {
    label: 'Better code quality',
    top: 50,
    left: 320,
    icon: SunIcon,
    iconBg: '#fceeef',
    iconColor: '#e6717b'
  },
  {
    label: 'Better time management',
    top: 200,
    left: -100,
    icon: TimeIcon,
    iconBg: '#e8f3fe',
    iconColor: '#569aeb'
  },
  {
    label: 'Using always updated technology',
    right: 100,
    bottom: -100,
    icon: ViewIcon,
    iconBg: '#eef9f2',
    iconColor: '#96e1c2'
  },
  {
    label: 'Waterfall model',
    right: 100,
    top: -100,
    icon: CheckCircleIcon,
    iconBg: '#ebf4fe',
    iconColor: '#5f8bce'
  },
  {
    label: 'Providing better user experience',
    right: 100,
    bottom: 170,
    icon: ChatIcon,
    iconBg: '#eef9f2',
    iconColor: '#96e1c2'
  }
]
