import img1 from '../../assets/baoudha.jpg';
import img2 from '../../assets/annapurna.jpg';
import img3 from '../../assets/lumbini.jpg';
import img4 from '../../assets/paragliding.jpg';
import img5 from '../../assets/pokhara-highway.jpg';
import img10 from '../../assets/muktinath-temple-1.webp';
import img12 from '../../assets/boating.jpg';
import ghandruk from '../../assets/ghandruk-2.jpg'
import chitwan from '../../assets/Chitwan-National-Park-elephant-safari.webp'
import manang from '../../assets/manang.webp'
import upperMustang from '../../assets/upper-mustang-1.jpg'

const Data = [
  {
    id: 1,
    slug: "ghandruk-tour-package",
    imgSrc: ghandruk,
    destTitle: "7 Days Ghandruk Tour Package",
    location: "Kathmandu – Pokhara – Ghandruk",
    grade: "PRIVATE TOUR",
    fees: "$1300",
    duration: "7 Days",
    tagline: "Culture, Nature, and Himalayan Beauty",
    activities: ["Cultural", "Trekking", "Sightseeing", "Nature", "Heritage", "Village Life", "Photography"],
    description: "Experience the perfect blend of culture, nature, and Himalayan beauty on this 7-day journey through Nepal. Explore the UNESCO World Heritage Sites of Kathmandu, enjoy the tranquil atmosphere of Pokhara, and discover the traditional Gurung village of Ghandruk with its spectacular views of the Annapurna and Machhapuchhre (Fishtail) ranges.",
    itinerary: [
      {
        day: "01",
        title: "Arrival in Kathmandu",
        points: [
          "Meet and greet at Tribhuvan International Airport.",
          "Private transfer to your hotel.",
          "Leisure time to explore Thamel or relax.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "02",
        title: "Kathmandu Sightseeing",
        points: [
          "Visit Pashupatinath Temple.",
          "Explore Boudhanath Stupa.",
          "Visit Swayambhunath (Monkey Temple).",
          "Explore Kathmandu Durbar Square.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "03",
        title: "Kathmandu to Pokhara (Private Drive)",
        points: [
          "Scenic drive to Pokhara (approximately 7–8 hours).",
          "Check in to your hotel.",
          "Evening walk around Phewa Lake and Lakeside.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "04",
        title: "Pokhara to Ghandruk",
        points: [
          "Private drive to Ghandruk via Nayapul and Kimche.",
          "Explore the picturesque Ghandruk village.",
          "Enjoy breathtaking views of Annapurna South, Hiunchuli, and Machhapuchhre.",
          "Overnight in Ghandruk."
        ]
      },
      {
        day: "05",
        title: "Ghandruk to Pokhara",
        points: [
          "Wake up to a stunning Himalayan sunrise.",
          "Visit the Ghandruk Cultural Museum and explore the traditional Gurung settlement.",
          "Drive back to Pokhara.",
          "Free evening to relax by Lakeside.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "06",
        title: "Pokhara Sightseeing",
        points: [
          "Early morning visit to Sarangkot for sunrise.",
          "Visit Devi's Fall.",
          "Explore Gupteshwor Mahadev Cave.",
          "Visit International Mountain Museum.",
          "Optional boating on Phewa Lake.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "07",
        title: "Pokhara to Kathmandu & Departure",
        points: [
          "Scenic drive back to Kathmandu.",
          "Transfer to Tribhuvan International Airport according to your flight schedule.",
          "End of your memorable Nepal holiday."
        ]
      }
    ],
    includes: [
      "Airport pickup and drop-off",
      "Private vehicle throughout the tour",
      "Hotel accommodation (twin/double-sharing)",
      "Daily breakfast, lunch, and dinner",
      "Accommodation in Kathmandu, Pokhara, and Ghandruk",
      "Professional English-speaking driver",
      "All applicable government taxes"
    ],
    excludes: [
      "International airfare",
      "Nepal entry visa fees",
      "Monument and sightseeing entrance fees",
      "Personal expenses (laundry, beverages, telephone, etc.)",
      "Travel insurance",
      "Staff tips and gratuities",
      "Any services not mentioned under Package Includes"
    ]
  },
  {
    id: 2,
    slug: "nepal-family-tour",
    imgSrc: chitwan,
    destTitle: "8 Days Nepal Family Tour Package",
    location: "Kathmandu – Chitwan – Pokhara",
    grade: "PRIVATE FAMILY HOLIDAY",
    fees: "$1100",
    duration: "8 Days",
    tagline: "Heritage, Wildlife, and Himalayan Landscapes",
    activities: ["Family", "Wildlife", "Cultural", "Sightseeing", "Safari", "Nature", "Heritage"],
    description: "Create unforgettable family memories as you explore Nepal's rich cultural heritage, exciting wildlife, and breathtaking Himalayan landscapes. This carefully designed 8-day family holiday combines the vibrant city of Kathmandu, the wilderness of Chitwan National Park, and the scenic beauty of Pokhara for a comfortable and memorable experience.",
    itinerary: [
      {
        day: "01",
        title: "Arrival in Kathmandu",
        points: [
          "Meet and greet at Tribhuvan International Airport.",
          "Private transfer to your hotel.",
          "Leisure time to relax or explore the vibrant streets of Thamel.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "02",
        title: "Kathmandu Sightseeing",
        points: [
          "Visit the sacred Pashupatinath Temple.",
          "Explore Boudhanath Stupa.",
          "Visit Swayambhunath (Monkey Temple).",
          "Discover the historic Kathmandu Durbar Square.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "03",
        title: "Kathmandu to Chitwan (Private Drive)",
        points: [
          "Scenic drive to Chitwan (approximately 5–6 hours).",
          "Check in to your jungle resort.",
          "Enjoy a traditional Tharu cultural dance performance in the evening.",
          "Overnight in Chitwan."
        ]
      },
      {
        day: "04",
        title: "Chitwan Jungle Adventure",
        points: [
          "Canoe ride along the Rapti River.",
          "Jeep safari inside Chitwan National Park.",
          "Bird watching and nature walk.",
          "Visit the elephant breeding center.",
          "Overnight in Chitwan."
        ]
      },
      {
        day: "05",
        title: "Chitwan to Pokhara (Private Drive)",
        points: [
          "Scenic drive to Pokhara.",
          "Check in to your hotel.",
          "Evening stroll around Phewa Lake and Lakeside.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "06",
        title: "Pokhara Sightseeing",
        points: [
          "Sunrise excursion to Sarangkot.",
          "Visit Devi's Fall.",
          "Explore Gupteshwor Mahadev Cave.",
          "Visit Pumdikot Shiva Statue.",
          "Optional boating on Phewa Lake.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "07",
        title: "Pokhara to Kathmandu (Private Drive)",
        points: [
          "Scenic drive back to Kathmandu.",
          "Free time for shopping, relaxation, or exploring local markets.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "08",
        title: "Departure",
        points: [
          "Breakfast at the hotel.",
          "Private transfer to Tribhuvan International Airport for your onward flight.",
          "End of your wonderful family holiday with Sacred Nepal Tours & Travel."
        ]
      }
    ],
    includes: [
      "Airport pickup and drop-off",
      "Private transportation throughout the tour",
      "Hotel and jungle resort accommodation (twin/double-sharing)",
      "Daily breakfast, lunch, and dinner",
      "Chitwan jungle activities as per the itinerary",
      "Professional English-speaking driver",
      "All applicable government taxes"
    ],
    excludes: [
      "International airfare",
      "Nepal entry visa fees",
      "Monument and sightseeing entrance fees",
      "Personal expenses (laundry, beverages, shopping, telephone, etc.)",
      "Travel insurance",
      "Staff tips and gratuities",
      "Optional activities not mentioned in the itinerary",
      "Any services not specified under Package Includes"
    ]
  },
  {
    id: 3,
    slug: "manang-adventure-tour",
    imgSrc: manang,
    destTitle: "10 Days Manang Adventure Tour Package",
    location: "Kathmandu – Pokhara – Manang",
    grade: "PRIVATE OVERLAND TOUR",
    fees: "$1400",
    duration: "10 Days",
    tagline: "Cultural Heritage and Himalayan Valley Adventure",
    activities: ["Adventure", "Cultural", "Overland", "Sightseeing", "Nature", "Photography", "Mountain Views"],
    description: "Discover the perfect combination of Nepal's rich cultural heritage and breathtaking Himalayan landscapes on this 10-day adventure. Explore the UNESCO World Heritage Sites of Kathmandu, enjoy the beauty of Pokhara, and experience the spectacular mountain valley of Manang in the heart of the Annapurna region.",
    itinerary: [
      {
        day: "01",
        title: "Arrival in Kathmandu",
        points: [
          "Meet and greet at Tribhuvan International Airport.",
          "Private transfer to your hotel.",
          "Leisure time to relax or explore Thamel.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "02",
        title: "Kathmandu Sightseeing",
        points: [
          "Visit the sacred Pashupatinath Temple.",
          "Explore Boudhanath Stupa.",
          "Visit Swayambhunath (Monkey Temple).",
          "Discover Kathmandu Durbar Square.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "03",
        title: "Kathmandu to Pokhara (Private Drive)",
        points: [
          "Scenic drive (approximately 7–8 hours).",
          "Check in to your hotel.",
          "Evening stroll around Phewa Lake and Lakeside.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "04",
        title: "Pokhara Sightseeing",
        points: [
          "Sunrise trip to Sarangkot and Seti Gorge.",
          "Visit Devi's Fall.",
          "Explore Gupteshwor Mahadev Cave.",
          "Visit Pumdikot Shiva Statue.",
          "Optional boating on Phewa Lake.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "05",
        title: "Pokhara to Chame (Private Drive)",
        points: [
          "Drive through Besisahar, Dharapani, and picturesque mountain villages.",
          "Enjoy stunning views of rivers, waterfalls, and the Himalayas.",
          "Overnight in Chame."
        ]
      },
      {
        day: "06",
        title: "Chame to Manang (Private Drive)",
        points: [
          "Continue the journey via Pisang and Humde.",
          "Arrive in the beautiful Himalayan village of Manang.",
          "Explore the village and enjoy panoramic mountain views.",
          "Overnight in Manang."
        ]
      },
      {
        day: "07",
        title: "Explore Manang",
        points: [
          "Acclimatization and sightseeing.",
          "Visit Gangapurna Lake.",
          "Explore monasteries and traditional villages.",
          "Optional short hike to nearby viewpoints.",
          "Overnight in Manang."
        ]
      },
      {
        day: "08",
        title: "Manang to Pokhara (Private Drive)",
        points: [
          "Return drive through the Marsyangdi Valley to Pokhara.",
          "Evening at leisure around Lakeside.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "09",
        title: "Pokhara to Kathmandu (Private Drive)",
        points: [
          "Scenic drive back to Kathmandu.",
          "Free time for shopping or relaxing.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "10",
        title: "Departure",
        points: [
          "Breakfast at the hotel.",
          "Private transfer to Tribhuvan International Airport.",
          "End of your unforgettable Himalayan journey with Sacred Nepal Tours & Travel."
        ]
      }
    ],
    includes: [
      "Airport pickup and drop-off",
      "Private vehicle throughout the tour",
      "Hotel and mountain lodge accommodation (twin/double-sharing)",
      "Daily breakfast, lunch, and dinner",
      "Professional English-speaking driver",
      "All applicable government taxes"
    ],
    excludes: [
      "International airfare",
      "Nepal entry visa fees",
      "Monument and sightseeing entrance fees",
      "Personal expenses (laundry, beverages, shopping, telephone, etc.)",
      "Travel insurance",
      "Staff tips and gratuities",
      "Optional activities not mentioned in the itinerary",
      "Any services not specified under Package Includes"
    ]
  },
  {
    id: 4,
    slug: "jomsom-muktinath-tour",
    imgSrc: img10,
    destTitle: "8 Days Jomsom & Muktinath Tour Package",
    location: "Kathmandu – Pokhara – Jomsom – Muktinath",
    grade: "PRIVATE OVERLAND TOUR",
    fees: "$1200",
    duration: "8 Days",
    tagline: "Spirituality, Nature, and Adventure",
    activities: ["Spiritual", "Pilgrimage", "Sightseeing", "Cultural", "Nature", "Adventure", "Photography"],
    description: "Embark on an unforgettable journey through Nepal's cultural treasures and spectacular Himalayan landscapes. Visit the sacred Muktinath Temple, explore the scenic town of Jomsom, and enjoy the beauty of Pokhara, making this tour a perfect blend of spirituality, nature, and adventure.",
    itinerary: [
      {
        day: "01",
        title: "Arrival in Kathmandu",
        points: [
          "Meet and greet at Tribhuvan International Airport.",
          "Private transfer to your hotel.",
          "Leisure time to relax or explore Thamel.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "02",
        title: "Kathmandu Sightseeing",
        points: [
          "Visit the sacred Pashupatinath Temple.",
          "Explore Boudhanath Stupa.",
          "Visit Swayambhunath (Monkey Temple).",
          "Explore Kathmandu Durbar Square.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "03",
        title: "Kathmandu to Pokhara (Private Drive)",
        points: [
          "Scenic drive to Pokhara (approximately 7–8 hours).",
          "Check in to your hotel.",
          "Evening stroll around Phewa Lake and Lakeside.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "04",
        title: "Pokhara to Jomsom – Muktinath (Private Drive)",
        points: [
          "Early morning drive through Beni, Tatopani, Ghasa, Marpha, and Jomsom.",
          "Continue to the sacred Muktinath Temple.",
          "Explore the temple, the 108 holy water spouts, and the eternal flame.",
          "Overnight in Jomsom."
        ]
      },
      {
        day: "05",
        title: "Jomsom Exploration & Return to Pokhara",
        points: [
          "Visit the beautiful village of Marpha, famous for its apple orchards and traditional Thakali culture.",
          "Enjoy breathtaking views of the Kali Gandaki Gorge and surrounding Himalayan peaks.",
          "Drive back to Pokhara.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "06",
        title: "Pokhara Sightseeing",
        points: [
          "Early morning sunrise excursion to Sarangkot.",
          "Visit Devi's Fall.",
          "Explore Gupteshwor Mahadev Cave.",
          "Visit Pumdikot Shiva Statue.",
          "Enjoy an optional boating experience on Phewa Lake.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "07",
        title: "Pokhara to Kathmandu (Private Drive)",
        points: [
          "Scenic drive back to Kathmandu.",
          "Free time for shopping or relaxing.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "08",
        title: "Departure",
        points: [
          "Breakfast at the hotel.",
          "Private transfer to Tribhuvan International Airport according to your flight schedule.",
          "End of your unforgettable journey with Sacred Nepal Tours & Travel."
        ]
      }
    ],
    includes: [
      "Airport pickup and drop-off",
      "Private transportation throughout the tour",
      "Hotel accommodation (twin/double-sharing)",
      "Daily breakfast, lunch, and dinner",
      "Professional English-speaking driver",
      "All applicable government taxes"
    ],
    excludes: [
      "International airfare",
      "Nepal entry visa fees",
      "Monument and sightseeing entrance fees",
      "Personal expenses (laundry, beverages, shopping, telephone, etc.)",
      "Travel insurance",
      "Staff tips and gratuities",
      "Optional activities not mentioned in the itinerary",
      "Any services not specified under Package Includes"
    ]
  },
  {
    id: 5,
    slug: "kathmandu-pokhara-tour",
    imgSrc: img12,
    destTitle: "6 Days Kathmandu & Pokhara Tour Package",
    location: "Kathmandu – Pokhara",
    grade: "PRIVATE LEISURE TOUR",
    fees: "$1200",
    duration: "6 Days",
    tagline: "Culture, Spirituality, and Natural Beauty",
    activities: ["Cultural", "Sightseeing", "Leisure", "Heritage", "Nature", "Photography", "Relaxation"],
    description: "Discover the perfect blend of culture, spirituality, and natural beauty on this 6-day Nepal getaway. Explore the UNESCO World Heritage Sites of Kathmandu and unwind in the peaceful lakeside city of Pokhara while enjoying spectacular Himalayan views.",
    itinerary: [
      {
        day: "01",
        title: "Arrival in Kathmandu",
        points: [
          "Meet and greet at Tribhuvan International Airport.",
          "Private transfer to your hotel.",
          "Leisure time to explore Thamel or relax.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "02",
        title: "Kathmandu Sightseeing",
        points: [
          "Visit the sacred Pashupatinath Temple.",
          "Explore Boudhanath Stupa.",
          "Visit Swayambhunath (Monkey Temple).",
          "Explore Kathmandu Durbar Square.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "03",
        title: "Kathmandu to Pokhara (Private Drive)",
        points: [
          "Scenic drive to Pokhara (approximately 7–8 hours).",
          "Check in to your hotel.",
          "Evening walk around Phewa Lake and Lakeside.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "04",
        title: "Pokhara Sightseeing",
        points: [
          "Early morning sunrise at Sarangkot.",
          "Visit Devi's Fall.",
          "Explore Gupteshwor Mahadev Cave.",
          "Visit International Mountain Museum.",
          "Enjoy an optional boating experience on Phewa Lake.",
          "Overnight in Pokhara."
        ]
      },
      {
        day: "05",
        title: "Pokhara to Kathmandu (Private Drive)",
        points: [
          "Scenic drive back to Kathmandu.",
          "Free time for shopping or exploring local markets.",
          "Overnight in Kathmandu."
        ]
      },
      {
        day: "06",
        title: "Departure",
        points: [
          "Breakfast at the hotel.",
          "Private transfer to Tribhuvan International Airport according to your flight schedule.",
          "End of your memorable Nepal holiday with Sacred Nepal Tours & Travel."
        ]
      }
    ],
    includes: [
      "Airport pickup and drop-off",
      "Private transportation throughout the tour",
      "Hotel accommodation (twin/double-sharing)",
      "Daily breakfast, lunch, and dinner",
      "Professional English-speaking driver",
      "All applicable government taxes"
    ],
    excludes: [
      "International airfare",
      "Nepal entry visa fees",
      "Monument and sightseeing entrance fees",
      "Personal expenses (laundry, beverages, shopping, telephone, etc.)",
      "Travel insurance",
      "Staff tips and gratuities",
      "Optional adventure activities (paragliding, zipline, ultralight flight, etc.)",
      "Any services not mentioned under Package Includes"
    ]
  },
  {
    id: 6,
    slug: "upper-mustang-jeep-tour",
    imgSrc: upperMustang,
    destTitle: "Upper Mustang Private Jeep Tour Package",
    location: "Kathmandu – Pokhara – Jomsom – Kagbeni – Lo Manthang – Chhoser – Muktinath – Pokhara – Kathmandu",
    grade: "PRIVATE JEEP TOUR",
    fees: "$600",
    duration: "10 Days",
    tagline: "Ancient Kingdoms and Himalayan Landscapes",
    activities: ["Adventure", "Cultural", "Overland", "Sightseeing", "Nature", "Heritage"],
    description: "Scenic private Jeep adventure through the spectacular Kali Gandaki Valley. Explore the ancient walled kingdom of Lo Manthang, visit the sacred Muktinath Temple, and experience the unique Tibetan-influenced culture of Upper Mustang with centuries-old monasteries and sky caves.",
    itinerary: [
      {
        day: "01",
        title: "Arrival in Kathmandu",
        points: [
          "Meet and greet upon arrival at Tribhuvan International Airport.",
          "Private transfer to your hotel.",
          "Tour briefing and leisure time to explore Thamel.",
          "Overnight stay in Kathmandu.",
          "Meals: Dinner"
        ]
      },
      {
        day: "02",
        title: "Kathmandu – Pokhara (Approx. 7–8 Hours)",
        points: [
          "Breakfast at the hotel.",
          "Scenic drive to Pokhara by private Jeep along the Prithvi Highway.",
          "Check in to your hotel.",
          "Evening free to explore Lakeside and enjoy the beautiful views of Phewa Lake.",
          "Overnight stay in Pokhara.",
          "Meals: Breakfast, Lunch & Dinner"
        ]
      },
      {
        day: "03",
        title: "Pokhara – Jomsom – Kagbeni",
        points: [
          "Drive through Beni, Tatopani, Ghasa, Lete and Marpha.",
          "Arrive in Jomsom and continue to the picturesque village of Kagbeni.",
          "Explore the ancient alleys and traditional architecture.",
          "Overnight stay in Kagbeni.",
          "Meals: Breakfast, Lunch & Dinner"
        ]
      },
      {
        day: "04",
        title: "Kagbeni – Chele – Syangboche – Ghami – Tsarang – Lo Manthang",
        points: [
          "Enter the restricted Upper Mustang region.",
          "Pass through Tangbe, Chhusang, Chele, Syangboche, Ghami and Tsarang.",
          "Visit the historic Tsarang Monastery and Palace.",
          "Continue to the ancient walled city of Lo Manthang.",
          "Overnight stay in Lo Manthang.",
          "Meals: Breakfast, Lunch & Dinner"
        ]
      },
      {
        day: "05",
        title: "Explore Lo Manthang & Chhoser",
        points: [
          "Visit the Royal Palace.",
          "Explore Jampa Monastery, Thubchen Monastery and Chode Monastery.",
          "Excursion to Chhoser Village.",
          "Visit the famous Sky Caves and Niphu Monastery.",
          "Return to Lo Manthang.",
          "Overnight stay in Lo Manthang.",
          "Meals: Breakfast, Lunch & Dinner"
        ]
      },
      {
        day: "06",
        title: "Lo Manthang – Ghami – Kagbeni – Muktinath",
        points: [
          "Drive back through Tsarang, Ghami, Syangboche, Chele and Kagbeni.",
          "Continue to the sacred pilgrimage site of Muktinath.",
          "Evening visit to Muktinath Temple (time permitting).",
          "Overnight stay in Muktinath.",
          "Meals: Breakfast, Lunch & Dinner"
        ]
      },
      {
        day: "07",
        title: "Muktinath – Jomsom – Tatopani",
        points: [
          "Morning visit to Muktinath Temple for prayers and sightseeing.",
          "Drive through Jomsom, Marpha and Lete.",
          "Continue to Tatopani, famous for its natural hot springs.",
          "Overnight stay in Tatopani.",
          "Meals: Breakfast, Lunch & Dinner"
        ]
      },
      {
        day: "08",
        title: "Tatopani – Pokhara",
        points: [
          "After breakfast, drive back to Pokhara.",
          "Free afternoon for leisure, shopping or boating on Phewa Lake.",
          "Overnight stay in Pokhara.",
          "Meals: Breakfast, Lunch & Dinner"
        ]
      },
      {
        day: "09",
        title: "Pokhara – Kathmandu",
        points: [
          "Breakfast at the hotel.",
          "Drive back to Kathmandu by private Jeep.",
          "Enjoy a farewell dinner with a traditional Nepali cultural program.",
          "Overnight stay in Kathmandu.",
          "Meals: Breakfast, Lunch & Dinner"
        ]
      },
      {
        day: "10",
        title: "Departure",
        points: [
          "Breakfast at the hotel.",
          "Private transfer to Tribhuvan International Airport for your onward flight.",
          "Meals: Breakfast"
        ]
      }
    ],
    includes: [
      "Private 4WD Jeep throughout the tour",
      "Airport arrival and departure transfers",
      "9 nights hotel/lodge accommodation on a twin-sharing basis",
      "Daily meals as mentioned in the itinerary (Breakfast, Lunch & Dinner)",
      "Professional and experienced private Jeep driver",
      "Fuel, parking fees and all transportation costs"
    ],
    excludes: [
      "Upper Mustang Restricted Area Permit",
      "Annapurna Conservation Area Permit (ACAP)",
      "Tour guide and guide expenses",
      "International and domestic airfare",
      "Nepal entry visa fees",
      "Travel insurance",
      "Personal expenses",
      "Drinks and beverages",
      "Monument and monastery entrance fees (if applicable)",
      "Tips for the driver",
      "Any additional expenses caused by weather conditions, road closures, natural disasters or circumstances beyond our control"
    ]
  }
];

export default Data;