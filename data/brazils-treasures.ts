/**
 * Brazil's Treasures — 10-day São Paulo-to-Rio adventure.
 *
 * Originally generated from data/json/tourPackages-04142026.json; hand-
 * enriched with itinerary details, accommodations, and FAQs.
 */
import type { Tour } from "@/types/tour";

export const brazilsTreasures: Tour = {
  slug: "brazils-treasures",
  name: "Discover Brazil's Treasures",
  meta: {
    title: "Discover Brazil's Treasures — I'm Here Travels",
    description:
      "Get ready to fall in love with Brazil—loud, colorful, and alive at every turn. From exploring the vibrant city of São Paulo to wandering the cobbled charm of Paraty, this 10-day adventure is full of energy and discovery.",
  },
  gallery: {
    hero: "/tours/brazils-treasures/brazil-header-1.webp",
    heroAlt: "Brazil's Treasures — Rio skyline and Copacabana Beach",
    thumbnails: [
      { src: "/tours/brazils-treasures/brazil-header-2.webp", alt: "Brazil's Treasures" },
      { src: "/tours/brazils-treasures/brazil-header-3.webp", alt: "Brazil's Treasures" },
      { src: "/tours/brazils-treasures/brazil-header-4.webp", alt: "Brazil's Treasures" },
      { src: "/tours/brazils-treasures/brazil-header-5.webp", alt: "Brazil's Treasures" },
      { src: "/tours/brazils-treasures/brazil-header-6.webp", alt: "Brazil's Treasures" },
      { src: "/tours/brazils-treasures/brazil-header-7.webp", alt: "Brazil's Treasures" },
      { src: "/tours/brazils-treasures/brazil-header-8.webp", alt: "Brazil's Treasures" },
    ],
  },
  header: {
    title: "10 Days and 9 Nights | Discover Brazil's Treasures",
    tags: [
      { label: "São Paulo", icon: "location" },
      { label: "Paraty", icon: "location" },
      { label: "Rio de Janeiro", icon: "location" },
    ],
    description:
      "Get ready to fall in love with Brazil—loud, colorful, and alive at every turn. From exploring the vibrant city of São Paulo to wandering the cobbled charm of Paraty, this 10-day adventure is full of energy and discovery. Sip caipirinhas on Copacabana Beach, ride the cable car up Sugarloaf Mountain, and experience the excitement of Carnival from front-row seats. It's the rhythm of Afro-Brazilian music, the warmth of samba nights, and the sparkle of unforgettable celebrations, all in one incredible journey.",
  },
  keyFacts: [
    {
      icon: "days",
      label: "Tour Dates",
      values: ["January 28, 2026"],
    },
    {
      icon: "route",
      label: "Destination",
      values: ["São Paulo - Paraty - Rio de Janeiro"],
    },
    {
      icon: "days",
      label: "Duration",
      values: ["10 Days and 9 Nights"],
    },
    {
      icon: "people",
      label: "Group Size",
      values: ["Maximum 20 people"],
    },
  ],
  whatsIncluded: {
    heading: "What's Included",
    items: [
      {
        icon: "transport",
        label: "Transport",
        value: "Private Van, Boat",
      },
      {
        icon: "accommodation",
        label: "Accommodation",
        value: "Hotel (9 nights)",
      },
      {
        icon: "activities",
        label: "Activities",
        value:
          "City Tours, Beaches, Private Boat Tour, Snorkeling, Sugarloaf and Christ the Redeemer Tour, Sambadrome Carnival Experience",
      },
      {
        icon: "meals",
        label: "Meals",
        value: "9 Breakfasts",
      },
      {
        icon: "plus",
        label: "Others",
        value: [
          "24/7 customer experience assistance",
          "Tour guide",
          "Entrance fees to all major attractions and sites",
          "Private group experiences in Rio de Janeiro",
          "Small group size to ensure personalized experiences",
          "All taxes and service charges included",
        ],
      },
      {
        icon: "info",
        label: "What's NOT included",
        value:
          "International flights to/from the destination, Travel insurance, Visas (if required), Personal expenses & optional activities",
      },
    ],
  },
  tripHighlights: {
    heading: "Trip Highlights",
    items: [
      {
        image: "/tours/brazils-treasures/brazil-trip-highlight-4.webp",
        imageAlt: "Helicopter ride over Rio de Janeiro skyline",
        title: "Optional helicopter ride over Rio's stunning skyline",
        subtitle: "",
      },
      {
        image:
          "/images/wp-content/uploads/2025/07/brazil-trip-highlight-2.webp",
        imageAlt: "São Paulo neighborhoods",
        title: "Explore São Paulo's buzzing Neighborhoods",
        subtitle: "",
      },
      {
        image:
          "/images/wp-content/uploads/2025/07/brazil-trip-highlight-3.webp",
        imageAlt: "Sambadrome Carnival",
        title:
          "Experience the electric energy of the Sambadrome during Carnival",
        subtitle: "",
      },
    ],
  },
  itinerary: {
    heading: "Itinerary",
    downloadLabel: "Download Itinerary",
    downloadHref: "",
    days: [
      {
        dayNumber: 1,
        title: "Arrival to São Paulo",
        description:
          "Welcome to Brazil! Upon arrival in São Paulo our local team will greet you at the airport and transfer you to your hotel for a well-deserved rest. Unwind from the flight or take a walk to discover the city's vibrant charm and cozy cafés.",
        image: "/tours/brazils-treasures/brazil-day-1.webp",
        imageAlt: "São Paulo city arrival",
        details: [
          {
            icon: "accommodation",
            label: "Accommodation",
            value: "Mercure Sao Paulo Paulista",
          },
          {
            icon: "activities",
            label: "Activity",
            value: "Transfer",
          },
        ],
      },
      {
        dayNumber: 2,
        title: "São Paulo Exploration",
        description:
          "Start your day with breakfast at the hotel before heading out to explore the vibrant city of São Paulo. Discover the creative energy of Vila Madalena, known for its bohemian charm, and visit the famous Beco do Batman, an open-air gallery filled with colorful street art and murals.",
        image: "/tours/brazils-treasures/brazil-day-2.webp",
        imageAlt: "São Paulo street art and neighborhoods",
        details: [
          {
            icon: "accommodation",
            label: "Accommodation",
            value: "Mercure Sao Paulo Paulista",
          },
          {
            icon: "activities",
            label: "Activity",
            value: "City Tour",
          },
          { icon: "meals", label: "Meals", value: "Breakfast" },
        ],
      },
      {
        dayNumber: 3,
        title: "São Paulo to Paraty",
        description:
          "After breakfast, we take a scenic drive down the Costa Verde to the colonial town of Paraty. With colorful buildings, cobblestone streets, and lush mountains, it's a photographer's dream. Check in to your charming hotel and enjoy a calm evening walking the quaint lanes or enjoying a drink at the square.",
        image: "/tours/brazils-treasures/brazil-day-3.webp",
        imageAlt: "Paraty colonial town cobblestone streets",
        details: [
          {
            icon: "accommodation",
            label: "Accommodation",
            value: "Pousada Santa Clara",
          },
          {
            icon: "activities",
            label: "Activity",
            value: "Transfer / Scenic Drive",
          },
          { icon: "meals", label: "Meals", value: "Breakfast" },
        ],
      },
      {
        dayNumber: 4,
        title: "Paraty Island Experience",
        description:
          "We set sail today for a tropical escape across Paraty's bay. Visit paradise islands, snorkel in clear waters, and soak in the sun. Our boat will stop at secret beaches and scenic spots while serving up delicious food and music onboard. Bring your sunscreen — it's a chill day!",
        image: "/tours/brazils-treasures/brazil-day-4.webp",
        imageAlt: "Paraty island boat tour snorkeling",
        details: [
          {
            icon: "accommodation",
            label: "Accommodation",
            value: "Pousada Santa Clara",
          },
          {
            icon: "activities",
            label: "Activity",
            value: "Private Boat Tour, Island Stops, Snorkeling",
          },
          { icon: "meals", label: "Meals", value: "Breakfast" },
        ],
      },
      {
        dayNumber: 5,
        title: "Journey from Paraty to Rio de Janeiro",
        description:
          "Today we head to one of the most iconic cities in the world — Rio de Janeiro! After the road trip, check into your beachfront hotel in Copacabana. You'll have time to relax, stroll the famous sidewalk, or dip your toes into the Atlantic before dinner. The Marvelous City awaits.",
        image: "/tours/brazils-treasures/brazil-day-5.webp",
        imageAlt: "Copacabana Beach Rio de Janeiro",
        details: [
          {
            icon: "accommodation",
            label: "Accommodation",
            value: "Windsor Plaza Hotel",
          },
          {
            icon: "activities",
            label: "Activity",
            value: "Private Transfer to Rio",
          },
          { icon: "meals", label: "Meals", value: "Breakfast" },
        ],
      },
      {
        dayNumber: 6,
        title: "Rio de Janeiro – Free Day",
        description:
          "Enjoy a full day at leisure in Rio de Janeiro. Relax on the iconic beaches of Copacabana or Ipanema, explore local shops and cafés, or take in the city's vibrant atmosphere at your own pace.",
        image: "/tours/brazils-treasures/brazil-day-6.webp",
        imageAlt: "Rio de Janeiro beach free day",
        details: [
          {
            icon: "accommodation",
            label: "Accommodation",
            value: "Windsor Plaza Hotel",
          },
          {
            icon: "activities",
            label: "Activity",
            value: "Free Day",
          },
          { icon: "meals", label: "Meals", value: "Breakfast" },
        ],
      },
      {
        dayNumber: 7,
        title: "City Icons of Rio",
        description:
          "We're checking off the icons today! Visit Christ the Redeemer for panoramic views of the city, then take a cable car up Sugarloaf Mountain. Stop by the artistic Selarón Steps for some photos and get a real taste of Rio's magic. It's a day of legends and unforgettable sights.",
        image: "/tours/brazils-treasures/brazil-day-7.webp",
        imageAlt: "Christ the Redeemer and Sugarloaf Mountain Rio",
        details: [
          {
            icon: "accommodation",
            label: "Accommodation",
            value: "Windsor Plaza Hotel",
          },
          {
            icon: "activities",
            label: "Activity",
            value: "Christ the Redeemer, Sugarloaf Mountain, Cathedral & Sambadrome",
          },
          { icon: "meals", label: "Meals", value: "Breakfast" },
        ],
      },
      {
        dayNumber: 8,
        title: "Sambadrome Carnival Night",
        description:
          "Tonight, you'll witness the spectacle of Brazil's Carnival at the Sambadrome. Dressed in sequins or sipping caipirinhas, it's a magical, musical night full of rhythm and sparkle.",
        image: "/tours/brazils-treasures/brazil-day-8.webp",
        imageAlt: "Sambadrome Carnival parade Rio",
        details: [
          {
            icon: "accommodation",
            label: "Accommodation",
            value: "Windsor Plaza Hotel",
          },
          {
            icon: "activities",
            label: "Activity",
            value: "Sambadrome Carnival Parade Experience",
          },
          { icon: "meals", label: "Meals", value: "Breakfast" },
        ],
      },
      {
        dayNumber: 9,
        title: "Free Day in Rio",
        description:
          "Enjoy your last day in Rio de Janeiro at leisure, with time to explore the city at your pace. For a truly unforgettable experience, opt for a helicopter ride over Rio's stunning skyline or join a guided Favela Tour for a deeper cultural insight. Alternatively, unwind and take it slow while relaxing on the golden sands of Ipanema Beach.",
        image: "/tours/brazils-treasures/brazil-day-9.webp",
        imageAlt: "Ipanema Beach Rio de Janeiro",
        details: [
          {
            icon: "accommodation",
            label: "Accommodation",
            value: "Windsor Plaza Hotel",
          },
          {
            icon: "activities",
            label: "Activity",
            value: "Free Day (Optional: Helicopter Ride or Favela Tour)",
          },
          { icon: "meals", label: "Meals", value: "Breakfast" },
        ],
      },
      {
        dayNumber: 10,
        title: "Departure from Rio",
        description:
          "All great adventures come to an end. Enjoy your final moments in Rio with a beach stroll or souvenir run before your airport transfer. Until next time — tchau, Brasil!",
        image: "/tours/brazils-treasures/brazil-day-10.webp",
        imageAlt: "Rio de Janeiro departure",
        details: [
          {
            icon: "activities",
            label: "Activity",
            value: "Check-out & Airport Transfer",
          },
          { icon: "meals", label: "Meals", value: "Breakfast" },
        ],
      },
    ],
  },
  whereWeStay: {
    heading: "Where we stay",
    items: [
      {
        image: "/tours/brazils-treasures/mercure-sao-paulo-paulista-accommodation.webp",
        imageAlt: "Mercure Sao Paulo Paulista",
        name: "Mercure Sao Paulo Paulista",
        nights: "2 nights in Hotel",
      },
      {
        image: "/tours/brazils-treasures/pousada-santa-clara-accommodation.png",
        imageAlt: "Pousada Santa Clara",
        name: "Pousada Santa Clara",
        nights: "2 nights in Hotel",
      },
      {
        image: "/tours/brazils-treasures/windsor-plaza-hotel-accommodation.png",
        imageAlt: "Windsor Plaza Hotel",
        name: "Windsor Plaza Hotel",
        nights: "5 nights in Hotel",
      },
    ],
  },
  faqs: {
    heading: "FAQs",
    items: [
      {
        question: "Where does the trip start & finish?",
        answer: "It starts at São Paulo and finishes in Rio de Janeiro.",
      },
      {
        question: "Which airport do I need to fly into?",
        answer: "São Paulo/Guarulhos International Airport (GRU).",
      },
      {
        question: "What should I wear?",
        answer:
          "Pack comfortable clothes suitable for summer: shorts, sunglasses, hat, and sunscreen. Bring beach attire and light jackets for cooler evenings.",
      },
      {
        question: "Do you have an age limit for tours?",
        answer:
          "Our tours cater to adventurous travelers aged 18–45, with most guests between 21–35 years old. It's perfect for people from diverse backgrounds to share travel experiences.",
      },
      {
        question: "What is the local currency?",
        answer:
          "In Brazil, the currency is the Real (R$). However, credit cards are accepted in most destinations throughout your trip.",
      },
      {
        question: "Which airport do I fly out from?",
        answer: "Rio de Janeiro/Galeão International Airport (GIG).",
      },
    ],
  },
  thingsToKnow: {
    heading: "Things to know",
    items: [
      {
        icon: "info",
        title: "Travel Information",
        description:
          "Get ready for your trip! Find helpful links to everything you need from travel and health requirements to travel guides, visa information, and more here.",
        ctaLabel: "Show more",
        ctaHref: "/travel-information",
      },
      {
        icon: "faq",
        title: "General FAQs",
        description:
          "Have more questions? Check out our FAQs as we might already have the answers.",
        ctaLabel: "Show more",
        ctaHref: "/faqs",
      },
    ],
  },
  tips: {
    heading: "Tips",
    items: [
      {
        icon: "luggage",
        title: "Pack smart",
        description:
          "Bring comfortable walking shoes, quick-dry clothing, a reusable water bottle, and a power adapter suited for your destination.",
      },
      {
        icon: "shield",
        title: "Travel insurance",
        description:
          "We require all travelers to have valid travel insurance covering medical, cancellation, and activity risks for the duration of the trip.",
      },
      {
        icon: "sun",
        title: "Beat the climate",
        description:
          "Sunscreen, a hat, and insect repellent go a long way. Stay hydrated and listen to your body, especially on active days.",
      },
      {
        icon: "handshake",
        title: "Respect local customs",
        description:
          "Dress modestly at temples, learn a few local greetings, and tip where appropriate — small gestures make a big difference.",
      },
    ],
  },
  booking: {
    durationLabel: "10 Days and 9 Nights",
    routeLabel: "São Paulo to Rio de Janeiro",
    priceFromLabel: "From",
    priceCurrency: "GBP",
    priceAmount: "£1,999",
    depositAmount: "£200",
    ctaLabel: "Reserve Now",
    ctaHref:
      "https://admin.imheretravels.com/reservation-booking-form?tour=brazils-treasures",
    footnote: "Additional fees may apply",
  },
  listingCard: {
    duration: "10 Days and 9 Nights",
    description:
      "São Paulo street art, Paraty island hopping, Copacabana Beach, Christ the Redeemer, Sugarloaf, and front-row Sambadrome Carnival.",
    price: "GBP £1,999",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imheretravels-a3f81.firebasestorage.app/o/images%2F1759341307739_brazil-header-4.webp?alt=media&token=811f0f81-f1ba-4267-9da5-69c568c29335",
    imageAlt: "Discover Brazil's Treasures",
  },
};

export default brazilsTreasures;
