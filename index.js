/**
 
 Copyright 2019 Koti Syamala.
 
*/

'use strict';
var regex = /(<([^>]+)>)/ig; 
const SPEACH_START_TAG = "<speak>";
const SPEACH_END_TAG = "</speak>";

const BLACK_HOLE_LAUNCH_AUDIO  = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/Mother_ship_1.mp3\" />";
const SPEACH_OUTPUT_START_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/sci-fi_explosion.mp3\" />";
const SPEACH_OUTPUT_END_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/Sc-Fi_intro.mp3\" />";
const STOP_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/Sound_Fx_Sci-fi_No1.mp3\" />";

//space audio files
const SUN_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/the_Sun.mp3\" />";
const MERCURY_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/Mercury.mp3\" />";
const VENUS_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/Venus.mp3\" />";
const EARTH_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/EARTH.mp3\" />";
const EARTH_MOON_APOLLO_CIRCLES_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/Apollo_circles_MOON.mp3.mp3\" />";
const MARS_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/Mars_sound.mp3\" />";
const JUPITER_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/Jupiter_sounds.mp3\" />";
const SATRUN_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/Saturn.mp3\" />";
const SATRUN_RADIO_WAVES_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/saturn_radio_waves.mp3\" />";
const URANUS_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/Uranus_and_Uranus_rings.mp3\" />";
const NAPTUNE_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/Neptune.mp3\" />";
const PLUTO_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/Pluto.mp3\" />";
const KEPLAR_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/kepler_star.mp3\" />";
const KEPLAR_2_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/kepler_star_2.mp3\" />";
const BLACK_HOLES_COLLIDE_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/space_sounds/two_black_holes_colliding.mp3\" />";

