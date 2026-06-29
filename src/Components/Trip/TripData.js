import img1 from '../../assets/baoudha.jpg';
import img2 from '../../assets/annapurna.jpg';
import img3 from '../../assets/lumbini.jpg';
import img4 from '../../assets/paragliding.jpg';
import img5 from '../../assets/pokhara-highway.jpg';
import img6 from '../../assets/temple.jpg';
import img7 from '../../assets/trek.jpg';
import img8 from '../../assets/swing-by-peak.jpg';
import img9 from '../../assets/mountain_peak.jpg';
import img10 from '../../assets/muktinath-temple-1.webp';
import img11 from '../../assets/upper-mustang-1.jpg';
import img12 from '../../assets/boating.jpg';

const Data = [
  {
    id: 12,
    slug: "muktinath-vip-pilgrimage",
    imgSrc: img10,
    destTitle: "Muktinath Temple VIP Pilgrimage",
    location: "Mustang",
    grade: "LUXURY PILGRIMAGE",
    fees: "$1,200",
    duration: "3 Days",
    tagline: "Spiritual Elevation at 3,710m",
    activities: ["Spiritual", "Luxury", "Pilgrimage"],
    description: "At 3,710 meters above sea level, where the thin Himalayan air carries the scent of incense and mountain snow, Muktinath stands as one of the most sacred sites in all of Asia — revered equally by Hindus as a dwelling of Lord Vishnu and by Tibetan Buddhists as a place of enlightenment. Our VIP pilgrimage removes every logistical burden from your path so that only the spiritual journey remains. You depart Kathmandu aboard a private helicopter, gliding over the dramatic gorges of the Gandaki River and the stark lunar terrain of the Mustang plateau before landing directly at the temple complex. A private spiritual guide — a practising brahmin with deep knowledge of both Hindu and Buddhist traditions — will lead you through the rituals of the 108 sacred water spouts, each believed to cleanse a specific sin from the soul. Your evenings are spent at a carefully selected high-altitude boutique lodge, where handwoven textiles, open fireplaces, and locally sourced meals create an atmosphere of warmth and reflection. This is not tourism. This is a pilgrimage conducted with the reverence and luxury it deserves.",
    itinerary: [
      { day: "01", title: "Private helicopter flight from Kathmandu to Muktinath, scenic Mustang valley transit, check-in at luxury high-altitude lodge, and welcome dinner." },
      { day: "02", title: "Private guided prayer rituals at the 108 holy water spouts and the main Muktinath Temple, followed by a meditation session and a visit to the Jwala Mai flame temple." },
      { day: "03", title: "Sunrise mountain meditation, traditional Mustangi breakfast at the lodge, and private helicopter return to Kathmandu." }
    ],
    includes: ["Private Helicopter Round-trip", "VIP Puja Arrangements", "Luxury Boutique Lodge (2 nights)", "Private Spiritual Guide", "All Meals"],
    excludes: ["International Airfare", "Personal Offerings", "Tips"]
  },
  {
    id: 13,
    slug: "upper-mustang-jeep-expedition",
    imgSrc: img11,
    destTitle: "Upper Mustang Private Jeep Expedition",
    location: "Upper Mustang",
    grade: "LUXURY ADVENTURE",
    fees: "$2,800",
    duration: "7 Days",
    tagline: "Into the Forbidden Kingdom",
    activities: ["Adventure", "Luxury", "Off-road"],
    description: "For centuries, the walled kingdom of Lo Manthang was sealed from the outside world — a Tibetan Buddhist enclave hidden behind some of the most forbidding mountain terrain on earth. Nepal only opened its gates to foreign travelers in 1992, and access remains strictly controlled by permit. Our private jeep expedition places you inside this living time capsule in absolute comfort. Your luxury 4x4 vehicle, maintained to the highest safety standards, is your vessel through a landscape of eroded red cliffs, ancient sky caves carved into canyon walls, and whitewashed monasteries perched above river valleys that haven't changed in three hundred years. A dedicated local guide from the Lo community — the indigenous people of Mustang — opens doors that no standard tour could access: family homes for butter tea, private monastery libraries containing centuries-old manuscripts, and sunset viewpoints known only to locals. Boutique lodges with en-suite facilities and heated rooms are arranged at each overnight stop. This is a journey into one of the last truly remote kingdoms on earth, made accessible without sacrificing a single standard of comfort.",
    itinerary: [
      { day: "01", title: "Morning flight from Kathmandu to Jomsom, meet your dedicated private guide and luxury 4x4 jeep, and drive through the Kali Gandaki gorge to Kagbeni." },
      { day: "02", title: "Enter the restricted zone with your special permit, driving through deep canyons and the red-rock formations of Chele." },
      { day: "03", title: "Full exploration of the ancient Tibetan sky caves — hand-carved sanctuaries in the cliff faces dating back over a thousand years — and drive to Ghami." },
      { day: "04", title: "Arrival in Lo Manthang, the walled royal capital of the Forbidden Kingdom, private tour of the Royal Palace and the four-storey Jampa Monastery." },
      { day: "05", title: "Full-day exploration of the Chhoser cave systems and the remote Ghar Gompa monastery, one of the oldest in the Mustang region." },
      { day: "06", title: "Scenic return drive toward Jomsom with panoramic views of the Dhaulagiri massif and a farewell dinner with your guide." },
      { day: "07", title: "Early morning flight to Pokhara for a lakeside lunch, then connect to Kathmandu." }
    ],
    includes: ["Private Luxury 4x4 Jeep & Driver", "Restricted Area Permits (Upper Mustang)", "Boutique Lodge Accommodation", "Private Local Field Guide", "All Meals En Route"],
    excludes: ["International Airfare", "Alcohol", "Tips", "Personal Purchases"]
  },
  {
    id: 14,
    slug: "pokhara-lakeside-luxury",
    imgSrc: img12,
    destTitle: "Pokhara Lakeside Retreat",
    location: "Pokhara",
    grade: "LUXURY RELAXATION",
    fees: "$850",
    duration: "4 Days",
    tagline: "Elegance by the Water",
    activities: ["Relaxation", "Luxury", "Leisure"],
    description: "Pokhara is Nepal's most beautiful city — a lakeside jewel set against the dramatic backdrop of the Annapurna range, where the reflection of Machhapuchhre, the sacred Fish Tail peak, shimmers on the surface of Phewa Lake at dawn. Our lakeside retreat strips away the busyness of travel and replaces it with something rarer: stillness of the finest kind. You are accommodated in one of Pokhara's premier five-star lakeside resorts, where every room faces the mountains and the water. Each day is shaped around your pace: a private sunrise boat on the lake before the other guests stir, a signature Himalayan spa treatment using local herbs and hot stones, a leisurely morning helicopter flight that lifts you above the clouds for a close encounter with the Annapurna peaks before returning you to your resort in time for a late breakfast. Evenings are arranged at Pokhara's most intimate fine-dining venues, where Nepali cuisine is elevated to an art form. This is Nepal at its most gracious — unhurried, beautiful, and entirely yours.",
    itinerary: [
      { day: "01", title: "Private luxury vehicle transfer from Kathmandu to Pokhara, resort check-in with a personal welcome briefing, and a quiet lakeside welcome dinner." },
      { day: "02", title: "Private sunrise boat ride on Phewa Lake with sparkling wine, morning at leisure, and a signature spa session in the afternoon." },
      { day: "03", title: "Early morning private helicopter flight over the Annapurna Sanctuary, mountain breakfast on return, and a curated tour of the Pokhara hillside." },
      { day: "04", title: "Leisurely morning at the resort, lakeside breakfast, and private luxury transport back to Kathmandu." }
    ],
    includes: ["5-Star Lakeside Resort (3 nights)", "Private Boat Hire", "Spa Vouchers", "Helicopter Mountain Flight", "Luxury Private Transport"],
    excludes: ["International Airfare", "Personal Shopping", "Extra Spa Services"]
  },
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
    activities: ["Cultural", "Heritage", "Sightseeing"],
    description: "Kathmandu is not a city you visit; it is a city that happens to you. Nowhere else on earth can you turn a corner and find a thousand-year-old temple being worshipped, a medieval palace courtyard still hosting daily rituals, and a bronze deity garlanded with fresh marigolds — all within the same city block. Our 4-day Valley Tour is a carefully curated circuit through all three ancient kingdoms of the Kathmandu Valley: Kathmandu, Patan, and Bhaktapur, each of which was once an independent city-state with its own king, its own art, and its own extraordinary temple squares. Your certified heritage guide is not a memorised-script guide; they are a trained historian who grew up in the valley and can speak to the living relationship between these monuments and the communities who still use them daily. You will stand at the burning ghats of Pashupatinath at sunrise and watch centuries-old cremation rites on the banks of the Bagmati River. You will climb the hilltop of Swayambhunath — the Monkey Temple — and find the entire valley laid out beneath the all-seeing eyes of the Buddha. You will walk the golden streets of Bhaktapur at dusk, when the tourist buses have gone and the city belongs to its people again. Kathmandu reveals itself slowly, and we have designed four days to make sure you catch as much of it as possible.",
    itinerary: [
      { day: "01", title: "Arrival in Kathmandu, transfer to a centrally located 3-star hotel, traditional welcome dinner with live folk music, and a detailed trip orientation briefing." },
      { day: "02", title: "Full day heritage circuit: Kathmandu Durbar Square with the Kumari Living Goddess courtyard, Swayambhunath hilltop stupa, and the medieval art museums of Patan Durbar Square." },
      { day: "03", title: "Pre-dawn drive to Nagarkot for a Himalayan sunrise over 8,000m peaks, then explore the intact medieval streetscapes of Bhaktapur Durbar Square and the great Boudhanath Stupa." },
      { day: "04", title: "Morning visit to the Pashupatinath Temple complex for the river-side Aarati ceremony, final packing, and airport departure transfer." }
    ],
    includes: ["3-Star Hotel (3 nights)", "Certified Heritage Guide", "Private AC Transport", "Daily Breakfast", "All Entrance Fees"],
    excludes: ["International Airfare", "Lunch & Dinner", "Personal Expenses"]
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
    activities: ["Trekking", "Nature", "Adventure"],
    description: "There is a reason the Annapurna Panorama route is one of the most celebrated short treks in the world — it offers the full Himalayan trekking experience with mountain views that rival anything the Everest region can produce, at an altitude that is accessible to almost any reasonably fit traveller without acclimatisation concerns. The trail passes through dense rhododendron forests that blaze crimson and pink in spring, terraced rice paddies that cascade down the hillsides like green staircases, and Gurung villages where the hospitality of the indigenous Ghale Gurung people is as genuine and warm as the mountains are dramatic. The centerpiece of the route is Poon Hill at 3,210 metres: a modest summit that commands a view of over a dozen peaks above 7,000 metres, including the entire Dhaulagiri and Annapurna massifs, both rising nearly five kilometres above you as the sun rises behind them and paints their glaciers in shades of amber and rose. You sleep in stone-built teahouses owned and run by local families, where meals are cooked over woodfires and stories are told late into the evening. This is trekking that feels both adventurous and deeply connected to the culture of the hills.",
    itinerary: [
      { day: "01", title: "Arrival in Kathmandu, transfer to hotel, team introductions and full gear check." },
      { day: "02", title: "Cultural orientation day in Kathmandu, equipment collection, and trek preparation briefing." },
      { day: "03", title: "Scenic Prithvi Highway drive to Pokhara alongside the Trishuli River, lakeside afternoon at leisure." },
      { day: "04", title: "Drive to Nayapul trailhead and first steps on the trail, ascending to Tikhedhunga (1,540m) through terraced farming villages." },
      { day: "05", title: "A sustained but rewarding climb through rhododendron forest to the hilltop village of Ghorepani (2,860m)." },
      { day: "06", title: "Pre-dawn ascent of Poon Hill (3,210m) for the Annapurna sunrise panorama, then descend through forest to Tadapani." },
      { day: "07", title: "Trek to Ghandruk, the largest Gurung village in the Annapurna foothills, for a cultural homestay experience." },
      { day: "08", title: "Gradual descent back to Nayapul and drive to Pokhara for a well-earned lakeside evening." },
      { day: "09", title: "Rest day in Pokhara: optional boating on Phewa Lake, optional paragliding, or pure relaxation." },
      { day: "10", title: "Scenic highway drive back to Kathmandu with riverside lunch stop." },
      { day: "11", title: "Souvenir shopping in Thamel, farewell dinner at a Newari restaurant, certificate presentation." },
      { day: "12", title: "Final departure transfer to Tribhuvan International Airport." }
    ],
    includes: ["Trekking Permits (TIMS & ACAP)", "Teahouse Accommodation", "Experienced Licensed Guide", "Porters (1 per 2 guests)", "All Meals on Trek"],
    excludes: ["Sleeping Bags & Trekking Poles", "Personal Travel Insurance", "Bar Bills & Hot Showers on Trek"]
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
    activities: ["Spiritual", "Cultural", "Pilgrimage"],
    description: "In 623 BCE, beneath a sal tree in the fertile plains of what is now southern Nepal, Queen Maya Devi paused on a journey and gave birth to a child who would become the Buddha — a teacher whose ideas about suffering, compassion, and liberation would eventually shape the lives of over half a billion people on earth. Lumbini is the verified birthplace of Siddhartha Gautama, confirmed by the Ashoka Pillar erected in 249 BCE by the Indian emperor who made a pilgrimage here himself. Today, the sacred site is a vast, beautifully maintained UNESCO World Heritage landscape where monasteries funded by Buddhist nations from across the world — Sri Lanka, Japan, Thailand, China, Korea, Myanmar — stand in quiet, tree-lined lanes around the central Sacred Garden. Our Buddhist Circuit guides you through this extraordinary international pilgrimage site with a specialist spiritual guide, visiting the excavated ruins of the Maya Devi Temple that mark the exact birthplace, the Ashoka Pillar with its ancient Brahmi inscription, and the surrounding monastic zone where monks of every Buddhist tradition practice alongside visiting pilgrims. A day trip to Tilaurakot reveals the ruins of the palace where the young Siddhartha lived his sheltered royal life before encountering suffering for the first time and setting out on his path to enlightenment. Each evening includes a guided meditation session in one of the monasteries, allowing you to absorb the profound stillness of this place before returning to your deluxe accommodation.",
    itinerary: [
      { day: "01", title: "Domestic flight from Kathmandu to Bhairahawa, private transfer to Lumbini, check-in at a deluxe guesthouse within the Lumbini Development Zone." },
      { day: "02", title: "Guided exploration of the Sacred Garden: the Maya Devi Temple excavation, the Ashoka Pillar, the Puskarini sacred pond, and the flame lighting ceremony." },
      { day: "03", title: "Full tour of the International Monastic Zone with visits to the Japanese Peace Pagoda, the Myanmar Golden Temple, the Korean Monastery, and the Chinese Great Drigung Kagyud Lotus Stupa." },
      { day: "04", title: "Day trip to Tilaurakot, the ancient capital of Kapilvastu where the young Siddhartha grew up, including the East and West Gate excavations and the royal palace ruins." },
      { day: "05", title: "Early morning silent meditation in the Sacred Garden at sunrise, traditional breakfast, and flight back to Kathmandu." }
    ],
    includes: ["Round-trip Domestic Flights", "Deluxe Hotel (4 nights)", "Certified Spiritual Guide", "Daily Guided Meditation Sessions", "All Transfers"],
    excludes: ["Personal Offerings & Donations", "Laundry", "Tips", "Meals (unless specified)"]
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
    activities: ["Adventure", "Extreme", "Air-sport"],
    description: "Pokhara is one of the finest paragliding locations in the world, and Sarangkot is the launch point that made it famous. The thermal conditions here are exceptional: warm air rising from the Phewa valley meets the cool downdrafts from the Annapurna massif to create perfect, sustained lift that allows pilots to stay airborne for thirty to forty-five minutes with ease. You run off the edge of the Sarangkot hilltop at 1,592 metres and within seconds the earth falls away beneath you — the lake, the city, the rice paddies — until you are at eye level with the Himalayan foothills and the white peaks of Machhapuchhre and Annapurna South fill your entire field of vision. Himalayan griffon vultures, with their three-metre wingspans, sometimes circle the same thermal as your wing. Your certified tandem pilot, who has flown this valley hundreds of times, handles all the technical work and talks you through what you are seeing. The thirty-minute flight deposits you softly on the lakeside landing strip. A professional photo and video package captures every second, because your hands will be too busy gesturing at the view to reach for your phone.",
    itinerary: [
      { day: "01", title: "Hotel pickup in Pokhara, scenic drive to Sarangkot launch site, full safety briefing, 30-40 minute tandem paragliding flight over Phewa Lake and the Annapurna range, soft lakeside landing and hotel return." }
    ],
    includes: ["Hotel Pickup & Drop-off", "Certified Tandem Pilot", "Professional Photo & Video Package", "All Safety Equipment", "Flight Certificate"],
    excludes: ["Meals", "Travel Insurance", "Tips"]
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
    activities: ["Road-trip", "Nature", "Leisure"],
    description: "The Prithvi Highway between Kathmandu and Pokhara is one of Asia's great scenic drives — a 200-kilometre journey that descends from the capital's high valley through increasingly dramatic gorge country before climbing back up to the lakes and foothills of the Pokhara basin. For the first half of the journey, the road clings to the cliffs above the turquoise Trishuli River, a legendary white-water rafting river whose rapids you observe from above while local fishermen wade its calmer pools below. Roadside stalls sell freshwater fish, sugarcane juice, and freshly pressed mustard oil from a dozen villages the highway passes through. As the gorges widen and the air warms, the landscape softens into the subtropical middle hills: banana trees, red poinsettias growing as tall as houses, and the first views of the Annapurna range emerging white above the green ridgelines ahead. We make our journey in a private air-conditioned vehicle with an experienced driver, stopping at the best riverside viewpoints and a well-regarded local restaurant for lunch at the halfway point. By the time Pokhara's lake glimmers ahead, you understand that the journey was never just a commute.",
    itinerary: [
      { day: "01", title: "Early morning departure from Kathmandu, Trishuli riverside viewpoint stops, midpoint lunch at a riverside resort, progressive mountain views as Pokhara approaches, and lakeside drop-off at your hotel." }
    ],
    includes: ["Private AC Vehicle", "Experienced Licensed Driver", "Fuel & All Tolls", "Riverside Viewpoint Stops"],
    excludes: ["Meals (lunch at own cost)", "Entrance Fees to En-route Attractions", "Tips"]
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
    activities: ["Spiritual", "Cultural", "Religious"],
    description: "Pashupatinath is the most sacred Hindu temple in Nepal and among the holiest Shiva shrines in the world — a UNESCO World Heritage site sprawling across both banks of the sacred Bagmati River in eastern Kathmandu. Unlike most major religious sites in South Asia, Pashupatinath is not a single temple but a living sacred precinct of 492 individual shrines, ashrams, and pilgrimage platforms that have accumulated over fifteen centuries of continuous religious use. The main gilded pagoda, accessible only to Hindus, dates to the 5th century CE, though some form of worship has occurred on this site for far longer. What makes Pashupatinath exceptional is that it remains genuinely alive with daily religious practice: sadhus covered in ash with painted faces meditate on the stone platforms; Brahmin priests perform elaborate fire rituals on the riverbank; and at the open-air cremation ghats, the most profound of all Hindu rites unfolds in the open air, as families conduct the final journey of their loved ones according to traditions that have not changed in a thousand years. Your certified guide provides deep cultural and historical context, transforming what might otherwise be an overwhelming sensory experience into something profoundly comprehensible and moving. The evening Aarati fire ceremony, in which priests offer flames to the river in a choreographed sequence of bells, chants, and swinging censers, is among the most beautiful religious rituals in South Asia.",
    itinerary: [
      { day: "01", title: "Morning pickup, arrival at the Bagmati River ghats for the morning ritual observation, expert-guided tour of the 492 shrines complex, sadhu interactions, and attendance at the evening Aarati fire ceremony." }
    ],
    includes: ["Certified Religious & Cultural Guide", "All Entrance Tickets", "Return Transportation", "Cultural Briefing"],
    excludes: ["Food & Drinks", "Personal Offerings", "Tips"]
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
    activities: ["Trekking", "Adventure", "High-altitude"],
    description: "The Everest Base Camp trek is the benchmark against which all other trekking adventures in the world are measured. It is the journey to the foot of the highest mountain on earth — and it is far more than that. The trail from Lukla to Base Camp is a 130-kilometre path through the heart of Sherpa civilisation, a culture forged by altitude, Buddhism, and the unique geology of the Khumbu valley. The approach alone is extraordinary: crossing the famous Hillary suspension bridges that sway over gorges hundreds of metres deep, passing through Namche Bazaar — a town that somehow exists at 3,440 metres and has a bakery, a coffee shop, and a gear market — and climbing above the tree line into a high-altitude world of glacial moraines, Buddhist prayer flags, and the distant silhouettes of peaks that most people only ever see in photographs. Your acclimatisation days are not rest days; they are opportunities to make side hikes that bring you to the Everest View Hotel at 3,880 metres, where you sit with a cup of Sherpa tea and look directly at the face of Lhotse and the South Col of Everest. Base Camp itself sits at 5,364 metres in a chaos of coloured tents and ice seracs at the edge of the Khumbu Glacier — the staging area from which humans attempt the impossible. And on the morning of Day Ten, you climb Kala Patthar at 5,545 metres as the sun rises and Everest reveals itself, fully, for the first time in your field of vision. Our team — licensed guide, assistant guide, and trained porters — are Khumbu locals who have walked these trails their entire lives and whose care for your safety and experience is absolute.",
    itinerary: [
      { day: "01", title: "Arrival in Kathmandu, team briefing, permit documentation, and welcome dinner at a Thamel rooftop restaurant." },
      { day: "02", title: "Early morning flight to Lukla (2,840m) — the legendary mountain airstrip — and first day's trek to Phakding (2,610m) through pine forest." },
      { day: "03", title: "Trek to Namche Bazaar (3,440m), the gateway to the Khumbu and the largest town in the Everest region, crossing two major suspension bridges." },
      { day: "04", title: "Essential acclimatisation day in Namche: guided hike to the Everest View Hotel (3,880m) for the first views of Everest, Lhotse, and Ama Dablam." },
      { day: "05", title: "Trek to Tengboche (3,860m), home of the most famous monastery in the Himalaya, with afternoon prayers if timing allows." },
      { day: "06", title: "Trek to Dingboche (4,410m) through yak pastures and the high-altitude village of Pangboche." },
      { day: "07", title: "Second acclimatisation day: hike above Dingboche to 5,000m for views of Makalu and Island Peak before returning to rest." },
      { day: "08", title: "Trek to Lobuche (4,940m) along the lateral moraine of the Khumbu Glacier, passing the Khumbu climbers' memorial." },
      { day: "09", title: "The milestone day: trek to Everest Base Camp (5,364m), stand on the glacier, and descend to Gorakshep for the night." },
      { day: "10", title: "Pre-dawn ascent of Kala Patthar (5,545m) for the summit sunrise panorama of Everest, then descend all the way to Pheriche (4,240m)." },
      { day: "11", title: "Long descent back to Namche Bazaar through changing altitude and vegetation zones." },
      { day: "12", title: "Final descent to Lukla through rhododendron forest, farewell dinner with the entire crew and certificate presentation." },
      { day: "13", title: "Morning flight back to Kathmandu, afternoon at leisure in Thamel." },
      { day: "14", title: "Final departure from Tribhuvan International Airport." }
    ],
    includes: ["Lukla Round-trip Domestic Flights", "Sagarmatha National Park Permits", "All Teahouse Accommodation on Trek", "Experienced Licensed Senior Guide", "Assistant Guide & Trained Porters", "All Meals on Trek", "EBC Trek Certificate"],
    excludes: ["Hot Showers & Battery Charging on Trek", "Supplemental Oxygen", "WIFI on Trek", "Travel Insurance", "Personal Trekking Gear"]
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
    activities: ["Extreme", "Adventure"],
    description: "The Kushma Canyon Swing holds the verified record as the world's highest canyon swing, launching you from a platform 228 metres above the confluence of the Kali Gandaki and Modi rivers in the Parbat district of western Nepal. The swing arc carries you across a canyon at speeds of up to 120 kilometres per hour, with the valley floor a dizzying distance below and the forested canyon walls rushing past in your peripheral vision. The entire experience lasts approximately 30 to 40 seconds of freefall and pendulum swing — which is, depending on your constitution, either the most exhilarating half-minute of your life or the longest. The operation is run by a certified team to international adventure safety standards, using aircraft-grade steel cables and harness systems inspected and rated for thousands of cycles. A full safety briefing and equipment check precede every jump. The Kushma bridge itself — a 567-metre suspension bridge from which the swing platform is mounted — is also one of Nepal's longest, and the walk across it with the gorge visible through the steel grating underfoot is itself a mild adventure. Transfer from Pokhara, which takes approximately two hours through the middle hill scenery of the Gandaki region, is included in your booking.",
    itinerary: [
      { day: "01", title: "Early morning pickup from Pokhara, two-hour scenic drive to Kushma, bridge walk and canyon orientation, full safety briefing and equipment fitting, The Big Swing (228m), optional bridge bungee, and return drive to Pokhara." }
    ],
    includes: ["Canyon Swing Ticket", "Full Safety Briefing & Equipment", "Return Transport from Pokhara", "Swing Certificate"],
    excludes: ["Professional Photo & Video Package", "Lunch", "Tips"]
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
    activities: ["Relaxation", "Nature", "Leisure"],
    description: "Phewa Lake is the second largest lake in Nepal and one of the most photogenic bodies of water in Asia — a three-kilometre stretch of water at 742 metres elevation that captures the perfect mirror reflection of Machhapuchhre, the 6,993-metre sacred Fish Tail peak, on calm mornings when the air is still and the mountains stand undimmed against a blue sky. The traditional wooden boats of Phewa, called Dunggas, are painted in the primary colours of the fishing communities that have worked this lake for generations. On the water, the city falls away entirely: you hear only the soft sound of oars, the occasional kingfisher diving from the lakeside trees, and the distant sound of temple bells from the Tal Barahi Island Temple at the centre of the lake — a small two-storey pagoda dedicated to the goddess Barahi that sits on a wooded island and can only be reached by boat. Whether you choose a sunrise crossing when the mountains are at their most vivid, a midday exploration of the lake's quieter northern reaches, or a golden sunset session where the water turns amber and the peak turns rose, Phewa Lake offers the most serene two hours available anywhere in Nepal. A guide accompanies you to row, narrate, and ensure your experience is entirely effortless.",
    itinerary: [
      { day: "01", title: "Lakeside meeting point, traditional Dunga boat orientation, choice of sunrise or sunset session, island temple visit by boat, and optional shoreside tea at a lakeside café on return." }
    ],
    includes: ["Traditional Dunga Boat Rental", "Life Jackets", "Experienced Local Oarsman", "Island Temple Visit"],
    excludes: ["Temple Offerings", "Snacks & Drinks", "Optional Photography Guide"]
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
    activities: ["Wildlife", "Adventure", "Nature"],
    description: "Chitwan National Park is one of the finest wildlife reserves in Asia and Nepal's first national park, established in 1973 and designated a UNESCO World Heritage site in 1984. The park protects 932 square kilometres of subtropical jungle in the Terai lowlands — a world completely unlike anything in the rest of Nepal, where the landscape is flat, dense, and teeming with life that the mountains cannot support. Chitwan holds one of the last viable populations of the one-horned Indian rhinoceros, a prehistoric-looking animal that can weigh up to 2,500 kilograms and which came perilously close to extinction before the park's creation. Bengal tigers are present in meaningful numbers; sightings are not guaranteed, but the possibility is real and our naturalist guides know the territorial patterns and river crossing points that maximise your chances. The safari experience is multi-modal: you explore by open-topped jeep at dawn when the animals are active and the light is spectacular, by dugout canoe along the Rapti River where crocodiles bask on the banks and elephants sometimes wade across in groups, and on foot through the inner forest with an armed naturalist guide. Evenings are spent at a riverside lodge, where the sounds of the jungle replace the city's noise, and a Tharu cultural performance — the indigenous people of the Terai — provides an unforgettable evening entertainment.",
    itinerary: [
      { day: "01", title: "Arrival at Chitwan by private vehicle from Kathmandu or Pokhara, orientation walk through a Tharu village, traditional Tharu stick dance performance, and a wildlife briefing at the lodge." },
      { day: "02", title: "Full safari day: pre-dawn jeep drive through the core buffer zone, canoe ride on the Rapti River for crocodile and river bird observation, elephant breeding centre visit, and an evening walk to the jungle watchtower." },
      { day: "03", title: "Early morning bird watching along the river with the naturalist guide — Chitwan hosts over 500 bird species — followed by breakfast and return journey to Kathmandu or Pokhara." }
    ],
    includes: ["Lodge Accommodation (2 nights)", "Full Board Meals Throughout", "National Park Entrance Fees", "Expert Naturalist Guide", "Jeep Safari", "Canoe Ride", "All Internal Transfers"],
    excludes: ["Alcohol", "Tips", "Optional Elephant Bath Experience"]
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
    activities: ["Luxury", "Scenic", "Flight"],
    description: "The Everest Mountain Flight is the most efficient luxury in Nepal: in just over one hour from Kathmandu, you are face to face with the summit of the highest mountain on earth at 8,848 metres, without a single day of trekking, a single permit, or a single step of altitude adjustment. The flight operates on clear mornings between October and May, departing Tribhuvan International Airport in a small aircraft — typically a 12 to 15-seat twin-engine plane — that carries you eastward toward the Khumbu Himalaya. As the aircraft enters the mountain corridor, each passenger in turn is called forward to the cockpit window for an unobstructed view. The flight path passes within visual range of Everest, Cho Oyu, Lhotse, Makalu, Ama Dablam, and several other 8,000-metre giants in a single spectacular arc. Your pilot and co-pilot provide a running commentary on each peak as it appears. The entire experience is conducted with professional care: departure is from the domestic terminal, and your certificate of participation — signed by the pilot — is presented on landing. For travellers who cannot commit to a full trek but will not visit Nepal without seeing its most famous landscape, this flight represents an experience of genuine and lasting worth.",
    itinerary: [
      { day: "01", title: "Early morning airport transfer to the domestic terminal, boarding and safety briefing, one-hour scenic mountain flight with guaranteed window seat and cockpit views, landing and certificate presentation, and return transfer to your hotel." }
    ],
    includes: ["Airport Transfers", "Guaranteed Window Seat", "Cockpit Viewing Turn", "Flight Map & Participation Certificate", "Airport Tax"],
    excludes: ["Personal Expenses", "Meals", "Tips"]
  }
];

export default Data;