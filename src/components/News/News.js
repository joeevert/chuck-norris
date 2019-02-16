import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './News.css';

class News extends Component {
  render() {
    return (
      // <section className="newsSection" id="news">
      <Container>
        <Row className="newsSection" id="news">
          <Col xs="7">
            <h6>WELCOME TO THE CLONE OF THE OFFICIAL WEBSITE OF</h6>
            <h1>CHUCK NORRIS</h1>
            <img src='/images/NonstopChuck-copy.jpg' alt='Nonstop Chuck' />
          </Col>
          <Col xs="5" className="rightNews">
            <h2>NONSTOP CHUCK NORRIS</h2>
            <p>Harness the unstoppable force that is Chuck Norris in an action game packed with insane weapons, items and Chuck facts! 
              Power up Chuck Norris as he delivers a beating to an infinite horde of villains. The mission: to save multiple universes! 
              But no stress, Chuck will continue to fight and earn rewards while you take a break! 
              Download for free from&nbsp;
              <a href="https://play.google.com/store/apps/details?id=com.flaregames.nskchuck&hl=en" target="_blank" rel="noopener noreferrer">Google Play</a> 
              &nbsp;or the&nbsp;
              <a href="https://itunes.apple.com/us/app/nonstop-chuck-norris/id1154002816?mt=8#" target="_blank" rel="noopener noreferrer">Apple</a> store!
            </p>
          </Col>
        </Row>
      </Container>
      // </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(News);
