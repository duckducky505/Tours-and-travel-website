import img1 from '../../assets/baoudha.jpg';
import img2 from '../../assets/annapurna.jpg';
import img3 from '../../assets/lumbini.jpg';
import img4 from '../../assets/paragliding.jpg';
import img5 from '../../assets/pokhara-highway.jpg';
import img6 from '../../assets/temple.jpg';
import img7 from '../../assets/trek.jpg';
import img8 from '../../assets/swing-by-peak.jpg';
import img9 from '../../assets/mountain_peak.jpg';

const Data = [
  {
    id: 1,
    slug: "kathmandu-valley-tour",
    imgSrc: img1,
    destTitle: "Vibrant Kathmandu Tour",
    location: "Kathmandu",
    grade: "CULTURAL & HERITAGE",
    fees: "$350",
    duration: "4 Days",
    tagline: "UNESCO World Heritage Circuit",
    description: "Immerse yourself in the living history of the Kathmandu Valley. This comprehensive 4-day journey takes you through the three ancient kingdoms: Kathmandu, Patan, and Bhaktapur. You will witness the architectural brilliance of Malla-era palaces, the spiritual energy of the Pashupatinath temple complex, and the serene eyes of the Buddha at the massive Boudhanath Stupa. This tour is perfect for photography enthusiasts and history buffs looking to decode the intricate woodcarvings and stone sculptures that define Newari craftsmanship.",
    itinerary: [
      { day: "01", title: "Arrival in Kathmandu, traditional welcome dinner, and trip briefing." },
      { day: "02", title: "Full day tour: Kathmandu Durbar Square, Swayambhunath (Monkey Temple), and Patan." },
      { day: "03", title: "Sunrise at Nagarkot, visit Bhaktapur Durbar Square and Boudhanath Stupa." },
      { day: "04", title: "Morning visit to Pashupatinath and final departure transfer." }
    ],
    includes: ["3-Star Hotel", "Certified Heritage Guide", "Private AC Transport", "Breakfast"],
    excludes: ["International Airfare", "Lunch/Dinner", "Entrance Fees"]
  },
  {
    id: 2,
    slug: "annapurna-panorama-trek",
    imgSrc: img2,
    destTitle: "Annapurna Panorama",
    location: "Annapurna Region",
    grade: "EASY-PACED TREKKING",
    fees: "$630",
    duration: "12 Days",
    tagline: "The Gurung Village Experience",
    description: "The Annapurna Panorama trek is a masterpiece of Himalayan trekking, offering maximum visual reward with moderate physical effort. This 12-day odyssey winds through ancient rhododendron forests that bloom in vibrant pinks and reds during spring. You'll stay in traditional stone-built teahouses in Gurung villages like Ghandruk, where the local hospitality is as warm as the mountain sun. The ultimate highlight is standing atop Poon Hill at dawn, watching the sun ignite the peaks of Dhaulagiri and Annapurna in a spectacular display of gold and orange.",
    itinerary: [
      { day: "01", title: "Arrival in Kathmandu and transfer to hotel." },
      { day: "02", title: "Full day sightseeing in Kathmandu and trek preparation." },
      { day: "03", title: "Scenic drive to Pokhara (approx. 6-7 hours)." },
      { day: "04", title: "Drive to Nayapul and trek to Tikhedhunga (1,540m)." },
      { day: "05", title: "Uphill trek to the beautiful village of Ghorepani (2,860m)." },
      { day: "06", title: "Early morning hike to Poon Hill (3,210m) for sunrise; trek to Tadapani." },
      { day: "07", title: "Trek to Ghandruk village, a traditional Gurung settlement." },
      { day: "08", title: "Trek back to Nayapul and drive to Pokhara." },
      { day: "09", title: "Free day in Pokhara for lakeside relaxation or boating." },
      { day: "10", title: "Drive back to Kathmandu via scenic highway." },
      { day: "11", title: "Shopping day and farewell dinner in Kathmandu." },
      { day: "12", title: "Final departure." }
    ],
    includes: ["Trekking Permits (TIMS/ACAP)", "Teahouse Accommodation", "Guide & Porters", "All Meals on Trek"],
    excludes: ["Sleeping Bags", "Personal Insurance", "Bar Bills"]
  },
  {
    id: 3,
    slug: "lumbini-pilgrimage",
    imgSrc: img3,
    destTitle: "Lumbini Buddhist Circuit",
    location: "Lumbini",
    grade: "PILGRIMAGE & SPIRITUAL",
    fees: "$650",
    duration: "5 Days",
    tagline: "Birthplace of Lord Buddha",
    description: "Step into the cradle of Buddhism with our Lumbini Buddhist Circuit. This spiritual retreat is centered around the Maya Devi Temple, the exact spot where Queen Maya Devi gave birth to Siddhartha Gautama. Beyond the sacred garden, you will explore the Monastic Zone, where different nations have built stunning monasteries reflecting their unique architectural styles—from the gilded Thai temple to the minimalist German stupa. It is a journey of peace, meditation, and historical discovery that resonates with seekers of all backgrounds.",
    itinerary: [
      { day: "01", title: "Flight from Kathmandu to Bhairahawa and transfer to Lumbini." },
      { day: "02", title: "Exploration of the Sacred Garden, Maya Devi Temple, and Ashoka Pillar." },
      { day: "03", title: "Guided tour of the International Monastic Zone (East and West zones)." },
      { day: "04", title: "Day trip to Tilaurakot (ancient Kapilvastu) to see the Shakya Palace ruins." },
      { day: "05", title: "Morning meditation session and flight back to Kathmandu." }
    ],
    includes: ["Round-trip Domestic Flights", "Deluxe Hotel", "Spiritual Guide", "Meditation Sessions"],
    excludes: ["Personal Donations", "Laundry", "Tips"]
  },
  {
    id: 4,
    slug: "sarangkot-paragliding",
    imgSrc: img4,
    destTitle: "Sarangkot Paragliding",
    location: "Pokhara",
    grade: "ADVENTURE",
    fees: "$120",
    duration: "1 Day",
    tagline: "Fly with Eagles",
    description: "Experience the ultimate adrenaline rush as you soar high above the clouds in Pokhara. Your journey begins with a scenic drive to the Sarangkot hilltop, a premier take-off point known for its consistent thermals. As you launch into the air with a certified pilot, the entire Annapurna range, including the fishtail peak of Machhapuchhre, unfolds before your eyes. Floating over the emerald waters of Phewa Lake while eagles circle nearby is a core memory you'll cherish forever. The flight concludes with a gentle landing on the lakeside.",
    itinerary: [
      { day: "01", title: "Pick up from hotel, 30-min flight from Sarangkot, and lakeside drop-off." }
    ],
    includes: ["Hotel Pickup/Drop", "Certified Pilot", "Photo/Video Package", "Safety Equipment"],
    excludes: ["Meals", "Travel Insurance"]
  },
  {
    id: 5,
    slug: "pokhara-highway-drive",
    imgSrc: img5,
    destTitle: "Scenic Highway Drive",
    location: "Kathmandu to Pokhara",
    grade: "ROAD TRIP",
    fees: "$60",
    duration: "1 Day",
    tagline: "Riverside Journey",
    description: "The Prithvi Highway journey is more than just a commute; it is a scenic window into rural Nepal. As you leave the bustling capital, the road snakes alongside the white-water Trishuli River, a favorite for rafters. You will pass through terraced hillsides, vibrant roadside markets selling fresh local fruits, and small villages that offer a glimpse into the daily life of the Nepali middle-hills. The 200km drive offers multiple stops at local 'Bhattis' (eateries) where you can taste authentic Dal Bhat while enjoying the mountain breeze.",
    itinerary: [
      { day: "01", title: "7-hour scenic drive from Kathmandu to Pokhara with lunch stops at riverside resorts." }
    ],
    includes: ["Private AC Vehicle", "Experienced Driver", "Fuel and Tolls"],
    excludes: ["Meals", "Entrance Fees to en-route attractions"]
  },
  {
    id: 6,
    slug: "pashupatinath-temple-tour",
    imgSrc: img6,
    destTitle: "Pashupatinath Spiritual Tour",
    location: "Kathmandu",
    grade: "RELIGIOUS",
    fees: "$40",
    duration: "1 Day",
    tagline: "Sacred Shiva Abode",
    description: "Pashupatinath is not just a temple; it is the center of the Hindu universe in Nepal. Dedicated to Lord Shiva in his form as Pashupati (Lord of Animals), this UNESCO site is a sprawling complex of shrines, ashrams, and ghats. You will witness the cycle of life and death along the Bagmati River, see the colorful Sadhus (holy men) with their ash-smeared bodies, and experience the powerful evening 'Aarati' ceremony where priests perform rhythmic fire rituals. It is a profound, sensory, and deeply spiritual experience that captures the essence of Nepalese faith.",
    itinerary: [
      { day: "01", title: "Morning ritual observation, exploration of the 492 shrines, and evening Aarati." }
    ],
    includes: ["Certified Religious Guide", "Entrance Tickets", "Transportation"],
    excludes: ["Food/Drinks", "Personal Offerings"]
  },
  {
    id: 7,
    slug: "everest-base-camp-classic",
    imgSrc: img7,
    destTitle: "Everest Base Camp Trek",
    location: "Solukhumbu",
    grade: "TREKKING ADVENTURE",
    fees: "$1420",
    duration: "14 Days",
    tagline: "Footsteps of Legends",
    description: "The Everest Base Camp trek is the 'Holy Grail' of trekking adventures. This 14-day expedition takes you deep into the heart of Sherpa culture, through the high-altitude landscapes of the Sagarmatha National Park. You will cross suspension bridges draped in prayer flags, climb the famous Namche Hill, and stand in awe before the Khumbu Icefall. Every step is a challenge and a triumph, leading you to the base of the highest peak on Earth. From the spiritual silence of Tengboche Monastery to the breathtaking views from Kala Patthar, this trek is a life-changing experience for every adventurer.",
    itinerary: [
      { day: "01", title: "Arrival in Kathmandu and briefing." },
      { day: "02", title: "Fly to Lukla and trek to Phakding (2,610m)." },
      { day: "03", title: "Trek to the Sherpa capital, Namche Bazaar (3,440m)." },
      { day: "04", title: "Acclimatization day: Hike to Everest View Hotel." },
      { day: "05", title: "Trek to Tengboche; visit the famous monastery (3,860m)." },
      { day: "06", title: "Trek to Dingboche (4,410m) through summer pastures." },
      { day: "07", title: "Second Acclimatization day in Dingboche." },
      { day: "08", title: "Trek to Lobuche (4,940m) along the Khumbu Glacier." },
      { day: "09", title: "Trek to Everest Base Camp (5,364m) and back to Gorakshep." },
      { day: "10", title: "Hike to Kala Patthar (5,545m) for sunrise and trek to Pheriche." },
      { day: "11", title: "Trek back down to Namche Bazaar." },
      { day: "12", title: "Trek back to Lukla; farewell with the crew." },
      { day: "13", title: "Fly back to Kathmandu; evening leisure." },
      { day: "14", title: "Final Departure." }
    ],
    includes: ["Lukla Flights", "Sagarmatha Permits", "Teahouse Lodging", "Full Trekking Crew"],
    excludes: ["Hot Showers/Battery Charging", "Oxygen", "WIFI"]
  },
  {
    id: 8,
    slug: "cliff-kushma-swing",
    imgSrc: img8,
    destTitle: "Kushma Canyon Swing",
    location: "Kushma",
    grade: "EXTREME ADVENTURE",
    fees: "$90",
    duration: "1 Day",
    tagline: "World's Highest",
    description: "Are you brave enough to take the leap? The Kushma Canyon Swing is currently the world’s highest canyon swing, towering at a staggering 228 meters over the wild Kaligandaki River. Unlike a bungee jump, the swing offers a massive 12-second free fall followed by a high-speed arc through the canyon. Suspended from a 520-meter long bridge, you’ll experience a rush of gravity and wind that is unmatched. The view of the deep gorge and the Annapurna mountains in the distance only adds to the epic nature of this extreme experience.",
    itinerary: [
      { day: "01", title: "Drive from Pokhara to Kushma, safety briefing, the Big Swing, and return." }
    ],
    includes: ["Swing Ticket", "Safety Briefing", "Transport from Pokhara", "Equipment"],
    excludes: ["Photos/Videos", "Lunch"]
  },
  {
    id: 9,
    slug: "phewa-lake-boating",
    imgSrc: img9,
    destTitle: "Phewa Lake Boating",
    location: "Pokhara",
    grade: "RELAXATION",
    fees: "$30",
    duration: "1 Day",
    tagline: "Reflection of Peaks",
    description: "Find serenity on the calm, mirror-like waters of Phewa Lake, the second-largest lake in Nepal. Rent a brightly colored 'Doonga' (wooden boat) and row out to the center, where the iconic Machhapuchhre (Fishtail) mountain is perfectly reflected in the water. You can stop at the Tal Barahi Temple, a beautiful two-story pagoda located on an island in the middle of the lake. Whether you choose to row yourself or hire a boatman, the gentle lap of the water and the cool mountain air make this the perfect antidote to the chaos of city life.",
    itinerary: [
      { day: "01", title: "Morning or sunset boating session with a visit to the Island Temple." }
    ],
    includes: ["Boat Rental", "Life Jackets", "Guide"],
    excludes: ["Temple Offerings", "Snacks"]
  },
  {
    id: 10,
    slug: "chitwan-jungle-safari",
    imgSrc: img6, 
    destTitle: "Chitwan Wildlife Safari",
    location: "Chitwan",
    grade: "WILDLIFE ADVENTURE",
    fees: "$200",
    duration: "3 Days",
    tagline: "Into the Wild",
    description: "Swap the mountain peaks for the subtropical jungles of the Terai. Chitwan National Park, a UNESCO World Heritage site, is one of the best wildlife-viewing destinations in Asia. In these dense forests and grasslands, you will track the Greater One-horned Rhinoceros and keep a silent watch for the elusive Royal Bengal Tiger. From peaceful canoe rides where crocodiles bask on the banks to thrilling jeep safaris and cultural encounters with the indigenous Tharu people, Chitwan offers a complete natural and cultural immersion in the wild heart of Nepal.",
    itinerary: [
      { day: "01", title: "Arrival, Tharu village walk, and traditional dance performance." },
      { day: "02", title: "Full day of Safari: Jeep drive, Canoe ride, and Elephant breeding center visit." },
      { day: "03", title: "Early morning bird watching and departure to Kathmandu/Pokhara." }
    ],
    includes: ["Resort Accommodation", "Full Board Meals", "Park Entrance Fees", "Naturalist Guide"],
    excludes: ["Alcohol", "Tips"]
  },
  {
    id: 11,
    slug: "everest-mountain-flight",
    imgSrc: img9,
    destTitle: "Everest Mountain Flight",
    location: "Solukhumbu",
    grade: "SCENIC LUXURY",
    fees: "$236",
    duration: "1 Day",
    tagline: "Close-up with Giants",
    description: "The Everest Mountain Flight is the ultimate luxury for those who want to see the world's highest peaks without the physical exertion of trekking. Taking off from Kathmandu, this one-hour flight takes you within miles of the Tibetan border. Every passenger is guaranteed a window seat to witness a panorama of 20 of the highest peaks in the world, including Lhotse, Makalu, and, of course, the mighty Everest. As the pilot identifies each peak for you, you'll feel like you could reach out and touch the snow-capped summits. It’s an awe-inspiring experience that defines 'once-in-a-lifetime'.",
    itinerary: [
      { day: "01", title: "Early morning airport transfer, 1-hour flight, and certificate presentation." }
    ],
    includes: ["Airport Transfers", "Guaranteed Window Seat", "Flight Map/Certificate"],
    excludes: ["Personal Expenses"]
  }
];

export default Data;