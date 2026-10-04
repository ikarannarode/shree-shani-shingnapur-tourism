import { useState } from "react";

import {
  ArrowRight,
  BedDouble,
  ChevronDown,
  Clock3,
  ExternalLink,
  MapPin,
  Menu,
  Navigation,
  Phone,
  Utensils,
  X,
} from "lucide-react";

import heroImage from "../assets/hero.jpeg";

const images = {
  shani:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Shani%20Temple%20at%20Shani%20Shingnapur%2C%20Maharastra%2C%20India.jpg?width=1600",

  shaniDeity:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Shani%20shingnapur.jpg?width=1200",

  sonai:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sonai%20Renuka%20devi%20temple%20front%20view.jpg?width=1200",

  newasa:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Saint%20Dnyaneshwar%20and%20Sachchidanand%20baba.jpg?width=1400",

  devgad:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Devgad%20temple.jpg?width=1200",

  historyOld:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Shani%20Shingnapur%20temple%20outside%20view.jpg?width=1200",
  historyCurrent:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Shani%20Temple%20at%20Shani%20Shingnapur%2C%20Maharastra%2C%20India.jpg?width=1600",
  pooja:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pouring%20Til%20oil%20on%20the%20Shani%20idol%20at%20Shani%20Shingnapur%2C%20maharastra.jpg?width=1400",
  prasad:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Shani%20shingnapur.jpg?width=1200",
  hospital:
    "https://www.shanidev.com/wp-content/uploads/2018/02/Shanidev-Rural-Hospital.jpg",
  gaushala:
    "https://www.shanidev.com/wp-content/uploads/2018/02/Cow-Care-Centre.jpg",
  guestHouse:
    "https://cdn.yatradham.org/media/catalog/product/w/h/whatsapp_image_2025-07-15_at_2.10.40_pm_2_.jpg",
  marketStreet:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Shani%20shignapur.JPG?width=1400",
  marketTemple:
    "https://commons.wikimedia.org/wiki/Special:FilePath/ShaniShingnapurEntranceGate.jpg?width=1400",
  prasadCounter:
    "https://wd-image.webdunia.com/image-conversion/process-aws.php?h=&outtype=webp&url=https%3A%2F%2Fnonprod-media.webdunia.com%2Fpublic_html%2F_media%2Fmr%2Fimg%2Farticle%2F2023-04%2F05%2Ffull%2F1680684007-1242.jpg&w=1200",
  shopOil:
    "/public/jay-santaji-coconut-centre-and-oil-centre-shani-shinganapur-ahmednagar-coconut-retailers-2pzxg.jpg",
  shanirath:
    "https://cdn.yatradham.org/media/catalog/product/w/h/whatsapp_image_2025-07-15_at_2.10.40_pm_2_.jpg",
  adiraj:
    "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74250247038878/QS1042/QS1042-Q1/Screenshot_2023_0303_132008.jpg",
  mamta:
    "https://images.trvl-media.com/lodging/115000000/114520000/114510400/114510352/64f71c87.jpg?impolicy=resizecrop&ra=fit&rw=598",
  abhishek:
    "https://ak-d.tripcdn.com/images/0222112000px9ei0b8C49_R_960_660_R5_D.jpg",
};

const stays = [
  {
    name: "Hotel Shanirath",
    type: "Hotel & Lodging",
    phone: "+91 83904 07001",
    location: "Near Police Station",
    rateNote: "Live room rates vary by date • check current listing",
    image: images.shanirath,
  },
  {
    name: "Hotel Adiraj Palace",
    type: "Hotel & Lodging",
    phone: "+91 90280 75001",
    location: "Near Shani Shingnapur",
    rateNote: "Live room rates vary by date • check current listing",
    image: images.adiraj,
  },
  {
    name: "Hotel Mamta",
    type: "Hotel & Lodging",
    phone: "+91 96235 41541",
    location: "Shani Shingnapur",
    rateNote: "Live room rates vary by date • check current listing",
    image: images.mamta,
  },
  {
    name: "Hotel Abhishek Pride",
    type: "Hotel",
    phone: "+91 92090 28001",
    location: "Sonai–Shani Road",
    rateNote: "Live room rates vary by date • check current listing",
    image: images.abhishek,
  },
];

