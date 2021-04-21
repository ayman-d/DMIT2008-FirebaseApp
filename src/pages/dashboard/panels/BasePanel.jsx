import React from 'react'
import styled from 'styled-components'

const BasePanel = (props) => {
    return (
        <PanelStyle>
            {props.children}
        </PanelStyle>
    );
}

export default BasePanel;

// Styling
const PanelStyle = styled.section`
    background-color: #f6f6f6;
`