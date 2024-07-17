import React from 'react';
import styles from './ServicePremises.module.scss';
import { FaBuilding, FaShieldAlt, FaLeaf, FaToolbox, FaMoneyCheckAlt, FaMapMarkerAlt } from "react-icons/fa";

const ServicePremises = () => {
    const cards = [
        {
            icon: <FaBuilding />,
            title: 'Service Premises',
            text: 'Our complex has office space and convenience stores on the ground floor.Theres lot of hate out there for a text very big bulding.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Safety and Security',
            text: 'Reliable round-the-clock surveillance by a security system using modern technologies. The villages are out there with'
        },
        {
            icon: <FaLeaf />,
            title: 'Environmental Solutions',
            text: 'We care about the environment, using LED lighting and having a charging station for electric vehicles clinets.'
        },
        {
            icon: <FaToolbox />,
            title: 'Ease of Management',
            text: 'You just buy an apartment, and a professional hotel operator will do the rest for you.That Amounts to little more than garbled words'
        },
        {
            icon: <FaMoneyCheckAlt />,
            title: 'Guaranteed Income',
            text: 'Guaranteed monthly income is prescribed in advance in the contract.True enough but that not all that it takes to get things'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Great Location',
            text: 'A pledge of a secure rental of your apartment.A client that unhapy for a reason is a problem,acliient thats unhapy.'
        }
    ];

    return (
        <div className={styles.container}>
            {/* <h1>Service Premises</h1> */}
            <div className={styles.cards}>
                {cards.map((card, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.icon}>{card.icon}</div>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePremises;
