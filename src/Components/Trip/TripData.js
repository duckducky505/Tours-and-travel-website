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
    slug: "boudhanath-stupa",
    imgSrc: img1,
    destTitle: "Boudhanath Stupa",
    location: "Kathmandu",
    grade: "CULTURAL HERITAGE",
    fees: "$50",
    duration: "1 Day",
    tagline: "Spiritual Harmony",
    description: "Dominating the skyline, Boudhanath Stupa is one of the largest spherical stupas in the world. This UNESCO World Heritage site serves as a beacon of Buddhist culture in Nepal. As you walk clockwise around the massive dome, you'll be immersed in the scent of incense and the sound of chanting monks. The area is a vibrant Tibetan enclave, filled with colorful prayer flags, intricate mandalas, and hidden rooftop cafes that offer a panoramic view of the 'all-seeing eyes' of Buddha.",
    itinerary: [
      { day: "01", title: "Morning meditation, circumambulation (Kora) of the stupa, visiting local monasteries, and sunset views from a rooftop cafe." }
    ],
    includes: ["Entry Fees", "Certified Cultural Guide", "Traditional Lunch", "Local Taxes"],
    excludes: ["Personal Tips", "Extra Beverages", "Souvenir Shopping"]
  },
  {
    id: 2,
    slug: "annapurna-base-camp",
    imgSrc: img2,
    destTitle: "Annapurna Base Camp",
    location: "Pokhara",
    grade: "TREKKING ADVENTURE",
    fees: "$500",
    duration: "11 Days",
    tagline: "Himalayan Sanctuary",
    description: "The Annapurna Base Camp (ABC) trek is a legendary journey into the heart of the Himalayas. You will traverse through varied ecosystems, from lush rhododendron forests and terraced farmlands to the stark, majestic high-altitude sanctuary surrounded by 7,000-meter peaks. This trek offers a unique opportunity to experience the hospitality of Gurung villages and witness the sunrise over the Annapurna massif, creating a golden glow that stays in your memory forever.",
    itinerary: [
      { day: "01", title: "Drive from Pokhara to Nayapul and trek to Tikhedhunga (1,540m)." },
      { day: "02", title: "Challenge the 3,000 stone steps of Ulleri and trek to Ghorepani (2,860m)." },
      { day: "03", title: "Early morning hike to Poon Hill for sunrise, then trek to Tadapani." },
      { day: "04", title: "Descend through rhododendron forests to the village of Chhomrong." },
      { day: "05", title: "Trek through bamboo forests to Dovan (2,600m)." },
      { day: "06", title: "Ascend towards Deurali, feeling the air thin as peaks come into view." },
      { day: "07", title: "Reach Machhapuchhre Base Camp and finally the Annapurna Base Camp (4,130m)." },
      { day: "08", title: "Celebrate the summit views and descend back to Bamboo." },
      { day: "09", title: "Trek to Jhinu Danda and enjoy the natural riverside hot springs." },
      { day: "10", title: "Final trek to Nayapul and drive back to the lakeside at Pokhara." },
      { day: "11", title: "Farewell breakfast and departure." }
    ],
    includes: ["ACAP & TIMS Permits", "Professional Trekking Guide", "Porters", "All Meals & Teahouse Stays"],
    excludes: ["Hot Showers", "Charging Electronic Devices", "Alcoholic Beverages"]
  },
  {
    id: 3,
    slug: "lumbini-birthplace",
    imgSrc: img3,
    destTitle: "Lumbini",
    location: "Rupandehi",
    grade: "SPIRITUAL JOURNEY",
    fees: "$80",
    duration: "2 Days",
    tagline: "Peace Starts Here",
    description: "Lumbini is not just a destination; it is a profound spiritual experience. As the birthplace of Siddhartha Gautama (Lord Buddha), it holds an energy of serenity and historical weight. The Sacred Garden contains the Mayadevi Temple, the exact spot of birth, alongside the Ashoka Pillar. You can explore the Monastic Zone, where different nations have built stunning monasteries reflecting their own architectural heritage, all connected by a peaceful canal.",
    itinerary: [
      { day: "01", title: "Arrival, Rickshaw tour of the Monastic Zone (World Peace Pagoda, German and Thai Monasteries)." },
      { day: "02", title: "Early morning visit to Mayadevi Temple and meditation in the Sacred Garden before departure." }
    ],
    includes: ["Heritage Site Entry", "Private AC Transport", "Heritage Guide", "Mineral Water"],
    excludes: ["Meals", "Donations at Monasteries"]
  },
  {
    id: 4,
    slug: "sarangkot-paragliding",
    imgSrc: img4,
    destTitle: "Sarangkot Paragliding",
    location: "Pokhara",
    grade: "PARAGLIDING EXPERIENCE",
    fees: "$120",
    duration: "1 Day",
    tagline: "Fly with the Eagles",
    description: "Take to the skies from the hilltop of Sarangkot for an adrenaline-fueled experience. As you glide through the air, you are treated to an unparalleled 360-degree view of the Pokhara Valley, the deep blue Phewa Lake, and the towering white peaks of Mt. Fishtail (Machhapuchhre) and the Annapurna range. It is a peaceful yet exhilarating dance with the wind that defines the spirit of adventure in Nepal.",
    itinerary: [
      { day: "01", title: "Drive to Sarangkot takeoff point, safety briefing, 30-45 minute flight, and landing by the lakeside." }
    ],
    includes: ["Pick-up/Drop", "Certified Pilot", "HD Video and Photos", "Flight Insurance"],
    excludes: ["Personal Snacks", "Extended Flight Time"]
  },
  {
    id: 5,
    slug: "pokhara-highway-drive",
    imgSrc: img5,
    destTitle: "Pokhara Highway Drive",
    location: "Kathmandu to Pokhara",
    grade: "SCENIC ROAD TRIP",
    fees: "$60",
    duration: "1 Day",
    tagline: "Riverside Journey",
    description: "The journey between Nepal's two largest cities is a scenic masterpiece. Traveling along the Prithvi Highway, you'll follow the winding path of the Trishuli River, famous for white-water rafting. The drive offers glimpses of terraced hillsides, rural roadside markets selling fresh local produce, and suspension bridges connecting remote villages to the main road. It is the perfect way to see the 'real' Nepal beyond the city centers.",
    itinerary: [
      { day: "01", title: "Morning departure from Kathmandu, riverside lunch stop at Malekhu, and arrival in Pokhara by late afternoon." }
    ],
    includes: ["Private AC Vehicle", "Experienced Driver", "Fuel and Parking", "Road Tolls"],
    excludes: ["Lunch and Snacks", "Tips for Driver"]
  },
  {
    id: 6,
    slug: "pashupatinath-temple",
    imgSrc: img6,
    destTitle: "Pashupatinath Temple",
    location: "Kathmandu",
    grade: "RELIGIOUS SITE",
    fees: "$40",
    duration: "1 Day",
    tagline: "Sacred Shiva Abode",
    description: "Pashupatinath is the most sacred Hindu temple dedicated to Lord Shiva in the world. Located on the banks of the Bagmati River, this sprawling complex is a mix of temples, ashrams, and images that have stood for centuries. It is a place where life and death meet openly; visitors can witness traditional cremation rituals on the ghats, interact with Sadhus (holy men), and experience the powerful evening Aarati ceremony filled with oil lamps and music.",
    itinerary: [
      { day: "01", title: "Exploration of the temple complex, meeting the Sadhus, and attending the evening Bagmati Aarati ceremony." }
    ],
    includes: ["Entry Permit", "Government Licensed Guide", "Evening Aarati Experience"],
    excludes: ["Personal Offerings", "Photography Fees in Restricted Areas"]
  },
  {
    id: 7,
    slug: "everest-base-camp-trek",
    imgSrc: img7,
    destTitle: "Everest Base Camp Trek",
    location: "Solukhumbu",
    grade: "EXTREME TREKKING",
    fees: "$1200",
    duration: "14 Days",
    tagline: "Top of the World",
    description: "The journey to Everest Base Camp is the ultimate pilgrimage for trekkers. Following in the footsteps of legends like Hillary and Tenzing, you will fly into the world's most dangerous airport at Lukla and begin your ascent through the Khumbu region. Expect to encounter ancient monasteries, high-altitude suspension bridges, and the resilient Sherpa culture, all set against the backdrop of the highest peaks on Earth, including Lhotse, Nuptse, and the mighty Everest.",
    itinerary: [
      { day: "01", title: "Thrilling flight to Lukla and trek to Phakding (2,610m)." },
      { day: "02", title: "Crossing the Hillary Bridge to reach the Sherpa capital, Namche Bazaar (3,440m)." },
      { day: "03", title: "Acclimatization day in Namche; hike to Everest View Hotel for the first glimpse of Everest." },
      { day: "04", title: "Trek to Tengboche and visit the famous monastery during morning prayers." },
      { day: "05", title: "Trek to Dingboche (4,410m) through alpine landscapes and summer pastures." },
      { day: "06", title: "Rest and acclimatization in Dingboche; optional hike to Nagarjun Hill." },
      { day: "07", title: "Trek to Lobuche, passing the emotional climber's memorial at Thukla Pass." },
      { day: "08", title: "The big day: Reach Everest Base Camp (5,364m) and return to Gorak Shep." },
      { day: "09", title: "Sunrise climb to Kala Patthar (5,550m) for the best panoramic view of Everest." },
      { day: "10", title: "Descend to Pheriche village." },
      { day: "11", title: "Trek back to Namche Bazaar for a well-deserved celebration." },
      { day: "12", title: "Final descent to Lukla." },
      { day: "13", title: "Morning flight back to Kathmandu." },
      { day: "14", title: "Buffer day/Departure." }
    ],
    includes: ["Domestic Flights (KTM-Lukla)", "Sagarmatha NP Permits", "Expert Guide & Porters", "Medical Kit"],
    excludes: ["Emergency Evacuation Insurance", "Oxygen Cylinders", "Battery Charging Fees"]
  },
  {
    id: 8,
    slug: "cliff-kushma-swing",
    imgSrc: img8,
    destTitle: "The Cliff Kushma Swing",
    location: "Kushma",
    grade: "ADVENTURE SWING",
    fees: "$90",
    duration: "1 Day",
    tagline: "The World's Highest",
    description: "Located above the Kaligandaki River, 'The Cliff' in Kushma is home to the world’s highest canyon swing. For thrill-seekers, this is the ultimate test of courage. You’ll experience a terrifying yet beautiful free-fall from a 228-meter high bridge before swinging through the gorge. The site also features a resort where you can relax and watch others take the plunge amidst the stunning backdrop of the Baglung and Parbat districts.",
    itinerary: [
      { day: "01", title: "Early morning transfer to Kushma, safety orientation, the jump/swing session, and riverside relaxation." }
    ],
    includes: ["Swing/Jump Ticket", "Photos & Video", "Safety Briefing", "Equipment Rental"],
    excludes: ["Personal Transportation", "Lunch", "Additional Jumps"]
  },
  {
    id: 9,
    slug: "phewa-lake-boating",
    imgSrc: img9,
    destTitle: "Phewa Lake Boating",
    location: "Pokhara",
    grade: "BOATING & RELAX",
    fees: "$30",
    duration: "1 Day",
    tagline: "Reflection of Machhapuchhre",
    description: "Phewa Lake is the crown jewel of Pokhara. A peaceful boat ride on its calm waters offers the most iconic view in Nepal: the twin peaks of Mt. Machhapuchhre reflecting perfectly on the lake's surface. In the middle of the lake sits the Tal Barahi Temple, a two-story pagoda dedicated to the protector deity. Whether you choose to row yourself or be rowed, the experience is a necessary escape from the bustle of city life.",
    itinerary: [
      { day: "01", title: "Hire a colorful 'Doonga', row to the Tal Barahi island temple, and enjoy the sunset from the middle of the lake." }
    ],
    includes: ["Boat Rental (1-2 Hours)", "Life Jacket", "Rowing Service", "Local Guide"],
    excludes: ["Temple Offerings", "Lakeside Snacks"]
  }
];

export default Data;