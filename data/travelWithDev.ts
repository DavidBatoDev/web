/**
 * All dynamic content for the "Travel with Dev" resident host page.
 * Imported by data/hosts.ts to build the Dev host entry.
 */

export const devSlug = "dev";
export const devDisplayName = "Dev";
export const devPageTitle = "Travel with Dev";
export const devInstagram = "dev_skehan";

export const devProfileImage =
  "https://firebasestorage.googleapis.com/v0/b/imheretravels-a3f81.firebasestorage.app/o/images%2F1777891757001_652874611_18570825235025847_3768940051839134984_n.jpg?alt=media&token=8a465834-6fb5-4f6f-8776-670a2093074f";

export const devHeroImage =
  "https://firebasestorage.googleapis.com/v0/b/imheretravels-a3f81.firebasestorage.app/o/images%2F1777899796799_Frame%20201%20(1).png?alt=media&token=46bc3d00-8577-494f-9d87-c6865d65e328";

export const devHeroImageAlt = "Dev's group travel adventures";

export const devMeta = {
  title: "Travel with Dev | I'm Here Travels",
  description:
    "Join Dev on her group trips designed to bring her community together through travel. Cultural experiences, adventure-filled itineraries, and meaningful connections.",
};

export const devIntro = [
  "Join Dev on her group trips designed to bring her community together through travel.",
  "Dev has been hosting with us since 2024 and has successfully led multiple sold-out trips — creating unforgettable experiences and strong connections within her community.",
  "From cultural experiences to adventure-filled itineraries, each trip is designed to create meaningful connections, lasting memories, and real shared experiences.",
  "Whether you're joining solo or with friends, you'll be part of a welcoming group that travels with intention.",
];

export const devUpcomingTrips = [
  {
    name: "India Holi Festival Tour",
    dates: "March 19–31, 2027",
    tourSlug: "india-holi-festival-tour",
    image: "/images/wp-content/uploads/2025/01/india-header-2.webp",
    imageAlt: "India Holi Festival Tour",
    duration: "13 Days and 12 Nights",
    description: "Explore India's vibrant culture, ancient wonders, and the stunning colors of the Holi Festival.",
    price: "GBP £1,199",
  },
  {
    name: "PH Sunrise & Sunset",
    dates: "TBA",
    image: "/tours/philippine-sunrise/hero-1.jpg",
    imageAlt: "Philippines Sunrise & Sunset",
  },
  {
    name: "Brazil",
    dates: "TBA",
    image: "/images/wp-content/uploads/2025/07/brazil-trip-highlight-1.webp",
    imageAlt: "Brazil's Treasures",
  },
];

export const devWhyTravel = [
  "End-to-end planning — we handle everything",
  "Trusted local teams and guides",
  "Carefully curated, experience-first itineraries",
  "Strong community-focused trips",
  "Available on-ground support",
];

export const devWhyTravelNotes = [
  "A single, coordinated plan keeps the trip feeling smooth from first enquiry to departure.",
  "Local teams bring practical knowledge and on-the-ground context that generic planning cannot replace.",
  "Curated itineraries keep the best parts front and center instead of stretching the schedule thin.",
  "Community-led travel works best when the group vibe is intentional, welcoming, and easy to join.",
  "Support matters most when plans change, so help stays close throughout the trip.",
];

export const devHowItWorks = [
  "Choose your host & trip",
  "Secure your spot with a deposit",
  "Pay in installments up to 4 times",
  "Travel and meet your community",
];

export const devGalleryImages = [
  { src: "/images/wp-content/uploads/2025/01/india-triphighlight-1.webp", alt: "India Holi Festival" },
  { src: "/images/wp-content/uploads/2025/01/india-day-5.webp",          alt: "India Holi Festival" },
  { src: "/tours/philippine-sunrise/community-1.jpg",                     alt: "Philippines Sunrise" },
  { src: "/tours/philippine-sunrise/community-3.jpg",                     alt: "Philippines Sunrise" },
  { src: "/images/wp-content/uploads/2025/07/brazil-trip-highlight-2.webp", alt: "Brazil's Treasures" },
  { src: "/images/wp-content/uploads/2025/07/brazil-day-3.webp",         alt: "Brazil's Treasures" },
];

