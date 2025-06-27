// Country data with comprehensive information
const countryData = {
  palestine: {
    name: "Palestine",
    flag: "./flags/palestine.png",
    overview: `
            <h3>State of Palestine</h3>
            <p>Palestine is a region in Western Asia, situated between the Mediterranean Sea and the Jordan River. It holds profound historical, cultural, and religious significance for millions of people worldwide.</p>
            <p>The region encompasses the West Bank, Gaza Strip, and East Jerusalem, with a rich heritage spanning thousands of years. Palestine is home to some of the world's most sacred sites and has been a crossroads of civilizations throughout history.</p>
            <p><strong>Capital:</strong> East Jerusalem (claimed)<br>
            <strong>Population:</strong> Approximately 5.2 million<br>
            <strong>Languages:</strong> Arabic (official), Hebrew<br>
            <strong>Currency:</strong> Israeli Shekel, Jordanian Dinar</p>
        `,
    history: `
            <h3>Ancient Heritage</h3>
            <p>Palestine's history stretches back millennia, with archaeological evidence of human settlement dating to the Paleolithic period. The region has been home to Canaanites, Philistines, Israelites, and many other ancient peoples.</p>
            
            <h3>Islamic Period</h3>
            <p>Following the Islamic conquest in 636 CE, Palestine became an integral part of the Islamic world. The Dome of the Rock and Al-Aqsa Mosque were built in Jerusalem, making it the third holiest city in Islam.</p>
            
            <h3>Ottoman Era</h3>
            <p>Under Ottoman rule (1517-1917), Palestine was part of the Damascus province. This period saw relative stability and the development of local governance structures.</p>
            
            <h3>Modern Challenges</h3>
            <p>The 20th century brought significant changes with the British Mandate, the establishment of Israel in 1948, and ongoing conflicts that continue to shape the region today.</p>
        `,
    culture: `
            <h3>Rich Cultural Tapestry</h3>
            <p>Palestinian culture is a beautiful blend of Arab, Islamic, and Mediterranean influences, shaped by centuries of diverse civilizations and maintained through oral traditions, art, and community practices.</p>
            
            <h3>Arts and Crafts</h3>
            <p>Traditional Palestinian embroidery (tatreez) is renowned worldwide for its intricate patterns and vibrant colors. Each region has its distinctive style, telling stories through thread and fabric.</p>
            
            <h3>Music and Dance</h3>
            <p>Palestinian music features traditional instruments like the oud, qanun, and tabla. The dabke dance is a cornerstone of celebrations, bringing communities together in joyful expression.</p>
            
            <h3>Literature and Poetry</h3>
            <p>Palestinian literature, led by poets like Mahmoud Darwish and novelists like Ghassan Kanafani, has gained international recognition for its powerful expression of identity and resilience.</p>
        `,
    food: `
            <h3>Culinary Traditions</h3>
            <p>Palestinian cuisine reflects the region's agricultural abundance and cultural diversity, featuring fresh ingredients, aromatic spices, and time-honored cooking methods.</p>
            
            <h3>Signature Dishes</h3>
            <ul>
                <li><strong>Musakhan:</strong> Roasted chicken with sumac, onions, and pine nuts on taboon bread</li>
                <li><strong>Maqluba:</strong> Upside-down rice dish with meat and vegetables</li>
                <li><strong>Knafeh:</strong> Sweet cheese pastry from Nablus</li>
                <li><strong>Falafel:</strong> Deep-fried chickpea balls served with tahini</li>
                <li><strong>Hummus:</strong> Creamy chickpea dip with olive oil</li>
            </ul>
            
            <h3>Olive Oil Tradition</h3>
            <p>Palestinian olive oil is considered among the world's finest, with olive trees that are centuries old. The olive harvest is a cherished annual tradition that brings families and communities together.</p>
        `,
    books: `
            <h3>Essential Reading</h3>
            <p>These books offer deep insights into Palestinian history, culture, and contemporary experiences:</p>
            
            <ul>
                <li><strong>"The Question of Palestine" by Edward Said</strong> - A foundational text on Palestinian identity and politics</li>
                <li><strong>"Mornings in Jenin" by Susan Abulhawa</strong> - A powerful novel spanning four generations of a Palestinian family</li>
                <li><strong>"The Ethnic Cleansing of Palestine" by Ilan Pappé</strong> - Historical analysis of 1948 events</li>
                <li><strong>"Gaza Writes Back" edited by Refaat Alareer</strong> - Short stories from young Palestinian writers</li>
                <li><strong>"The Iron Cage" by Rashid Khalidi</strong> - Analysis of Palestinian political development</li>
                <li><strong>"Unfortunately, It Was Paradise" by Mahmoud Darwish</strong> - Poetry collection by Palestine's national poet</li>
            </ul>
        `,
    politics: `
            <h3>Political Landscape</h3>
            <p>Palestinian politics are complex, involving multiple governing bodies, international relations, and ongoing negotiations for statehood and self-determination.</p>
            
            <h3>Governing Bodies</h3>
            <p>The Palestinian Authority governs parts of the West Bank, while Hamas controls Gaza. The Palestine Liberation Organization (PLO) represents Palestinians internationally.</p>
            
            <h3>International Recognition</h3>
            <p>Over 130 countries recognize the State of Palestine, and it has observer status at the United Nations since 2012.</p>
            
            <h3>Key Issues</h3>
            <ul>
                <li>Statehood and sovereignty</li>
                <li>Refugee rights and return</li>
                <li>Settlement expansion</li>
                <li>Water rights and resources</li>
                <li>Freedom of movement</li>
            </ul>
        `,
    tourism: `
            <h3>Sacred and Historic Sites</h3>
            <p>Palestine is home to some of the world's most significant religious and historical sites, attracting pilgrims and tourists from around the globe.</p>
            
            <h3>Jerusalem</h3>
            <ul>
                <li><strong>Al-Aqsa Mosque:</strong> Third holiest site in Islam</li>
                <li><strong>Dome of the Rock:</strong> Iconic Islamic architecture</li>
                <li><strong>Church of the Holy Sepulchre:</strong> Christian pilgrimage site</li>
                <li><strong>Western Wall:</strong> Sacred Jewish site</li>
            </ul>
            
            <h3>Bethlehem</h3>
            <ul>
                <li><strong>Church of the Nativity:</strong> Birthplace of Jesus Christ</li>
                <li><strong>Manger Square:</strong> Historic town center</li>
            </ul>
            
            <h3>Other Notable Sites</h3>
            <ul>
                <li><strong>Jericho:</strong> One of the world's oldest cities</li>
                <li><strong>Hebron:</strong> Cave of the Patriarchs</li>
                <li><strong>Nablus:</strong> Historic old city and soap factories</li>
            </ul>
        `,
    extras: `
            <h3>Did You Know?</h3>
            <ul>
                <li>Palestine is home to the world's oldest known winery, dating back 6,000 years</li>
                <li>The Palestinian flag was designed in 1917 and represents Arab unity</li>
                <li>Jericho is considered one of the oldest continuously inhabited cities in the world</li>
                <li>Palestinian olive trees can live for over 1,000 years</li>
                <li>The traditional Palestinian dress (thob) varies by region, with over 400 different patterns</li>
            </ul>
            
            <h3>Cultural Symbols</h3>
            <p>The key (miftah) symbolizes the right of return for Palestinian refugees, while the olive tree represents peace, resilience, and connection to the land.</p>
            
            <h3>Modern Achievements</h3>
            <p>Despite challenges, Palestinians have made significant contributions to science, technology, arts, and literature, with a strong emphasis on education and cultural preservation.</p>
        `,
  },

  lebanon: {
    name: "Lebanon",
    flag: "./flags/lebanon.png",
    overview: `
            <h3>Republic of Lebanon</h3>
            <p>Lebanon is a small but culturally rich country in Western Asia, known for its diverse religious communities, stunning Mediterranean coastline, and vibrant cultural scene. Often called the "Paris of the Middle East," Lebanon has been a crossroads of civilizations for millennia.</p>
            <p>The country is famous for its cedar trees, ancient ruins, delicious cuisine, and resilient people who have maintained their unique identity despite numerous challenges.</p>
            <p><strong>Capital:</strong> Beirut<br>
            <strong>Population:</strong> Approximately 6.8 million<br>
            <strong>Languages:</strong> Arabic (official), French, English<br>
            <strong>Currency:</strong> Lebanese Pound</p>
        `,
    history: `
            <h3>Ancient Phoenicia</h3>
            <p>Lebanon was the heart of the ancient Phoenician civilization, master seafarers and traders who spread their alphabet across the Mediterranean. Cities like Tyre, Sidon, and Byblos were major commercial centers.</p>
            
            <h3>Roman and Byzantine Periods</h3>
            <p>The region flourished under Roman rule, with magnificent temples at Baalbek still standing today. Christianity spread early in Lebanon, establishing deep roots that continue today.</p>
            
            <h3>Ottoman Era and French Mandate</h3>
            <p>After centuries of Ottoman rule, Lebanon became a French mandate after WWI. This period introduced French language and culture, which remain influential today.</p>
            
            <h3>Independence and Modern Challenges</h3>
            <p>Lebanon gained independence in 1943 and experienced a golden age until the civil war (1975-1990). The country continues to navigate complex regional politics while maintaining its unique character.</p>
        `,
    culture: `
            <h3>Cultural Mosaic</h3>
            <p>Lebanon's culture is a unique blend of Arab, Mediterranean, and Western influences, shaped by its diverse religious communities including Christians, Muslims, and Druze.</p>
            
            <h3>Arts and Literature</h3>
            <p>Lebanon has produced world-renowned artists, writers, and musicians. Khalil Gibran's "The Prophet" is one of the most translated books in history. The country has a thriving contemporary art scene.</p>
            
            <h3>Music and Entertainment</h3>
            <p>From traditional dabke dancing to modern pop stars like Fairuz and Marcel Khalife, Lebanese music spans genres and generations. Beirut's nightlife is legendary throughout the region.</p>
            
            <h3>Religious Diversity</h3>
            <p>Lebanon's 18 recognized religious sects contribute to its rich cultural tapestry, with each community maintaining distinct traditions while sharing common Lebanese identity.</p>
        `,
    food: `
            <h3>Culinary Excellence</h3>
            <p>Lebanese cuisine is considered one of the world's finest, emphasizing fresh ingredients, healthy preparations, and social dining experiences.</p>
            
            <h3>Mezze Culture</h3>
            <ul>
                <li><strong>Hummus:</strong> Creamy chickpea dip with tahini</li>
                <li><strong>Tabbouleh:</strong> Fresh parsley salad with tomatoes and bulgur</li>
                <li><strong>Fattoush:</strong> Mixed salad with crispy pita bread</li>
                <li><strong>Baba Ganoush:</strong> Smoky eggplant dip</li>
                <li><strong>Kibbeh:</strong> Bulgur and meat croquettes</li>
            </ul>
            
            <h3>Main Dishes</h3>
            <ul>
                <li><strong>Shawarma:</strong> Marinated meat wraps</li>
                <li><strong>Manakish:</strong> Flatbread with za'atar or cheese</li>
                <li><strong>Stuffed Grape Leaves:</strong> Rice and meat wrapped in vine leaves</li>
            </ul>
            
            <h3>Sweets and Desserts</h3>
            <p>Lebanese sweets like baklava, ma'amoul, and muhallabia are beloved throughout the Middle East.</p>
        `,
    books: `
            <h3>Literary Treasures</h3>
            <ul>
                <li><strong>"The Prophet" by Khalil Gibran</strong> - Timeless spiritual and philosophical poetry</li>
                <li><strong>"Cities of Salt" by Abdul Rahman Munif</strong> - Epic novel about oil's impact on Arab society</li>
                <li><strong>"Women of Sand and Myrrh" by Hanan al-Shaykh</strong> - Contemporary women's experiences</li>
                <li><strong>"The Hakawati" by Rabih Alameddine</strong> - Family saga blending tradition and modernity</li>
                <li><strong>"From the Land of Green Ghosts" by Pascal Khoo Thwe</strong> - Memoir of cultural displacement</li>
                <li><strong>"The Mountain of the Moon" by Hoda Barakat</strong> - Award-winning contemporary fiction</li>
            </ul>
            
            <h3>Historical Accounts</h3>
            <ul>
                <li><strong>"Pity the Nation" by Robert Fisk</strong> - Comprehensive account of Lebanon's civil war</li>
                <li><strong>"The Bullet Collection" by Patricia Sarrafian Ward</strong> - Coming-of-age during wartime</li>
            </ul>
        `,
    politics: `
            <h3>Confessional System</h3>
            <p>Lebanon operates under a unique confessional political system where government positions are allocated based on religious affiliation, designed to ensure representation for all communities.</p>
            
            <h3>Government Structure</h3>
            <ul>
                <li><strong>President:</strong> Must be a Maronite Christian</li>
                <li><strong>Prime Minister:</strong> Must be a Sunni Muslim</li>
                <li><strong>Speaker of Parliament:</strong> Must be a Shia Muslim</li>
            </ul>
            
            <h3>Current Challenges</h3>
            <ul>
                <li>Economic crisis and currency devaluation</li>
                <li>Syrian refugee crisis</li>
                <li>Political deadlock and corruption</li>
                <li>Infrastructure and electricity shortages</li>
                <li>Regional tensions and security concerns</li>
            </ul>
            
            <h3>International Relations</h3>
            <p>Lebanon maintains complex relationships with regional powers and hosts numerous international organizations, including UN peacekeeping forces.</p>
        `,
    tourism: `
            <h3>Ancient Wonders</h3>
            <ul>
                <li><strong>Baalbek:</strong> Roman temple complex with massive stone blocks</li>
                <li><strong>Byblos:</strong> One of the world's oldest continuously inhabited cities</li>
                <li><strong>Tyre:</strong> Ancient Phoenician port with Roman ruins</li>
                <li><strong>Anjar:</strong> Umayyad archaeological site</li>
            </ul>
            
            <h3>Natural Beauty</h3>
            <ul>
                <li><strong>Cedars of God:</strong> Ancient cedar forest in the mountains</li>
                <li><strong>Jeita Grotto:</strong> Spectacular limestone caves</li>
                <li><strong>Qadisha Valley:</strong> Sacred valley with ancient monasteries</li>
                <li><strong>Mediterranean Coast:</strong> Beautiful beaches and coastal cities</li>
            </ul>
            
            <h3>Modern Attractions</h3>
            <ul>
                <li><strong>Beirut:</strong> Vibrant capital with museums, galleries, and nightlife</li>
                <li><strong>Harissa:</strong> Pilgrimage site with panoramic views</li>
                <li><strong>Faraya:</strong> Ski resort in the mountains</li>
            </ul>
        `,
    extras: `
            <h3>Fascinating Facts</h3>
            <ul>
                <li>Lebanon is the only Arab country without a desert</li>
                <li>The Lebanese diaspora (12-15 million) is larger than Lebanon's population</li>
                <li>Beirut was rebuilt seven times throughout history</li>
                <li>Lebanon has more than 15 universities, earning it the nickname "Harvard of the Middle East"</li>
                <li>The country has 18 officially recognized religious sects</li>
            </ul>
            
            <h3>Cultural Contributions</h3>
            <p>Lebanese emigrants have made significant contributions worldwide in business, arts, politics, and science. Notable Lebanese-Americans include Ralph Nader, Casey Kasem, and many successful entrepreneurs.</p>
            
            <h3>Symbols</h3>
            <p>The cedar tree on Lebanon's flag represents immortality and steadiness, while the red stripes symbolize the blood shed for liberation, and white represents peace and snow on the mountains.</p>
        `,
  },

  // Adding more countries with similar detailed structure...
  syria: {
    name: "Syria",
    flag: "./flags/syria.png",
    overview: `
            <h3>Syrian Arab Republic</h3>
            <p>Syria is a country in Western Asia, known for its ancient history, diverse cultural heritage, and strategic location at the crossroads of Europe, Asia, and Africa. Despite recent challenges, Syria remains home to some of humanity's oldest civilizations and most significant archaeological sites.</p>
            <p>The country has been inhabited for thousands of years and has been ruled by various empires, each leaving their mark on Syrian culture, architecture, and traditions.</p>
            <p><strong>Capital:</strong> Damascus<br>
            <strong>Population:</strong> Approximately 18 million<br>
            <strong>Languages:</strong> Arabic (official), Kurdish, Armenian<br>
            <strong>Currency:</strong> Syrian Pound</p>
        `,
    history: `
            <h3>Ancient Civilizations</h3>
            <p>Syria is home to some of the world's oldest cities, including Damascus and Aleppo. The region saw the rise of the Arameans, and later became part of various empires including the Roman and Byzantine empires.</p>
            
            <h3>Islamic Conquest</h3>
            <p>Syria became part of the Islamic world in 636 CE and served as the center of the Umayyad Caliphate from 661 to 750 CE, making Damascus the capital of the Islamic empire.</p>
            
            <h3>Ottoman Period</h3>
            <p>Under Ottoman rule for 400 years, Syria developed its distinctive architecture and urban planning that can still be seen in cities like Damascus and Aleppo.</p>
            
            <h3>Modern Era</h3>
            <p>After French mandate period, Syria gained independence in 1946. The country has faced significant challenges in recent decades, including ongoing conflict since 2011.</p>
        `,
    culture: `
            <h3>Rich Cultural Heritage</h3>
            <p>Syrian culture represents a blend of Arab, Islamic, and Mediterranean influences, with significant contributions from various ethnic and religious minorities including Kurds, Armenians, and Assyrians.</p>
            
            <h3>Arts and Crafts</h3>
            <p>Syria is famous for its traditional crafts including Damascus steel, intricate woodwork, and beautiful textiles. The country has a rich tradition of calligraphy and Islamic art.</p>
            
            <h3>Music and Poetry</h3>
            <p>Syrian music combines traditional Arabic maqam with local folk traditions. The country has produced renowned musicians and poets who have influenced Arab culture throughout the region.</p>
        `,
    food: `
            <h3>Culinary Traditions</h3>
            <p>Syrian cuisine is considered one of the richest in the Middle East, featuring diverse flavors and cooking techniques influenced by Turkish, Lebanese, and Persian cuisines.</p>
            
            <h3>Signature Dishes</h3>
            <ul>
                <li><strong>Kibbeh:</strong> Bulgur and meat croquettes</li>
                <li><strong>Fattoush:</strong> Mixed salad with sumac dressing</li>
                <li><strong>Muhammara:</strong> Spicy walnut and red pepper dip</li>
                <li><strong>Shawarma:</strong> Marinated meat wraps</li>
                <li><strong>Baklava:</strong> Sweet pastry with nuts and honey</li>
            </ul>
        `,
    books: `
            <h3>Syrian Literature</h3>
            <ul>
                <li><strong>"Cities of Salt" by Abdul Rahman Munif</strong></li>
                <li><strong>"The Silence and the Roar" by Nihad Sirees</strong></li>
                <li><strong>"In Praise of Hatred" by Khaled Khalifa</strong></li>
                <li><strong>"The Shell" by Mustafa Khalifa</strong></li>
            </ul>
        `,
    politics: `
            <h3>Government Structure</h3>
            <p>Syria is officially a republic with a strong presidential system. The country has been ruled by the Ba'ath Party since 1963.</p>
            
            <h3>Current Situation</h3>
            <p>Syria has been experiencing conflict since 2011, with various internal and external actors involved. The situation remains complex with ongoing humanitarian concerns.</p>
        `,
    tourism: `
            <h3>Historical Sites</h3>
            <ul>
                <li><strong>Damascus Old City:</strong> UNESCO World Heritage site</li>
                <li><strong>Aleppo Citadel:</strong> Ancient fortress</li>
                <li><strong>Palmyra:</strong> Ancient Roman ruins</li>
                <li><strong>Krak des Chevaliers:</strong> Crusader castle</li>
            </ul>
        `,
    extras: `
            <h3>Cultural Facts</h3>
            <ul>
                <li>Damascus is often called the oldest continuously inhabited city in the world</li>
                <li>Syria is the birthplace of agriculture and the alphabet</li>
                <li>The country has six UNESCO World Heritage Sites</li>
            </ul>
        `,
  },

  // Continue with other countries...
  jordan: {
    name: "Jordan",
    flag: "./flags/jordan.png",
    overview: `
            <h3>Hashemite Kingdom of Jordan</h3>
            <p>Jordan is a stable constitutional monarchy in the heart of the Middle East, known for its ancient history, warm hospitality, and stunning landscapes. From the rose-red city of Petra to the otherworldly Wadi Rum desert, Jordan offers visitors a journey through time and nature.</p>
            <p>The kingdom has successfully maintained stability in a turbulent region while preserving its rich Bedouin heritage and embracing modernity.</p>
            <p><strong>Capital:</strong> Amman<br>
            <strong>Population:</strong> Approximately 10.2 million<br>
            <strong>Languages:</strong> Arabic (official), English<br>
            <strong>Currency:</strong> Jordanian Dinar</p>
        `,
    history: `
            <h3>Ancient Kingdoms</h3>
            <p>Jordan's history spans millennia, from the ancient kingdoms of Edom, Moab, and Ammon to the Nabataean civilization that built Petra. The region has been a crossroads for trade and culture.</p>
            
            <h3>Islamic Era</h3>
            <p>Jordan became part of the Islamic empire in the 7th century and later served as a crucial link in trade routes between Damascus and Mecca.</p>
            
            <h3>Modern Jordan</h3>
            <p>The Hashemite Kingdom was established in 1921 under Emir Abdullah I. Jordan gained full independence in 1946 and has been ruled by the Hashemite dynasty ever since.</p>
        `,
    culture: `
            <h3>Bedouin Heritage</h3>
            <p>Jordanian culture is deeply rooted in Bedouin traditions of hospitality, honor, and community. These values continue to shape modern Jordanian society.</p>
            
            <h3>Arts and Crafts</h3>
            <p>Traditional crafts include intricate embroidery, pottery, and jewelry making. The country has a growing contemporary arts scene centered in Amman.</p>
        `,
    food: `
            <h3>National Cuisine</h3>
            <ul>
                <li><strong>Mansaf:</strong> National dish with lamb, yogurt sauce, and rice</li>
                <li><strong>Maqluba:</strong> Upside-down rice and meat dish</li>
                <li><strong>Falafel:</strong> Deep-fried chickpea balls</li>
                <li><strong>Knafeh:</strong> Sweet cheese pastry</li>
            </ul>
        `,
    books: `
            <h3>Recommended Reading</h3>
            <ul>
                <li><strong>"Married to a Bedouin" by Marguerite van Geldermalsen</strong></li>
                <li><strong>"The Bride of Amman" by Fadi Zaghmout</strong></li>
                <li><strong>"Lawrence of Arabia" by T.E. Lawrence</strong></li>
            </ul>
        `,
    politics: `
            <h3>Constitutional Monarchy</h3>
            <p>Jordan is ruled by King Abdullah II, who has focused on economic development and regional stability. The country maintains strong ties with both Western and Arab nations.</p>
        `,
    tourism: `
            <h3>Must-Visit Sites</h3>
            <ul>
                <li><strong>Petra:</strong> Ancient Nabataean city carved in rock</li>
                <li><strong>Wadi Rum:</strong> Spectacular desert landscape</li>
                <li><strong>Dead Sea:</strong> Lowest point on Earth</li>
                <li><strong>Jerash:</strong> Well-preserved Roman ruins</li>
            </ul>
        `,
    extras: `
            <h3>Interesting Facts</h3>
            <ul>
                <li>Jordan has no oil but is rich in phosphates and potash</li>
                <li>The country hosts the largest number of refugees per capita in the world</li>
                <li>Petra is one of the New Seven Wonders of the World</li>
            </ul>
        `,
  },

  // Add more countries following the same pattern...
}