const BREAK_1S = "<break time='1s' />";
const HELP_SPEACH = "You can ask tell me about black hole! or get me a fact about black hole. or What Would Happen If You Fell into a Black Hole? or What's STEPHEN HAWKING theory? or play some planet sounds? or What happens when black holes collide? or what are Frequently asked questions about black holes?";
const MORE_HELP_SPEACH = " Want to know more ? " + HELP_SPEACH;
const BLACK_HOLES_COLLIDE_TEXT = "The sign of a truly great scientific theory is by the outcomes it predicts when you run experiments or perform observations. And one of the greatest theories ever proposed was the concept of Relativity, described by Albert Einstein in the beginning of the 20th century. In addition to helping us understand that light is the ultimate speed limit of the Universe, Einstein described gravity itself as a warping of spacetime. He did more than just provide a bunch of elaborate new explanations for the Universe, he proposed a series of tests that could be done to find out if his theories were correct. One test, for example, completely explained why Mercury’s orbit didn’t match the predictions made by Newton. Other predictions could be tested with the scientific instruments of the day, like measuring time dilation with fast moving clocks. Since gravity is actually a distortion of spacetime, Einstein predicted that massive objects moving through spacetime should generate ripples, like waves moving through the ocean. Just by walking around, you leave a wake of gravitational waves that compress and expand space around you. However, these waves are incredibly tiny. Only the most energetic events in the entire Universe can produce waves we can detect. It took over 100 years to finally be proven true, the direct detection of gravitational waves. In February, 2016, physicists with the Laser Interferometer Gravitational Wave Observatory, or LIGO announced the collision of two massive black holes more than a billion light-years away. Any size of black hole can collide. Plain old stellar mass black holes or supermassive black holes. Same process, just on a completely different scale. Let’s start with the stellar mass black holes. These, of course, form when a star with many times the mass of our Sun dies in a supernova. Just like regular stars, these massive stars can be in binary systems. Imagine a stellar nebula where a pair of binary stars form. But unlike the Sun, each of these are monsters with many times the mass of the Sun, putting out thousands of times as much energy. The two stars will orbit one another for just a few million years, and then one will detonate as a supernova. Now you’ll have a massive star orbiting a black hole. And then the second star explodes, and now you have two black holes orbiting around each other. As the black holes zip around one another, they radiate gravitational waves which causes their orbit to decay. This is kind of mind-bending, actually. The black holes convert their momentum into gravitational waves. As their angular momentum decreases, they spiral inward until they actually collide. What should be one of the most energetic explosions in the known Universe is completely dark and silent, because nothing can escape a black hole. No radiation, no light, no particles, no screams, nothing. And if you mash two black holes together, you just get a more massive black hole. The gravitational waves ripple out from this momentous collision like waves through the ocean, and it’s detectable across more than a billion light-years. This is exactly what happened earlier this year with the announcement from LIGO. This sensitive instrument detected the gravitational waves generated when two black holes with 30 solar masses collided about 1.3 billion light-years away. This wasn’t a one-time event either, they detected another collision with two other stellar mass black holes. Regular stellar mass black holes aren’t the only ones that can collide. Supermassive black holes can collide too. From what we can tell, there’s a supermassive black hole at the heart of pretty much every galaxy in the Universe. The one in the Milky Way is more than 4.1 million times the mass of the Sun, and the one at the heart of Andromeda is thought to be 110 to 230 million times the mass of the Sun. In a few billion years, the Milky Way and Andromeda are going to collide, and begin the process of merging together. Unless the Milky Way’s black hole gets kicked off into deep space, the two black holes are going to end up orbiting one another. Just with the stellar mass black holes, they’re going to radiate away angular momentum in the form of gravitational waves, and spiral closer and closer together. Some point, in the distant future, the two black holes will merge into an even more supermassive black hole. The Milky Way and Andromeda will merge into Milkdromeda, and over the future billions of years, will continue to gather up new galaxies, extract their black holes and mashing them into the collective. Black holes can absolutely collide. Einstein predicted the gravitational waves this would generate, and now LIGO has observed them for the first time. As better tools are developed, we should learn more and more about these extreme events.";
const SPACE_SOUNDS_TEXT = "Can you hear sounds in space? Now you’ve probably heard that there’s no sound in space, but technically that’s not true. Now yes, space is a virtual vacuum….. However, sound does exist in the form of electromagnetic vibrations that pulsate in similar wavelengths. What NASA did was design special instruments that could record these electromagnetic vibrations, and transferred them into sounds that our ears could hear. What you’re about hear is actual sound in space, nothing has been added. It’s a beautiful, yet haunting sound that music legend Hans Zimmer would be jealous of. ";
const FACTS = [
                "A black hole is formed when a large star starts running out of fuel and begins to collapse under its own gravity. Such a star may become a white dwarf or a neutron star, but if the star is sufficiently massive then it may continue shrinking eventually to the size of a tiny atom, known as a gravitational singularity. A black hole refers to the region in space in which the singularity’s gravitational force is so strong that not even light can escape its pull.",
                "The singularity at the core of a black hole may shrink to a size smaller than an atom, and eventually become an infinitely small point in space containing infinite mass. Here the gravitational force is so strong that the spacetime surrounding the singularity is bent to infinite curvature, and scientists are left searching for a good quantum theory of gravity to explain what is truly going on inside these incredibly dense objects.  As American theoretical physicist Kip Thorne overstates in his description of a  singularity, it is  a point where all laws of physics break down.",
                "The mass of a black hole is so dense and the gravity of its singularity so strong that, in accordance with Einstein’s theory of general relativity,  it actually distorts the space-time around it and not even light can escape. The boundary beyond which light cannot escape the black hole’s gravity well is known as the event horizon, while its radius is called the Schwarzschild radius. Once particles and light-rays go past the event horizon their light cones “tip over” and point to the singularity, which now represents all future-directed paths with no escape possible.",
                "To an outside observer with a telescope, an object passing the event horizon will appear to slow down then “freeze” in time without ever seeming to pass through the event horizon. This is because the light takes longer to escape the black hole’s gravitational pull and light signals won’t reach the viewer for an infinitely long time. As time elapses, the light subsequently becomes red shifted and dimmer as its wavelength becomes longer, eventually disappearing from the sight of the observer as it becomes infrared radiation, then radio waves.",
                "If a person was able to survive long enough to describe falling into a black hole, he would at first experience weightless as he goes into free fall, but then feel intense “tidal” gravitational forces as he got closer to the center of the black hole. In other words, if his feet were closer to the centre than his head, then they would feel a stronger pull until he eventually is stretched and then ripped apart. As he falls in he may observe distorted images as the light bends around him and he will also still be able to see beyond the black hole as light continues to reach him from the outside.",
                "It is important to realize that a black hole’s gravitational field is the same as that of any other object in space of the same mass. In other words, it won’t “suck” objects in any more than any other normal star, with things being more likely to just fall into them if they got too close to the event horizon. If our Sun was replaced with a black hole of equal mass, for example, the Earth would continue experiencing the same gravitational force as before. Only when objects get too close to the black hole would the stronger gravitational force become apparent.",
                "A traversable wormhole, known alternatively as a Lorentzian wormhole, Schwarzschild wormhole or Einstein-Rosen bridge, is a theoretical opening in space-time allowing a “shortcut” through intervening space to another location in the Universe. However, from the outside wormholes may exhibit many of the characteristics usually associated with a black hole and be virtually impossible to tell apart.",
                "John Michell (1783) and Pierre-Simon Laplace (1796) were the first people to propose the concept of “dark stars” or object which, if compressed into a small enough radius, would have an escape velocity which exceeded even the speed of light. Later, the term “frozen star” was used to describe the last phase of a star’s gravitational collapse, when light unable to escape from its surface would make the star appear frozen in time to an observer. In the 20th century, John Wheeler eventually coined the phrase black hole as the object would absorbs all the light that hits it while reflecting nothing back.",
                "Physicists now believe that black holes actually radiate small numbers of mainly photon particles and so can lose mass, shrink then ultimately vanish over time. This unverified evaporation process is known as “Hawking Radiation”, after Professor Stephen Hawking who theorized its existence in 1974. However, it is a staggeringly slow process and only the smallest black holes would have had time to evaporate significantly during the 14 billion years the Universe has existed.",
                "It is now thought that most galaxies are held together by supermassive black holes at their centers, which cluster hundreds of solar systems around them. In fact, 30,000 light years away at the centre of our own Milky Way galaxy is a black hole with 30 million times the mass of our own sun.",
                "Stay away from the event horizon, The event horizon as it is called in physics, is the border of the black of hole. It’s the point of no return. Before that point, you can still escape. After that point…not a chance.",
                "The nearest black hole to the Earth is 1,600 light years away, Our galaxy is covered in black holes but the one most likely to destroy our measly planet is still well beyond our solar system’s borders.",
                "Black Holes affect time, Just as a clock runs a bit slower closer to sea level than up on a space station, clock run really slow near black holes. It all has to do with gravity.",
                "The black hole is a fascinating space phenomenon that makes regularly scheduled stops in popular science news feeds. Only a few days ago, a mystery cloud appeared near the black hole at the center of our Milky Way galaxy, but we may never know the what caused it. Let’s get real  we really don’t know many hard facts about black holes. If anyone ever actually explored one up close, they’d never live to tell the tale. But there are many theories about them.",
                "Origins: Black holes are the terrifying remainders of former giant stars. After a star detonates into a supernova during its end stages, what’s left behind is a cold remnant where no more fusion occurs.",
                "Zero volume: When a star’s remnant collapses into itself, there’s no force to oppose gravity. So the black hole shrinks into zero volume, which qualifies it as infinitely dense. Now not even light can escape the gravitational lure, so the black hole reflects nothing. Hence the name black hole.",
                "Event horizons: The defined edge of a black hole is known as the event horizon. Once an object or light crosses this point, there’s no return from the black hole.",
                "The Milky Way: Our galaxy contains a massive black hole at the center, in an area known as Sagittarius A*. This black hole is no danger to our solar system it’s 26,000 light years away, and it contains about 4 million times the mass of our Sun.",
                "Relatively tiny in size: To put this in perspective, a black hole that’s two miles wide would contain more mass than our Sun. One with the mass of our Earth would be about 9 millimeters wide.",
                "Time slows down: If we were able to fly around a black hole and orbit a few times before returning to earth, this trip would constitute a trip back to the future.",
                "Space distortion: Black holes distort space, and as they spin, things get even messier. After a certain amount of time, the distortion becomes an infinite regression of distortions.",
                "Death by black hole: If you were to get pulled into a black hole, you wouldn’t die by being crushed. Instead, your body would completely stretch apart as you crossed the event horizon. Ouch.",
                "Wormholes: According to some theories (and certainly a lot of science-fiction novels), black holes may be related to wormholes that allow people to time travel. There’s no proof that wormholes exist.",
                "Radiation: Although not even light can escape from a black hole, they do release radiation, which eventually may cause black holes to evaporate.",
                "Gravity vs sucking: Again, one must pass very close to a black hole and cross the event horizon before being pulled into a black hole. The black hole’s gravity doesn’t suck objects in by itself. If that was the case, the hole at the middle of the Milky Way would have swallowed the entire galaxy already. The gravitational pull of a black hole simply causes most objects to orbit it.",
                "Collisions: When two black holes collide, one of two things can happen. one, The two black holes combine, forming a larger and stronger black hole; Two, One black hole can eject the other black hole from a galaxy.",
                "Different types: Several types of black holes exist, including spinning, electrical, and spinning electrical black holes.",
                "Discovery wrongly remembered: Many people believe that Albert Einstein discovered black holes in 1916, but he was simply resurrecting a 1783 theory by John Mitchell.",
                "Suspicions, not direct observation: Black holes must certainly exist, but the only way scientists observe them are by measuring particularly dense areas of mass in regions of space.",
                "Noisy little suckers: You can’t really hear anything in the vacuum of space, but an object passing over the event horizon starts moving at the speed of light. This theoretically causes a staticky sound.",
                "White holes: Theoretically, the opposite of a black hole would vomit matter into the universe. Nothing would enter a white hole, but anything could escape from it. Some gamma bursts support a new theory that black holes sometimes go white.",
                "We could be in a black hole right now: A really wild theory poses the possibility that each black hole contains a universe. Say it ain’t so!",
            ];
