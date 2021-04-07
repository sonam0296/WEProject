import React from 'react';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import {Row, Col, Nav} from 'react-bootstrap'
import Demo from './TabContent';

const TabVertical = ()=>{
    // const tabStyle = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    //   };
    return(
        <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <Demo/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Demo/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
    <Col sm={3} >
      <Nav variant="pills" className="flex-column myClass"  >
        <Nav.Item className="" style={{marginRight:"20px"}}>
          <Nav.Link eventKey="first" style={{borderRadius:"40px", padding:"20px", textAlign:"right"}}>Customizations</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{marginRight:"20px"}}> 
          <Nav.Link eventKey="second" style={{borderRadius:"40px", padding:"20px", textAlign:"right"}}>Web Development</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{marginRight:"20px"}}>
          <Nav.Link eventKey="third" style={{borderRadius:"40px", padding:"20px", textAlign:"right"}} >Web Design</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{marginRight:"20px"}}>
          <Nav.Link eventKey="fourth" style={{borderRadius:"40px", padding:"20px", textAlign:"right"}}>Ecommerce Solutions</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  </Row>
</Tab.Container>
        </>
    )
}

export default TabVertical