const foodPlaces = [
  {
    name: "Meghna's Kitchen",
    type: "Family Restaurant",
    phone: "+91 97654 75555",
  },
  {
    name: "Hotel Nilanjan Pure Veg",
    type: "Pure Vegetarian",
    phone: "+91 99217 72050",
  },
  {
    name: "Jogeshwari Misal",
    type: "Local Maharashtrian Food",
    phone: "+91 74995 75884",
  },
];

const nearbyPlaces = [
  {
    id: "shani",
    name: "Shani Shingnapur",
    distance: "YOU ARE HERE",
    category: "Temple & village",
    image: images.shani,
    description:
      "The open-air shrine and the village known for its doorless tradition.",
    x: "12%",
  },
  {
    id: "devgad",
    name: "Devgad",
    distance: "NEARBY",
    category: "Temple & nature",
    image: images.devgad,
    description:
      "Devgad Datta Mandir, greenery and the Pravara River landscape.",
    x: "34%",
  },
  {
    id: "newasa",
    name: "Newasa",
    distance: "NEARBY",
    category: "Heritage & spirituality",
    image: images.newasa,
    description:
      "A place connected with Sant Dnyaneshwar and the Dnyaneshwari tradition.",
    x: "58%",
  },
  {
    id: "sonai",
    name: "Sonai",
    distance: "NEARBY",
    category: "Renuka Mata Temple",
    image: images.sonai,
    description:
      "Visit the distinctive Renuka Mata temple and explore the surrounding area.",
    x: "81%",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <div className="brand-icon">ॐ</div>

            <div className="brand-name">
              <strong>Shani Shingnapur</strong>
              <span>A Divine & Unique Destination</span>
            </div>
          </a>

          <nav className="desktop-navigation">
            <a className="active" href="#home">
              Home
            </a>

            <a href="#stay">Stay</a>

            <a href="#food">Food</a>

            <a href="#nearby">Nearby Places</a>
          </nav>

          <div className="nav-right">
            <a href="#plan" className="plan-button">
              Plan Your Visit
              <ArrowRight size={16} />
            </a>

            <button
              className="menu-button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-navigation">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#stay" onClick={closeMenu}>
              Stay
            </a>

            <a href="#food" onClick={closeMenu}>
              Food
            </a>

            <a href="#nearby" onClick={closeMenu}>
              Nearby Places
            </a>

            <a href="#plan" onClick={closeMenu}>
              Plan Your Visit
            </a>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-dark-overlay" />

        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-small-line">
              <span>FAITH</span>
              <i />
              <span>CULTURE</span>
              <i />
              <span>UNIQUE HERITAGE</span>
            </div>

            <h1>
              Shani
              <br />
              <em>Shingnapur</em>
            </h1>

            <a href="#village" className="hero-button">
              Explore the Divine Town
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-bottom">
            <span>
              <MapPin size={14} />
              Ahilyanagar, Maharashtra
            </span>

            <span>19.3817° N</span>
            <span>74.8579° E</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOORLESS TOWN
      ===================================================== */}

      <section id="village" className="doorless-section">
        <div className="section-container doorless-layout">
          <div className="doorless-image">
            <img
              src={images.shani}
              alt="Shani Shingnapur Temple"
            />
          </div>

          <div className="doorless-content">
            <span className="section-kicker">
              A TOWN LIKE NO OTHER
            </span>

            <h2>
              The Doorless
              <br />
              <em>Town</em>
            </h2>

            <div className="gold-divider">
              <span />
            </div>

            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon">⌂</div>

                <h3>No Doors</h3>

                <p>
                  Homes and shops are traditionally known for having no
                  conventional doors or locks.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">✓</div>

                <h3>Unwavering Faith</h3>

                <p>
                  The tradition is closely associated with local faith in
                  Lord Shani's protection.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">♟</div>

                <h3>Unique Community</h3>

                <p>
                  A distinctive village culture built around pilgrimage,
                  tradition and everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="map-section">
        <div className="section-container map-layout">
          <div className="map-information">
            <span className="section-kicker light">
              LOCATION
            </span>

            <h2>
              Locate
              <br />
              <em>Shani Shingnapur</em>
            </h2>

            <div className="gold-divider">
              <span />
            </div>

            <p>
              Find the temple, explore the surrounding village and
              plan your route before you arrive.
            </p>

            <a
              className="map-button"
              href="https://www.google.com/maps/search/?api=1&query=Shani+Shingnapur+Temple"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={16} />
              View on Google Maps
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="map-frame">
            <iframe
              title="Map of Shani Shingnapur"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.76%2C19.31%2C74.94%2C19.45&layer=mapnik&marker=19.38173%2C74.85788"
              loading="lazy"
            />

            <div className="map-location-label">
              <div className="map-red-pin" />

              <div>
                <strong>Shani Shingnapur Temple</strong>
                <span>Shani Shingnapur, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STAY
      ===================================================== */}

      <section id="stay" className="stay-section">
        <div className="section-container">
          <div className="section-title-row">
            <div>
              <div className="section-title-line">
                <BedDouble size={30} />
                <h2>Places to Stay</h2>
              </div>

              <p className="section-subtitle">
                Accommodation around Shani Shingnapur
              </p>
            </div>

            <a
              className="view-all-button"
              href="https://www.google.com/maps/search/hotels+near+Shani+Shingnapur"
              target="_blank"
              rel="noreferrer"
            >
              View All
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="stay-grid">
            {stays.map((stay) => (
              <article className="stay-card" key={stay.name}>
                <div className="stay-image">
                  <img
                    src={stay.image}
                    alt={`${stay.name} area`}
                  />
                </div>

                <div className="stay-card-content">
                  <h3>{stay.name}</h3>

                  <div className="stay-type">
                    {stay.type}
                  </div>

                  <a
                    href={`tel:${stay.phone.replace(/\s/g, "")}`}
                    className="contact-row"
                  >
                    <Phone size={15} />
                    {stay.phone}
                  </a>

                  <div className="contact-row">
                    <MapPin size={15} />
                    {stay.location}
                  </div>

                  <div className="stay-rate">
                    <strong>Room rate</strong>
                    {stay.rateNote}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="data-note">
            Contact details should be confirmed before travelling because
            local rates and availability can change.
          </p>
        </div>
      </section>

      {/* =====================================================
          FOOD
      ===================================================== */}

      <section id="food" className="food-section">
        <div className="section-container">
          <div className="section-title-row">
            <div>
              <div className="section-title-line">
                <Utensils size={30} />
                <h2>Food & Bhojanalay</h2>
              </div>

              <p className="section-subtitle">
                Simple meals and local food around the temple
              </p>
            </div>

            <a
              className="view-all-button"
              href="https://www.google.com/maps/search/restaurants+near+Shani+Shingnapur"
              target="_blank"
              rel="noreferrer"
            >
              View All
              <ArrowRight size={15} />
            </a>
          </div>

          {/* BHOJANALAY */}

          <div className="food-feature">
            <div className="food-feature-image">
              <img
                src={images.shaniDeity}
                alt="Shani Shingnapur"
              />
            </div>

            <div className="bhojanalay-content">
              <div className="bhojanalay-heading">
                <span className="food-small-label">
                  SHANISHWAR DEVSTHAN TRUST
                </span>

                <h3>Bhojanalay</h3>
              </div>

              <div className="price-pill">
                Nominal amount • current price not published
              </div>

              <div className="timing-list">
                <div>
                  <Clock3 size={18} />
                  <span>Published morning service</span>
                  <strong>10:00 AM–3:00 PM</strong>
                </div>

                <div>
                  <Clock3 size={18} />
                  <span>Published evening service</span>
                  <strong>6:00 PM–9:00 PM</strong>
                </div>
              </div>

              <p className="timing-note">
                The Devasthan website publishes these hours, but a June 2026 local report
                said the trust-run Prasadalay had been closed for several months. Verify
                current operation before travelling.
              </p>
            </div>

            <div className="food-options">
              <h3>Local Food Options</h3>

              <ul>
                <li>
                  <span>+</span>
                  Simple & tasty meals
                </li>

                <li>
                  <span>+</span>
                  Maharashtrian food
                </li>

                <li>
                  <span>+</span>
                  Snacks & tea stalls
                </li>

                <li>
                  <span>+</span>
                  Vegetarian options
                </li>
              </ul>
            </div>
          </div>

          {/* RESTAURANT LIST */}

          <div className="restaurant-list">
            {foodPlaces.map((place, index) => (
              <div
                className="restaurant-row"
                key={place.name}
              >
                <span className="restaurant-number">
                  0{index + 1}
                </span>

                <div>
                  <h3>{place.name}</h3>
                  <span>{place.type}</span>
                </div>

                <a
                  href={`tel:${place.phone.replace(/\s/g, "")}`}
                >
                  <Phone size={15} />
                  {place.phone}
                </a>

                <a
                  className="restaurant-map"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    place.name + ", Shani Shingnapur, Maharashtra"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Locate
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEARBY PLACES
      ===================================================== */}

      <section id="nearby" className="nearby-section">
        <div className="section-container">
          <div className="nearby-heading">
            <div>
              <span className="section-kicker light">
                DISCOVER THE REGION
              </span>

              <h2>
                Explore
                <br />
                <em>Nearby Places</em>
              </h2>
            </div>

            <a
              className="map-button"
              href="https://www.google.com/maps/search/?api=1&query=Shani+Shingnapur"
              target="_blank"
              rel="noreferrer"
            >
              View on Map
              <ArrowRight size={16} />
            </a>
          </div>

          {/* ROUTE DIAGRAM */}

          <div className="route-wrapper">
            <div className="route-line" />

            {nearbyPlaces.map((place) => (
              <div
                className="route-place"
                style={{ left: place.x }}
                key={place.id}
              >
                <div className="route-image">
                  <img
                    src={place.image}
                    alt={place.name}
                  />
                </div>

                <div className="route-dot" />

                <strong>{place.name}</strong>
                <span>{place.distance}</span>
              </div>
            ))}
          </div>

          {/* DESTINATION CARDS */}

          <div className="nearby-grid">
            {nearbyPlaces.slice(1).map((place) => (
              <article
                className="nearby-card"
                key={place.id}
              >
                <div className="nearby-card-image">
                  <img
                    src={place.image}
                    alt={place.name}
                  />

                  <span>{place.distance}</span>
                </div>

                <div className="nearby-card-content">
                  <small>{place.category}</small>

                  <h3>{place.name}</h3>

                  <p>{place.description}</p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      place.name + ", Maharashtra"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          HISTORY & HERITAGE
      ===================================================== */}
      <section className="info-section" id="history">
        <div className="section-container">
          <div className="info-heading">
            <span className="section-kicker">HISTORY & HERITAGE</span>
            <h2>The Story Behind <em>Shani Shingnapur</em></h2>
            <p>
              Shani Shingnapur is a pilgrimage village in Maharashtra's Ahilyanagar
              district, famous for its open-air shrine of Lord Shani and its long-
              standing doorless-house tradition. Maharashtra Tourism records the
              local legend that, after heavy rain, villagers discovered a large
              black stone near the Panasnala River. The traditional account says
              that Lord Shani appeared in a dream and instructed the villagers to
              install the stone under the open sky. The shrine continues to be
              worshipped in this distinctive form. The story is a traditional
              religious account, not a scientifically verified historical event.
            </p>
          </div>

          <div className="history-grid">
            <div className="history-image">
              <img src={images.shani} alt="Shani Shingnapur Temple" />
            </div>
            <div className="history-facts">
              <div>
                <span>01</span>
                <h3>Open-Air Shrine</h3>
                <p>
                  The principal black-stone form of Shani is worshipped beneath
                  the open sky, which is one of the shrine's most distinctive features.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>The Doorless Tradition</h3>
                <p>
                  The village is widely known for homes and shops traditionally
                  associated with having no conventional doors or locks, reflecting
                  the community's faith in Lord Shani's protection.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>A Living Pilgrimage</h3>
                <p>
                  The shrine attracts devotees throughout the year. Saturdays and
                  Amavasya are traditionally important days for Shani worship and
                  can be considerably busier.
                </p>
              </div>
            </div>
          </div>

          <div className="history-facts" style={{ marginTop: 28 }}>
            <div>
              <span>04</span>
              <h3>How the Pilgrimage Developed</h3>
              <p>
                What began as a simple open-air shrine is now surrounded by a
                developed pilgrimage area with a Devasthan trust, prasadalay,
                visitor facilities, accommodation, roads, shops and services.
                The central identity of the shrine, however, remains the open-air
                worship of Shani.
              </p>
            </div>
            <div>
              <span>05</span>
              <h3>Shani in Hindu Tradition</h3>
              <p>
                Lord Shani is traditionally associated with Saturn and with ideas
                of karma, justice and the consequences of one's actions. Devotees
                commonly approach the shrine with oil, black sesame, flowers,
                lamps and other offerings described by the Devasthan's puja guidance.
              </p>
            </div>
            <div>
              <span>06</span>
              <h3>The Village Today</h3>
              <p>
                Shani Shingnapur now functions both as a religious destination and
                as a visitor town, with hotels, restaurants, shops, transport links,
                medical services and nearby attractions such as Sonai and Devgad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          THEN & NOW / BEFORE & AFTER
      ===================================================== */}
      <section className="info-section alt" id="then-now">
        <div className="section-container">
          <div className="info-heading">
            <span className="section-kicker">THEN & NOW</span>
            <h2>A visual journey through <em>time</em></h2>
            <p>
              These are genuine photographs from different years and viewpoints.
              They are presented as an earlier-versus-recent visual comparison,
              not as a same-angle architectural before-and-after reconstruction.
            </p>
          </div>
          <div className="before-after-grid">
            <article className="before-after-card">
              <img src={images.historyOld} alt="Earlier Shani Shingnapur temple view" />
              <div>
                <span>EARLIER VIEW • 2011</span>
                <h3>Shani Shingnapur, Earlier Years</h3>
                <p>
                  An older photograph of the shrine area, useful for seeing the
                  pilgrimage landscape before more recent visitor development.
                </p>
              </div>
            </article>
            <article className="before-after-card">
              <img src={images.historyCurrent} alt="Shani Shingnapur temple photographed in 2024" />
              <div>
                <span>RECENT VIEW • 2024</span>
                <h3>Shani Shingnapur Today</h3>
                <p>
                  A recent photograph dated December 2024 showing the temple area
                  as it appears in the present pilgrimage landscape.
                </p>
              </div>
            </article>
          </div>
          <p className="data-note">
            Photo dates and licensing should be retained with the website's image credits.
          </p>
        </div>
      </section>

      {/* =====================================================
          LOCAL MARKET & SHOPPING
      ===================================================== */}
      <section className="info-section" id="market">
        <div className="section-container">
          <div className="info-heading">
            <span className="section-kicker">LOCAL MARKET</span>
            <h2>Walk beyond the temple into <em>Shingnapur life</em></h2>
            <p>
              The pilgrimage area also has small roadside shops and stalls serving
              devotees. Visitors commonly find devotional items, coconuts, flowers,
              oil, sweets, souvenirs and everyday travel essentials. The photographs
              below use real Shani Shingnapur imagery rather than generic stock photos.
            </p>
          </div>
          <div className="market-grid">
            <article className="market-card market-large">
              <img src={images.marketStreet} alt="Shani Shingnapur local street and temple area" />
              <div><span>LOCAL STREETS</span><h3>Temple-side shopping area</h3><p>Explore the small shops and roadside activity around the pilgrimage centre.</p></div>
            </article>
            <article className="market-card">
              <img src={images.shopOil} alt="Temple-side shop selling mustard oil and devotional items in Shani Shingnapur" />
              <div><span>DEVOTIONAL SHOPPING</span><h3>Offerings & souvenirs</h3><p>Coconuts, flowers, oil and devotional items are part of the local visitor economy.</p></div>
            </article>
          </div>
          <p className="photo-credit">
            Market imagery is sourced from real Shani Shingnapur photographs; use the image-credit links in your project documentation before publishing commercially.
          </p>
        </div>
      </section>

      {/* =====================================================
          MANTRA
      ===================================================== */}
      <section className="info-section dark" id="mantra">
        <div className="section-container">
          <div className="mantra-card">
            <span className="section-kicker light">FAMOUS SHANI MANTRA</span>
            <div className="mantra-text">ॐ शं शनैश्चराय नमः</div>
            <p>Om Sham Shanicharaya Namah</p>
            <small>A commonly recited mantra dedicated to Lord Shani.</small>
          </div>
        </div>
      </section>

      {/* =====================================================
          POOJA & ABHISHEK
      ===================================================== */}
      <section className="info-section" id="pooja">
        <div className="section-container pooja-grid">
          <div className="pooja-image">
            <img src={images.pooja} alt="Til oil being offered at Shani Shingnapur" />
          </div>
          <div className="pooja-content">
            <span className="section-kicker">POOJA, AARTI & ABHISHEK</span>
            <h2>Plan your worship with <em>current timings</em></h2>
            <p>
              The official Shri Shaneshwar Devasthan website currently lists the
              temple as open from <strong>4:00 AM to 10:30 PM</strong>. It lists
              three daily aarti times: <strong>4:30 AM</strong>, <strong>12:00 PM</strong>
              and <strong>sunset</strong>. Sunset varies by date, so visitors should
              check locally on the day of their visit.
            </p>
            <div className="pooja-list">
              <div className="pooja-item"><strong>04:30 AM</strong><span>First Aarti</span></div>
              <div className="pooja-item"><strong>12:00 PM</strong><span>Second Aarti</span></div>
              <div className="pooja-item"><strong>Sunset</strong><span>Third Aarti</span></div>
              <div className="pooja-item"><strong>04:00 AM–10:30 PM</strong><span>Temple opening hours</span></div>
            </div>
            <p>
              The Devasthan's published puja procedure includes offering water,
              black cloth, flowers, incense, a lamp, rice, black til and dakshina.
              The trust's puja-item list also mentions mustard oil, sweets, fruits,
              camphor and other traditional items.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          POOJA PRICE / PLATFORM ACCESS
      ===================================================== */}
      <section className="info-section alt" id="temple-access">
        <div className="section-container">
          <div className="info-heading">
            <span className="section-kicker">POOJA PRICE & TEMPLE ACCESS</span>
            <h2>Know what is official and what is <em>reported</em></h2>
            <p>
              The official Devasthan website publishes timings and the worship
              procedure, but it does not currently publish a current platform or
              oil-abhishek ticket price online. Older visitor reports have cited
              ₹500 per person for oil abhishek access. Treat that figure as a
              historical/visitor-reported amount, not a guaranteed 2026 price.
            </p>
          </div>
          <div className="access-grid">
            <div className="access-card"><strong>Official: Temple</strong><span>4:00 AM–10:30 PM</span></div>
            <div className="access-card"><strong>Official: Aarti</strong><span>4:30 AM • 12:00 PM • Sunset</span></div>
            <div className="access-card"><strong>Reported: Oil Abhishek</strong><span>₹500/person in an older visitor report. Verify at the official counter.</span></div>
          </div>
          <div className="access-note">
            <strong>Important:</strong> The Devasthan warns devotees about fake online
            worship services and says pooja and oil abhishek should be done at the
            temple premises. Do not treat third-party online “booking” prices as official.
          </div>
        </div>
      </section>

      {/* =====================================================
          PRASAD & PUJA THALI
      ===================================================== */}
      <section className="info-section" id="prasad">
        <div className="section-container">
          <div className="info-heading">
            <span className="section-kicker">PRASAD & PUJA ITEMS</span>
            <h2>Take a little <em>blessing home</em></h2>
            <p>
              The official Devasthan confirms that Shani prasad is available every
              day in the Prasadalay building. The currently published prasad service
              timings are <strong>10:00 AM–3:00 PM</strong> and <strong>6:00 PM–9:00 PM</strong>.
            </p>
          </div>
          <div className="prasad-card">
            <div className="prasad-image"><img src={images.prasadCounter} alt="Devotees at the Shani Shingnapur temple counter area" /></div>
            <div className="prasad-content">
              <span className="prasad-badge">PRASADALAY</span>
              <h3>Daily Prasad</h3>
              <p>
                The trust describes the amount per person as nominal. A current
                official rupee amount is not displayed on its website, so this site
                intentionally does not invent a price.
              </p>
              <div className="access-note"><strong>Published hours:</strong> 10 AM–3 PM • 6 PM–9 PM<br/><small>Verify current operation before travel.</small></div>
              <p>
                For puja, the trust lists rice, black til, flowers/leaves, incense,
                lamps, mustard oil, sweets, fruits, camphor and other traditional items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRACTICAL VISITOR DETAILS
      ===================================================== */}
      <section className="info-section alt" id="visitor-details">
        <div className="section-container">
          <div className="info-heading">
            <span className="section-kicker">BEFORE YOU GO</span>
            <h2>Small details that make a <em>big difference</em></h2>
            <p>
              Shani Shingnapur is a working pilgrimage centre, not just a photo stop.
              Keep a little time for queues, walking, offerings, meals and local traffic.
            </p>
          </div>
          <div className="access-grid">
            <div className="access-card"><strong>Temple hours</strong><span>4:00 AM–10:30 PM</span></div>
            <div className="access-card"><strong>Aarti</strong><span>4:30 AM • 12:00 PM • Sunset</span></div>
            <div className="access-card"><strong>What to carry</strong><span>Water, modest clothing, phone, small cash, and your required puja items.</span></div>
            <div className="access-card"><strong>Official worship</strong><span>Puja and oil abhishek should be arranged at the temple premises, not through unverified online agents.</span></div>
          </div>
          <div className="access-note">
            <strong>Visitor note:</strong> Saturdays, Amavasya and festival periods can be much busier.
            Allow extra time for parking, queues and local traffic.
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY FACILITIES
      ===================================================== */}
      <section className="info-section alt" id="community">
        <div className="section-container">
          <div className="info-heading">
            <span className="section-kicker">COMMUNITY & VISITOR FACILITIES</span>
            <h2>Useful places beyond <em>darshan</em></h2>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <div className="service-image"><img src={images.hospital} alt="Shri Shaneshwar Rural Hospital" /></div>
              <div className="service-content"><span>MEDICAL</span><h3>Shri Shaneshwar Rural Hospital</h3><p>The official Devasthan site has a Rural Hospital page and gallery for the hospital.</p><a className="service-contact" href="tel:02427238108"><Phone size={15}/> 02427 238108</a><a className="service-contact" href="https://www.shanidev.com/udesign-welcome/shanidev-rural-hospital/" target="_blank" rel="noreferrer"><ExternalLink size={15}/> Official hospital page</a></div>
            </article>
            <article className="service-card">
              <div className="service-image"><img src={images.gaushala} alt="Cow Care Centre at Shani Shingnapur" /></div>
              <div className="service-content"><span>GAUSHALA</span><h3>Shri Shaneshwar Cow Care Centre</h3><p>The Devasthan trust maintains a Cow Care Centre. Visitors should follow the trust's current arrangements.</p><a className="service-contact" href="https://www.shanidev.com/udesign-welcome/cow-care-centre/" target="_blank" rel="noreferrer"><ExternalLink size={15}/> Official Gaushala page</a></div>
            </article>
            <article className="service-card">
              <div className="service-image"><img src={images.guestHouse} alt="Guest room near Shani Shingnapur" /></div>
              <div className="service-content"><span>STAY</span><h3>Guest House / Lodging</h3><p>Hotel Shanirath is listed near the police station and about 500 m from the temple.</p><a className="service-contact" href="tel:+918390407001"><Phone size={15}/> +91 83904 07001</a><a className="service-contact" href="https://yatradham.org/shani-shingnapur-hotel-shanirath-lodging.html" target="_blank" rel="noreferrer"><ExternalLink size={15}/> Room details & current rates</a></div>
            </article>
          </div>
          <p className="data-note">
            Example current accommodation listing: Hotel Shanirath shows a 2-bed AC
            room starting at ₹1,300 + ₹65 tax, with check-in at 1:00 PM and check-out
            at 12:00 PM. Rates and availability can change, so the listing should be
            treated as a live reference rather than a permanent price.
          </p>
        </div>
      </section>

      {/* =====================================================
          ESSENTIAL SERVICES MAP
      ===================================================== */}
      <section className="essentials-section" id="medical-map">
        <div className="section-container essentials-layout">
          <div className="essentials-information">
            <span className="section-kicker light">MEDICAL • ATM • POLICE MAP</span>
            <h2>Know where to go <em>when it matters.</em></h2>
            <p>
              Use this second map for practical visitor needs. Locations are linked
              to live map searches so the user can check the current route and exact
              opening details before travelling.
            </p>
            <div className="essential-list">
              <a className="essential-link" href="https://www.google.com/maps/search/?api=1&query=Shri+Shaneshwar+Rural+Hospital+Shani+Shingnapur" target="_blank" rel="noreferrer"><span>Shri Shaneshwar Rural Hospital</span><ArrowRight size={15}/></a>
              <a className="essential-link" href="https://www.google.com/maps/search/?api=1&query=Shani+Shingnapur+Police+Station" target="_blank" rel="noreferrer"><span>Shani Shingnapur Police Station</span><ArrowRight size={15}/></a>
              <a className="essential-link" href="https://www.google.com/maps/search/?api=1&query=ATM+near+Shani+Shingnapur" target="_blank" rel="noreferrer"><span>ATM / Banking</span><ArrowRight size={15}/></a>
              <a className="essential-link" href="https://www.google.com/maps/search/?api=1&query=medical+store+near+Shani+Shingnapur" target="_blank" rel="noreferrer"><span>Medical Stores</span><ArrowRight size={15}/></a>
            </div>
          </div>
          <div className="essentials-map">
            <iframe title="Medical ATM Police and essential services near Shani Shingnapur" src="https://www.openstreetmap.org/export/embed.html?bbox=74.80%2C19.34%2C74.91%2C19.43&layer=mapnik&marker=19.38173%2C74.85788" loading="lazy" />
          </div>
        </div>
      </section>

      {/* =====================================================
          OFFICIAL LINKS / PHOTO SOURCES
      ===================================================== */}
      <section className="info-section" id="sources">
        <div className="section-container">
          <div className="info-heading">
            <span className="section-kicker">VISITOR CONFIDENCE</span>
            <h2>Check the official information <em>before you leave</em></h2>
            <p>
              Temple timings, worship procedures and service arrangements can change.
              The official Devasthan website is the best place to re-check these details
              before a visit. The website also warns visitors about fake online puja services.
            </p>
          </div>
          <div className="access-grid">
            <div className="access-card"><strong>Temple</strong><span>4 AM–10:30 PM</span></div>
            <div className="access-card"><strong>Prasad</strong><span>Published: 10 AM–3 PM & 6 PM–9 PM • verify current operation</span></div>
            <div className="access-card"><strong>Official site</strong><a href="https://www.shanidev.com/" target="_blank" rel="noreferrer">shanidev.com <ExternalLink size={14}/></a></div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLAN YOUR VISIT
      ===================================================== */}

      <section id="plan" className="plan-section">
        <div className="section-container">
          <div className="plan-card">
            <div>
              <span className="section-kicker">
                PLAN YOUR VISIT
              </span>

              <h2>
                Everything you need
                <br />
                <em>before you go.</em>
              </h2>
            </div>

            <div className="plan-items">
              <div>
                <MapPin size={19} />

                <span>
                  <strong>Temple</strong>
                  <small>Shani Shingnapur</small>
                </span>
              </div>

              <div>
                <BedDouble size={19} />

                <span>
                  <strong>Stay</strong>
                  <small>Hotels & lodging</small>
                </span>
              </div>

              <div>
                <Utensils size={19} />

                <span>
                  <strong>Food</strong>
                  <small>Bhojanalay & restaurants</small>
                </span>
              </div>

              <div>
                <Navigation size={19} />

                <span>
                  <strong>Explore</strong>
                  <small>Nearby destinations</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <div className="section-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                ॐ
              </div>

              <h3>
                Shani
                <br />
                <em>Shingnapur</em>
              </h3>

              <p>
                A Divine & Unique Destination
              </p>
            </div>

            <div className="footer-navigation">
              <div>
                <span>EXPLORE</span>

                <a href="#home">Home</a>
                <a href="#stay">Stay</a>
                <a href="#food">Food</a>
                <a href="#nearby">Nearby Places</a>
              </div>

              <div>
                <span>LOCATION</span>

                <p>Shani Shingnapur</p>
                <p>Newasa, Maharashtra</p>
                <p>PIN 414105</p>
              </div>

              <div className="footer-socials">
                <span>FOLLOW</span>

                <div>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <span className="social-text">
                      ◎
                    </span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                  >
                    <span className="social-text">
                      ▶
                    </span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <span className="social-text">
                      f
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 Shani Shingnapur
            </span>

            <span>
              MAHARASHTRA • INDIA
            </span>

            <a href="#home">
              <ChevronDown size={17} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
