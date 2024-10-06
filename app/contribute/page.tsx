import dynamic from "next/dynamic";
import { volunteers } from "../../dynamic/volunteers/index.ts";
import { mergeMetadata } from "../../lib/helpers/index.ts";
import { Campaign } from "../components/Campaign/index.tsx";
import { ContactUsLink } from "../components/ContactUsLink";
import { NavigationLink } from "../components/navigation/index.tsx";
import "../components/styles/contributors.css";
import { Volunteer } from "../components/Volunteer/index.tsx";

export const metadata = mergeMetadata({
	title: "Contribute to Long Lane Pasture",
	description:
		"Caring for the Long Lane Pasture is a community effort. Find out how you can help support the Trust's work.",
});

const Randomise = dynamic(() => import("../components/Randomise"), {
	ssr: false,
});

export default () => (
	<>
		<article id="contribute-to-long-lane-pasture">
			<figure className="hero">
				<img
					src="/assets/volunteering-hero.jpeg"
					alt="Volunteering in the pasture"
				/>
				<figcaption>
					<h2>
						Contribute to Long Lane Pasture
						<a
							href="#contribute-to-long-lane-pasture"
							aria-label="Anchor link to Contribute to Long Lane Pasture"
						></a>
					</h2>
				</figcaption>
			</figure>
		</article>
		<article id="the-pasture-is-a-community-space">
			<h3>Make a charitable donation</h3>
			<Campaign />
			<p className="highlight">
				Our{" "}
				<a
					href="https://www.gofundme.com/f/buy-long-lane-pastures-new-equipment"
					target="_blank"
					rel="noopener"
				>
					GoFundMe campaign
				</a>{" "}
				is raising funds to replace vital equipment. Help us sustain this
				valuable community reserve 🌻. Every contribution helps.
			</p>
			<p>
				Long Lane Pasture Trust is a charity registered in England & Wales (№
				1122236) and is run in accordance with its Trust Deed. Charity details
				are available on{" "}
				<a
					href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/4035882"
					target="_blank"
					rel="noopener"
					aria-label="Long Lane Pasture Trust on the registry"
				>
					the registry
				</a>
				.{" "}
			</p>
			<p>
				<strong>
					We receive no funding from the local council and rely on donations to
					undertake our work. We accept donations of any size.
				</strong>
			</p>
			<p>
				Cheques can be sent by mail to No. 256 Long Lane, London N3 2RN. If you
				would like to make a donation any other way, please <ContactUsLink />.
			</p>
			<Volunteer>
				<p>
					The pasture is a community space maintained by community members to
					the benefit of all. There are many ways you can take part in caring
					for the pasture.
				</p>
				<p>
					Help with the maintenance of the pasture. Trim, Weed, Cut, Rake, Mow,
					Plant, Prune, Clean, Maintain…
				</p>
				<ul className="checks">
					<li>Necessary tools and equipment provided.</li>
					<li>Volunteering is suitable for all ages.</li>
					<li>
						Most jobs require some physical effort but do not require great
						strength or skill.
					</li>
				</ul>
			</Volunteer>
			<hr />
			<p>
				Here are some of the faces you might see on a Saturday morning. Come
				have a biscuit with us! 🍪
			</p>
			<div className="contributors">
				<Randomise>
					{volunteers.map(({ src, alt }) => (
						<figure key={alt}>
							<img src={src} alt={alt} loading="lazy" />
							<figcaption>{alt}</figcaption>
						</figure>
					))}
				</Randomise>
			</div>
			<h3>Initiate educational or community projects</h3>
			<p>
				We welcome proposals for educational or community projects that can
				benefit the community and the pasture. We regularly{" "}
				<NavigationLink to="eco-warriors-plant-for-the-future">
					host school groups
				</NavigationLink>{" "}
				. If you have an idea for a project you'd like us to assist with, please{" "}
				<ContactUsLink />.
			</p>
			<h3>Contibute to the website</h3>
			<p>
				This website is maintained as an open source project, and{" "}
				<NavigationLink to="source">contributions are welcome</NavigationLink>.
			</p>
		</article>
	</>
);
