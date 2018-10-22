import React from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.section.attrs({
    className: 'panel'
})`
    width: 100%;
    padding: 1.6rem;
 
    &:nth-of-type(even) {
        background: var(--darker-blue);
    }
    &:nth-of-type(odd) {
        background: var(--blue);
    }
`;
const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
`;
const Panel = (props) => {
    return ( 
        <PanelWrapper>
            <Title>{props.title}</Title>
            {props.children}
        </PanelWrapper>
     );
}
 
export default Panel;