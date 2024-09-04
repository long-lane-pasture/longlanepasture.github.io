import type { Metadata } from "next";
import { NavigationLink } from "../../components/navigation";

export const metadata: Metadata = {
	title: "Award-winning pasture open in winter months",
	description:
		"An article about the Long Lane Pasture in 2023, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://the-archer.co.uk/archive/2023/2023Dec11.pdf",
	},
};

export default () => (
	<article id="award-winning-pasture-open-in-winter-months">
		<h2>Award-winning pasture open in winter months</h2>
		<h3>December 2023</h3>
		<p>
			<i>
				As published on{" "}
				<a
					href="http://the-archer.co.uk/archive/2023/2023Dec11.pdf"
					target="_blank"
					rel="noopener"
					alia-label="Read the full article in The Archer"
				>
					The Archer
				</a>
				.
			</i>
		</p>
		<p>
			<strong>
				The volunteers who run Long Lane Pasture, the nature reserve situated
				opposite the fire station on Long Lane, are continuing to keep it open
				to visitors from 10am to 12 noon on Saturday mornings through the winter
				months. This is the time when many of them are there keeping it well
				maintained and new volunteers are always welcome to join the working
				party.
			</strong>
		</p>
		<p>
			It has been an excellent year for the pasture team, who have won their
			12th Green Flag Award in a row from the environment charity Keep Britain
			Tidy.
		</p>
		<p>
			Long Lane Pasture Trust Chair Donald Lyven and Harriet Duffield, Barnet
			Council's Biodiversity & Conservation Officer, travelled to Southampton to
			collect the award.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
