import React from 'react';
import { Link } from 'react-router-dom';

const EssayOne = () => {
  return (
    <div className="min-h-screen font-mono relative p-8">
      <div className="max-w-3xl mx-auto bg-white/60 border border-gray-200 rounded-lg shadow-md p-8 backdrop-blur-md">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 block">← Back to Home</Link>
        <article className="prose prose-slate">
          <h1 className="text-3xl font-bold mb-6">Address to Machine Offensive 2.0</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            I wish I could be with you in person today to share the excitement and see the initial results of your hard work. I will not take away too much of your precious hacking time.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            My name is Jonatan Luther-Bergquist and I am one of the co-founders of the European Defense Tech Hub, where we run hackathons to defend the sovereignty of Europe through innovation. I'm also a venture investor at Inflection, where we invest into sovereign compute companies.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            My goal is that I meet each and everyone of you who continue building after the hackathon in 2025, in person. I'll tell you where you're invited in a second, but it should hopefully be worth your time and attention.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Ukraine has shown the world something incredible: technology is the new frontline. We knew it already since WW2, but the nature of innovation in defense looks vastly different from how it did in 1945. Arguably, the most important and impactful technologies are not multi-billion dollar projects built in ivory towers by defense primes, but rather by hackers in garages.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Your brains are the most important weapons. The algorithms you develop protect our sovereignty. Every piece of code you write here could save a life, protect a country, or change the entire game.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            And it's not just for Ukraine. Innovation needs to change in the rest of the West too. For the next 30 years, European defense departments and militaries will try to reproduce the rate of innovation you have in Kyiv. Odds are, if you're where you are today, working on protecting our democracies, you know better than almost everyone how to build what we need.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The best projects aren't just getting applause and prize money. What we as Europe need isn't more hackathon projects, it's companies that scale. Capitalism has proven to be the most efficient way of organizing our economy, even in China a form of capitalism helped them overcome extreme poverty and become a world power. So if you want your technology to make a difference, you will need to build a real company that can hire people, set up factories and deploy technology.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The path from the garage, or hackathon, to the battlefield is what is different in Ukraine to the rest of the world, and what can help Ukraine win. To build a company that can serve Europe will require scale and resources.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We want to support you in building that company through EDTH and Inflection. Through mentorship, funding, networks and global perspectives.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            This is your chance to turn an idea into something that protects people and our democracies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The invitation:</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            I run the European Defense Tech Hub—a group that's all about turning brilliant ideas into real-world tech that makes a difference.
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>3 hackathons this year, with 350 people in total, in Munich, Copenhagen and Paris</li>
            <li>Why are we doing that? Not because we love hackathons, but because we saw the need to put the best and most brilliant minds on the missions that will decide the future of Europe</li>
            <li>Look around you. This isn't just another hackathon. This is where innovation meets survival. You're not just coders or engineers—you're defenders of something bigger than yourself.</li>
            <li>I want to invite all of you to come to Munich for the next edition of our hackathons, in conjunction with the MSC, one of the largest conferences around world security. We will do our best to put the most innovative projects in front of the decision makers of the world and show them what hackers in garages can do</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            My second job is for what happens after the hackathon: I'm a partner at Inflection - an early stage venture capital firm investing into sovereign computation
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>If you are building a company which enables more, or securer compute for protecting the West</li>
            <li>If you're building a company which enables better ways to get data in and out of compute systems</li>
            <li>We will help you make that happen by backing you with capital, networks and insights</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            I hope to see you in February in Munich or before that you can reach out to talk about how you can change the course of Europe.
          </p>
        </article>
      </div>
    </div>
  );
};

export default EssayOne;