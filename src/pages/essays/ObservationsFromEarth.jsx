import React from 'react';
import { Link } from 'react-router-dom';

const ObservationsFromEarth = () => {
  return (
    <div className="min-h-screen font-mono relative p-8">
      <div className="max-w-3xl mx-auto bg-white/60 border border-gray-200 rounded-lg shadow-md p-8 backdrop-blur-md">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 block">← Back to Home</Link>
        <article className="prose prose-slate">
          <h1 className="text-3xl font-bold mb-2">Observations from Earth</h1>
          <p className="text-gray-600 italic mb-4">A longer post on a physically large subject</p>
          <div className="text-gray-600 mb-6">
            <p>By Jonatan Luther-Bergquist</p>
            <p>March 19, 2026</p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Tl;Dr — (but you should)</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Maritime persistent surveillance is a problem defined by three numbers: 361 million km2 of ocean surface, ~100,000 merchant vessels in transit at any time, and the speed of a ship at 15 knots - 667 km per day. Any vessel unobserved for 6 hours could be anywhere in a 160 km radius. Underwater vessels are even harder to detect or track due to physics.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We spent some time figuring out what it actually costs to watch the ocean. The short answer: it depends enormously on how you do it. A manned frigate costs about 10,000x more per km2 of coverage than a satellite. No single sensor works everywhere. The physics won't let you look at everything at once in high resolution - so you have to stack cheap wide-area systems on top of expensive close-range ones.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The market for autonomous maritime surveillance is somewhere between $2-5B/year and growing fast, driven by submarine cables getting cut, offshore wind farms needing protection, and NATO suddenly realizing that 4-6 frigates can't monitor the Baltic. The opportunity isn't in building another drone boat but in selling persistent ocean awareness as a service, priced against what navies currently pay for frigate patrols. That reframes a small hardware market into a much larger recurring one.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Backstory (skippable but adds to the mood)</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            I grew up swimming in the Seas of Kattegat and Skagerrak. Snorkeling before I could swim on my own, exploring the green murkiness of what felt like an infinite, secret world. I felt at home among the cliffs, the cold salt water spray, and the uninhabited islands as the only barrier to the real Ocean. The real Ocean featuring 30m waves, unknown isolation, creatures and distances unheard of. This world belonged to me and I to it. It was my own Narnia, just to dream of this.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            What made it magical was how restricted it was. To enter this world you needed to prepare, to dare and then to be comfortable about not knowing and not being in your own element. Your perspective in the water shifts from eye-level to floor level, assuming there are no waves, but in return you are flying on top of a pillar of glassy substance that carries you wherever you go. It's flexible enough that if you chose to you can split through it and let negative buoyancy work. Once you pass the equilibrium between compression and trapped air, you are pulled down and don't need to fight anymore to gain speed. Aerodynamics are now hydrodynamics and the way you hold yourself has immediate feedback on your speed.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            When you dive, you don't see the same way, colors are distorted and light reflects in weird places, if there is any at all. Looking up you see a mirror of the world you normally belong to. It's bright and warm, yet the pressure under water, and constant touch makes air seem so lightweight and fleeting. Just getting out to the place where there might be something interesting to see underwater meant either swimming or navigating on a boat, which in the Swedish Archipelago is quite treacherous (pre widely available GPS). Water is, as we know, conductive. Not just to electricity, but also to waves in the electromagnetic spectrum. Or more precisely, water molecules get easily excited by incoming photons. This makes a little water transparent and, slightly more, very opaque. In fact, so opaque they use it to great success to contain radiation in nuclear reactors, and also why you can't easily detect submarines.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Of course, as a 6 year old, detecting submarines wasn't my main priority. I just wanted to learn the secret passage to the sea. So I decided to become a marine biologist and started learning everything I could about dolphins. This didn't exactly pan out, as I later went into a much drier (pun) field of engineering physics. Fast forward about 20 years and I was snorkeling in one of the most frequent shark-attack waters on earth to spot wild dolphins. But that's another story.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We moved away from the sea, I started diving in pools and flooded silver mines (probably in hindsight not super healthy), until I moved back to the sea on my own as a 16 y.o.. I felt entirely at home in the water, so much so that my new family thought they'd lost me the first day at the water, during a precursor for the autumn storms that were to thrash the North Atlantic coast in Bretagne. I was just exploring the moving sand and rolling waves after a decade of calm waters. Finally coming up for air and putting my hand to my head, just to say "tout va bien".
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">60,000 Nautical Miles under the sea</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            In the years away from the sea, my favorite book growing up was "20,000 Leagues under the sea" by Jules Verne, which tells the story of a secretive submarine captain taking a professor captive and exploring the worlds oceanic environments. Unbeknownst to me, I was moving not far from Jules Vernes native Nantes about 180 years after he was born on a tiny island in the Loire. He excelled at mémoire (remembering things by heart and reciting them, which was a core skill of that time), latin, and geography. Captain Nemo and Professor Aronnax explore creatures and treasures hidden in the sea unheard of until then. Likely based on myths and seafarer stories from the docks. It was written in 1870, before submarines were really a thing, and when diving equipment was limited to diving bells and surface air supplied through tubes to massive metal helmets with glass windows.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The vessel that they travel in, the Nautilus, was an electric sub, cigar shaped and about 70m long x 8m in diameter. Verne intentionally or accidentally actually didn't violate too many physical laws or engineering principles when designing it. It's surprisingly feasible. It would have a displacement of about 1,500 m3 sea water meaning it would weigh around 1.5e6 kg. Nautilus traverses the Mediterranean (~2,000 km in Verne's geography) in about forty‑eight hours, implying an average speed on the order of 20–25 knots depending on exact endpoints. It's fully electric and probably has to produce around 5MW in shaft power at that speed. It's said to run on some sodium-mercury batteries, with days and days of range without charging. These batteries or engines didn't exist at the time of Verne's writing, one might add. But to produce such power, you'd likely need O(200m3) worth of batteries, and about 200t worth of batteries. Which could plausibly fit inside a 70x8m cylinder and could be carried weight-wise! You'd need about 300-600Wh/kg on a system level, and about 10x what that type of batteries could do at the time.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Now the fun part is that a nuclear submarine has virtually unlimited range and about 3-5x the shaft power of Nautilus. We've outdone Verne's imagination. The sea monsters are human made, once again.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Maritime surveillance economics (skip to here)</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            If you skipped the preamble about 19th century sci-fi and dolphins, welcome back! You're alright.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Recent conversations I've had, as well as naval warfare events I'm planning (as you do), as well as recent events in the Strait of Hormuz, plus pending events in the GIUK gap, Baltic Sea infractions, a pending South China Sea conflict, etc. had me think:
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 italic">
            What is the most cost-effective way to detect what's going on everywhere on the oceans, and maybe below?
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Why this matters</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Maritime monitoring and surveillance was around ~$24-26B in 2024, but it only takes fairly little disturbance at sea to significantly disrupt entire industries. A few pirates with drones. A couple of jerky misjudgments on demand/supply of household electronics during a pandemic. A single nuclear sub. A few "fishing" vessels dragging their anchors a few hundred times over fiber optic cables.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            That last one isn't hypothetical. There's currently something like 1.2 million km of submarine telecom cables in the water, and another $13B worth planned for 2025-2027. This is driven by the hyperscalers and Meta mostly, with insane communications demand. The bandwidth is simply unbeatable, and we're getting better and better at it. There are people working on building underwater power generators to avoid having to install land-based repeaters, and it looks like a large market. (If you are working on this or something related, come talk to us!)
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond cables, historically the sea has been a fairly high leverage way to conquer new areas. This funnily enough also has a physics explanation, as transporting heavy, bulky things on water requires much less energy than on roads or rails. In fact more than 80% of the worlds goods use maritime transport today! With developing economies and Asia growing massively in that domain, while the rest are declining.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Who's building</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            The US just backed a maritime-only focused VC called "Mare Liberum" after the 1609 treatise by Hugo Grotius arguing for free access to the South China Seas. Back then over the Portuguese, not presumably over the Chinese themselves.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            On the defense side, there's a growing wave of naval startups - Saronic (~$700M raised), Kraken Technology Group (UK/NATO contracts), UForce (whose Magura drones have been instrumental in taking out the Russian navy in the Black Sea), plus HavocAI, Vatn Systems, Toloka, Nautrik, Polar Mist, Ray Systems, Regent Craft, and others. Helsing and Anduril have their own products too. Lots of capital deployed, unclear who's made money yet.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The proof point that these matter: at a recent NATO exercise, REPMUS, Ukrainian USVs were pitted against allied naval vessels armed to the teeth. NATO forces didn't even have time to notice the opponent was there before they were hit. A real confrontation would not have ended well for NATO.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            On the civilian/dual-use side, companies like Hawkeye360, Seasats, and Saildrone started with commercial missions but have been pulled toward defense. Newer ones are going after seabed mapping, hull cleaning, or offshore platform maintenance. Saildrone set up its EU headquarters in Denmark after the Danes invested ~$25M. The dual-use trajectories are converging.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Our approach</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            So assuming there is demand for persistent monitoring of maritime environments, we need to optimize for one variable: cost per km2-hr of monitoring. In our findings, these vary with over 3 orders of magnitude across platforms. Mainly due to operating constraints and clear superior reach of certain technologies. Manned frigates are just insanely expensive to build and to man and operate. It feels like absolute insanity that these are still being built to the extent they are, and still people complain about our ship building capacity. At the same time, we need something to carry all our drones and USVs and fancy unmanned systems as they won't have the range needed to fight somewhere in the middle of the pacific.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We built an interactive page to test our own assumptions: Maritime Economics. Check it out, and if you're extra nerdy, go to the physics section.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            If you're against vibe coded things by principle, feel free to skip it. Now back to the carefully handcrafted text:
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">The big physical problem</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Is that the seas are huge. Like 361 million square km or so big on the surface. Naval forces probably cover &lt;1% of that at any given time. Which gives boats and sneaky dolphins way too much space for mischief and play. Enter AIS (automatic identification system), which is an identification system for ships. Ironically it's not so automatic as it should be, as it can easily be turned off. And even if something is detected, the sea is so huge that doing something about it, intercepting or so, becomes an even greater challenge.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            So the sea is vast, isn't nice to electromagnetic fields, and generally deteriorates most mechanical systems. In summary, this is why it's hard. There's an information theoretic "principle" which becomes apparent when you try to design a system that looks everywhere at once at high resolution. You can't look everywhere at once, with high resolution. The explanation is on the physics page of the Maritime Economics dashboard we built!
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">What about radar?</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Radar at sea becomes an even bigger pain than normal radar, because all the water starts making the radar waves bounce, leading to low signal-to-clutter (SCR) ratios. It's "clutter-dominated" (insert joke about my tidiness) meaning the amount of background noise is determining if you find something rather than receiver sensitivity, on a whole. Unless it's a very calm day at sea, it becomes impossible after some distance to detect anything with a low false positive rate. Finding a periscope at sea is like finding a sparrow in a thunderstorm.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The radar range equation governs all active microwave sensor performance. The range scales as R^4, which means that detecting something 2x further away requires 16x the power. So just making bigger antennas quickly becomes impractical. The maximum detection range R_max for a monostatic radar is:
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 pl-4 border-l-2 border-gray-300 italic">
            R_max = [ (P_s · G² · λ² · σ) / ((4π)³ · P_Emin · L_total) ]^(1/4)
          </p>

          <p className="text-gray-700 leading-relaxed mb-2">Where:</p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>P_s = Transmitted peak power (W) - typical maritime surveillance radar: 25 kW to 1 MW</li>
            <li>G = Antenna gain (dimensionless, typically expressed in dBi)</li>
            <li>λ = Wavelength (m), inversely related to frequency: λ = c/f</li>
            <li>σ = Radar cross section of target (m²)</li>
            <li>P_Emin = Minimum detectable received power (W), set by receiver noise floor</li>
            <li>L_total = Total system losses (atmospheric attenuation + hardware losses)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            The R^4 dependence is the defining constraint: doubling detection range requires a 16x increase in transmitted power or antenna aperture. This creates a fundamental size/weight/power tradeoff for airborne and space-based platforms. Switching from Gaussian to K-distribution statistics - which occurs at high resolution or heavy sea states - degrades detection performance by up to 12 dB when using standard pulse-to-pulse integration. This means systems designed for calm-sea performance can catastrophically underperform in heavy weather.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            There are interesting ways around some these limitations, and ways that engineers try to limit the radar cross section (RCS) of their vessels. My favorite type of radar is probably so-called over-the-horizon radar (OTHR), which uses the earths ionosphere to bounce radar waves off of to extend the range and avoid some sea surface scattering. This means ionospheric variability - diurnal, seasonal, solar cycle, and storm-induced - creates significant temporal uncertainty in system performance. Frequency management systems must continuously adjust operating frequency (typically sweeping 4-30 MHz) based on real-time ionospheric sounding. It also means OTHR have blind spots due to the multi-hop nature.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            There's a non weather-dependent type where we instead bounce polarized RF off of the sea surface, called Surface Wave Radar (HFSWR), which is useful for persistent coastal detection.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            On a whole, though, these radars are massive and enormously expensive. For reference, a single OTHR cost OOM hundreds of $M, in capex and annual opex in the tens of millions. And their coverage is good but resolution is not great, e.g., for small vessels. Canada recently bought one $4B OTHR system from Australia to cover the Arctic…
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">What about optical sensors?</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            About 67% of the sea is covered in clouds at any given point in time. So pure optical is hard/inefficient. This is why SAR (Synthetic Aperture Radar) has become the real workhorse for maritime surveillance from space - it works through clouds, at night, and produces images good enough to detect ships. Companies like ICEYE, Capella, and Umbra are deploying constellations of small SAR satellites at ~$3M per unit. At 0.25-1m resolution you can identify vessel type, and wide-area scan modes cover 100x100 km per scene. Sentinel-1 does 400 km swaths at 40m resolution. The tradeoff between resolution and swath width is physics, not engineering - same information-theoretic constraint from above.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            For the visible/IR spectrum, things get more interesting but also more limited. Water vapor absorbs certain IR wavelengths aggressively, which makes it difficult. Interestingly, MWIR (3-5 um) actually outperforms LWIR (8-12 um) in humid maritime conditions, because of precisely this. And it works best for things that have a thermal signature, like ship engines. Using the Johnson criteria and NVTherm modeling, we can figure out practical detection ranges for maritime vessel targets using MWIR (640x512, 330 mm lens):
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Large vessel (heat signature, 10 m target extent): Detection to 15-30 km</li>
            <li>Small vessel (5 m target extent): Detection to 8-15 km</li>
            <li>Human in water: Detection to 2-4 km</li>
            <li>Range degrades sharply in fog, rain, or high humidity - often to &lt;1 km in bad conditions</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            Thermal is interesting, but of course there are countermeasures. Submarines running hot engines cool down their exhausts before ejecting them so no hot bubbles rise to the surface.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            From space, optical constellations like Planet (~200 satellites, 3-5m resolution, up to 12 passes/day) and Maxar WorldView Legion (30 cm resolution, 15 revisits/day) can image ships in clear weather. But "clear weather" is the catch - two thirds of the time you're looking at clouds. This is why SAR, not optical, is what actually finds dark ships today. The intelligence companies doing AIS anomaly detection (Windward, Global Fishing Watch) correlate SAR detections with missing AIS signals to flag vessels that have gone dark. It's clever, but it's only as persistent as the satellite revisit rate allows.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We're still limited by the information theoretic principle of swath vs. resolution tradeoff from above. If we're closer to the earth, we can have higher resolution but can't get good coverage. If we're using satellites, high resolution forces narrow swaths. No amount of engineering budget changes this - it's the space-bandwidth product doing what the space-bandwidth product does.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Using water as a lens</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Importantly, since radar doesn't work under water, we need its slightly cooler cousin who only listens to vinyl (analog only baby), sonar. It's effectively like radar, but instead of RF emissions, you emit sound (vibrations). Since speed of sound in a medium depends on the temperature and pressure of the medium, and those two things differ in water depending on depth, there's a phenomenon called SOFAR, or SOund Fixing And Ranging. It's essentially using a depth range where the sound bounces cylindrically instead of spherically, leading to a ~30dB advantage. It's usually 600m-1000m but depends on the environment. There it's easier to detect subs or things under water, but also much easier to communicate between vessels.
          </p>

          <p className="text-gray-500 text-sm italic mb-4">
            Adapted from Munk et al., 1995 via dosits.org/science/movement/sofar-channel/sound-travel-in-the-sofar-channel/
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Still, sound degrades very quickly under water, which means detection at distance becomes a real problem, especially when someone tries to avoid detection by going electric or generally masking their sound signature. So if you've played around in the sonar detection section of the Maritime Economics page, you've probably found it pretty hard to detect a sub.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Still, in the SOFAR, sound can travel thousands of km underwater, whereas radar is horizon limited, at least. Unless it's OTHR of course.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Active sonar transmits a pulse and listens for the echo. The sonar equation for active detection:
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 pl-4 border-l-2 border-gray-300 italic">
            SL − 2·TL + TS − (NL − DI) ≥ DT
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The critical difference: 2 · TL - the signal must travel to the target AND back, doubling the transmission loss in dB. This means active sonar detection range is always shorter than passive for the same source level. Active sonar also faces reverberation - acoustic energy scattered by the ocean surface, bottom, and volume. In shallow water, reverberation often exceeds ambient noise, making active sonar reverberation-limited rather than noise-limited.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">The fancy methods</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            If we think specifically about detecting modern submarines, there are a bunch of fun ways people have thought about to detect them. Creativity is the limit here, really. A submarine is something very very heavy, moving quite a lot of water, making some sounds, and probably disturbing whatever is around it. How can we detect it?
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Modern diesel-electric and AIP submarines have reduced source levels by 30-40 dB compared to Cold War boats:
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            A 30 dB reduction in source level translates to a 1,000x reduction in acoustic power. Detection range scales roughly as 10^(ΔSL/20) for cylindrical spreading - so a 30 dB quieter submarine is detectable at roughly 1/30th the range… Not good for detection.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Subs are heavy! So that means we could sense an increase in gravitational force near it, right? This is called Gravity Gradiometry. A sub weighing 2,000-8,000 tonnes does create a gravitational anomaly, but unfortunately that anomaly is about 1,000x smaller than the sensitivity of modern gravimeters. So either subs need to get a lot bigger, or we need to make quantum gravimeters a reality.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Subs are metallic chunks. That should be magnetic, right? A submarine's steel hull does create a magnetic dipole anomaly in Earth's field. The dipole field falls as 1/R^3:
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 pl-4 border-l-2 border-gray-300 italic">
            B_anomaly ~ (μ₀ · m) / (4π R³)
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            For a submarine with magnetic moment ~10^6 A*m^2 and a magnetometer sensitivity of ~0.01 nT we get:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Detection range: ~500m-1km laterally</li>
            <li>Requires direct overflight at low altitude (&lt;300m)</li>
            <li>Used by P-8A, P-3C, and ASW helicopters for final localization</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            I've heard that there are places dedicated solely to the demagnetization of submarines though, so this might not work as well.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            This could be avoided if submarines were built outside of a magnetic field completely, like in space, but that has different difficulties attached to it. Even so, when the metal moves through Earth's magnetic field, it accumulates a temporary magnetic component that changes with direction. Modern submarines also have built-in degaussers, which are essentially coils built into the hull to counteract magnetic fields.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Submarines should make waves underwater, right? A submarine moving at depth creates detectable surface signatures:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Kelvin wake: V-shaped surface wave pattern (half-angle 19.5 degrees) from pressure wave at hull</li>
            <li>Internal waves: Displacement of density layers, potentially visible in SAR as modulated surface roughness</li>
            <li>Bernoulli hump: Local sea surface height increase above the submarine (~mm scale)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            SAR satellites can theoretically detect internal waves from submarines at periscope depth (30-50m). Operational capability is claimed by several programs but unconfirmed in open literature. The physics is marginal - the signal is comparable to natural internal wave amplitudes.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            When it moves it should stir up organic matter from depths, right? In waters with high dinoflagellate concentrations, a submarine's passage mechanically stimulates bioluminescence. This creates a glowing wake visible to sensitive airborne EO sensors at night. Detection ranges: 1-5 km from directly above. Limited to specific ocean regions and seasons. Not operationally reliable. Same applies to thermal mixing from different temperatures at different depths. Not a big enough temp diff to measure.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            All of these non-acoustic methods share the same problem: they're either too short-range to search with (MAD), too insensitive to work (gravity), or too dependent on perfect conditions (wake, bioluminescence). Acoustics will remain the primary way to find subs for at least another decade.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            None of these methods alone solves the problem. So instead of asking which sensor is best, the right question is: what does each one cost per unit of ocean monitored?
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">So what does it cost?</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            All of these physics constraints translate into wildly different price tags for the same output: knowing what's going on in a patch of ocean. We normalized everything to cost per km2-hour of persistent coverage and the range is absurd. More than three orders of magnitude:
          </p>

          <p className="text-gray-500 text-sm italic mb-4">
            (The original post includes a table of cost per km²-hour across platforms. As the author notes: "Substack sucks at tables.")
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Reading this table top-to-bottom reveals that it isn't a market failure we don't have persistent surveillance - it's all physics. Cheap persistent coverage tells you very little (OTHR: "something is somewhere"). Expensive close-range platforms tell you everything (boarding a vessel) but cover almost nothing. The design question isn't "which platform" but "how to stack them."
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The optimal architecture is likely nested: wide-area cueing from satellites and OTHR triggers HALE UAVs, or HAPS or SAR tasking, which cues USVs or MPA to investigate, which cues a surface vessel to intercept, which could cue UUVs. Each layer is using physics it's good at and handing off to the next. The alternative - patrolling a million km2 with frigates - costs roughly $5B/year in operating costs for the US surface fleet alone, and still leaves &gt;99% of the ocean unobserved.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">The small boat market that isn't small</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Austin Gray, a former Navy officer and now co-founder of Blue Water Autonomy, wrote a piece that's making some very good points. His thesis: the small USV market is tiny (~$120M/year) and already saturated. He counts 20 chokepoints, estimates ~1,190 USVs needed (330 sentries + 860 speedboats), subtracts the ~600 already under contract, and concludes there's only ~$117M/year left if you refresh every 5 years.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            He's right about the sea denial market. If you're building speedboats to blow up (a la Ukraine), MAPC already has the Replicator production contract at 32/month, Saronic has hundreds of millions in bookings, and there isn't room for a fifth entrant. That market is spoken for. Assuming those companies are able to fulfil the requirements of working products...
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            But he misses the monitoring market because he counts USVs like inventory rather than like patrols.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            A renewably-powered sentry USV (Saildrone, SeaSats, OceanAero) cruises at 2-3 knots. It covers about 50-70 km/day. To persistently monitor the GIUK Gap (~300 km wide, 200 km deep), you need about 48 USVs on station simultaneously. But they rotate - transit to station, time on station, transit back, maintenance. At 67% utilization, you need ~72 in the fleet just for one gap. Gray's model puts maybe 10-15 there.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Scale this across the six NATO priority theaters (GIUK, Baltic, Mediterranean, Black Sea, North Sea, Arctic) and you get ~336 sentry USVs for NATO alone. Add the Indo-Pacific, Gulf, and allied waters and you're at 650-700 globally. That's 2x Gray's estimate, and the refresh rate isn't every 5-10 years like hardware - it's continuous. Sensors need upgrading every 3-5 years, hulls take a beating, and you lose 5-10% annually to weather and the occasional unfriendly interaction. Effective annual fleet replacement: ~22%.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            So the monitoring hardware market is maybe $77M/year globally. Still not huge. But that's the wrong frame.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Don't sell boats. Sell awareness.</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            The right comparison isn't "what does a boat cost" but "what does it cost to know what's happening in this piece of ocean."
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Today, NATO pays for this knowledge with frigates. A Constellation-class frigate costs $63-130M/year to operate. Its radar covers maybe 1,250 km2 around it. For persistent coverage of the Baltic cable corridors (~10,000 km2), you'd need 8 frigates on continuous rotation. That's $500M-1B/year. To monitor cables.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            50 sentry USVs covering the same area as a service? $25-40M/year. One-twentieth the cost, genuinely persistent (24/7/365), and you don't need to find 2,000 sailors to man them.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The pricing implication is clear: don't price against other USVs. Price against the frigate. If your monitoring service costs $15,000-25,000/day for 5,000 km2 of persistent coverage, you're charging 10-15% of what a frigate costs for coverage a frigate literally cannot provide. The customer saves money AND gets better coverage. Those are the kinds of trades that close.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            This reframes the addressable market from Gray's $117M/year hardware business to a $200-350M/year recurring service business anchored against NATO maritime patrol budgets. Different game entirely.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Does NATO have the budget?</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Yes. And it's getting bigger fast.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            NATO defense spending hit 2.76% of GDP in 2025 - first time all 32 allies met the old 2% floor. At the June 2025 Hague Summit, they set a new target: 5% of GDP by 2035. That's not a typo. Five percent. For context, the US is around 3.4% and Europe was at 1.4% as recently as 2014.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            European allies + Canada collectively spent $482B in 2024. EU equipment investment grew 42% in a single year to EUR 106B. Germany went from a geopolitical punchline to spending $107B on defense. Norway is dropping $55B through 2036 on 5 new frigates, 5 submarines, and 28 other vessels. The UK's Royal Navy equipment budget jumped 41%.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The money is there. The question is where it goes.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Most of it is still going to traditional platforms. Germany's F126 frigate program is EUR 10B for 8 ships. France just greenlit a EUR 10.25B aircraft carrier. These are necessary but they're not solving the monitoring problem. You can't have a EUR 1.25B frigate babysitting a fiber optic cable 24/7.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The encouraging signal is that NATO is already building autonomous monitoring at small scale. Task Force X Baltic launched in late 2024 with 8 nations contributing USVs. By mid-2025 they had 50-60 deployed with a target of ~100. Baltic Sentry launched in January 2025 specifically for undersea cable protection. The US stood up its third USV squadron. NATO DIANA selected 150 innovators with maritime autonomy as an explicit challenge area.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The spending wave from 2.76% to 5% GDP creates roughly $100-150B/year in new allied defense spending over the next decade. If even 1% of that increment flows to autonomous maritime monitoring, that's $1-1.5B/year in new market by 2030.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">The awkward part about selling to the US Navy</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            There's a catch, and Gray &amp; Gray document it painfully well in "Startups &amp; Sea Power": the US Navy is structurally hostile to startups. Only 4% of top defense startup revenue comes from the Navy (vs. 31% Army, 37% Air Force). The Navy has spent $7B on flexible OTA contracts vs. the Army's $53B. 71% of NAVAIR contracts are sole-sourced. Only 8% of NAVSEA contracts are even theoretically accessible to a company without an existing relationship and a security clearance.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Navy FY25 budget for USVs? $172M. For shipbuilding? $36B. That's a 200:1 ratio of old to new.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            So if you're building a maritime monitoring company, the US Navy is probably your worst first customer. Not because they don't need it - they clearly do - but because the institution is optimized to buy expensive, exquisite, manned platforms from incumbents who've been doing this for 50 years.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            European NATO allies are the better wedge. They're scaling budgets 40-70% from a lower base, they have acute monitoring gaps (ask anyone in the Baltic states about cable security), and their procurement systems - while not perfect - don't have the same institutional antibodies to new entrants. Denmark invested $25M in Saildrone's European HQ. Norway is planning 28 new vessels. The demand signal is there. If you get in front of it, you might not need the US Navy at all for the first few years.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">What it means</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            The ocean is vast, hostile to sensors, and increasingly contested. The physics is hard but well understood. The economics are clear: manned platforms are 10-100x more expensive per unit of awareness than unmanned alternatives. The budgets are growing. The technology works - Ukraine proved that small USVs change the calculus at sea, and Saildrone proved you can keep a drone on station for months.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The opportunity isn't in building another speedboat. It's in building the company that makes "what's happening in this patch of ocean" a commodity service priced at a fraction of what a frigate costs. The winner will own the operational complexity - keeping 50-300 USVs at sea, processing the data, delivering actionable intelligence - and price it as surveillance-as-a-service against naval patrol budgets.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We're keeping a close eye on this space. If you're building something here, or thinking about it, and have a product or technology, you should reach out. We're also still building the interactive tools - the Maritime Economics dashboard and physics page are live and probably have bugs. Have a poke around and let us know what you think.
          </p>

          <p className="text-gray-700 leading-relaxed">
            And if you ever happen to be snorkeling off the Swedish coast, keep an eye out for submarines. They're sometimes easier to find than you'd think.
          </p>
        </article>
      </div>
    </div>
  );
};

export default ObservationsFromEarth;
