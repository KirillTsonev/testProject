import {IMockCardData, ISectionProps} from "./interfaces";

export const mockCardData: IMockCardData[] = [
  {
    heading: "Brief",
    desc: "Complete brief writing or simple guidance on what to include, we've got you covered",
    image: {
      src: "/icons/brief.png",
      alt: "Brief icon",
    },
    href: "https://goodbrief.io/",
  },
  {
    heading: "Search",
    desc: "In-depth agency search covering; criteria matching, door knocking and due diligence vetting.",
    image: {
      src: "/icons/search.png",
      alt: "Search icon",
    },
    href: "#",
  },
  {
    heading: "Pitch",
    desc: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
    image: {
      src: "/icons/pitch.png",
      alt: "Pitch icon",
    },
    href: "#",
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
