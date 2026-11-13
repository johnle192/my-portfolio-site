import Contact from './Contact';

export default function About() {
  return (
    <div className="about-container">
      <div className="flex flex-col items-center text-center">
        <img
          src="/images/john.jpg"
          alt="John Le"
          className="h-36 w-36 md:h-44 md:w-44 rounded-full object-cover shadow-md"
        />
        <h1 className="mt-6 font-display-small text-display-small font-bold">
          John Le
        </h1>
        <div className="mt-2">
          <Contact />
        </div>
      </div>
      <h2 className="mt-10 font-headline-small text-headline-small">
        About Me
      </h2>
      <div className="about-content mt-3 font-body-large text-body-large leading-relaxed">
        Hi there, I'm John and this is my website. I'm a self-taught developer
        currently based out of Seattle, Washington. I was born and raised in
        Wisconsin and went to college at Northwestern University. In my spare
        time, I like to lift weights, dance salsa, bake cakes, and play with my
        dog, Danny.
      </div>
    </div>
  );
}