// Current state
let currentCountry = null
let currentSection = "overview"

// DOM elements
const countriesGallery = document.getElementById("countriesGallery")
const countryDetail = document.getElementById("countryDetail")
const backBtn = document.getElementById("backBtn")
const countryTitle = document.getElementById("countryTitle")
const countryFlag = document.getElementById("countryFlag")
const contentBody = document.getElementById("contentBody")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeEventListeners()
})

function initializeEventListeners() {
  // Country card click handlers
  const countryCards = document.querySelectorAll(".country-card")
  countryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const countryKey = this.dataset.country
      if (countryData[countryKey]) {
        showCountryDetail(countryKey)
      }
    })
  })

  // Back button handler
  backBtn.addEventListener("click", showCountriesGallery)

  // Sidebar navigation handlers
  const navItems = document.querySelectorAll(".nav-item")
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const section = this.dataset.section
      showSection(section)

      // Update active nav item
      navItems.forEach((nav) => nav.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentCountry) {
      showCountriesGallery()
    }
  })
}

function showCountryDetail(countryKey) {
  const country = countryData[countryKey]
  if (!country) return

  currentCountry = countryKey
  currentSection = "overview"

  // Update country info
  countryTitle.textContent = country.name
  countryFlag.style.backgroundImage = `url('${country.flag}')`

  // Show content with fade transition
  fadeTransition(() => {
    countriesGallery.style.display = "none"
    countryDetail.style.display = "block"
    backBtn.style.display = "inline-block"

    // Reset sidebar to overview
    const navItems = document.querySelectorAll(".nav-item")
    navItems.forEach((nav) => nav.classList.remove("active"))
    document.querySelector('[data-section="overview"]').classList.add("active")

    // Show overview content
    showSection("overview")

    // Trigger fade in
    setTimeout(() => {
      countryDetail.classList.add("fade-in")
    }, 50)
  })
}