const FAQS = [
        "What happens to space and time near a black hole? <break time='1s' /> At the edge of a black hole time should appear to slow to a halt, and if the black hole is spinning, the very fabric of space should be twisted, carrying any nearby objects around with it. Scientists can probe this hostile environment by observing nearby matter that spirals in towards the hole. The atoms in the matter emit X-ray light, whose vibrations serve as clocks that can help us precisely measure the flow of time and the distortion of space. This light will be collected by NASA's Constellation-X mission, revealing for the first time what conditions are like at the very edge of a black hole.",
        "How do black holes create such powerful jets of energy? <break time='1s' /> A black hole is the most efficient and powerful engine in the universe: Somehow, much of the matter falling towards a black hole is instead propelled outward at close to the speed of light – an effect that came as a complete surprise to astronomers. These jets of matter seem to start near the edge of a black hole, and are probably set in motion by the tremendous magnetic fields produced by the spinning black hole. NASA's Constellation-X will probe the interaction between infalling matter, magnetic fields, and black holes, allowing scientists to understand how such powerful rays of matter could be created.",
        "What role do black holes play in the unfolding universe?  <break time='1s' /> It is now thought that almost every galaxy has a giant black hole at its center. These black holes were probably present when the galaxy itself was formed and may have aided in the galaxy's formation. If this is true, then black holes may play a pivotal role in the formation of conditions in the universe that are necessary for life. The very earliest galaxies in the universe cannot be observed with existing telescopes, but that is about to change: NASA's James Webb Space Telescope will be able to glimpse the earliest galaxies in the process of formation – galaxies whose light will have taken 13 billion years to reach Earth and the Constellation-X mission will observe the giant black holes that live within them.",
        "Do black holes send ripples of gravity through space? <break time='1s' /> Einstein's theory of gravity predicts that black holes can send ripples of gravity through the fabric of space itself. NASA's LISA space mission, planned for launch within a decade, should be able to detect these waves of gravity – acting as a kind of cosmic seismograph. High on the cosmic Richter scale of quakes should be the collision of two black holes, or of a black hole with another star. LISA's ability to detect colliding black holes is only the first step in its voyage of discovery. Gravity waves are a completely new tool with which to explore the universe. Gravity-wave astronomy complements traditional astronomy, and can reveal events in the universe that could not be explored using light and conventional telescopes.",
        "Can we see a black hole being formed? <break time='1s' /> About once a day, there is a dazzling flash in the sky. It is not a flash of visible light, but a flash of gamma rays, a high-energy form of light even more powerful than X-rays. These flashes, called gamma-ray bursts, come from the tremendous explosion of a star going supernova. The event is the last gasp of a star's core before it collapses into a black hole. The bursts are being detected by NASA's HETE space telescope, which beams the location of the flash to other telescopes on the ground and in space. From these telescopes we see the fading glow of the dying star, and witness the birth of a black hole. NASA's new Swift mission will spot gamma-ray bursts more quickly, allowing the first few seconds of a black hole's life to be observed in detail.",
        "What happens inside a black hole? <break time='1s' /> The only way to answer this question is by developing a better, more fundamental theory of space, time, and matter. Unfortunately, Einstein's theory of gravity which gave us the idea of black holes in the first place does not accurately predict what happens at the very smallest scales of distance. For example, the atoms in our body all contain electrons, yet electrons are so small and so dense that they ought to form black holes. Obviously, they don't. Why not? If new theories of physics, such as string theory, are correct, then there may be additional dimensions of space beyond the three dimensions we see; these extra dimensions may be important in explaining the behavior of matter at very small scales of distance, including what happens at the center of a black hole.	This may be the ultimate value of black holes: helping us to understand how the universe works at the most basic level. In the meantime, physicists will probe the behavior of the smallest particles in giant accelerators, and astronomers will hone in on the behavior of black holes in the great reaches of space. And just as everything in nature is in some way connected, so too are the various fields of science connected. Eventually, these explorations will cross paths and will lead to a unified understanding of black holes and to an even better appreciation of this marvelous universe that gives birth to such strange things.",
    ];
