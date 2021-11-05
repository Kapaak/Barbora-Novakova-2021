//libs
import styled from "styled-components";
import Image from "next/image";
//components
import { FillerEffect, Headline, Section } from "../../styles";
import { urlFor } from "../../utils/imageBuilder";

const ProjectPage = ({ projectData }) => {
	return (
		<Section colored scrollName="projects">
			<Headline>Portfolio</Headline>
			<Gallery>
				{projectData?.map((p, i) => {
					return (
						<GalleryItem key={i}>
							<FillerEffect />
							{p.image[0] && (
								<Image src={urlFor(p.image[0]).url()} layout="fill" />
							)}
							{/* {p.image[0] && <img src={urlFor(p.image[0]).url()} />} */}
							<ImageDescription>
								<h2>{p.headline}</h2>
								<h1>{p.subheadline}</h1>
							</ImageDescription>
						</GalleryItem>
					);
				})}
			</Gallery>
		</Section>
	);
};

const ImageDescription = styled.div`
	opacity: 0;
	z-index: 3;
	h2 {
		font-weight: 500;
		color: var(--col4);
		font-size: var(--t);
		margin-bottom: 1rem;
	}
	h1 {
		font-family: var(--font2);
		font-weight: 500;
		text-transform: uppercase;
		font-size: var(--bt);
	}
`;

const GalleryItem = styled.div`
	position: relative;
	cursor: pointer;
	overflow: hidden;
	height: 35rem;
	width: 35rem;

	/* img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	} */

	& > div {
		position: absolute;
		left: 5%;
		top: 10%;
		color: var(--col2);
	}

	&:hover ${FillerEffect} {
		transform: scale(30);
		opacity: 0.9;
	}

	&:hover ${ImageDescription} {
		opacity: 1;
	}

	/* &::before {
		content: "";
		position: absolute;
		opacity: 0;
		top: 0;
		left: 0;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background-color: #1f1f1fb7;
		transition: transform 0.5s ease-in-out;
	}

	&:hover {
		&::before {
			opacity: 1;
			display: block;
			transform: scale(40);
		}
	} */
`;

const Gallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--gap);
	img {
		width: 100%;
	}
`;

export default ProjectPage;
