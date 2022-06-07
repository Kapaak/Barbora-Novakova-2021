//pages
import HeroPage from "../components/HeroPage";
import AboutPage from "../components/AboutPage";
import CVPage from "../components/CVPage";
import ProjectPage from "../components/ProjectPage";
import ContactPage from "../components/ContactPage";
import { client } from "../sanity";

export default function Home({ detail, projects }) {
	const { aboutSection, educationSection, experienceSection } = detail;
	return (
		<>
			<HeroPage />
			<AboutPage aboutData={aboutSection} />
			<CVPage
				educationData={educationSection}
				experienceData={experienceSection}
			/>
			<ProjectPage projectData={projects} />
			<ContactPage />
		</>
	);
}

export const getStaticProps = async pageContext => {
	const query = `*[ _type == "detail"][0]{aboutSection{"file":file.asset->{url},photo,text},educationSection[]{study,location,date},experienceSection[]{company,date,job}}`;
	const query2 = `*[_type == "project"]`;

	const detail = await client.fetch(query);
	const projects = await client.fetch(query2);

	const sortedProjectsByDate = projects.sort((a, b) => {
		const dateA = new Date(a.whenCreated);
		const dateB = new Date(b.whenCreated);

		return dateA - dateB;
	});

	if (!detail || !projects) return { props: null, notFound: true };
	else
		return {
			props: { detail, projects: sortedProjectsByDate.reverse() },
			revalidate: 10,
		};
};
