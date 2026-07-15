// Reference content extracted from the trip planning doc (non-itinerary sections):
// packing, food guides, halal info, coffee shops, tax-free shopping, general notes.

const REFERENCE = {
  packing: {
    title: "Packing Reminders",
    icon: "🎒",
    items: [
      "Wet towel (for cooling down in the heat)",
      "Non-icy water or a drink",
      "Hat",
      "Sunscreen",
      "Passport (for tax-free shopping & ID)"
    ]
  },

  heatTips: {
    title: "Heat & Humidity Tips",
    icon: "🌡️",
    body: [
      "Tokyo in August runs ~31–35°C with high humidity, so it \"feels\" hotter and heatstroke is a real risk.",
      "Hydrate constantly — konbini & vending machines are everywhere.",
      "Carry electrolyte drinks (Pocari Sweat / Aquarius).",
      "Pack a hat, sunscreen, a cooling towel, a portable fan, and a compact umbrella (sun + sudden rain).",
      "Watch the forecast for late-August typhoons — if one hits, swap in an indoor-heavy day (Shinjuku or Odaiba).",
      "The Day 2 (Ueno/Asakusa) midday hotel break is the main heat safeguard; do the same informally on other days when you can."
    ]
  },

  breakfast: {
    title: "Breakfast & Konbini Guide",
    icon: "🍙",
    body: [
      "Most restaurants open ~11 AM, but convenience stores (konbini) like 7-Eleven, FamilyMart, and Lawson are open 24/7.",
      "Hotel breakfast: 6:30 AM–10:00 AM (last entrance/order 9:30).",
      "Coffee chains (Doutor, Komeda's Coffee) open ~7 AM until ~6:45 PM."
    ],
    sections: [
      {
        heading: "Konbini bento boxes (heat-in-store, ask: \"Atatamete kudasai\" 温めてください)",
        list: [
          "Karaage (fried chicken) bento – rice, fried chicken, pickles, vegetables",
          "Pork katsu curry – crispy pork cutlet with curry",
          "Hamburg steak bento – Japanese-style hamburger steak with rice",
          "Grilled salmon bento",
          "Beef yakiniku bento – thinly sliced grilled beef over rice",
          "Bibimbap / Korean-inspired bowls",
          "Seasonal & regional specials (FamilyMart rotates limited-time bentos)"
        ]
      },
      {
        heading: "Konbini breakfast staples",
        list: [
          "Onigiri (rice balls) – tuna mayo, salmon, pickled plum",
          "Sandwiches – egg, ham & cheese, Japanese-style fruit sandwiches",
          "Salads / yogurt",
          "Hot coffee / tea / milk",
          "Pastries – sweet buns, croissants, melon pan"
        ]
      },
      {
        heading: "Top 7-Eleven sandwiches",
        list: [
          "Tamago Sando (Egg Salad) – the most famous, creamy egg sandwich",
          "Fruit Sandwiches – whipped cream with strawberries, oranges, or kiwi",
          "Tonkatsu Sandwich – fried pork cutlet",
          "Chicken & Egg with Teriyaki Sauce (NOT halal)",
          "Price: ~¥230–¥300 for staple sandwiches; soft bread with crusts removed; fresh multiple daily deliveries"
        ]
      },
      {
        heading: "Early-opener breakfast spots near hotel (Ueno–Okachimachi)",
        list: [
          "Motocho (from 6:00)",
          "Cafe Lapin (from 7:00, toast/croissant sets)",
          "Keys Cafe Akihabara SEEKBASE (from 7:00)",
          "NOHGA Hotel Ueno bistro (breakfast 7:00–10:30)",
          "Chains: Doutor, St. Marc Café, McDonald's (~7:00)",
          "Grab-and-go: 7-Eleven (2-3 min walk), Lawson (3-5 min), FamilyMart (5-7 min) — all 24h",
          "Ueno Station (ecute/atre) bakeries & cafés from ~7:00"
        ]
      },
      {
        heading: "Day-specific breakfast notes (early starts)",
        list: [
          "Day 1 (leave 08:20): grab-and-go near hotel or at station",
          "Day 2 · Asakusa (leave 07:45): Fuglen Asakusa opens 8:00 (coffee + brown-cheese waffles)",
          "Day 4 · Kamakura (leave 07:30, via Tokyo Stn): GranSta / ecute Tokyo bakeries & konbini at the transfer",
          "Day 5 · Toyosu (leave 07:45): Lalaport opens ~10:00 (too late) — eat near hotel or grab konbini/Doutor by Toyosu Stn"
        ]
      }
    ],
    halalNote: "Early halal breakfast is scarce — konbini fruit/yogurt/plain bread, or your hotel's breakfast (check if included), are the easiest muslim-friendly starts."
  },

  halalFood: {
    title: "Halal Food Guide",
    icon: "🕌",
    intro: "Verify current status & hours on the Halal Navi or Halal Gourmet Japan apps — certification can change.",
    byArea: [
      {
        area: "Near hotel · Ueno–Okachimachi (Day 0 & Day 2)",
        zones: ["hotel", "ueno"],
        options: "Sankyu Halal Ramen Ueno · Halal Wagyu Ramen Shinjuku-tei (Ueno Park branch, 3-45-10 Yushima). Okachimachi Mosque nearby for prayer."
      },
      {
        area: "Akihabara (Day 0)",
        zones: ["akihabara"],
        options: "Honolulu Grande Akihabara (halal burgers/plates)."
      },
      {
        area: "Asakusa (Day 2)",
        zones: ["asakusa"],
        options: "Naritaya Halal Ramen (chicken ramen, by Senso-ji) · Asakusa Sushi Ken (halal-certified sushi) · LUXE Burgers Asakusa. Asakusa Mosque nearby."
      },
      {
        area: "Harajuku (Day 1)",
        zones: ["harajuku"],
        options: "Chicken Over Rice food truck (certified halal, behind Tokyu Plaza Harajuku)."
      },
      {
        area: "Shibuya (Day 1)",
        zones: ["shibuya"],
        options: "Halal Master Chicken (lunch stop) · Halal Wagyu Ramen Shinjuku-tei (Shibuya branch) · halal outlet on Shibuya PARCO 7F. Tokyo Camii (Japan's largest mosque, Yoyogi-Uehara) has a halal market."
      },
      {
        area: "Shinjuku (Day 3)",
        zones: ["shinjuku"],
        options: "Halal Wagyu Ramen Shinjuku-tei (Shinjuku branch, lunch stop). Big halal cluster one stop north at Shin-Okubo: Nasco Food Court, Salsina Halal Foods, Jannat Halal Food (Indian/Pakistani/Turkish)."
      },
      {
        area: "Kamakura (Day 4)",
        zones: ["kamakura"],
        options: "Very limited halal — lean on seafood (shirasu) / vegetarian, or pack halal snacks; check Halal Navi before the trip."
      },
      {
        area: "Odaiba / Toyosu (Day 5)",
        zones: ["toyosu", "odaiba"],
        options: "Few certified spots on the island; Chandrama (halal Indian) at Shimbashi Stn — right on the Yurikamome return. Check Lalaport Toyosu & Aqua City food directories for muslim-friendly outlets."
      }
    ]
  },

  coffeeShops: {
    title: "Coffee Shops by Area",
    icon: "☕",
    byArea: [
      { area: "Ueno / Yanaka (near hotel)", zones: ["hotel", "ueno"], options: "Kayaba Coffee (historic 1938 kissaten, Yanaka) · Cafe Lapin. Chains: Starbucks (Ueno Park/atre), Doutor." },
      { area: "Asakusa (Day 2)", zones: ["asakusa"], options: "Fuglen Asakusa (Norwegian light roasts, brown-cheese waffles, from 8:00) + many retro kissaten." },
      { area: "Harajuku / Omotesando (Day 1)", zones: ["harajuku"], options: "Blue Bottle Coffee (Aoyama, by Omotesando) · Streamer Coffee (Harajuku) · Bread, Espresso & (Omotesando)." },
      { area: "Shibuya (Day 1)", zones: ["shibuya"], options: "About Life Coffee Brewers (Dogenzaka) · Blue Bottle Shibuya · Chatei Hatou (classic kissaten)." },
      { area: "Shinjuku (Day 3)", zones: ["shinjuku"], options: "Blue Bottle Coffee (NEWoMan Shinjuku) · Brooklyn Parlor." },
      { area: "Kamakura (Day 4)", zones: ["kamakura"], options: "Café Vivement Dimanche (Komachi, renowned roaster, ~5 min from station) · Iwata Coffee Shop (retro) · OXYMORON komachi." },
      { area: "Skytree / Toyosu / Odaiba", zones: ["toyosu", "odaiba"], options: "Mostly chains — Starbucks in Solamachi, Lalaport Toyosu & Aqua City." }
    ],
    note: "Everywhere: Starbucks, Doutor, Tully's, Excelsior & Komeda's are abundant."
  },

  foodToTry: {
    title: "Food & Snacks to Try",
    icon: "🍡",
    sections: [
      {
        heading: "Japanese bubble teas",
        zones: ["harajuku", "shibuya", "shinjuku"],
        list: ["Matcha", "Hojicha (roasted green tea)", "Sakura (cherry blossom)", "Yuzu (lemon/mandarin/grapefruit mix)", "Black sesame"]
      },
      {
        heading: "Traditional sweets & street snacks near Sensoji (Ameya-Yokocho Market)",
        zones: ["ueno", "asakusa"],
        list: [
          "Ningyo-yaki (small cake with red bean paste)",
          "Kibi dango (sweet rice dumplings)",
          "Rice crackers and seasonal snacks",
          "Senbei (rice crackers)",
          "Takoyaki (octopus balls) — haram, no scale on octopus",
          "Candied fruits, sweet mochi, dorayaki (pancake patties with sweet azuki bean paste)"
        ]
      },
      {
        heading: "Food around Ueno (recommended)",
        zones: ["ueno"],
        list: [
          "Ramen Kamo (Duck Ramen) with Negi (Japanese green onions)",
          "Yansando Ueno Honten — 4.1★ Yakiniku, high-quality Japanese Wagyu, table-grilled",
          "Minatoya Okonomiyaki — savory pancake with cabbage/pork/shrimp/squid/cheese/mochi",
          "Negishi Beef — 4.6★, charcoal-grilled beef tongue set meal with barley rice & oxtail soup"
        ]
      },
      {
        heading: "Dessert near Ueno",
        zones: ["ueno"],
        list: [
          "Usagi-ya Café",
          "Domremy outlet Ueno Station — 4.2★, puffy cakes, 11 AM–8 PM"
        ]
      },
      {
        heading: "Restaurants & Food in Kamakura (Komachi Street)",
        zones: ["kamakura"],
        list: [
          "Giraffa — curry buns + cheese, etc.",
          "Kokoriko — Halal Korean fried chicken",
          "Toshimaya Honten — Japanese confectionery, 4.2★, 9 AM–4 PM (closed Mondays)",
          "Kamakama Honten — seafood",
          "Kamakura Cha Cha — soft-serve ice cream, matcha specialty (Mild/Premium) + matcha gelato, 10 AM–5:45 PM"
        ]
      },
      {
        heading: "Omoide Yokocho specialties (Day 3)",
        zones: ["shinjuku"],
        list: [
          "Yakitori (chicken-focused)",
          "Beef tongue skewers (牛タン串 / gyūtan) — very common",
          "Beef short rib/skirt steak skewers (牛カルビ串 / 牛ハラミ串)",
          "Beef offal skewers (牛ホルモン串) — classic Omoide Yokocho style",
          "Tip: say \"牛串だけでも大丈夫ですか？\" (Gyū-kushi dake demo daijōbu desu ka?) = \"Is it okay if I only order beef skewers?\"",
          "A good beef-focused choice: あぶり清水 新宿思い出横丁店"
        ]
      }
    ]
  },

  shoppingTips: {
    title: "Shopping Tips",
    icon: "🛍️",
    sections: [
      {
        heading: "Uniqlo / GU / Ameyoko",
        zones: ["ueno"],
        list: [
          "First go to GU (upper floor), then Uniqlo, then Ameyoko.",
          "6 min from hotel; UNIQLO is right in front of Okachimachi Station, GU in the same building.",
          "Located in: Okachimachi Yoshiike Main Store Building, 10 AM–9 PM"
        ]
      },
      {
        heading: "Tax-free refunds",
        zones: [],
        list: [
          "Must be processed the SAME DAY of purchase at the store where bought — cannot claim at the airport after leaving the store. Usually applies when purchase is over ~¥5,000.",
          "Method A (Immediate Deduction): Gather items → present passport & payment at tax-free register → tax deducted immediately, pay tax-free total.",
          "Method B (Centralized Refund Counter, most common): Pay full price with tax → take receipts + items + passport + credit card to the store's Tax Refund Counter (often top floor or basement) → ensure passport name matches credit card name exactly.",
          "Collect Cash or Credit: choose immediate JPY cash refund, or credit back to your card/digital wallet."
        ]
      },
      {
        heading: "Snack shopping timing",
        zones: [],
        list: [
          "For Tokyo-wide snacks, no need to buy early — most famous snacks are available at the airport too.",
          "For regional-limited snacks (e.g. Kamakura-exclusive editions), buy them while there since they may not be available elsewhere."
        ]
      }
    ]
  },

  extraSpots: {
    title: "Extra / Optional Spots",
    icon: "✨",
    items: [
      {
        name: "Imperial Palace East Gardens",
        zones: ["kamakura"],
        detail: "Near Tokyo Station (on the Kamakura route). Could visit ~08:00–08:45 before the Day 4 train, but gardens are closed Mondays & Fridays, and adding it makes Day 4 rushed. Easiest to skip or slot into a slower morning."
      },
      {
        name: "Yanaka Ginza",
        zones: ["hotel", "ueno"],
        detail: "A walking street with a traditional 1980s Japanese living-style atmosphere, right near Ueno. Can visit any time, even at night."
      },
      {
        name: "Golden Gai (instead of / before Kabukicho)",
        zones: ["shinjuku"],
        detail: "5–10 min walk from Omoide Yokocho — a warren of ~200 tiny atmospheric bars (0.5 sq km). More memorable old-Tokyo nightlife than the neon tourist strip of Kabukicho, and it's right in the Shinjuku cluster."
      },
      {
        name: "Persian dinner options",
        zones: ["shinjuku", "odaiba"],
        detail: "BOLBOL (Koenji — ~7 min by JR Chuo from Shinjuku, fits Day 3); SHANDIZ (5-20-1 Shinbashi, Minato-ku — on the Yurikamome return from Odaiba, ~15 min, fits Day 5)."
      }
    ]
  },

  generalNotes: {
    title: "General Notes",
    icon: "📝",
    items: [
      "Western/pizza/fast-food suggestions listed under stops are for reference only and are NOT halal-verified — check before dining if that matters.",
      "Transit windows throughout the itinerary are relaxed estimates — confirm exact departures in Google Maps or the Japan Transit Planner app on the day.",
      "Shinjuku Gyoen: best entrance time in August is 9 AM, ticket ¥500. Includes Japanese gardens, French formal gardens, English landscape lawns.",
      "Kappabashi (kitchenware street): only ~30% of shops open on Sundays — visiting on a Monday keeps it open."
    ]
  }
};

// ---- Zone → category index ----
// Precomputes, for each canonical zone tag, which of the four
// "nearby info" categories (halalFood, foodToTry, coffeeShops, extraSpots)
// have at least one matching entry. Used by the itinerary view to render
// inline icons on each stop without re-scanning REFERENCE at render time.
const ZONE_CATEGORIES = (function () {
  var index = {}; // zone -> { halalFood: bool, foodToTry: bool, coffeeShops: bool, extraSpots: bool }

  function mark(zone, key) {
    if (!index[zone]) index[zone] = {};
    index[zone][key] = true;
  }

  (REFERENCE.halalFood.byArea || []).forEach(function (a) {
    (a.zones || []).forEach(function (z) { mark(z, "halalFood"); });
  });
  (REFERENCE.coffeeShops.byArea || []).forEach(function (a) {
    (a.zones || []).forEach(function (z) { mark(z, "coffeeShops"); });
  });
  (REFERENCE.foodToTry.sections || []).forEach(function (s) {
    (s.zones || []).forEach(function (z) { mark(z, "foodToTry"); });
  });
  (REFERENCE.extraSpots.items || []).forEach(function (it) {
    (it.zones || []).forEach(function (z) { mark(z, "extraSpots"); });
  });

  return index;
})();
