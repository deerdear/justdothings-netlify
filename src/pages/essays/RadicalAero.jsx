import React from 'react';
import { Link } from 'react-router-dom';

const RadicalAero = () => {
  return (
    <div className="min-h-screen font-mono relative p-8">
      <div className="max-w-3xl mx-auto bg-white/60 border border-gray-200 rounded-lg shadow-md p-8 backdrop-blur-md">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 block">← Back to Home</Link>
        <article className="prose prose-slate">
          <h1 className="text-3xl font-bold mb-2">Radical Aero</h1>
          <p className="text-gray-600 italic mb-4">Stratospheric, autonomous airplanes to provide connectivity and imagery services.</p>
          <div className="text-gray-600 mb-6">
            <p>By Alexander Lange</p>
            <p>April 24, 2024</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Radical is an aerospace company building autonomous, solar-powered airplanes to offer decentralized computational services from the stratosphere. The fixed wing airplanes can be launched from spaceports and airports with special allowances and negligible launch costs for rapid deployment. Once launched, the aircrafts spiral themselves upwards to an altitude of 20km where they can either hold their position or manoeuvre according to the operator's needs without maintenance for many months. The company's first products will be focused on connectivity services and high resolution imagery.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            At Radical, we are driven by the goal of revolutionising how we connect and monitor our planet. Our high-altitude, solar-powered aircraft are engineered to operate autonomously in the stratosphere, flying over targeted areas for months without the need to land. This capability allows us to provide continuous cell service, collect high-resolution imagery, and carry crucial weather and climate sensors, all while maintaining zero emissions. The potential to transform telecommunications, environmental monitoring, and many other fields is immense and exciting.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            James Thomas and Cyriel Notteboom founded the company after contributing to the frontiers of aeronautics at Amazon Prime Air as a Research Scientist and Senior Hardware Engineer respectively. Today, they have been announcing their $4.5M Series Seed fundraise led by Scout Ventures with participation from Inflection and Y Combinator.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our thesis</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            High altitude platforms have several advantages over LEO satellites that are rooted in their comparatively cheap launch costs, flexible and upgradeable payloads, 25x shorter distance to earth and their exceptional manoeuvrability.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Cell towers in the sky:</strong> HAPS are operating at only 20km altitude (vs. 500km for LEO satellites) and can hover above ground what optimises their ground coverage footprint with line of sight coverage over 50km+ whereas thousands of satellites would be needed in orbit for similar coverage. HAPS also have much more attractive signal attenuation (loss of signal strength over distance) and 30x less latency compared to LEO satellites. Those features allow them to transmit signal directly to hand-held devices without gigantic antennas and receivers like e.g. Starlink does. Constellations of airplanes could be meshed to balance load and to increase coverage and data transmission.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Eyes in the sky:</strong> similarly, image resolution from the stratosphere can be sub-10cm GSD (ground sample distance) with a lens diameter of only 12.2cm for visible light at fixed resolution vs. a lens diameter of 3.05m (25x larger) from orbit. The high maneuverability allows for live video coverage and near real time data transmission through a HAPS link or to a ground tower. Satellites on the other hand would have only temporal data transmission (7min for every 90min) and needs radiation hardened data storage coming at much higher prices.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Despite many failed attempts of creating similar aircrafts in the past we believe that the time is now because solar cell costs came down 10x over the last 10 years and battery performance came up from 80 wh/kg to 350 wh/kg amongst other enabling technologies accelerating drastically (nano coatings for wings; autonomous flight systems etc.).
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            If Radical Aero is successful in delivering a high altitude compute platform it can become a large, dual use company providing compute services with strong network effects through a software ecosystem and constellation meshing.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The team is hiring.
          </p>
        </article>
      </div>
    </div>
  );
};

export default RadicalAero;
