/**
 * Created by jason on 14/04/2016.
 */
import React from 'react';
import Paper from '../../../node_modules/material-ui/lib/paper';

const paperStyle = {
    height: 'auto',
    maxWidth: 800,
    margin: '50px auto',
    opacity: '.9'
};

const homeContentStyle = {
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontSize: '1.375em',
    padding: '20px'
};

const HomeContent = () => (
    <Paper style={paperStyle} zDepth={1} >
        <div style={homeContentStyle}>
            <p><span className="bold">QA Building Group</span> is specialises in building and renovating residential, commercial as well as industrial buildings. Regardless of the size of your property, be it a detached house or a large retail space, we will be able to customise a package that meets your requirements and budget.</p>
            <p>Started in 2012, our dedicated and attentive workforce has earned us many referrals and friends in Australia. We have a team of experienced and qualified professionals that insists on high-quality workmanship and design, as well as meeting the needs of our clients like you.</p>
            <p>We have had the good fortune to work with a diverse group of clients, ranging from private home owners to large corporations. We are also constantly upgrading to allow us to tender for bigger public sector construction projects. Regardless of the size of your project, our team of engineers, architects, consultants, designers and specialists will go the extra mile to ensure your property is in good hands.</p>
            <p>If you are looking for a trusted builder to develop your dream home or business, we can help to make your dream a reality. Please take your time to learn more about us and the projects we have built. If you wish to speak to someone, we are only a call or an email away. We look forward to hearing from you.</p>
            <h4>
                Our Services
            </h4>
            <ul>
                <li>
                    We offer the following services for residential, commercial as well as industrial properties:
                </li>
                <li>
                    Design and build
                </li>
                <li>Reconstruction of existing building</li>
                <li>Addition and alteration</li>
                <li>Commercial fit out works</li>
            </ul>
        </div>
    </Paper>
);
export default HomeContent;

