/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  image: "/tours/philippine-sunrise/day-4.jpg",
  imageAlt: "Discover the Philippines",
  badge: "FEATURED TRIP",
  title: "Discover the Philippines\nSunrise to Sunset",
  cta: { label: "View trips", href: "#tours" },
};

/* -------------------------------------------------------------------------- */
/* Tours                                                                       */
/* -------------------------------------------------------------------------- */

export const tours = [
  {
    title: "Philippines Sunrise",
    duration: "11 Day Tour",
    description:
      "Experience thrilling canyoneering, mesmerizing marine life, surfing, and stunning sunsets!",
    price: "GBP £950",
    image: "/figma/tour-philippines-sunrise.png",
  },
  {
    title: "Philippines Sunset",
    duration: "11 Day Tour",
    description:
      "Escape to the islands, and immerse in rich culture, with island-hopping and unforgettable stunning sunsets!",
    price: "GBP £950",
    image: "/figma/tour-philippines-sunset.png",
  },
  {
    title: "Maldives Bucketlist",
    duration: "10 Day Tour",
    description:
      "Tick off that bucketlist and explore by turquoise water, snorkel vibrant reefs, and unwind on island paradise.",
    price: "GBP £908",
    image: "/figma/tour-maldives-bucketlist.png",
  },
];

/* -------------------------------------------------------------------------- */
/* Destinations                                                                */
/* -------------------------------------------------------------------------- */

export const destinations = [
  { name: "Philippines Sunrise", image: "/figma/dest-philippines-sunrise.jpg", href: "/all-tours/philippine-sunrise" },
  { name: "Philippines Sunset", image: "/figma/dest-philippines-sunset.jpg", href: "/all-tours/philippine-sunset" },
  { name: "Japan Adventure", image: "/figma/dest-japan-adventure.jpg", href: "/all-tours/japan-adventure" },
  { name: "Bhutan Quest", image: "/figma/dest-bhutan-quest.jpg", href: "/all-tours/bhutan-quest" },
  { name: "New Zealand Expedition", image: "/figma/dest-new-zealand-expedition.jpg", href: "/all-tours/new-zealand-expedition" },
  { name: "Sri Lanka Wander", image: "/figma/dest-sri-lanka-wander.jpg", href: "/all-tours/sri-lanka-wander-tour" },
  { name: "Argentina's Wonders", image: "/figma/dest-argentinas-wonders.jpg", href: "/all-tours/argentinas-wonders" },
  { name: "Vietnam", image: "/figma/dest-vietnam.jpg", href: "/all-tours/vietnam" },
  { name: "Brazil's Treasure", image: "/figma/dest-brazils-treasure.jpg", href: "/all-tours/brazils-treasure" },
  { name: "China Discovery", image: "/figma/dest-china-discovery.jpg", href: "/all-tours/china-discovery" },
  { name: "India Discovery", image: "/figma/dest-india-discovery.jpg", href: "/all-tours/india-discovery-tour" },
  { name: "India Holi Festival", image: "/figma/dest-india-holi-festival.jpg", href: "/all-tours/india-holi-festival-tour" },
  { name: "Nepal Horizons", image: "/figma/dest-nepal-horizons.jpg", href: "/all-tours/nepal-horizons" },
  { name: "Tanzania Exploration", image: "/figma/dest-tanzania-exploration.jpg", href: "/all-tours/tanzania-exploration" },
];

export const featuredDestinations = destinations.slice(0, 8);

/* -------------------------------------------------------------------------- */
/* Testimonials                                                                */
/* -------------------------------------------------------------------------- */

export const testimonials = [
  {
    date: "May 2023",
    quote:
      "Had an amazing time on the trial tour! Action packed with lots of fun things on the itinerary, and a great bunch of people. Would definitely go again!",
    author: "Flynn Deanne",
    location: "London, United Kingdom",
    avatar: "/figma/avatar-flynn.png",
  },
  {
    date: "February 2024",
    quote:
      "My experience has been amazing, I'll never forget it. I met extraordinary people and explored beautiful places. I definitely recommend to book a trip!",
    author: "Manuel Madonna",
    location: "Milan, Italy",
    avatar: "/figma/avatar-manuel.png",
  },
  {
    date: "July 2024",
    quote:
      "I enjoyed the tour! Seamless coordination of transportation and accommodation made me feel like a VIP throughout the trip. LOVED every bit of it! Highly recommend!",
    author: "Bella Millers",
    location: "Cagayan, Philippines",
    avatar: "/figma/avatar-bella.png",
  },
];

/* -------------------------------------------------------------------------- */
/* Features (Why Choose Us)                                                    */
/* -------------------------------------------------------------------------- */

export const features = [
  {
    icon: "/Stickers/Digital/PNG/Smiley/Digital_Smiley_Yellow.png",
    title: "Social Travel",
    description:
      "Explore the world together. Travel is also about people, not just places.",
  },
  {
    icon: "/Stickers/Print/PNG/Pin/Print_BeHerePin_Outline_Red.png",
    title: "Travel with Ease",
    description:
      "Every detail is covered, so you can sit back and have a good time.",
  },
  {
    icon: "/Stickers/Print/PNG/Globe/Print_Globe_Green.png",
    title: "Ethical & Sustainable",
    description:
      "We do right by the community and the planet when we travel.",
  },
];