const STEPHENHAWKING = [
            "It is said that fact is sometimes stranger than fiction, and nowhere is this more true than in the case of black holes. Black holes are stranger than anything dreamt up by science fiction writers, but they are firmly matters of science  fact. Not that science fiction was slow to climb on the band-wagon after black holes were discovered.. I remember going to the premier of a Walt Dizny film, The Black Hole, in the 1970s. It was about a spaceship, that was sent to investigate a black hole that had been discovered. It wasn't a very good film, but it had an interesting ending. After orbiting the black hole, one of the scientists decides, the only way to find out what is going on, is to go inside.So he gets into a space probe, and dives into the black hole. After a screen writer's depiction of Hell, he emerges into a new universe. This is an early example of the science fiction use of a black hole as a wormhole, a passage from one universe to another, or back to another location in the same universe. Such wormholes, if they existed, would provide short cuts for Interstellar  space travel, which otherwise would be pretty slow and tedious, if one had to keep to the Einstein speed limit, and stay below the speed of light.",
            "In fact, science fiction writers should not have been taken so much by surprise.The idea behind black holes, has been around in the scientific community for more than 200 years. In 1783,a Cambridge don, John Michell, wrote a paper in the Philosophical Transactions of the Royal Society of London,about what he called dark stars. He pointed out that a star that was sufficiently massive and compact, would have such a strong gravitational field that light could not escape. Any light emitted from the surface of the star, would be dragged back by the star's gravitational attraction, before it could get very far. Michell suggested that there might be a large number of stars like this. Although we would not be able to see them, because the light from them would not reach us, we would still feel their gravitational attraction. Such objects are what we now call black holes, because that is what they are, black voids in space. A similar suggestion was made a few years later, by the French scientist the Marquis de La~plass, apparently independently of Michell. Interestingly enough, La~plass included it in only the first and second editions of his book, The System of the World, and left it out of later editions. Perhaps he decided that it was a crazy idea.",
            "Both Michell and La~plass thought of light as consisting of particles, rather like cannon balls, that could be slowed down by gravity, and made to fall back on the star. But a famous experiment, carried out by two Americans, Michelson and Morley in 1887, showed that light always traveled at a speed of one hundred and eighty six thousand miles a second, no matter where it came from. How then could gravity slow down light, and make it fall back. This was impossible, according to the then accepted ideas of space and time. But in 1915, Einstein put forward his revolutionary General Theory of Relativity. In this, space and time were no longer separate and independent entities. Instead, they were just different directions in a single object called spacetime. This spacetime was not flat, but was warped and curved by the matter and energy in it. In order to understand this, considered a sheet of rubber, with a weight placed on it, to represent a star. The weight will form a depression in the rubber, and will cause the sheet near the star to be curved, rather than flat. If one now rolls marbles on the rubber sheet, their paths will be curved, rather than being straight lines. In 1919, a British expedition to West Africa, looked at light from distant stars, that passed near the Sun during an eclipse. They found that the images of the stars, were  shifted slightly from their normal positions. This indicated that the paths of the light from the stars, had been bent by the curved spacetime near the Sun. General Relativity was confirmed.",
            "Consider now placing heavier and heavier, and more and more concentrated weights on the rubber sheet. They will depress the sheet more and more. Eventually, at a critical weight and size, they will make a bottomless hole in the sheet, that particles can fall into, but nothing can get out of. What happens in spacetime according to General Relativity, is rather similar. A star will curve and distort the spacetime near it, more and more, the more massive and more compact the star is. If a massive star that has burnt up its nuclear fuel, cools and shrinks below a critical size, it will quite literally make a bottomless hole in spacetime, that light can't get out of. Such objects were given the name, black holes, by the American physicist, John Wheeler, who was one of the first to recognize their importance, and the problems they pose. The name caught on quickly.It suggested something dark and mysterious, But the French, being French, saw a more riskay meaning. For years, they resisted the name, troo noir, claiming it was obscene. But that was a bit like trying to stand against ~le week end, and other franglay. In the end, they had to give in.Who can resist a name that is such a winner. From the outside, you can't tell what is inside a black hole. You can throw television sets, diamond rings, or even your worst enemies into a black hole, and all the black hole will remember, is the total mass, and the state of rotation. John Wheeler called this, A Black Hole Has No Hair. To the French, this just confirmed their suspicions.A black hole has a boundary, called the event horizon. It is where gravity is just strong enough to drag light back, and prevent it escaping. Because nothing can travel faster than light, everything else will get dragged back also. Falling through the event horizon, is a bit like going over Niagra Falls in a canoe. If you are above the falls, you can get away if you paddle fast enough, but once you are over the edge, you are lost.There's no way back. As you get nearer the falls, the current gets faster. This means it pulls harder on the front of the canoe, than the back. there's a danger that the canoe will be pulled apart. It is the same with black holes. If you fall towards a black hole feet first, gravity will pull harder on your feet than your head, because they are nearer the black hole. The result is, you will be stretched out longwise, and squashed in sideways.. If the black hole has a mass of a few times our sun, you would be torn apart, and made into spaghetti, before you reached the horizon. However, if you fell into a much larger black hole, with a mass of a million times the sun, you would reach the horizon without difficulty. So, if you want to explore the inside of a black hole, choose a big one. There is a black hole of about a million solar masses, at the center of our Milky way galaxy. Although you wouldn't notice anything particular as you fell into a black hole, someone watching you  from a distance, would never see you cross the event horizon. Instead, you would appear to slow down, and hover just outside. You would get dimmer and dimmer, and redder and redder, until you were effectively lost from sight. As far as the outside world is concerned, you would be lost for ever. Because black holes have no hair, in Wheeler's phrase, one can't tell from the outside what is inside a black hole, apart from its mass and rotation. This means that a black hole contains a lot of information that is hidden from the outside world.But there's a limit to the amount of information, one can pack into a region of space. Information requires energy, and energy has mass, by Einstein's famous equation,  E = m c squared. So if there's too much information in a region of space, it will collapse into a black hole, and the size of the black hole will reflect the amount of information. It is like piling more and more books into a library. Eventually,  the shelves will give way, and  the library will collapse into  a black hole. ",
            "If the amount of hidden information inside a black hole, depends on the size of the hole, one would expect from general principles, that the black hole would have a temperature, and would glow like a piece of hot metal. But that was impossible, because as everyone knew, nothing could get out of a black hole. Or so it was thought, but I discovered that particles can leak out of a black hole. The reason is, that on a very small scale, things are a bit fuzzy. This is summed up in the uncertainty relation, discovered by Werner Heisenberg in 1923, which says that the more precisely you know the position of a particle, the less precisely you can know its speed, and vice versa. This means that if a particle is in a small black hole, you know its position fairly accurately. Its speed therefore will be rather uncertain, and can be more than the peed of light, which would allow the particle to escape from the black hole. The larger the black hole, the less accurately the position of a particle in it is defined, so the more precisely the speed is defined, and the less chance there is that it will be more than the speed of light,. A black hole of the mass of the sun, would leak particles at such a slow rate, it would be impossible to detect. However, there could be much smaller mini black holes. These might have formed in the very early universe, if it had been chaotic and irregular. A black hole of the mass of a mountain, would give off x-rays and gamma rays, at a rate of about ten million Megawatts, enough to power the world's electricity supply. It wouldn't be easy however, to harnass a mini black hole. You couldn't keep it in a power station, because it would drop through the floor, and end up at the center of the Earth. About the only way, would be to have the black hole in orbit around the Earth.  People have searched for mini black holes of this mass, but have so far, not found any. This is a pity, because if they had, I would have got a Nobel prize. Another possibility however, is that we might be able to create micro black holes in the extra dimensions of space time. According to some theories, the universe we experience, is just a four dimensional surface, in a ten or eleven dimensional space. We wouldn't see these extra dimensions, because light wouldn't propagate through them, but only through the four dimensions of our universe. Gravity, however, would affect the extra dimensions, and would be much stronger than in our universe. This would make it much easier to form a little black hole in the extra dimensions. It might be possible to observe this at the LHC, the Large Hadron Collider, at Cern, in Switzerland. This consists of a circular tunnel, 27 kilometers long.Two beams of particles travel round this tunnel in opposite directions, and are made to collide. Some of the collisions might create micro black holes. These would radiate particles in a pattern that would be easy to recognize. So, I might get a Nobel prize, after all.",
            "As particles escape from a black hole the hole will lose mass, and shrink.This will increase the rate of emission of particles. Eventually, the black hole will lose all its mass, and disappear. What then happens to all the particles and unlucky astronauts, that fell into the black hole. They can't just re-emerge when the black hole disappears. The particles that come out of a black hole, seem to be completely random, and to bear no relation to what fell in. It appears that the information about what fell in, is lost, apart from the total amount of mass, and the amount of rotation. But if information is lost, this raises a serious problem that strikes at the heart of our understanding of science. For more than 200 years, we have believed in Scientific determinism, that is, that the laws of science, determine the evolution of the universe. This was formulated by La~plass as, If we know the state of the universe at one time, the laws of science will determine it at all future and past times. Napoleon is said to have asked La~plass how God fitted into this picture. La~plass replied, Sire, I have not needed that hypothesis. I don't think that La~plass was claiming that God didn't exist. It is just that He doesn't intervene, to break the laws of Science. That must be the position of every scientist. A scientific law, is not a scientific law, if it only holds when some supernatural being, decides to let things run, and not intervene. In La~plass's determinism, one needed to know the positions and speeds of all particles at one time in order to predict the future. But according to the uncertainty relation, the more accurately you know the positions, the less accurately you can know the speeds,and vice versa. In other words, you can't know ~both the positions, ~and the speeds, accurately. How then can you predict the future accurately? The answer is, that although one can't predict the positions and speeds separately, one ~can predict what is called, the quantum state. This is something from which both positions and speeds can be calculated, to a certain degree of accuracy. We would still expect the universe to be deterministic, in the sense that if we knew the quantum state of the universe at one time, the laws of science should enable us predict it at any other time.",
            "If information were lost in black holes, we wouldn't be able to predict the future, because a black hole could emit any collection of particles. It could emit a working television set, or a leather bound volume of the complete works of Shakespeare, though the chance of such exotic emissions is very low. It is much more likely to be thermal Radiation, like the glow from red hot metal. It might seem that it wouldn't matter very much if we couldn't predict what comes out of black holes.There aren't any black holes near us. But it is a matter of principle. If determinism breaks down with black holes, it could break down in other situations. There could be virtual black holes that appear as fluctuations out of the vacuum, absorb one set of particles, emit another, and disappear into the vacuum again. Even worse, if determinism breaks down, we can't be sure of our past history either.The history books and our memories could just be illusions. It is the past that tells us who we are. Without it, we lose our identity. It was therefore very important to determine whether information really was lost in black holes, or whether in principle, it could be recovered. Many people felt that information should not be lost, but no one could suggest a mechanism by which it could be preserved. The arguments went on for years. Finally, I found what I think is the answer. It depends on the idea of Richard Feinman, that there isn't a single history, but many different possible histories, each with their own probability. In this case, there are two kinds of history. In one, there is a black hole, into which particles can fall, but in the other kind, there is no black hole. The point is, that from the outside, one can't be certain whether there is a black hole, or not. So there is always a chance that there isn't a black hole. This possibility is enough to preserve the information, but the information is not returned in a very useful form. It is like burning an encyclopedia.. Information is not lost if you keep all the smoke and ashes, but it is difficult to read. Kip Thorne and I had a bet with John Preskill, that information would be lost in black holes. When I discovered how  information could be preserved, I conceded the bet.I gave John Preskill an encyclopedia. Maybe I should have just given him the ashes. What does this tell us about whether it is possible to fall in a black hole, and come out in another universe. The existence of alternative histories with black holes, suggests this might be possible. The hole would need to be large, and if it was rotating, it might have a passage to another universe.But you couldn't come back to our universe. So, although I'm keen on space flight, I'm not going to try that. that black holes ain't as black as they are painted. They are not the eternal prisons they were once thought. Things ~can get out of a black hole, both to the outside, and possibly, to another universe. So, if you feel you are in a black hole, don't give up. There's a way out.",
    ]; 
