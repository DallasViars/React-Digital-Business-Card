import React from "react";

export default function MainContent() {
  return (
    <main className="main">
      <section className="main__section">
        <h2 className="section__heading">About</h2>
        <p className="section__text">
          I am a customer service professional with 20 years of customer-facing experience. For the last 3 years I have been on a path of teaching myself Frontend Web Development utilizing learning platforms Scrimba, FreeCodeCamp, and others. Watching my code come to life as websites on my screen fills me with joy. 
        </p>
        <p className="section__text">
          Accessibility is something I hold close to my heart as I believe everyone should be able to use whatever websites they wish to, regardless of any limitations they may have. I start with a mobile-first responsive web design using semantic HTML. I use screen readers, Lighthouse, the WAVE Evaluation tool, and other tools to ensure my sites function even if you can't see well, or you have a hard time using the mouse or keyboard.
        </p>
      </section>
      <section className="main__section">
        <h2 className="section__heading">Interests</h2>
        <p className="section__text">
        When I'm not coding I enjoy playing various types of games like Settlers of Catan, Star Realms, Codenames, and Boggle. I love listening to audio books and my favorites are in the Guild Codex universe by Annette Marie. I enjoy solo trips to restaurants, movies, or hiking trails. I can often be found in the kitchen baking brownies, blondies, or pies (especially Lemon Meringue pie!) (and tidying up my messes). 
        </p>
      </section>
    </main>
  )
}