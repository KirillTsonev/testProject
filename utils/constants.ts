import {IMockCardData, ISectionProps} from "./interfaces";

export const mockCardData: IMockCardData[] = [
  {
    heading: "Brief",
    desc: "Complete <strong>brief writing or simple guidance<strong> on what to include, we've got you covered.",
    image: {
      src: "/icons/brief.png",
      alt: "Brief icon",
    },
    href: "https://goodbrief.io/",
    background: "#F9F9F9",
    marginRight: "40px",
  },
  {
    heading: "Search",
    desc: "In-depth agency search covering; <strong>criteria matching<strong>, door knocking and due diligence vetting.",
    image: {
      src: "/icons/search.png",
      alt: "Search icon",
    },
    href: "#",
    background: "#F4F4F4",
    marginRight: "20px",
  },
  {
    heading: "Pitch",
    desc: "Comprehensive <strong>pitch management<strong>, including comms, diary management and pitch hosting.",
    image: {
      src: "/icons/pitch.png",
      alt: "Pitch icon",
    },
    href: "#",
    background: "#F1F1F1",
    marginRight: "0px",
  },
];

export const heroProps: ISectionProps = {
  image: {
    src: "/img/heroimg.png",
    alt: "",
    width: 1000,
    height: 1680,
  },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

export const agencyProps: ISectionProps = {
  image: {
    src: "/img/video.png",
    alt: "",
    width: 300,
    height: 470,
  },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  backgroundUrl: "/img/background.png",
};