const SOLAR_SOUNDS =[
        "Black holes Collision:"+BLACK_HOLES_COLLIDE_AUDIO,
        "Sun:"+SUN_AUDIO,
        "mercury: "+ MERCURY_AUDIO,
        "Venus: "+VENUS_AUDIO,
        "Earth:"+ EARTH_AUDIO,
        "Earth's Moon:"+EARTH_MOON_APOLLO_CIRCLES_AUDIO, 
        "Mars:"+ MARS_AUDIO,
        "jupiter:"+JUPITER_AUDIO,
        "satrun:"+ SATRUN_AUDIO,
        "Saturn radio waves:"+SATRUN_RADIO_WAVES_AUDIO,
        "uranus:"+URANUS_AUDIO,
        "naptune:"+ NAPTUNE_AUDIO,
        "Pluto:"+PLUTO_AUDIO,
        "keplar star:"+KEPLAR_AUDIO,
        "keplar star:" + KEPLAR_2_AUDIO,
    ]; 
// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
       //  if (event.session.application.applicationId !== "amzn1.ask.skill.4fae6c68-2a68-4e57-be4d-7bfffa837287") {
      //         context.fail("Invalid Application ID");
      //  }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);
var speechOutput = SPEACH_START_TAG + BLACK_HOLE_LAUNCH_AUDIO +  HELP_SPEACH +SPEACH_END_TAG;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, "", "false"));
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName == 'TellMeAbout') {
        handleTellMeAboutRequest(intent, session, callback);
    }
    else if (intentName == 'GetFact') {
        handleGetFactRequest(intent, session, callback);
    }
    else if (intentName == 'FallIntoBlackHole') {
        handleFallIntoBlackHoleRequest(intent, session, callback);
    }
    else if (intentName == 'AMAZON.StopIntent') {
        handleStopRequest(intent, session, callback);
    }
    else if (intentName == 'AMAZON.CancelIntent') {
        handleStopRequest(intent, session, callback);
    }
    else if (intentName == 'AMAZON.HelpIntent') {
        handleHelpRequest(intent, session, callback);
    }
    else if (intentName == 'StephenHawking') {
        handleStephenHawkingRequest(intent, session, callback);
    }
    else if (intentName == 'FAQS') {
        handleFAQSRequest(intent, session, callback);
    }else if (intentName == 'BlackHolesCollision') {
        handleBlackHolesCollisionRequest(intent, session, callback);
    }
    else if (intentName == 'SpaceSounds') {
        handleSpaceSoundsRequest(intent, session, callback);
    }
    else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

