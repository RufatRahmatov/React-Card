import React from 'react';
import styles from './ServicePremises.module.scss';
import { FaBuilding, FaShieldAlt, FaLeaf, FaToolbox, FaMoneyCheckAlt, FaMapMarkerAlt } from "react-icons/fa";

const ServicePremises = () => {
    const cards = [
        {
            icon: <FaBuilding />,
            title: 'Service Premises',
            text: 'Our complex has office space and convenience stores on the ground floor.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Safety and Security',
            text: 'Reliable round-the-clock surveillance by a security system using modern technologies.'
        },
        {
            icon: <FaLeaf />,
            title: 'Environmental Solutions',
            text: 'We care about the environment, using LED lighting and having a charging station for electric vehicles.'
        },
        {
            icon: <FaToolbox />,
            title: 'Ease of Management',
            text: 'You just buy an apartment, and a professional hotel operator will do the rest for you.'
        },
        {
            icon: <FaMoneyCheckAlt />,
            title: 'Guaranteed Income',
            text: 'Guaranteed monthly income is prescribed in advance in the contract.'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Great Location',
            text: 'A pledge of a secure rental of your apartment.'
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
