export default function Home() {
  return (
    <>
      {/* TopAppBar Navigation Shell */}
      <header className="docked full-width top-0 z-50 bg-surface/80 backdrop-blur-md sticky">
        <nav className="flex flex-col w-full px-6 pt-4 pb-2 max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Brand Logo (Identity Lock) */}
            <div className="text-2xl font-extrabold text-[#2c2f30] tracking-[-2%] brand-font">
              Head Out
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-[#0052FF] border-b-2 border-[#0052FF] pb-1 font-medium transition-colors duration-300" href="#">All</a>
              <a className="text-[#595c5d] hover:text-[#2c2f30] transition-colors duration-300" href="#">Things to Do</a>
              <a className="text-[#595c5d] hover:text-[#2c2f30] transition-colors duration-300" href="#">Food</a>
              <a className="text-[#595c5d] hover:text-[#2c2f30] transition-colors duration-300" href="#">Concerts</a>
            </div>
            {/* Action Cluster */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-40 text-on-surface placeholder:text-on-surface-variant/60" placeholder="Explore Singapore" type="text" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        {/* Hero Editorial Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
                The City&apos;s
                <span className="text-primary italic">Pulse</span>
                , Curated.
              </h1>
              <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                Discover exclusive workshops, underground pop-ups, and tech mixers hidden in the heart of Singapore.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl transform rotate-2">
                <img className="w-full h-full object-cover" alt="Modern Singapore skyline at dusk with warm purple and blue ambient lighting reflecting off glass skyscrapers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDBsbkwyBIwv3NdYIc-eZM_AOZicvH1QQfByxwiJwZaWJd0cI1CiT-uHG8oyrnjIgWjBKXyOnIOjvuS7y0KVLqUMnfN2F59YGs7dpcwTvR3fEswK-nIE4h6xjs-xXoCk8366hXp-IlCGps2aGbdiJ99wGACEaBMBT-YYiROo5L1E5UB9zf2589-a9w32py7AXUu9v-5fjxHy2IasPnA_wsDTUOBinoG_8J-bLwcTADRr4ViAovpJqy4MAGL6qdqbCCeXRDCsAJsa0" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-container p-6 rounded-DEFAULT shadow-xl hidden md:block max-w-[240px]">
                <p className="text-on-primary-container font-bold text-sm uppercase tracking-wider mb-2">Featured This Week</p>
                <p className="text-on-primary-container text-lg font-semibold">Artisanal Rooftop Pottery Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Filter Tabs (Mobile Only Scroll) */}
        <div className="md:hidden flex overflow-x-auto space-x-4 pb-8 no-scrollbar">
          <button className="whitespace-nowrap bg-primary text-on-primary px-6 py-2 rounded-full font-medium">All Events</button>
          <button className="whitespace-nowrap bg-surface-container-low text-on-surface-variant px-6 py-2 rounded-full font-medium">Things to Do</button>
          <button className="whitespace-nowrap bg-surface-container-low text-on-surface-variant px-6 py-2 rounded-full font-medium">Food</button>
          <button className="whitespace-nowrap bg-surface-container-low text-on-surface-variant px-6 py-2 rounded-full font-medium">Concerts</button>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-10 overflow-x-auto no-scrollbar pb-2">
          <button className="whitespace-nowrap bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            Today
          </button>
          <button className="whitespace-nowrap bg-surface-container-high text-on-surface-variant px-8 py-3 rounded-full font-bold text-sm transition-all hover:bg-surface-container-highest hover:scale-105 active:scale-95">
            This Weekend
          </button>
          <button className="whitespace-nowrap bg-surface-container-high text-on-surface-variant px-8 py-3 rounded-full font-bold text-sm transition-all hover:bg-surface-container-highest hover:scale-105 active:scale-95 flex items-center gap-2">
            Filter by Price
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <button className="whitespace-nowrap bg-surface-container-high text-on-surface-variant px-8 py-3 rounded-full font-bold text-sm transition-all hover:bg-surface-container-highest hover:scale-105 active:scale-95 flex items-center gap-2">
            Filter by Date
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {/* Card 1: Sunset Pottery Workshop */}
          <article className="group bg-surface-container-lowest rounded-DEFAULT overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(44,47,48,0.06)]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img className="w-full h-full object-cover" alt="Hands shaping a wet clay bowl on a pottery wheel with golden sunset light streaming through a window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj2onY8SHtyqyFooVrCPKXLrMYeeGSf8NDMOMm09LGaOpiorWsGlMp0X6JosQ8-RZVEJoqhKCJmNdlSVsHE7m0nXKtjI3Rq3Cf2c9YFNcD6jiqylZczkd-QcaGGn_WGilTBv7hJcDFiplL6FYoIROiAQrtuPJ3PP1ioFIuxmOi01Au5BGI08BVghFPwMjMYYMPVw1MiLI2rhsAGVyZ7BoHGJ_KfsoCgmPLPlGCJ-hWLbSWXZjSRiD6-EdP3rPJhtLCYdffEDolV2E" />
              <div className="absolute top-4 left-4">
                <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">FREE</span>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-3">By: Makers Studio SG</p>
              <h3 className="text-2xl font-bold text-on-surface mb-3 group-hover-text-primary transition-colors">Sunset Pottery Workshop</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Create your own clay masterpiece as the sun dips over Sentosa. Materials and guidance provided.</p>
              <div className="flex items-center text-xs text-on-surface-variant font-medium gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>Oct 24, 5:30 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>Sentosa</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: Jewellery Pop-up */}
          <article className="group bg-surface-container-lowest rounded-DEFAULT overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(44,47,48,0.06)]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img className="w-full h-full object-cover" alt="Luxury jewelry display on minimalist white pedestals with soft shadows and elegant gold necklaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR3UTCBccC9cZR3979_Q0HB5PAf1eRj9xq_jndwJ-GhyZEXlHCskjTM9a2KaQdvPqz0jCXhjkG4awxzP6JIsnOpASwGdZNc_YIZqAPxCZ7NhTfnq0Sbyo1LyGsLlps8dzoZWXxipF_jwnnt44EBhLtxXzdigySGAXmj5-UpZJY8N3kQpB03b1ru7Opc6EuI3uBTF3d9auFrxbPXcvWJJ8dhDk-Xtd1TcRWt_8A-Kj5XjbAwSsEe1wm7h3y2vWTtJCsjn5xMSRPZfo" />
              <div className="absolute top-4 left-4">
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">$25</span>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-3">By: Aurum Luxe</p>
              <h3 className="text-2xl font-bold text-on-surface mb-3 group-hover-text-primary transition-colors">Demi-Fine Jewellery Pop-up</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Exclusive collection at Orchard Road. Personal styling available and first look at the Winter line.</p>
              <div className="flex items-center text-xs text-on-surface-variant font-medium gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>Oct 26, 11:00 AM</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>Orchard Rd</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3: AI Builders Weekend */}
          <article className="group bg-surface-container-lowest rounded-DEFAULT overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(44,47,48,0.06)]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img className="w-full h-full object-cover" alt="People collaborating in a modern tech hub with large glass windows and neon blue accent lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf_D7VKSMQKjPFPjjFGhIWXR_N_wGo7j1_BOMPItQYuLpJvR-eNKMiNwx8GVNktZtCHs-7hjP2AsJumBIajoirq0J6idRd5m-UrjqIW4NyNQPkui4ESMDQSr2oXNXsTG_zSzskXCw0HOOrwsxHf8Mg15Q_LgN9IprJZ4QnONC6rK3myJHHsSgwqQKQs08Bkgl_0oFl-qxBLhHj328mVzrAKZOzCy3nRheiaHp5mvT-h2Zp70r4wFFp7LcLMVIbMS4YEFaBEqbs7gU" />
              <div className="absolute top-4 left-4">
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">$45</span>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-3">By: Tech Hub Singapore</p>
              <h3 className="text-2xl font-bold text-on-surface mb-3 group-hover-text-primary transition-colors">AI Builders Weekend Mixer</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Connect with the brightest minds in tech at NUS Enterprise. Deep tech demos and networking.</p>
              <div className="flex items-center text-xs text-on-surface-variant font-medium gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>Nov 01, 6:00 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>Kent Ridge</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 4: Additional Editorial Context */}
          <article className="group bg-surface-container-lowest rounded-DEFAULT overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(44,47,48,0.06)]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img className="w-full h-full object-cover" alt="Table full of diverse gourmet dishes and artisanal cocktails at a dimly lit modern bistro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBECVKb08vshV75B-CUFwB0ks1MdJp9MJ_f2zh3KOLZYxaWDF1kNcqelHS7PgUFWfOySLNagYqqRwkmpOunLAJFCORqDynxKzlC6yVEZnwgcPbstLscpwccL7lxWQ5_6QdYZNPbX2LZnbXcT0MLnPUPJu_B_5kZMX9YYkkgd2tKcRu1uW5oIRrjA1i3ymae7ZqXS8nuldoK9w8XKGZMiZ-HyefgH3KWbuDq_JSt_Y016nBqh3decxDE_Mw4ow8ELJCoRy4YjIURJj8" />
              <div className="absolute top-4 left-4">
                <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">FREE</span>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-3">By: Gastronomy Guild</p>
              <h3 className="text-2xl font-bold text-on-surface mb-3 group-hover-text-primary transition-colors">Bespoke Cocktail Night</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">A curated journey through Singapore&apos;s finest botanical gins and small-batch bitters.</p>
              <div className="flex items-center text-xs text-on-surface-variant font-medium gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>Nov 05, 8:00 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>Keong Saik</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Pagination / Load More */}
        <div className="mt-20 flex justify-center">
          <button className="bg-surface-container-highest-30 hover-bg-surface-container-highest transition-colors px-12 py-4 rounded-full font-bold text-on-surface border border-outline-variant-20">
            Discover More
          </button>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="bg-surface-container-low mt-24 pt-20 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Head Out</h2>
            <p className="text-on-surface-variant max-w-sm mb-8">Your digital curator for the best experiences in the Lion City. We cut through the noise to bring you what matters.</p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined text-xl">chat</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li><a className="hover:text-primary" href="#">Featured Events</a></li>
              <li><a className="hover:text-primary" href="#">New Workshops</a></li>
              <li><a className="hover:text-primary" href="#">Tech Mixers</a></li>
              <li><a className="hover:text-primary" href="#">Community Board</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li><a className="hover:text-primary" href="#">List an Event</a></li>
              <li><a className="hover:text-primary" href="#">Partner With Us</a></li>
              <li><a className="hover:text-primary" href="#">Support</a></li>
              <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-outline-variant/10">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest text-center md:text-left">© 2024 HEAD OUT SINGAPORE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only Anchor) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-xl shadow-[0_-10px_40px_rgba(44,47,48,0.06)] border-t border-white/10 rounded-t-3xl">
        <a className="flex flex-col items-center justify-center bg-[#0052FF]/10 text-[#0052FF] rounded-full px-5 py-2 transition-all cubic-bezier(0.4,0,0.2,1) active:scale-95" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>explore</span>
          <span className="font-['Inter'] text-[10px] uppercase tracking-[5%] font-bold mt-1">Discover</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#595c5d] px-5 py-2 hover:opacity-80 transition-opacity active:scale-95" href="#">
          <span className="material-symbols-outlined">event_note</span>
          <span className="font-['Inter'] text-[10px] uppercase tracking-[5%] font-bold mt-1">Events</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#595c5d] px-5 py-2 hover:opacity-80 transition-opacity active:scale-95" href="#">
          <span className="material-symbols-outlined">bookmark</span>
          <span className="font-['Inter'] text-[10px] uppercase tracking-[5%] font-bold mt-1">Saved</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#595c5d] px-5 py-2 hover:opacity-80 transition-opacity active:scale-95" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[10px] uppercase tracking-[5%] font-bold mt-1">Profile</span>
        </a>
      </nav>
    </>
  );
}
