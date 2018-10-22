import React from "react"
import "../css/variables.css";
import styled from 'styled-components';
import Navbar from "../components/Navbar/Navbar";
import Panel from "../components/Panel";
import IntroCanvas from "../components/IntroCanvas/IntroCanvas";
import ProjectCards from "../components/ProjectsSection/ProjectCards";
import Form from "../components/ContactSection/Form";
const MainWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Rochester');
    box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-size: "62.5%";
    color: var(--white);
    width: 100%;
    margin: 0 auto;
    background: var(--darkest-blue);
    & > .panel:first-child {
        margin-top: 80px;
    }
    img, a {
        margin: 0;
        padding: 0;
    }
`;
const PanelsWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;
export default () => {
    return (
        <MainWrapper>
            <IntroCanvas name="Simon Davis" title = "Web Developer"></IntroCanvas>
            <PanelsWrapper>
            <Navbar />
            <Panel title = "Intro">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam modi laudantium eligendi debitis minima vitae, dolor officiis nobis facere eaque dicta consequuntur tempore laboriosam magnam repellat assumenda, deleniti quaerat nisi aspernatur architecto placeat libero quod amet? Repellat, est. Reiciendis sunt esse nulla obcaecati sequi voluptatibus corrupti porro officia veritatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptates autem inventore explicabo blanditiis quaerat ipsum cum. Molestias doloremque fugit adipisci nobis vitae suscipit nulla sint a repudiandae libero dicta ad, aperiam corrupti maiores magni nam exercitationem quasi. Iusto ad veritatis quisquam veniam minus eaque magni voluptas molestias beatae esse.</p>
            </Panel>
            <Panel title = "Projects">
                <ProjectCards />
            </Panel>
            <Panel title = "Contact me!">
                <Form />
            </Panel>
            </PanelsWrapper>
        </MainWrapper>
    )
}