function handleTellMeAboutRequest(intent, session, callback) {
    var cardTitle = "What is a Black Hole?!";
     var speechOutput = SPEACH_START_TAG + SPEACH_OUTPUT_START_AUDIO;
     speechOutput = speechOutput+ "A black hole is a place in space where gravity pulls so much that even light can not get out. The gravity is so strong because matter has been squeezed into a tiny space. This can happen when a star is dying.Because no light can get out, people can't see black holes. They are invisible. Space telescopes with special tools can help find black holes. The special tools can see how stars that are very close to black holes act differently than other stars.How Big Are Black Holes?.Black holes can be big or small. Scientists think the smallest black holes are as small as just one atom. These black holes are very tiny but have the mass of a large mountain. Mass is the amount of matter, or stuff, in an object.Another kind of black hole is called stellar. Its mass can be up to 20 times more than the mass of the sun. There may be many, many stellar mass black holes in Earth's galaxy. Earth's galaxy is called the Milky Way.The largest black holes are called supermassive. These black holes have masses that are more than 1 million suns together. Scientists have found proof that every large galaxy contains a supermassive black hole at its center. The supermassive black hole at the center of the Milky Way galaxy is called Sagittarius A. It has a mass equal to about 4 million suns and would fit inside a very large ball that could hold a few million Earths.How Do Black Holes Form?. Scientists think the smallest black holes formed when the universe began.Stellar black holes are made when the center of a very big star falls in upon itself, or collapses. When this happens, it causes a supernova. A supernova is an exploding star that blasts part of the star into space.Scientists think supermassive black holes were made at the same time as the galaxy they are in.If Black Holes Are Black, How Do Scientists Know They Are There?. A black hole can not be seen because strong gravity pulls all of the light into the middle of the black hole. But scientists can see how the strong gravity affects the stars and gas around the black hole. Scientists can study stars to find out if they are flying around, or orbiting, a black hole.When a black hole and a star are close together, high-energy light is made. This kind of light can not be seen with human eyes. Scientists use satellites and telescopes in space to see the high-energy light.Could a Black Hole Destroy Earth?. Black holes do not go around in space eating stars, moons and planets. Earth will not fall into a black hole because no black hole is close enough to the solar system for Earth to do that.Even if a black hole the same mass as the sun were to take the place of the sun, Earth still would not fall in. The black hole would have the same gravity as the sun. Earth and the other planets would orbit the black hole as they orbit the sun now.The sun will never turn into a black hole. The sun is not a big enough star to make a black hole.How Is NASA Studying Black Holes?. NASA is using satellites and telescopes that are traveling in space to learn more about black holes. These spacecraft help scientists answer questions about the universe.";
     speechOutput = speechOutput +  "There are many strange things in our universe  from supernovas to neutron stars  but nothing is more mind-blowing than a black hole.Black holes are a consequence of gravity reaching intense levels. When matter becomes incredibly densely packed together, gravity can become so strong that nothing, not even light, can escape. The most common are stellar mass black holes, tens of times more massive than our Sun, which form when a star implodes. Stars normally remain stable thanks to their emitted radiation counterbalancing the inward pull of gravity. However, when a large star runs out of fuel, gravity takes over and the result is an implosion with the matter being squashed into an incredibly dense point  a singularity. Black holes are spectacular end products of the fatal attraction of gravity, Chung Pei Ma, Professor of Astronomy at the University of California, Berkeley, told WIRED. They are the graveyards of massive stars. Around the singularity is a region of space where nothing can escape, so we're not able to actually see it, or photograph it  as light can't escape, neither can any information that would be useful to us. The boundary of this region is called the event horizon, and for stellar mass black holes it is typically a sphere measuring a few kilometres across. We can see what is outside the event horizon, though. Black holes attract material from elsewhere into an accretion disk. This flattened band of matter surrounds the black hole and can be incredibly bright, allowing us to spot them. Outside of the event horizon, you can have quite a lot of light and other material, Gregory Sivakoff, Assistant Professor in the University of Alberta Department of Physics, added to WIRED. We can see the light just outside the radius, and that's where a lot of the tell-tale signatures come for black holes. This is just one type of black hole. Much larger chasms are called supermassive black holes, thought to reside at the centre of galaxies; our own Milky Way has one with a mass of 4 million suns and an event horizon millions of kilometres across. But how these form remains a mystery. Black holes can also be incredibly tiny, as small as an atom, although we've never found one this size. While a fourth type, intermediate mass black holes, fill the gap between stellar mass and supermassive black holes. In our galaxy there are thought to be 100,000 or so stellar mass black holes. Recent research by a team including Sivakoff, though, suggests we may have underestimated this number. They found a  hidden black hole that wasn't eating much material, so it was hard to spot. Its discovery could mean there are tens of thousands to millions more black holes in our galaxy that we can't see. There remain many unanswered questions about black holes but we are, slowly, starting to piece together what role these enigmatic objects play in the universe. Elsewhere, there are also so-called primordial black holes and black hole binaries. They were discussed extensively in the 90s but interest waned when observations implied their number was limited. To date, no-one has found any primordial black holes but recent observations into the black holes found by Ligo Virgosuggest they do exist. In February, the Lig Virgo partnership said it had found the first successful detection of gravitational waves. These waves were created from a merger of two black holes thirty times the mass of the Sun After this announcement, many astrophysicists started considering how such heavy black holes were created, and how such black hole binaries were formed. Primordial black holes likely form when gravitational collapse happens in regions of the Universe that especially dense. Based on general relativity, the research team evaluated how often black holes merge. They found that the Ligo Virgo team's observational data on merger frequencies would fall in to place if the binaries were primordial, and if they constituted a thousandth of all dark matter.";
     speechOutput = speechOutput + SPEACH_OUTPUT_END_AUDIO + BREAK_1S + MORE_HELP_SPEACH + SPEACH_END_TAG;
      
    var cardContent = speechOutput.replace(regex, "");
    callback(session.attributes,
        buildSpeechletResponse(cardTitle , speechOutput,cardContent,HELP_SPEACH, "false"));
}