/* -------------------------------------------------------------------------- */
/* Gallery — masonry columns                                                    */
/* -------------------------------------------------------------------------- */

export type GalleryMediaItem = {
  seq: number;
  type: "photo" | "video" | "placeholder";
  size: "tall" | "short";
  src?: string;
  alt?: string;
};

const FB =
  "https://firebasestorage.googleapis.com/v0/b/imheretravels-a3f81.firebasestorage.app/o/";
const t = (token: string) => `?alt=media&token=${token}`;

export const devGalleryColumns: GalleryMediaItem[][] = [
  // ── Column 1 ──────────────────────────────────────────────
  [
    {
      seq: 1,
      type: "photo",
      size: "tall",
      src: `${FB}images%2F1777896856050_frame.png${t("2f9165c4-a515-498c-956c-4f8ee946de07")}`,
      alt: "Group trip moment",
    },
    {
      seq: 9,
      type: "video",
      size: "tall",
      src: `${FB}videos%2F1777891757301_e8c841a0-ba11-449c-8349-f6c8b3fc35ee.mp4${t("39dc8866-a5b0-4573-9ecb-26261a226889")}`,
    },
    {
      seq: 5,
      type: "photo",
      size: "short",
      src: `${FB}images%2F1777891735622_2e4f3d29-5be7-4465-89aa-f6f33493fd64.jpg${t("c17f0121-c04b-4301-b8bb-0910fcdfe936")}`,
      alt: "Group trip moment",
    },
  ],

  // ── Column 2 ──────────────────────────────────────────────
  [
    {
      seq: 8,
      type: "video",
      size: "tall",
      src: `${FB}videos%2F1777898934156_38dd363d-7cd1-400b-92fd-6120218a00fb.mp4${t("88db3ec6-0470-437d-86ae-31ca115c8899")}`,
    },
    {
      seq: 2,
      type: "photo",
      size: "short",
      src: `${FB}images%2F1777891748548_08.png${t("2d20d3d7-eaea-4949-a3a9-c62971286cbc")}`,
      alt: "Group trip moment",
    },
    {
      seq: 12,
      type: "photo",
      size: "tall",
      src: `${FB}images%2F1777896783964_frame%20(1).png${t("7b2f8863-e6ce-4bbe-80a0-dba31367daa3")}`,
      alt: "Group trip moment",
    },
  ],

  // ── Column 3 ──────────────────────────────────────────────
  [
    {
      seq: 11,
      type: "photo",
      size: "short",
      src: `${FB}images%2F1777896787661_frame%20(2).png${t("de8ba2d5-e3ff-411d-8050-e8017b64ce4b")}`,
      alt: "Group trip moment",
    },
    {
      seq: 10,
      type: "video",
      size: "tall",
      src: `${FB}videos%2F1777888423053_WhatsApp%20Video%202026-05-04%20at%205.10.08%20PM.mp4${t("7fc9d547-5c1b-4782-a713-0d6d53dd0625")}`,
    },
    {
      seq: 6,
      type: "photo",
      size: "tall",
      src: `${FB}images%2F1777891730097_2c35b783-d3a9-4a87-a6d7-c451e1c7ac07.jpg${t("aed7bf06-c9c7-40b2-8594-a2ed9fed48fb")}`,
      alt: "Group trip moment",
    },
  ],

  // ── Column 4 ──────────────────────────────────────────────
  [
    {
      seq: 4,
      type: "photo",
      size: "tall",
      src: `${FB}images%2F1777891752929_98c9d811-9e55-478c-99ee-e238b55f23d8.jpg${t("211ec8bd-c10b-4d97-ad1d-3a56820deb2a")}`,
      alt: "Group trip moment",
    },
    {
      seq: 7,
      type: "photo",
      size: "short",
      src: `${FB}images%2F1777891739965_3adcc24c-dc79-4de0-a9e0-5b08650c7628.jpg${t("829a8a38-63c6-4784-a894-bcbf0c86334c")}`,
      alt: "Group trip moment",
    },
    {
      seq: 3,
      type: "photo",
      size: "tall",
      src: `${FB}images%2F1777896791492_frame%20(3).png${t("314d9519-7603-4630-a6e1-cba3438e399c")}`,
      alt: "Group trip moment",
    },
  ],
];