function showCountriesGallery() {
  currentCountry = null
  currentSection = null

  fadeTransition(() => {
    countryDetail.style.display = "none"
    countryDetail.classList.remove("fade-in")
    backBtn.style.display = "none"
    countriesGallery.style.display = "block"
  })
}

function showSection(sectionKey) {
  if (!currentCountry || !countryData[currentCountry]) return

  const country = countryData[currentCountry]
  const content = country[sectionKey]

  if (content) {
    currentSection = sectionKey

    // Fade out current content
    contentBody.classList.add("fade-out")

    setTimeout(() => {
      contentBody.innerHTML = content
      contentBody.classList.remove("fade-out")
    }, 150)
  }
}

function fadeTransition(callback) {
  const mainContent = document.getElementById("mainContent")

  // Add fade out class
  mainContent.style.opacity = "0.3"

  setTimeout(() => {
    callback()

    // Fade back in
    setTimeout(() => {
      mainContent.style.opacity = "1"
    }, 50)
  }, 200)
}

// Smooth scrolling for better UX
function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add loading states for better perceived performance
function showLoadingState() {
  contentBody.innerHTML = '<div class="loading" style="height: 200px; border-radius: 8px;"></div>'
}

// Enhanced keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!currentCountry) return

  const navItems = document.querySelectorAll(".nav-item")
  const activeIndex = Array.from(navItems).findIndex((item) => item.classList.contains("active"))

  if (e.key === "ArrowDown" && activeIndex < navItems.length - 1) {
    e.preventDefault()
    navItems[activeIndex + 1].click()
  } else if (e.key === "ArrowUp" && activeIndex > 0) {
    e.preventDefault()
    navItems[activeIndex - 1].click()
  }
})