function handleGetFactRequest(intent, session, callback) {
      
        // Create speech output
        var cardTitle = "Here is the fact";
        var speechOutput = SPEACH_START_TAG+ SPEACH_OUTPUT_START_AUDIO; 
      // Get a random space fact from the blackhole facts list
        speechOutput = speechOutput + getRandon(FACTS);
        speechOutput = speechOutput + SPEACH_OUTPUT_END_AUDIO + BREAK_1S + MORE_HELP_SPEACH + SPEACH_END_TAG;
        var cardContent = speechOutput.replace(regex, "");
        callback(session.attributes,
          buildSpeechletResponse(cardTitle,speechOutput,cardContent, HELP_SPEACH, "false"));
}
function handleFallIntoBlackHoleRequest(intent, session, callback) {
     var cardTitle = "What Would Happen If You Fell into a Black Hole?!";
            var speechOutput = SPEACH_START_TAG+ SPEACH_OUTPUT_START_AUDIO; 
     speechOutput = speechOutput + "Black holes are without question some of the strangest places in the universe. So massive that they hideously deform space and time, so dense that their centers are called points at infinity, and pitch black because not even light can escape them, it isn't surprising that so many people wonder what it would be like to visit one. It's not exactly a restive vacation spot, as it turns out. If you were to take a step into a black hole, your body would most closely resemble toothpaste being extruded out of the tube, said Charles Liu, an astrophysicist who works at the American Museum of Natural History's Hayden Planetarium. Liu said that when an object crosses a black hole's event horizon, its outer boundary, or point of no return  the same physics that causes Earth's ocean tides begins to take effect. Gravity's strength decreases with distance, so the moon pulls on the side of the Earth closer to it a bit more vigorously than the side farther from it, and as a result, Earth elongates ever so slightly in the direction of the moon. The land is sturdy, so it doesn't move much, but the water on Earth's surface is fluid, so it flows along the elongated axis. That's the tidal interaction, he said. Rising tides are about as calming a scene as there is. A human toeing the line of a black hole? Not so much. Near a black hole roughly the size of Earth, tidal forces are magnified off the scale. Swan diving into one, the top of your head would feel so much more gravitational pull than the tips of your toes that you would be stretched, longer and longer. Sir Martin Rees coined the term spaghettification, which is a perfectly good way to put it. You eventually become a stream of subatomic particles that swirl into the black hole, Liu told Life's Little Mysteries. Because your brain would dissociate into its constituent atoms almost instantly, you'd have little opportunity to soak in the scenery at the threshold of an Earth-size black hole. However, if you're dead-set on visiting a space-time singularity, we recommend going big, bigger black holes have less extreme surfaces. If you had a black hole the size of our solar system, then the tidal forces at the event horizon … are not quite that strong. So you could actually maintain your structural integrity, Liu said.In that case, you would get to experience the effects of the curvature of space-time, predicted by Einstein's general theory of relativity, firsthand.First of all, you approach the speed of light as you fall into the black hole. So the faster you move through space, the slower you move through time, he said. Furthermore, as you fall, there are things that have been falling in front of you that have experienced an even greater 'time dilation' than you have. So if you're able to look forward toward the black hole, you see every object that has fallen into it in the past. And then if you look backwards, you'll be able to see everything that will ever fall into the black hole behind you. So the upshot is, you'll get to see the entire history of that spot in the universe simultaneously, he said, from the Big Bang all the way into the distant future.";
     speechOutput = speechOutput + SPEACH_OUTPUT_END_AUDIO + BREAK_1S + MORE_HELP_SPEACH + SPEACH_END_TAG;
     var cardContent = speechOutput.replace(regex, "");
     callback(session.attributes,
        buildSpeechletResponse(cardTitle , speechOutput ,cardContent,HELP_SPEACH, "false"));
}
 
