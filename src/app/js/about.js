/**
 * Created by jason on 14/04/2016.
 */
import React from 'react';
import Paper from '../../../node_modules/material-ui/lib/paper';

const paperStyle = {
    height: 'auto',
    maxWidth: '80%',
    margin: '20px auto',
    opacity: '.9',
    backgroundColor: 'rgba(32, 32,32,0.60)'
};

const homeContentStyle = {
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontSize: '1.5em',
    lineHeight: '1.3em',
    padding: '30px 50px',
    color: '#ffffff'
};

const logoStyle = {
    marginRight: 15,
    width: 205
};

const engAu = {
    marginRight: 15,
    height: 255
};

const AboutContent = () => (
    <Paper style={paperStyle} zDepth={1} >
        <div style={homeContentStyle}>
            <p>
                <span className="bold">QH Design & Construction</span> is a dynamic and professional custom-builder specialising in successfully delivering tailored-residential projects on quality, time and budget, which meet the client’s needs and exceed their expectations through the whole process from conception to completion.
            </p>
            <p>
                We have an impressive depth of knowledge and breadth of experience in regard to new requirements and technology that enables us to provide accurate and timely advice to our clients’ in-line with the requirements of appropriate regulatory authorities.
            </p>
            <p>
                Whatever the form of contract, to be construction management, design and build, management contracting, we seek to be involved with projects at an early stage. This enables us to develop a greater understanding of our clients’ needs and ensure their brief is met.
            </p>
            <p>
                Whether a custom-build or investment project, it is an approach which allows us to pass on the benefits of our experience in areas such as town planning application, architectural and structural design optimization, construction site management and coordination as we work with clients’ teams to deliver accurately costed, fully developed projects.
            </p>
            <p>
                If you are looking for a trusted builder to develop your dream home, we can help to make your dream a reality. Please take your time to learn more about us and the projects we have delivered. If you wish to speak to someone, we are only a call or an email away. We are sincerely looking forward to hearing from you.
            </p>
            <h4>
                We offer the following services for all the custom-design and built projects:
            </h4>
            <ul>
                <li>
                    Property Development
                </li>
                <li>
                    Project Management
                </li>
                <li>
                    Domestic Building Construction
                </li>
                <li>
                    Architectural Design and Land Subdivision Services
                </li>
                <li>
                    Town Planning Permits and Developer Approval Services
                </li>
            </ul>
            <div >
                <img style={logoStyle} src="images/rbpl.png" alt="rbp"   />
                <img style={logoStyle} src="images/hia.jpg" alt="hia"   />
                <img src="images/EngAus.png" alt="Engineer Aus"  style={engAu} />
                <img style={logoStyle} src="images/BDAV.png" alt="BDAV"   />
            </div>

        </div>


    </Paper>
);
export default AboutContent;