// Add touch/swipe support for mobile
let touchStartX = 0
let touchEndX = 0

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX
})

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
})

function handleSwipe() {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0 && currentCountry) {
      // Swipe left - could implement next country navigation
    } else if (diff < 0 && currentCountry) {
      // Swipe right - go back to gallery
      showCountriesGallery()
    }
  }
}

// Performance optimization: Lazy load content
function lazyLoadContent(sectionKey) {
  // This could be enhanced to load content from external sources
  // For now, all content is pre-loaded in the countryData object
  return Promise.resolve(countryData[currentCountry][sectionKey])
}

// Add search functionality (bonus feature)
function addSearchFunctionality() {
  const searchInput = document.createElement("input")
  searchInput.type = "text"
  searchInput.placeholder = "Search countries..."
  searchInput.className = "search-input"

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const countryCards = document.querySelectorAll(".country-card")

    countryCards.forEach((card) => {
      const countryName = card.querySelector(".country-name").textContent.toLowerCase()
      if (countryName.includes(searchTerm)) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })

  // Insert search input into header
  const header = document.querySelector(".header")
  header.appendChild(searchInput)
}

// Initialize search functionality
// addSearchFunctionality(); // Uncomment to enable search

console.log("UnderstandTheMiddleEast website loaded successfully!")

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle")
const toggleIcon = themeToggle.querySelector(".toggle-icon")

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
document.documentElement.setAttribute("data-theme", currentTheme)
updateToggleIcon(currentTheme)

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateToggleIcon(newTheme)

  // Add a subtle animation to indicate the change
  themeToggle.style.transform = "scale(0.9)"
  setTimeout(() => {
    themeToggle.style.transform = "scale(1)"
  }, 150)
})

function updateToggleIcon(theme) {
  toggleIcon.textContent = theme === "dark" ? "☀️" : "🌙"
  themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`)
}

// System theme preference detection
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("theme")) {
  document.documentElement.setAttribute("data-theme", "dark")
  updateToggleIcon("dark")
}

// Listen for system theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    const newTheme = e.matches ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", newTheme)
    updateToggleIcon(newTheme)
  }
})
