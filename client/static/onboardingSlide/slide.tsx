import ONBOARDING_IMAGES from "../images/onboarding";

const slide = [
  {
    id: "1",
    image: ONBOARDING_IMAGES.assetPage1,
    title1: "Explore",
    title2: "Professional Services",
    title3: "Provider",
    description1: "Household hassle no more! We will help",
    description2: "you scratch those time-consuming",
    description3: "chores off your list.",
  },
  {
    id: "2",
    image: ONBOARDING_IMAGES.assetPage2,
    title1: "Ease",
    title2: "Booking Process",
    title3: "Within Clicks",
    description1: "Our handy professionals are always",
    description2: "ready to help you with all kinds of",
    description3: "problems within simple clicks.",
  },
  {
    id: "3",
    image: ONBOARDING_IMAGES.assetPage3,
    title1: "Find",
    title2: "Endless Services",
    title3: "With TukangKu",
    description1: "Need an extra pair of helping hands?",
    description2: "TukangKu offers the best help tailored",
    description3: "to your needs and wants!",
  },
  {
    id: "4",
    image: ONBOARDING_IMAGES.assetPage4,
    title1: "Let’s Find the",
    title2: "Best  Handyman",
    title3: "For You",
    description1: "Make awesome changes now tailored",
    description2: "to your liking now! TukangKu is here to",
    description3: "fulfill everyone’s needs",
  },
];

export interface Slide {
    id: string;
    image: any;
    title1: string;
    title2: string;
    title3: string;
    description1: string;
    description2: string;
    description3: string;
}

export default slide;
