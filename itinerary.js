// Tokyo Trip Itinerary Data
// Each item: day (date string), dayLabel, dayVariant (optional: "A-clear"/"A-rainy"/"B" for
//   Day 4 alternatives that the user can switch between), start ("HH:MM" 24h or null), end,
//   title, address, notes (short summary shown by default), fullDetails (complete un-compressed
//   text from the source doc's "What to do" + "Getting to next stop" columns, shown when
//   expanded), lat, lng, zone.
// Times are local Tokyo time (JST)

const ITINERARY = [
  // ===== Aug 15 (Sat) — Arrival day =====
  {
    day: "2026-08-15", dayLabel: "Aug 15 · Sat — Arrival day",
    start: "12:40", end: "14:40",
    title: "Narita Airport (NRT)",
    address: "1-1 Furugome, Narita, Chiba 282-0004",
    notes: "Land; immigration, baggage, customs. Buy Keisei Skyliner ticket, get yen, set up mobile Suica.",
    fullDetails: "What to do: Land; immigration, baggage, customs (pre-do Visit Japan Web).\n\nGetting to next stop: ~12:40–14:40 · clear the airport, then in B1: buy Keisei Skyliner ticket, get yen (7-Bank / Japan Post ATM), set up mobile Suica.",
    lat: 35.7654, lng: 140.386,
    zone: "narita"
  },
  {
    day: "2026-08-15", dayLabel: "Aug 15 · Sat — Arrival day",
    start: "14:40", end: "15:25",
    title: "Skyliner → Ueno",
    address: "Keisei Skyliner train",
    notes: "Ride Keisei Skyliner (~45 min) to Ueno.",
    fullDetails: "What to do: Ride Keisei Skyliner (~45 min).\n\nGetting to next stop: 15:25–15:45 · walk ~12 min to hotel (or Hibiya Line Ueno → Naka-Okachimachi, 1 stop).",
    lat: 35.7139, lng: 139.7772,
    zone: "narita"
  },
  {
    day: "2026-08-15", dayLabel: "Aug 15 · Sat — Arrival day",
    start: "15:45", end: "16:30",
    title: "Hotel MONday Premium Ueno Okachimachi",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Check in (from 15:00), drop bags, freshen up.",
    fullDetails: "What to do: Check in (from 15:00), drop bags, freshen up. (Naka-Okachimachi Stn, 1 min from hotel.)\n\nGetting to next stop: 16:30–16:45 · walk ~8 min into Ueno to Alegria.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },
  {
    day: "2026-08-15", dayLabel: "Aug 15 · Sat — Arrival day",
    start: "16:45", end: "18:00",
    title: "Alegria Ueno (Brazilian buffet)",
    address: "2-12-16 Ueno, Taito City, Tokyo 110-0005",
    notes: "Brazilian buffet / churrasco dinner, book ahead. Lunch 3k-4k Yen, Dinner 4.5k-6k Yen.",
    fullDetails: "Hours: 11 a.m.–3 p.m., 4–10:30 p.m. Address: Japan, 〒110-0005 Tokyo, Taito City, Ueno, 2 Chome−12−16 池の端スカイビル ４F. Phone: +81 3-5834-3909.\n\nWhat to do: Brazilian buffet / churrasco dinner, book ahead.\n\nGetting to next stop: 18:00–18:15 · walk ~5 min to Ameya-Yokocho. Lunch (11:30 am-3 pm) 3k-4k Yen. Dinner (after 5 pm) 4.5k-6k Yen.",
    lat: 35.70956, lng: 139.77181,
    zone: "ueno"
  },
  {
    day: "2026-08-15", dayLabel: "Aug 15 · Sat — Arrival day",
    start: "18:15", end: "18:55",
    title: "Ameya-Yokocho",
    address: "4-chome Ueno, Taito-ku",
    notes: "Bargain-priced cosmetics, apparel, sweets, open air market street. Nearby Uniqlo/GU.",
    fullDetails: "Extra notes: 500-meter open air market street, heavily discounted goods, exotic spices. Hours: 10 am-8 pm (sic 10am-20pm in source). Uniqlo/GU: 10 AM - 9 PM, 6-min from hotel.\n\nWhat to do: Post-dinner stroll (stalls wind down ~18:00; shops open). Nearby (Western/pizza/fast-food): Hard Rock Cafe (Ueno Stn) · McDonald's Ueno · KFC Ueno.\n\nGetting to next stop: 18:55–19:15 · walk ~12 min, or JR Okachimachi → Akihabara (1 stop). Under JR Yamanote train line, nostalgic WWII charm.",
    lat: 35.7101, lng: 139.7745,
    zone: "ueno"
  },
  {
    day: "2026-08-15", dayLabel: "Aug 15 · Sat — Arrival day",
    start: "19:15", end: "20:15",
    title: "Akihabara",
    address: "Sotokanda, Chiyoda-ku (Akihabara Stn)",
    notes: "Light wander — anime shops, arcades, dessert.",
    fullDetails: "What to do: Light wander — anime shops, arcades, dessert. Nearby (Western/pizza/fast-food): Burger King (Showa-dori) · MOS Burger (Suehirocho) · Carl's Jr. (Chuo-dori).\n\nGetting to next stop: 20:15–20:30 · walk / JR back to hotel.",
    lat: 35.6983, lng: 139.7731,
    zone: "akihabara"
  },
  {
    day: "2026-08-15", dayLabel: "Aug 15 · Sat — Arrival day",
    start: "20:30", end: "21:30",
    title: "Back to hotel",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Rest; try to stay up to ~21:30 to reset body clock.",
    fullDetails: "What to do: Rest; try to stay up to ~21:30 to reset body clock.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },

  // ===== Aug 16 (Sun) — Day 1: Harajuku & Shibuya =====
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "08:20", end: "09:05",
    title: "Hotel → Harajuku",
    address: "JR Yamanote Line, Okachimachi → Harajuku",
    notes: "Earlier start today; dessert stop at station.",
    fullDetails: "Theme: Youth fashion, street culture, café, shopping, eccentric street fashion.\n\nWhat to do: Earlier start today (leave hotel ~08:20) + dessert stop at station.\n\nGetting to next stop: arrive ~09:05 · JR Yamanote Line Okachimachi → Harajuku (~30 min); walk 2 min to Meiji.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "09:15", end: "10:15",
    title: "Meiji Shrine",
    address: "1-1 Yoyogikamizonocho, Shibuya-ku 151-8557",
    notes: "Forest walk, main shrine (quieter this early). Outdoor, coolest part of day.",
    fullDetails: "Surrounded by a large forest in the middle of Tokyo. Outdoor (coolest part of the day).\n\nWhat to do: Forest walk, main shrine (quieter this early). Nearby (Western/pizza/fast-food): McDonald's (Takeshita-dori) · THE GREAT BURGER (Jingumae) · HENRY'S BURGER Harajuku.\n\nGetting to next stop: 10:15–10:22 · walk ~7 min to Takeshita Street (Instagrammable sweets; a famous, bustling 350-meter pedestrian street in Harajuku; many stores are air-conditioned).",
    lat: 35.6761, lng: 139.6992,
    zone: "harajuku"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "10:22", end: "11:00",
    title: "Takeshita Street",
    address: "1-chome Jingumae, Shibuya-ku 150-0001",
    notes: "Trendy sweets street — crepes, cotton candy, bubble tea, flavored popcorn.",
    fullDetails: "Tokyo's trendy sweets street. Crepes with whipped cream, cotton candy, and rainbow-colored desserts, Japanese-style bubble tea and flavored popcorn. Mostly outdoor, but many shops are air-conditioned.\n\nWhat to do: Youth fashion, crepes, snacks. Nearby (Western/pizza/fast-food): McDonald's (Takeshita-dori) · THE GREAT BURGER (Jingumae) · HENRY'S BURGER Harajuku.\n\nGetting to next stop: 11:00–11:05 · walk ~5 min south to Omotesando.",
    lat: 35.6712, lng: 139.705,
    zone: "harajuku"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "11:05", end: "12:15",
    title: "Omotesando Hills + Cat Street",
    address: "Jingumae, Shibuya-ku",
    notes: "Indoor mall + walk part of Cat Street. Boutiques & cafés.",
    fullDetails: "Omotesando Hills mall (4.0/5): Indoor. Plus walk part of Cat Street 12:15-12:35 (keep this short). Café / Lunch stop.\n\nWhat to do: Tree-lined avenue (like a smaller Champs-Élysées), boutiques & cafés; stroll down Cat Street toward Shibuya. Nearby (Western/pizza/fast-food): bills Omotesando · Eggs 'n Things (Harajuku) · THE GREAT BURGER (Jingumae).\n\nGetting to next stop: 12:35–12:45 · then Cat Street walk into Shibuya (~10 min) at the south end of Takeshita Street.",
    lat: 35.6672, lng: 139.7087,
    zone: "harajuku"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "12:45", end: "13:20",
    title: "Lunch — Halal Master Chicken",
    address: "Shibuya, Shibuya-ku",
    notes: "Halal chicken, fried chicken burgers, wraps and sandwiches.",
    fullDetails: "✓ close · ⭐ Very highly rated by visitors. Western-style halal restaurant.\n\nWhat to do: Halal chicken — fried chicken burgers, wraps and sandwiches, casual American-style meals.\n\nGetting to next stop: walk ~5 min to Hachiko.",
    lat: 35.6595, lng: 139.7005,
    zone: "shibuya"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "13:20", end: "13:45",
    title: "Hachiko & Shibuya Crossing",
    address: "Shibuya Stn Hachiko exit, 2-chome Dogenzaka",
    notes: "Photos, people-watching. Just enough time outdoors.",
    fullDetails: "Just enough time for outdoor photos.\n\nWhat to do: Photos, people-watching. Nearby (Western/pizza/fast-food): Shake Shack Shibuya · Tsubame Grill (Mark City) · MOM'S TOUCH Shibuya.\n\nGetting to next stop: walk ~5 min to Hikarie (connected to station).",
    lat: 35.6591, lng: 139.7006,
    zone: "shibuya"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "13:45", end: "14:30",
    title: "Shibuya Hikarie — Harbs dessert",
    address: "2-21-1 Shibuya, Shibuya-ku 150-8510",
    notes: "Harbs (4.2/5) cake café on 4F, ShinQs. Japanese parfaits, seasonal pastries.",
    fullDetails: "Shibuya Hikarie building, indoor. Upscale dessert shops. Hours (Sun): 11 am–8 pm. Price range 1k–2k Yen. Harbs cake café on 4F, ShinQs.\n\nWhat to do: Dessert stop — Harbs (4.2/5). Japanese parfaits, seasonal pastries, specialty chocolates and wagashi.\n\nGetting to next stop: walk ~10 min NW to Udagawacho / Animate. (A Japanese parfait is a tall layered dessert, typically made with ice cream, whipped cream, fresh fruit, cake, jelly, cornflakes, mochi, matcha, or other toppings, served in a tall glass.)",
    lat: 35.6592, lng: 139.7037,
    zone: "shibuya"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "14:30", end: "17:15",
    title: "Shibuya malls & Animate Shibuya",
    address: "Jinnan / Udagawacho, Shibuya-ku",
    notes: "Extended shopping; anime badges & goods at Animate. Romina's best stop.",
    fullDetails: "Spend more time here! Mostly indoor. Romina's best stop.\n\nWhat to do: Extended shopping; anime badges & goods at Animate. Nearby (Western/pizza/fast-food): Shake Shack Shibuya · Tsubame Grill (Mark City) · MOM'S TOUCH Shibuya.\n\nGetting to next stop: walk ~8 min to Shibuya Scramble Square.",
    lat: 35.6615, lng: 139.6978,
    zone: "shibuya"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "17:20", end: "18:45",
    title: "Shibuya Sky",
    address: "2-24-12 Shibuya, Shibuya-ku 150-6145 (Scramble Square)",
    notes: "Sunset observation deck (sunset ~18:30). Book ahead.",
    fullDetails: "Book ahead — timed entry.\n\nWhat to do: Sunset observation deck (sunset ~18:30). Nearby (Western/pizza/fast-food): Shake Shack Shibuya · Tsubame Grill (Mark City) · MOM'S TOUCH Shibuya.\n\nGetting to next stop: 18:45–19:00 · walk down into Shibuya for dinner.",
    lat: 35.6584, lng: 139.7022,
    zone: "shibuya"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "19:00", end: "20:15",
    title: "Dinner in Shibuya",
    address: "Shibuya, Shibuya-ku",
    notes: "Dinner before heading back to hotel.",
    fullDetails: "What to do: Dinner.\n\nGetting to next stop: 20:15–20:45 · JR Yamanote Line Shibuya → Okachimachi (~30 min) → hotel.",
    lat: 35.6595, lng: 139.7005,
    zone: "shibuya"
  },
  {
    day: "2026-08-16", dayLabel: "Aug 16 · Sun — Day 1: Harajuku & Shibuya",
    start: "20:45", end: "21:30",
    title: "Back to hotel",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Rest.",
    fullDetails: "What to do: Rest.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },

  // ===== Aug 17 (Mon) — Day 2: Ueno & Asakusa (full revised version — includes
  // Don Quijote, Kappabashi, Ecute Ueno, Yanaka Ginza, Sumida River, Skytree, Solamachi) =====
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "07:45", end: "08:10",
    title: "Hotel → Asakusa",
    address: "Ginza Line, Ueno → Asakusa",
    notes: "Early start to beat heat & crowds; optional coffee at Fuglen Asakusa (opens 8:00).",
    fullDetails: "What to do: Early start to beat heat & crowds; optional coffee/breakfast en route at Fuglen Asakusa (opens 8:00).\n\nGetting to next stop: 07:45–08:10 · walk to Ueno + Ginza Line → Asakusa (~5 min).",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "08:10", end: "10:15",
    title: "Senso-ji & Nakamise-dori",
    address: "2-3-1 Asakusa, Taito-ku 111-0032",
    notes: "Tokyo's oldest Buddhist temple. Kaminarimon Gate, giant red lantern, Nakamise Street snacks.",
    fullDetails: "Extended visit ~2h. Temple hours ~9-10am–6-7pm. Before Sensoji: Nakamise-dori (250m length), Denbourin-dori (200-300m until Sensoji). Tokyo's oldest and most famous Buddhist temple.\n\nWhat to do: Walk through Kaminarimon Gate and see the giant red lantern. Stroll Nakamise Street for traditional snacks and souvenirs. More time here — coolest & least crowded early (shops open toward the end of the visit). Nearby (Western/pizza/fast-food): LUXE Burgers Asakusa · McDonald's Asakusa.\n\nGetting to next stop: 10:15–10:25 · walk ~5 min to Don Quijote (nr Kaminarimon).",
    lat: 35.7147, lng: 139.7968,
    zone: "asakusa"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "10:25", end: "11:05",
    title: "Don Quijote Asakusa",
    address: "Asakusa, Taito-ku (nr Kaminarimon)",
    notes: "Discount store — souvenirs, snacks, indoor/AC break. Different-flavor Kit Kats, anime goods, luggage.",
    fullDetails: "7 min from Sensoji. Different flavors of Kit Kats, anime goods and luggage. Asakusa (East Tokyo) vs. Shibuya (West Tokyo) contrast note.\n\nWhat to do: Souvenirs, snacks — indoor / AC as morning heat builds. Nearby (Western/pizza/fast-food): LUXE Burgers Asakusa · McDonald's Asakusa.\n\nGetting to next stop: 11:05–11:20 · walk ~12 min to Kappabashi. Needs a physical passport to claim Tax Free Shopping.",
    lat: 35.7112, lng: 139.7942,
    zone: "asakusa"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "11:20", end: "12:15",
    title: "Kappabashi Kitchen Street",
    address: "Matsugaya / Nishi-Asakusa, Taito-ku (nr Tawaramachi Stn, Ginza Line)",
    notes: "Kitchen tools & food-replica shops street (open Monday). Teapot warmer, chopsticks.",
    fullDetails: "Kappabashi Kitchen Town is a famous shopping street specializing in kitchen tools and restaurant supplies. Located between Asakusa and Ueno, ~10–15 min walk from Sensō-ji. Open on Mondays (only ~30% of shops open Sundays).\n\nWhat to do: Kitchenware, knives, cookware, plastic food samples. Nearby (Western/pizza/fast-food): LUXE Burgers Asakusa · McDonald's Asakusa.\n\nGetting to next stop: 12:15–12:35 · Tawaramachi → Ueno (Ginza Line), walk to lunch.",
    lat: 35.7144, lng: 139.7889,
    zone: "asakusa"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "12:35", end: "13:45",
    title: "Lunch — Ueno area (halal)",
    address: "Ueno / Yushima",
    notes: "Naritaya Halal Ramen Asakusa, or Shinjuku-tei Ueno Park (3-45-10 Yushima).",
    fullDetails: "What to do: Halal / muslim-friendly lunch.\n\nGetting to next stop: 13:45–14:00 · walk ~8 min to hotel.",
    lat: 35.70876, lng: 139.77536,
    zone: "ueno"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "14:00", end: "15:00",
    title: "Midday break at hotel",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Ride out peak heat & UV in AC.",
    fullDetails: "What to do: Rest, shower, cool down in AC through the peak-heat / peak-UV window. Recharge for the evening.\n\nGetting to next stop: 15:20–15:35 · walk ~12 min to Ueno Park.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "15:15", end: "16:05",
    title: "Ueno Park + Toshogu Shrine",
    address: "Uenokoen, Taito-ku 110-0007",
    notes: "Shaded park stroll + Toshogu Shrine as it starts to cool.",
    fullDetails: "What to do: Shaded park stroll + Toshogu Shrine as it starts to cool. Nearby (Western/pizza/fast-food): Hard Rock Cafe (Ueno Stn) · McDonald's Ueno · KFC Ueno.\n\nGetting to next stop: 16:05–16:20 · walk ~8 min to Ameya-Yokocho.",
    lat: 35.7156, lng: 139.7727,
    zone: "ueno"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "16:20", end: "16:40",
    title: "Ameya-Yokocho (evening)",
    address: "4-chome Ueno, Taito-ku",
    notes: "Browse market stalls & shops.",
    fullDetails: "What to do: Browse market stalls & shops. Nearby (Western/pizza/fast-food): Hard Rock Cafe (Ueno Stn) · McDonald's Ueno · KFC Ueno.\n\nGetting to next stop: 16:40–16:48 · walk ~8 min to JR Ueno Station (Ecute).",
    lat: 35.7101, lng: 139.7745,
    zone: "ueno"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "16:48", end: "17:10",
    title: "Ecute Ueno",
    address: "JR Ueno Station, 7 Chome-1-1 Ueno, Taito City, Tokyo 110-0005",
    notes: "3.9/5 — station mall, indoor/AC. Optional: can be skipped if not wanting a Western café.",
    fullDetails: "Rated 3.9/5 — station mall, indoor/AC. Can be eliminated if you don't want to go to a Western café.\n\nWhat to do: Quick indoor browse — bakeries, cafés, gifts, sweets (GoodSpoon Café-style spots). Good short AC break right before catching the train out to Yanaka. Nearby (Western/pizza/fast-food): Hard Rock Cafe (Ueno Stn) · McDonald's Ueno · KFC Ueno.\n\nGetting to next stop: 17:10–17:16 · JR Yamanote Line Ueno → Nishi-Nippori (1 stop, ~5-6 min, direct) + walk ~3 min to Yuyake Dandan steps. Ecute is inside the station you're already passing through, so this adds almost no extra transit time.",
    lat: 35.7136, lng: 139.7772,
    zone: "ueno"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "17:16", end: "18:00",
    title: "Yanaka Ginza",
    address: "Yanaka, Taito-ku — nr Nishi-Nippori Stn (West Exit) or Sendagi Stn",
    notes: "Traditional Showa-era open-air shopping street, aka \"Cat Town\".",
    fullDetails: "Shops generally close 18:00–19:00 — arriving by 17:00 keeps ~50 min with everything open. Cash recommended (most stalls are cash-only). Some individual shops rest Mon/Tue — verify hours day-of. Access: Nishi-Nippori Stn West Exit (~5 min walk via Yuyake Dandan / Sunset Steps) or Sendagi Stn (flat approach, ~3 min, better for limited mobility).\n\nWhat to do: ~60 family-run shops + 15+ food stalls (menchi-katsu at Meat no Suzuki, cat-tail donuts at Yanaka Shippoya, tea at Kanekichien). Look for the 7 hidden wooden cat statues on rooftops/awnings. Catch sunset light on the Yuyake Dandan steps. Note: traditional shitamachi street — Western/fast-food options limited/absent here.\n\nGetting to next stop: 18:00–18:20 · walk back to Nishi-Nippori Stn (~5 min) + JR Yamanote Line → Uguisudani/Ueno → transfer toward Skytree/Sumida (Metro/Tobu ~20 min total from Ueno).",
    lat: 35.728, lng: 139.7666,
    zone: "ueno"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "18:20", end: "18:40",
    title: "Sumida River",
    address: "Azumabashi, Taito / Sumida-ku",
    notes: "Riverside sunset (~18:30), skyline & Skytree photos.",
    fullDetails: "What to do: Riverside sunset (~18:30), skyline & Skytree photos.\n\nGetting to next stop: 18:40–18:45 · walk ~5 min to Tokyo Skytree.",
    lat: 35.7101, lng: 139.8017,
    zone: "asakusa"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "18:50", end: "20:00",
    title: "Tokyo Skytree",
    address: "1-1-2 Oshiage, Sumida-ku 131-0045",
    notes: "Observation deck — sunset afterglow, blue hour & night views. Book ahead.",
    fullDetails: "Book ahead — timed entry.\n\nWhat to do: Observation deck — sunset afterglow, blue hour & night views. Nearby (Western/pizza/fast-food): KUA'AINA (Solamachi) · Solamachi 6–7F & 30–31F restaurant floors (Western/pizza).\n\nGetting to next stop: 20:00–20:10 · down to Tokyo Solamachi (same building).",
    lat: 35.7101, lng: 139.8107,
    zone: "asakusa"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "20:10", end: "21:10",
    title: "Dinner — Solamachi",
    address: "1-1-2 Oshiage (Tokyo Skytree Town)",
    notes: "Dinner near Skytree.",
    fullDetails: "What to do: Dinner near Skytree.\n\nGetting to next stop: 21:10–21:25 · Metro/Tobu → Ueno-Okachimachi → hotel.",
    lat: 35.7101, lng: 139.8107,
    zone: "asakusa"
  },
  {
    day: "2026-08-17", dayLabel: "Aug 17 · Mon — Day 2: Ueno & Asakusa",
    start: "21:25", end: "22:00",
    title: "Back to hotel",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Rest.",
    fullDetails: "What to do: Rest.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },

  // ===== Aug 18 (Tue) — Day 3: Shinjuku =====
  {
    day: "2026-08-18", dayLabel: "Aug 18 · Tue — Day 3: Shinjuku",
    start: "08:00", end: "08:45",
    title: "Hotel → Shinjuku Gyoen",
    address: "JR to Shinjuku",
    notes: "Earlier departure to beat Aug heat.",
    fullDetails: "What to do: Morning commute, coolest hours of the day.\n\nGetting to next stop: arrive ~08:45 · JR to Shinjuku (~35 min) + walk ~10 min to Gyoen's Shinjuku Gate.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },
  {
    day: "2026-08-18", dayLabel: "Aug 18 · Tue — Day 3: Shinjuku",
    start: "08:45", end: "10:15",
    title: "Shinjuku Gyoen Gardens",
    address: "11 Naitomachi, Shinjuku-ku 160-0014",
    notes: "Gardens stroll (open Tue; closed Mondays) — coolest part of the day.",
    fullDetails: "Hours: 9am–5:30pm. Best entrance time in August is 9 AM, ticket ¥500. Includes Japanese gardens, French formal gardens, English landscape lawns.\n\nWhat to do: Gardens stroll in regular clothes (open Tue; closed Mondays) — coolest part of the day, no kimono restrictions. Nearby (Western/pizza/fast-food): Shake Shack (Southern Terrace) · J.S. Burgers Cafe · Lotteria (Odakyu Ace).\n\nGetting to next stop: 10:15–10:35 · walk ~15–20 min to VASARA Kimono Rental Shinjuku-Ekimae.",
    lat: 35.6851, lng: 139.7095,
    zone: "shinjuku"
  },
  {
    day: "2026-08-18", dayLabel: "Aug 18 · Tue — Day 3: Shinjuku",
    start: "10:35", end: "11:00",
    title: "VASARA Kimono Rental",
    address: "Nishishinjuku, Shinjuku-ku (near Shinjuku Stn)",
    notes: "Indoor kimono dressing + hair styling.",
    fullDetails: "✓ highly rated — Tripadvisor top-5 Shinjuku gear rentals, reviews praise staff as professional and efficient.\n\nWhat to do: Indoor kimono dressing + hair styling.\n\nGetting to next stop: photo shoot begins on-site / nearby, no travel needed.",
    lat: 35.69274, lng: 139.69789,
    zone: "shinjuku"
  },
  {
    day: "2026-08-18", dayLabel: "Aug 18 · Tue — Day 3: Shinjuku",
    start: "11:00", end: "12:00",
    title: "Kimono Photo Shoot",
    address: "Near VASARA / Shinjuku Station area",
    notes: "~1hr / 50 photos with photographer, urban backdrops.",
    fullDetails: "What to do: ~1hr / 50 photos with photographer, urban backdrops. Brief outdoor exposure only — not full midday heat.\n\nGetting to next stop: 12:00–12:20 · return to VASARA, change back into regular clothes.",
    lat: 35.69274, lng: 139.69789,
    zone: "shinjuku"
  },
  {
    day: "2026-08-18", dayLabel: "Aug 18 · Tue — Day 3: Shinjuku",
    start: "12:20", end: "13:35",
    title: "Lunch — Halal Wagyu Ramen Shinjuku-tei",
    address: "3-11-6 Shinjuku, B103 Eclair Shinjuku, Shinjuku-ku 160-0022",
    notes: "A5 wagyu ramen (halal).",
    fullDetails: "✓ close. Options include wagyu burgers, steak hamburgers, halal ramen.\n\nWhat to do: A5 wagyu ramen (halal) — indoor, hottest part of day starting.\n\nGetting to next stop: 13:35–13:50 · walk ~5–10 min to Isetan.",
    lat: 35.69193, lng: 139.70639,
    zone: "shinjuku"
  },
  {
    day: "2026-08-18", dayLabel: "Aug 18 · Tue — Day 3: Shinjuku",
    start: "13:50", end: "16:30",
    title: "Isetan Shinjuku",
    address: "3-14-1 Shinjuku, Shinjuku-ku 160-0022",
    notes: "Luxury shopping & food halls (depachika): mochi, daifuku, fruit sandwiches, chocolates.",
    fullDetails: "Very expensive mall with luxury shopping and food halls. Famous food hall (depachika). Fresh mochi & daifuku (Wagashi): $2-$8. Fruit sandwiches (bread, cream, fruit), gourmet chocolates $5-$15 and cookies.\n\nWhat to do: Depachika sweets, souvenirs: Takashimaya food floors → cafe. Extended indoor block to cover hottest hours of the day. Nearby (Western/pizza/fast-food): Shake Shack (Southern Terrace) · J.S. Burgers Cafe · Lotteria (Odakyu Ace).\n\nGetting to next stop: 16:30–17:00 · walk ~15–20 min to Omoide Yokocho.",
    lat: 35.6916, lng: 139.7046,
    zone: "shinjuku"
  },
  {
    day: "2026-08-18", dayLabel: "Aug 18 · Tue — Day 3: Shinjuku",
    start: "17:00", end: "18:30",
    title: "Omoide Yokocho",
    address: "1-2 Nishishinjuku, Shinjuku-ku 160-0023",
    notes: "Dozens of tiny Izakaya-style eateries. Early dinner, old-Tokyo alley.",
    fullDetails: "Loud pubs; peak time is 6pm when the atmosphere is spectacular. Skewers ¥100–200, full dinner with drinks ¥2,000–3,000. Best at 4–5:30pm (no wait) or 6–8pm (peak atmosphere). Cash only at most places.\n\nWhat to do: Early dinner, old-Tokyo alley, heat easing as sun lowers.\n\nGetting to next stop: 18:30–18:45 · walk ~8 min to Kabukicho.",
    lat: 35.6933, lng: 139.6996,
    zone: "shinjuku"
  },
  {
    day: "2026-08-18", dayLabel: "Aug 18 · Tue — Day 3: Shinjuku",
    start: "18:45", end: "20:15",
    title: "Kabukicho / Golden Gai",
    address: "1-chome Kabukicho, Shinjuku-ku 160-0021",
    notes: "Neon streets, Godzilla head, nightlife — evening, cooler outdoors.",
    fullDetails: "Kabukicho (modern; nightlife for adults, tourist-oriented) OR Golden Gai (old-school, narrow alley, tiny bars, 5-8 person seating). Golden Gai is a 5–10 min walk from Omoide Yokocho — a warren of ~200 tiny atmospheric bars. More memorable old-Tokyo nightlife than Kabukicho's neon tourist strip.\n\nWhat to do: Neon streets, Godzilla head, nightlife — evening, cooler outdoors. Nearby (Western/pizza/fast-food): Shake Shack (Southern Terrace) · J.S. Burgers Cafe · Lotteria (Odakyu Ace).\n\nGetting to next stop: 20:15–20:50 · JR Yamanote Line Shinjuku → Okachimachi (~35 min) → hotel.",
    lat: 35.694, lng: 139.7047,
    zone: "shinjuku"
  },
  {
    day: "2026-08-18", dayLabel: "Aug 18 · Tue — Day 3: Shinjuku",
    start: "20:50", end: "21:30",
    title: "Back to hotel",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Rest.",
    fullDetails: "What to do: Rest.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },

  // ===== Aug 19 (Wed) — Day 4 Option A (clear-weather): Kamakura, ends at Yuigahama Beach =====
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura", dayVariant: "A-clear",
    start: "07:30", end: "09:10",
    title: "Hotel → Kamakura",
    address: "JR Okachimachi → Tokyo → Yokosuka Line → Kamakura",
    notes: "Grab a snack at the Tokyo Stn transfer.",
    fullDetails: "What to do: Grab a snack at the Tokyo Stn transfer.\n\nGetting to next stop: arrive ~09:10 · JR Okachimachi → Tokyo (~8 min) + Yokosuka Line → Kamakura (~55 min); walk to Komachi.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura", dayVariant: "A-clear",
    start: "09:10", end: "10:15",
    title: "Komachi Street",
    address: "Komachi, Kamakura 248-0006",
    notes: "Open market; street snack paradise.",
    fullDetails: "Open market; street snack paradise.\n\nWhat to do: Snacks, shops (quieter early). Nearby (Western/pizza/fast-food): DRAGON BURGER (Komachi) · Garden House Kamakura · BRISKSTAND Kamakura.\n\nGetting to next stop: 10:15–10:25 · walk ~10 min to Tsurugaoka Hachimangu.",
    lat: 35.3208, lng: 139.552,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura", dayVariant: "A-clear",
    start: "10:25", end: "11:20",
    title: "Tsurugaoka Hachimangu",
    address: "2-1-31 Yukinoshita, Kamakura 248-0005",
    notes: "Main shrine, grounds; avoid staying too long in midday sun.",
    fullDetails: "What to do: Main shrine, grounds; avoid staying too long in midday sun. Nearby (Western/pizza/fast-food): DRAGON BURGER (Komachi) · Garden House Kamakura · BRISKSTAND Kamakura.\n\nGetting to next stop: 11:20–12:30 · walk ~10 min back toward Kamakura Stn.",
    lat: 35.3261, lng: 139.5564,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura", dayVariant: "A-clear",
    start: "12:30", end: "13:30",
    title: "Lunch — Komachi / Station",
    address: "Komachi / Kamakura Stn",
    notes: "✓ close. Halal / veg-friendly options; choose indoor seating, hydrate.",
    fullDetails: "What to do: Halal / veg-friendly options; choose indoor seating; hydrate before afternoon sightseeing.\n\nGetting to next stop: 13:30–13:45 · Kamakura Stn → Enoden → Hase (~5 min ride + wait); dessert.",
    lat: 35.319, lng: 139.5504,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura", dayVariant: "A-clear",
    start: "13:45", end: "14:50",
    title: "Hasedera Temple",
    address: "3-11-2 Hase, Kamakura 248-0016",
    notes: "Gardens, sea-view terrace, large wooden Kannon Statue.",
    fullDetails: "What to do: Gardens, sea-view terrace, large wooden Kannon Statue (temple).\n\nGetting to next stop: 14:50–15:00 · walk ~5 min to Kotoku-in.",
    lat: 35.3125, lng: 139.5333,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura", dayVariant: "A-clear",
    start: "15:00", end: "15:40",
    title: "Kotoku-in (Great Buddha)",
    address: "4-2-28 Hase, Kamakura 248-0016",
    notes: "Giant bronze Buddha from the 13th century.",
    fullDetails: "What to do: Giant bronze Buddha (13th century).\n\nGetting to next stop: 15:40–16:30 · walk ~10 min south to the coast; café/rest nearby recommended in August.",
    lat: 35.3168, lng: 139.5357,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura", dayVariant: "A-clear",
    start: "16:30", end: "17:45",
    title: "Yuigahama Beach",
    address: "Yuigahama, Kamakura 248-0014",
    notes: "Coast, sunset walk.",
    fullDetails: "What to do: Coast, sunset walk. Nearby (Western/pizza/fast-food): Good Mellows (Yuigahama, burgers).\n\nGetting to next stop: 17:45–~19:15 · Enoden → Kamakura → JR → Tokyo → hotel (~1h 30m).",
    lat: 35.3131, lng: 139.5453,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura", dayVariant: "A-clear",
    start: "19:15", end: "19:45",
    title: "Back to hotel",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Rest.",
    fullDetails: "What to do: Rest.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },

  // ===== Aug 19 (Wed) — Day 4 Option A (rainy-day alternate): Kamakura, ends at Café/Hase =====
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura (rainy-day plan)", dayVariant: "A-rainy",
    start: "07:30", end: "09:10",
    title: "Hotel → Kamakura",
    address: "JR Okachimachi → Tokyo → Yokosuka Line → Kamakura",
    notes: "Bring umbrella/rain jacket; grab snack at Tokyo Station.",
    fullDetails: "What to do: Bring umbrella/rain jacket; grab snack at Tokyo Station.\n\nGetting to next stop: JR Okachimachi → Tokyo (~8 min) + Yokosuka Line → Kamakura (~55 min).",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura (rainy-day plan)", dayVariant: "A-rainy",
    start: "09:10", end: "10:00",
    title: "Komachi Street",
    address: "Komachi, Kamakura 248-0006",
    notes: "Short visit; browse covered shops, snacks, souvenirs.",
    fullDetails: "What to do: Short visit; browse covered shops, snacks, souvenirs.\n\nGetting to next stop: 10:00–10:10 · walk to Tsurugaoka Hachimangu.",
    lat: 35.3208, lng: 139.552,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura (rainy-day plan)", dayVariant: "A-rainy",
    start: "10:10", end: "11:20",
    title: "Tsurugaoka Hachimangu",
    address: "Yukinoshita, Kamakura",
    notes: "Rainy shrine atmosphere is excellent; take care on stone paths.",
    fullDetails: "What to do: Rainy shrine atmosphere is excellent; take care on stone paths.\n\nGetting to next stop: 11:20–12:30 · lunch nearby.",
    lat: 35.3261, lng: 139.5564,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura (rainy-day plan)", dayVariant: "A-rainy",
    start: "11:20", end: "13:30",
    title: "Lunch + warm break",
    address: "Komachi / Kamakura Station",
    notes: "Good time to escape rain and dry off.",
    fullDetails: "What to do: Good time to escape rain and dry off.\n\nGetting to next stop: 13:30–13:45 · Enoden → Hase.",
    lat: 35.319, lng: 139.5504,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura (rainy-day plan)", dayVariant: "A-rainy",
    start: "13:45", end: "15:15",
    title: "Hasedera Temple",
    address: "Hase, Kamakura",
    notes: "Best rainy-day stop: gardens, Kannon statue, moss, covered areas.",
    fullDetails: "What to do: Best rainy-day stop: gardens, Kannon statue, moss, covered areas.\n\nGetting to next stop: 15:15–15:25 · walk to Kotoku-in.",
    lat: 35.3125, lng: 139.5333,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura (rainy-day plan)", dayVariant: "A-rainy",
    start: "15:25", end: "16:00",
    title: "Kotoku-in (Great Buddha)",
    address: "Hase, Kamakura",
    notes: "Short visit; Buddha looks dramatic in rain.",
    fullDetails: "What to do: Short visit; Buddha looks dramatic in rain.\n\nGetting to next stop: 16:00 onward · café/rest or return.",
    lat: 35.3168, lng: 139.5357,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura (rainy-day plan)", dayVariant: "A-rainy",
    start: "16:00", end: "17:00",
    title: "Café / Hase area",
    address: "Hase, Kamakura",
    notes: "Avoid walking around wet streets unnecessarily.",
    fullDetails: "What to do: Avoid walking around wet streets unnecessarily.\n\nGetting to next stop: Enoden → Kamakura → JR → Tokyo.",
    lat: 35.3125, lng: 139.5333,
    zone: "kamakura"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Kamakura (rainy-day plan)", dayVariant: "A-rainy",
    start: "18:30", end: "19:00",
    title: "Back to hotel",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Earlier return recommended.",
    fullDetails: "What to do: Rest. Earlier return recommended given rain-day pacing.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },

  // ===== Aug 19 (Wed) — Day 4 Option B: Karuizawa =====
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "07:45", end: "08:15",
    title: "Hotel → Ueno Station",
    address: "Ueno Station, Taito-ku",
    notes: "Walk ~12 min; breakfast/coffee at Ueno Station (ecute).",
    fullDetails: "What to do: Walk ~12 min; breakfast / coffee at Ueno Station (ecute).\n\nGetting to next stop: 08:25–09:35 · Hokuriku Shinkansen (Asama) Ueno → Karuizawa (~70 min) — reserve seats for August (~¥6,000 each way).",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "08:25", end: "09:35",
    title: "Hokuriku Shinkansen → Karuizawa",
    address: "Ueno → Karuizawa (~70 min)",
    notes: "Reserve seats for August (~¥6,000 each way).",
    fullDetails: "What to do: Ride the Hokuriku Shinkansen (Asama) from Ueno.\n\nGetting to next stop: arrive Karuizawa Station ~09:35.",
    lat: 36.3426, lng: 138.6352,
    zone: "karuizawa"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "09:35", end: "10:00",
    title: "Karuizawa Station",
    address: "Karuizawa, Kitasaku District, Nagano 389-0102",
    notes: "Arrive; coffee, transfer to Shinano Railway or rent e-bikes.",
    fullDetails: "Town is flat & bike-friendly.\n\nWhat to do: Arrive; coffee, transfer to Shinano Railway (or rent e-bikes).\n\nGetting to next stop: 10:00–10:15 (planned) · Shinano Railway → Shinano-Oiwake + walk. Note: real walk from Shinano-Oiwake Stn to Oiwake-juku is ~30 min each way, not 12 min as originally planned.",
    lat: 36.3426, lng: 138.6352,
    zone: "karuizawa"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "10:10", end: "12:20",
    title: "Oiwake-juku (old post town)",
    address: "Oiwake, Karuizawa (nr Shinano-Oiwake Stn)",
    notes: "Edo-period post town — preserved teahouse, museum, old street.",
    fullDetails: "Oiwake-juku Hometown Museum ticket price is 400 Yen. Oiwake-juku Post is the 20th post of 69 on the Nakasendo Way from Tokyo to Kyoto.\n\nWhat to do: Edo-period post town — preserved teahouse, Oiwake-juku township museum, old street.\n\nGetting to next stop: back toward Naka-Karuizawa. Realistic timing: Shinano Railway to Shinano-Oiwake (~10 min) + ~30 min walk each way (not 12 min as in the original plan) — budget ~70 min just for transit. Options for the last leg: walk, the Karuizawa Loop Bus (west route passes near Oiwake, but confirm schedule day-of — may be infrequent), or pre-call a taxi (station is unattended, no taxi rank).",
    lat: 36.3414, lng: 138.5475,
    zone: "karuizawa"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "12:30", end: "13:45",
    title: "Harunire Terrace — lunch",
    address: "Hoshino Area, Nagakura, Karuizawa (nr Naka-Karuizawa Stn)",
    notes: "Riverside wooden café / shop terrace in the forest.",
    fullDetails: "What to do: Riverside wooden café / shop terrace in the forest; lunch (indoor / shaded).\n\nGetting to next stop: to Lake Shiozawa / Taliesin side.",
    lat: 36.3594, lng: 138.5904,
    zone: "karuizawa"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "14:00", end: "14:30",
    title: "Karuizawa Taliesin",
    address: "217 Nagakura, Karuizawa (Lake Shiozawa)",
    notes: "Lakeside park with relocated historic villas & small museums.",
    fullDetails: "~3.5km from Kumoba Pond/Kyu-Karuizawa area — best reached by bus/taxi, not on foot (original doc combined this with Kumoba Pond as one stop, but the two locations are geographically distant and have been split for accuracy).\n\nWhat to do: Lakeside park with relocated historic villas & small museums; shaded pond walk.\n\nGetting to next stop: toward Kumoba Pond / Kyu-Karuizawa Ginza.",
    lat: 36.3285, lng: 138.5969,
    zone: "karuizawa"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "15:00", end: "15:30",
    title: "Kumoba Pond",
    address: "Karuizawa (Kumoba Pond, ~20 min walk N of Karuizawa Stn)",
    notes: "Scenic pond walk, known as 'Karuizawa's Lake Louise' for its reflections.",
    fullDetails: "Close to Kyu-Karuizawa Ginza on foot.\n\nWhat to do: Shaded pond walk; scenic reflections of surrounding forest.\n\nGetting to next stop: to Kyu-Karuizawa Ginza (short walk).",
    lat: 36.3507, lng: 138.6268,
    zone: "karuizawa"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "15:45", end: "17:00",
    title: "Kyu-Karuizawa Ginza (Old Karuizawa)",
    address: "Karuizawa, Kitasaku District, Nagano 389-0102",
    notes: "Retro resort street — cafés, sweets, boutiques.",
    fullDetails: "Former Mikasa Hotel nearby — verify reopened after restoration.\n\nWhat to do: Retro resort street — cafés, sweets, boutiques.\n\nGetting to next stop: 16:45–17:10 (planned) · walk / bus back to Karuizawa Station.",
    lat: 36.3592, lng: 138.6355,
    zone: "karuizawa"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "17:25", end: "18:10",
    title: "Karuizawa Prince Shopping Plaza",
    address: "1178 Karuizawa (at station south exit)",
    notes: "Big AC outlet mall by the station — shopping; dinner options.",
    fullDetails: "Swap option: skip for Shiraito Falls if you prefer nature.\n\nWhat to do: Big AC outlet mall by the station — shopping; dinner options.\n\nGetting to next stop: ~18:10–19:20 (planned) · Hokuriku Shinkansen → Ueno → hotel.",
    lat: 36.3392, lng: 138.6331,
    zone: "karuizawa"
  },
  {
    day: "2026-08-19", dayLabel: "Aug 19 · Wed — Day 4: Karuizawa", dayVariant: "B",
    start: "19:55", end: "20:25",
    title: "Back to hotel",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Rest.",
    fullDetails: "What to do: Rest.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },

  // ===== Aug 20 (Thu) — Day 5: teamLab & Odaiba =====
  {
    day: "2026-08-20", dayLabel: "Aug 20 · Thu — Day 5: teamLab & Odaiba",
    start: "07:45", end: "08:50",
    title: "Hotel → Shin-Toyosu",
    address: "JR + Metro Yurakucho Line → Toyosu → Yurikamome → Shin-Toyosu",
    notes: "Leave hotel by ~07:45 for the 09:00 teamLab slot.",
    fullDetails: "What to do: Leave hotel by ~07:45 for the 09:00 slot.\n\nGetting to next stop: arrive ~08:50 · JR + Metro Yurakucho Line → Toyosu, then Yurikamome 1 stop → Shin-Toyosu (~45 min ride + buffer); teamLab 1 min walk.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  },
  {
    day: "2026-08-20", dayLabel: "Aug 20 · Thu — Day 5: teamLab & Odaiba",
    start: "09:00", end: "11:00",
    title: "teamLab Planets",
    address: "6-1-16 Toyosu, Koto-ku 135-0061",
    notes: "Immersive digital art (barefoot). Book ahead. Wear suitable clothes for wading in water.",
    fullDetails: "Book ahead — timed entry.\n\nWhat to do: Immersive digital art (barefoot). Wear suitable clothes for wading in water — shorts can be bought there if needed. Nearby (Western/pizza/fast-food): Freshness Burger (Lalaport) · Bubba Gump Shrimp (Lalaport Toyosu; American-style seafood, large portions) · J.S. Foodies (Lalaport).\n\nGetting to next stop: 11:00–11:20 · walk ~10 min (or Yurikamome 1 stop) to Lalaport.",
    lat: 35.6491, lng: 139.7895,
    zone: "toyosu"
  },
  {
    day: "2026-08-20", dayLabel: "Aug 20 · Thu — Day 5: teamLab & Odaiba",
    start: "11:20", end: "12:30",
    title: "Lunch — Lalaport Toyosu",
    address: "2-4-9 Toyosu, Koto-ku 135-0061",
    notes: "Halal / muslim-friendly options + dessert.",
    fullDetails: "✓ close.\n\nWhat to do: Halal / muslim-friendly options + dessert.\n\nGetting to next stop: 12:30–13:00 · Yurikamome (scenic): Toyosu → Odaiba (~20 min).",
    lat: 35.6555, lng: 139.7931,
    zone: "toyosu"
  },
  {
    day: "2026-08-20", dayLabel: "Aug 20 · Thu — Day 5: teamLab & Odaiba",
    start: "13:00", end: "17:00",
    title: "Odaiba (DiverCity / Aqua City)",
    address: "1-1-10 Aomi, Koto-ku 135-0064",
    notes: "DiverCity Plaza/Gundam, Aqua City mall, seaside. Gundam performances at 11/13/15/17:00.",
    fullDetails: "An artificial island and popular entertainment district; driverless train, shopping malls. In Aqua City: crepes, pancakes, parfaits, specialty chocolates and seasonal desserts.\n\nWhat to do: DiverCity Plaza/Gundam, Aqua City (large waterfront mall), seaside, malls (extra hour here keeps Rainbow Bridge after dark — not very important). Nearby (Western/pizza/fast-food): KUA'AINA (Aqua City 4F) · Wendy's First Kitchen (Aqua City food court) · DiverCity food court (burgers/pasta). The 'UNICORN GUNDAM TRANSFORMATION' daytime performances take place at 11:00, 13:00, 15:00, and 17:00 (~1 min, no wall projection), while the night 'WALL-G' projection shows run at 19:00, 19:30, 20:00, 20:30, 21:00, and 21:30.\n\nGetting to next stop: 17:00–17:15 · walk ~10 min to Aqua City.",
    lat: 35.6252, lng: 139.7756,
    zone: "odaiba"
  },
  {
    day: "2026-08-20", dayLabel: "Aug 20 · Thu — Day 5: teamLab & Odaiba",
    start: "17:15", end: "18:30",
    title: "Dinner — Aqua City Odaiba / Shandiz",
    address: "1-7-1 Daiba, Minato-ku 135-0091",
    notes: "Muslim-friendly Asian/Indian options + bay views, or Shandiz at Shimbashi.",
    fullDetails: "Shandiz restaurant alternative: Address 5 Chome-20-1 Shinbashi, Minato City, Tokyo 105-0004. Phone: +81 3-6699-9082. Hours: 11 AM–11 PM. ~15 min from Odaiba on the way back to hotel via Shimbashi.\n\nWhat to do: Muslim-friendly Asian/Indian options + bay views, or dine at Shandiz on the return route.\n\nGetting to next stop: 18:30–18:50 · walk ~10 min to Odaiba Seaside Park.",
    lat: 35.6278, lng: 139.7735,
    zone: "odaiba"
  },
  {
    day: "2026-08-20", dayLabel: "Aug 20 · Thu — Day 5: teamLab & Odaiba",
    start: "18:50", end: "19:45",
    title: "Rainbow Bridge",
    address: "Odaiba Seaside Park, 1-4 Daiba, Minato-ku",
    notes: "Night photo spot, illuminations.",
    fullDetails: "What to do: Night photo spot, illuminations.\n\nGetting to next stop: 19:45–~20:30 · Yurikamome → Shimbashi → JR Yamanote → Okachimachi (~45 min) → hotel.",
    lat: 35.6308, lng: 139.7766,
    zone: "odaiba"
  },
  {
    day: "2026-08-20", dayLabel: "Aug 20 · Thu — Day 5: teamLab & Odaiba",
    start: "20:30", end: "21:15",
    title: "Back to hotel",
    address: "3-41-7 Taito, Taito-ku, Tokyo 110-0016",
    notes: "Rest. End of trip itinerary.",
    fullDetails: "What to do: Rest. End of trip itinerary.",
    lat: 35.70547, lng: 139.77638,
    zone: "hotel"
  }
];