function handleStopRequest(intent, session, callback) {
     var cardTitle = "Thank you from Black Hole";
     var speechOutput = SPEACH_START_TAG + "Thank you for visiting black hole, Goodbye! See you again in blackhole bye for now from koti.";
     speechOutput = speechOutput + STOP_AUDIO + SPEACH_END_TAG;
     var cardContent = speechOutput.replace(regex, "");
     callback(session.attributes,
        buildSpeechletResponse(cardTitle , speechOutput ,cardContent,"", "true"));
}
function handleHelpRequest(intent, session, callback) {
     var cardTitle = "What can I help you with?";
     var speechOutput = SPEACH_START_TAG + HELP_SPEACH + SPEACH_END_TAG;
     var cardContent = speechOutput.replace(regex, "");
     callback(session.attributes,
        buildSpeechletResponse(cardTitle , speechOutput,cardContent,"", "false"));
}
function handleStephenHawkingRequest(intent, session, callback) {
     var cardTitle = "Stephen Hawking Theory?";
     var speechOutput = SPEACH_START_TAG + SPEACH_OUTPUT_START_AUDIO;
     speechOutput = speechOutput + getRandon(STEPHENHAWKING);
     var cardContent = speechOutput.replace(regex, "");
     speechOutput = speechOutput + SPEACH_OUTPUT_END_AUDIO + MORE_HELP_SPEACH + SPEACH_END_TAG;
     callback(session.attributes,
        buildSpeechletResponse(cardTitle , speechOutput,cardContent,HELP_SPEACH, "false"));
}
function handleFAQSRequest(intent, session, callback) {

        // Create speech output
        var cardTitle = "Here is the common FAQ";
        var speechOutput = SPEACH_START_TAG + SPEACH_OUTPUT_START_AUDIO;
        // Get a random space fact from the blackhole FAQ list
        speechOutput = speechOutput + getRandon(FAQS);
        speechOutput = speechOutput + SPEACH_OUTPUT_END_AUDIO + BREAK_1S + MORE_HELP_SPEACH + SPEACH_END_TAG;
        var cardContent = speechOutput.replace(regex, "");
        callback(session.attributes,
          buildSpeechletResponse(cardTitle,speechOutput,cardContent, HELP_SPEACH, "false"));
}
function handleBlackHolesCollisionRequest(intent, session, callback) {

        // Create speech output
        var cardTitle = "Black Holes Collision:";
        var speechOutput = SPEACH_START_TAG + BLACK_HOLES_COLLIDE_AUDIO;
        speechOutput = speechOutput +BLACK_HOLES_COLLIDE_TEXT + MORE_HELP_SPEACH + SPEACH_END_TAG;
        var cardContent = speechOutput.replace(regex, "");
        callback(session.attributes,
          buildSpeechletResponse(cardTitle,speechOutput,cardContent, HELP_SPEACH, "false"));
}
function handleSpaceSoundsRequest(intent, session, callback) {

        // Create speech output
        var cardTitle = "Space Sounds:";
        var speechOutput = SPEACH_START_TAG + SPACE_SOUNDS_TEXT +"Here is the sound of : "+ getRandon(SOLAR_SOUNDS) + MORE_HELP_SPEACH + SPEACH_END_TAG;
        var cardContent = speechOutput.replace(regex, "");
        callback(session.attributes,
          buildSpeechletResponse(cardTitle,speechOutput,cardContent, HELP_SPEACH, "false"));
}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, cardText, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "SSML",
            ssml: output
        },
        card: {
            type: "Simple",
            title: title,
            content: cardText
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "SSML",
            ssml: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
function getRandon(ARRAY) {
    return ARRAY[Math.floor(Math.random() * ARRAY.length)];
}
