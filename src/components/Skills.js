import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import wreckBeachRocks from '../images/wreckBeachRocks.jpeg';
import { colors } from '../styles/themes';

export default function Skills() {
	return (
		<SkillsSection>
			<SkillGroups>
				<Group className="skillsSubSection">
					<GroupTitle>Proficient</GroupTitle>
					<Fade bottom cascade>
						<div>
							<img
								src={`https://img.shields.io/badge/-HTML5-51B9CD?style=for-the-badge&logo=html5&logoColor=red`}
								alt="HTML badge"
							/>
							<img
								src="https://img.shields.io/badge/-CSS3-51B9CD?style=for-the-badge&logo=css3&logoColor=1572B6"
								alt="CSS badge"
							/>
							<img
								src="https://img.shields.io/badge/-ReactJS-51B9CD?style=for-the-badge&logo=react"
								alt="React badge"
							/>
							<img
								src="https://img.shields.io/badge/-JavaScript-51B9CD?style=for-the-badge&logo=javascript"
								alt="JavaScript badge"
							/>
							<img
								src="https://img.shields.io/badge/-Python-51B9CD?style=for-the-badge&logo=python"
								alt="Python badge"
							/>
							<img
								src="https://img.shields.io/badge/-NextJS-51B9CD?style=for-the-badge&logo=nextdotjs&logoColor=000000"
								alt="NextJS badge"
							/>
							<img
								src="https://img.shields.io/badge/-Redux-51B9CD?style=for-the-badge&logo=redux&logoColor=764ABC"
								alt="Redux badge"
							/>
							<img
								src="https://img.shields.io/badge/-React--Router-51B9CD?style=for-the-badge&logo=react%20router"
								alt="React-Router badge"
							/>
							<img
								src="https://img.shields.io/badge/-NPM-51B9CD?style=for-the-badge&logo=npm"
								alt="NPM badge"
							/>
							<img
								src="https://img.shields.io/badge/-Jest-51B9CD?style=for-the-badge&logo=jest&logoColor=C21325"
								alt="Jest badge"
							/>
							<img
								src="https://img.shields.io/badge/-Figma-51B9CD?style=for-the-badge&logo=figma&logoColor=F24E1E"
								alt="Figma badge"
							/>
							<img
								src="https://img.shields.io/badge/-NodeJS-51B9CD?style=for-the-badge&logo=nodedotjs"
								alt="NodeJS badge"
							/>
							<img
								src="https://img.shields.io/badge/-Express-51B9CD?style=for-the-badge&logo=express&logoColor=000000"
								alt="Express badge"
							/>
							<img
								src="https://img.shields.io/badge/-Git-51B9CD?style=for-the-badge&logo=git"
								alt="Git badge"
							/>
							<img
								src="https://img.shields.io/badge/-GitHub-51B9CD?style=for-the-badge&logo=github&logoColor=181717"
								alt="GitHub badge"
							/>
							<img
								src="https://img.shields.io/badge/-PostgreSQL-51B9CD?style=for-the-badge&logo=postgresql"
								alt="PostgreSQL badge"
							/>
							<img
								src="https://img.shields.io/badge/-SQLite-51B9CD?style=for-the-badge&logo=sqlite&logoColor=003B57"
								alt="SQLite badge"
							/>
							<img
								src="https://img.shields.io/badge/-Postman-51B9CD?style=for-the-badge&logo=postman"
								alt="Postman badge"
							/>
							<img
								src="https://img.shields.io/badge/-Styled--Components-51B9CD?style=for-the-badge&logo=styled-components"
								alt="Styled Components badge"
							/>
							<img
								src="https://img.shields.io/badge/-Cypress-51B9CD?style=for-the-badge&logo=cypress&logoColor=17202C"
								alt="Cypress badge"
							/>
						</div>
					</Fade>
				</Group>
				<Group className="skillsSubSection">
					<GroupTitle>Experienced</GroupTitle>
					<Fade bottom cascade delay={400}>
						<div>
							<img
								src="https://img.shields.io/badge/-Django-51B9CD?style=for-the-badge&logo=django&logoColor=092E20"
								alt="Django badge"
							/>
							<img
								src="https://img.shields.io/badge/-TypeScript-51B9CD?style=for-the-badge&logo=typescript"
								alt="TypeScript badge"
							/>
							<img
								src="https://img.shields.io/badge/-TailwindCSS-51B9CD?style=for-the-badge&logo=tailwindcss"
								alt="Tailwind CSS badge"
							/>
							<img
								src="https://img.shields.io/badge/-Docker-51B9CD?style=for-the-badge&logo=docker"
								alt="Docker badge"
							/>
							<img
								src="https://img.shields.io/badge/-GraphQL-51B9CD?style=for-the-badge&logo=graphql"
								alt="GraphQL badge"
							/>
							<img
								src="https://img.shields.io/badge/-CircleCI-51B9CD?style=for-the-badge&logo=circleci&logoColor=343434"
								alt="CircleCI badge"
							/>
							<img
								src="https://img.shields.io/badge/-Jira%20Software-51B9CD?style=for-the-badge&logo=jirasoftware&logoColor=0052CC"
								alt="Jira Software badge"
							/>
							<img
								src="https://img.shields.io/badge/-BitBucket-51B9CD?style=for-the-badge&logo=bitbucket&logoColor=0052CC"
								alt="BitBucket badge"
							/>
							<img
								src="https://img.shields.io/badge/-Material%20UI-51B9CD?style=for-the-badge&logo=material-ui&logoColor=0081CB"
								alt="MaterialUI badge"
							/>
							<img
								src="https://img.shields.io/badge/-Ant%20Design-51B9CD?style=for-the-badge&logo=ant-design&logoColor=0170FE"
								alt="Ant Design badge"
							/>
							<img
								src="https://img.shields.io/badge/-Netlify-51B9CD?style=for-the-badge&logo=netlify"
								alt="Netlify badge"
							/>
							<img
								src="https://img.shields.io/badge/-Vercel-51B9CD?style=for-the-badge&logo=vercel&logoColor=000000"
								alt="Vercel badge"
							/>
							<img
								src="https://img.shields.io/badge/-AWS%20Amplify-51B9CD?style=for-the-badge&logo=aws-amplify"
								alt="Amplify badge"
							/>
							<img
								src="https://img.shields.io/badge/-Mongo%20DB-51B9CD?style=for-the-badge&logo=mongoDB"
								alt="Mongo DB badge"
							/>
							<img
								src="https://img.shields.io/badge/-Lighthouse-51B9CD?style=for-the-badge&logo=lighthouse"
								alt="Lighthouse badge"
							/>
							<img
								src="https://img.shields.io/badge/-Insomnia-51B9CD?style=for-the-badge&logo=insomnia&logoColor=5849BE"
								alt="Insomnia badge"
							/>
							<img
								src="https://img.shields.io/badge/-GitKraken-51B9CD?style=for-the-badge&logo=gitkraken"
								alt="GitKraken badge"
							/>
							<img
								src="https://img.shields.io/badge/-Photoshop-51B9CD?style=for-the-badge&logo=adobe%20photoshop"
								alt="Adobe Photoshop badge"
							/>
						</div>
					</Fade>
				</Group>
			</SkillGroups>
		</SkillsSection>
	);
}

const SkillsSection = styled.div`
	background-image: url(${wreckBeachRocks});
	background-position: top center;
	background-attachment: fixed;
	background-size: cover;
`;

const SkillGroups = styled.div`
	padding: 2%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex-grow: 1;
	border: 3px solid black;
	align-items: center;
	text-align: center;
`;

const Group = styled.div`
	padding: 2%;
	background-color: ${colors.transMidnightBlue};

	img {
		height: 30px;
		margin: 0 5px;
	}
`;

const GroupTitle = styled.h3`
	text-align: center;
	margin: 0 auto;
	margin-bottom: 1rem;
	width: 60%;
	background: linear-gradient(
		to left,
		transparent,
		${colors.darkText},
		transparent 100%
	);
	background-position: 0 100%;
	background-size: 100% 2px;
	background-repeat: repeat-x;
`;
