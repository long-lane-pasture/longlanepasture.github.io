import { PageLink } from "../components/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Long Lane Pasture: Visitor Information",
	description:
		"Everything you need to know about visiting Long Lane Pasture. Opening times, location, and how to get here.",
};

export default () => {
	const ammenities = [
		{
			available: true,
			name: "Pathways",
			description:
				"Well-maintained paths that allow visitors to walk around the pasture and enjoy its natural beauty. The paths are generally level and accessible.",
		},
		{
			available: true,
			name: "Sheltered Gazebos",
			description:
				"Our accesisble pathway reached the main pond, where the gazebo provides a place to sit and enjoy the view.",
		},
		{
			available: true,
			name: "Seating Areas",
			description:
				"Benches are placed at various points around the pasture, offering visitors a place to sit, relax, and enjoy the surroundings.",
		},
		{
			available: true,
			name: "Waste Bins",
			description:
				"Waste bins provided for visitors to dispose of litter responsibly. Please help keep the pasture clean by using these bins or taking your waste home with you.",
		},
		{
			available: true,
			name: "Information Boards",
			description:
				"Information board at the entrance to the pasture that provides details about the site, including a map and information about the wildlife that can be found there.",
		},
		{
			available: true,
			name: "Ponds",
			description:
				"Small ponds that serve as habitats for amphibians and aquatic plants. Important ecological features and offer a spot for quiet observation.",
		},
		{
			available: true,
			name: "Wildflower Meadows",
			description:
				"Wildflower meadows are a key attraction. They are carefully managed to encourage biodiversity and provide a beautiful display, especially in the spring and summer.",
		},
		{
			available: true,
			name: "Trees and Bushes",
			description:
				"A variety of plant life provide shade, shelter, and food for wildlife. They also add to the beauty of the pasture.",
		},
		{
			available: false,
			name: "Toilets",
			description: "No public toilets on the site.",
		},
		{
			available: false,
			name: "Play Areas",
			description:
				"No playgrounds or other play facilities. Intended for quiet enjoyment and wildlife observation.",
		},
		{
			available: false,
			name: "Cafes or Shops",
			description:
				"No cafes, shops, or other commercial facilities on the site. Visitors are encouraged to bring their own refreshments and take their litter home.",
		},
		{
			available: false,
			name: "Formal Gardens",
			description:
				"The pasture is a wild meadow and is managed to encourage natural habitats and biodiversity.",
		},
		{
			available: false,
			name: "Parking",
			description:
				"Free parking in Long Lane. Do not park in the access road leading up to the Pasture. This is for the use of the adjacent householder only.",
		},
	];
	return (
		<>
			<article id="come-visit-the-pasture">
				<h2>Come visit the Pasture</h2>
				<p>
					The Pasture is a wild meadow. It is a bit rough in places and can be
					very wet after rain and in the late autumn/winter/early spring months.
					Make sure you have stout footwear, particularly at these times of
					year, and watch your step as you wander around. It will take you about
					20-30 minutes to walk around the Pasture, but much longer if you
					linger awhile to appreciate its beauty. A list of wildlife you might
					see on your visit is posted on the Noticeboard by the entrance, where
					there is a map of the site.
				</p>
				<p>
					There is one short hard surfaced all-weather footpath, which takes you
					alongside butterfly border and the pond to a seating area. This is
					suitable for those a little unsteady on their feet, for wheelchairs
					and pushchairs. Other access around the Pasture is by way of informal
					grassy footpaths. There are a number of seats provided for visitors.
				</p>
				<p>
					You will see that some areas are not to be walked across. These are
					being kept as undisturbed areas for wildlife. Please observe the
					boundaries of these areas and do not venture into them. Respect
					wildlife at all times: do not pick flowers or take anything from the
					site — leave for others to enjoy. If you see anything unusual, we
					would love to hear from you.
				</p>
				<p>
					Access is free of charge, but as a small registered charity we rely on{" "}
					<PageLink to="contribute">donations and support</PageLink> to maintain
					and restore the Pasture.
				</p>
				<h3>
					Opening Times <small>† unless too wet</small>
				</h3>
				<table className="data">
					<tbody>
						<tr>
							<td>☀️</td>
							<td>April—October</td>
							<td>Every Day: 10am—7pm or dusk</td>
						</tr>
						<tr>
							<td>🌧</td>
							<td>November—March</td>
							<td>Weekends, bank holidays: 10am—3pm</td>
						</tr>
						<tr>
							<td>📅</td>
							<td>All Year</td>
							<td>Saturday volunteering: 10am—12noon</td>
						</tr>
					</tbody>
				</table>
				<p>Please,</p>
				<ul>
					<li>
						Dogs welcome <strong>on leads</strong>
					</li>
					<li>Collect your litter and waste</li>
					<li>No bicycles or motorbikes</li>
					<li>No ball games</li>
					<li>No fires</li>
				</ul>
				<p>
					<PageLink to="regulations">Read the full regulations</PageLink> if you
					are not sure your activity is allowed.
				</p>
				<img
					src="/assets/long-lane-pasture-map.svg"
					alt="Long Lane Pasture Map"
				/>
			</article>
			<article id="wildlife you might see">
				<h2>Wildlife you might see</h2>
				<h3>Meadow</h3>
				<p>Butterflies, Grasshopper, Wasp Spider, Ladybird</p>
				<h3>Pond</h3>
				<p>Moorhen, Frog/tadpole, Toad, Newt, Dragonfly, Water Boatman</p>
				<h3>Throughout the Pasture</h3>
				<p>Birds, Fox, Bank Vole, Field Mouse</p>
				<p>
					Check out our full <PageLink to="species">species checklist</PageLink>{" "}
					for a complete list of wildlife spotted at Long Lane Pasture.
				</p>
				<p>Seen something unusual? Let us know!</p>
			</article>
			<article id="location">
				<h2>Location</h2>
				<p>
					Long Lane Pasture lies in North London, in the London Borough of
					Barnet, on the border between postal districts N3 and N2. It is
					bounded by the North Circular Road, the Northern Line railway,
					Pointalls Allotments land and Long Lane. It is accessed by a
					pedestrian gate which leads off a footpath at the end of a short
					access road (opposite Finchley Fire Station) just by the North
					Circular Road bridge over Long Lane.
				</p>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.6774081860665!2d-0.1822392865961423!3d51.59659596521669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a02481df38b%3A0x9d4d3e1b839bb764!2sLong%20Lane%20Pasture!5e0!3m2!1sen!2suk!4v1721736907974!5m2!1sen!2suk"
					width="100%"
					height="450"
					allowFullScreen={true}
					loading="lazy"
					frameBorder={0}
					referrerPolicy="no-referrer-when-downgrade"
					title="Long Lane Pasture Location on Google Maps"
				></iframe>
				<h4>Get Here By Bus</h4>
				<p>
					The 143 stops in Long Lane just past Squires Lane cross roads. From
					here, cross Squires Lane and continue down Long Lane until just before
					the North Circular Road bridge, turn right and at the end of the short
					access road to a garage you will see the pedestrian entrance gate to
					the Pasture.
				</p>
				<h4>Get Here By Tube</h4>
				<p>
					Finchley Central Station on the Northern Line. It is a 15 minute walk
					from here.
				</p>
				<h4>Get Here By Car</h4>
				<p>
					There is free parking in Long Lane. Do not park in the access road
					leading up to the Pasture. This is for the use of the adjacent
					householder only.
				</p>
			</article>
			<article id="ammenities">
				<h2>Ammenities</h2>
				{ammenities.map((ammenity) => (
					<div key={ammenity.name}>
						<h4 className={ammenity.available ? "check" : "uncheck"}>
							{ammenity.name}
						</h4>
						<p>{ammenity.description}</p>
					</div>
				))}
			</article>
		</>
	);
};
