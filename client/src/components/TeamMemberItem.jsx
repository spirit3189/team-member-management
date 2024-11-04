import React from 'react';
import Avatar from 'react-avatar';
import styles from './TeamMemberItem.module.css';

const TeamMemberItem = ({ member, onClick }) => (
    <li className={styles.teamMember}>
        <button onClick={() => onClick(member.id)} aria-label={`Edit ${member.first_name} ${member.last_name}`} className={styles.teamMemberClickableContainer}>
            <div className={styles.teamMemberContainer}>
                <Avatar facebookId="100008343750912" name="Foo Bar" size="100" round={true} />
                <div className={styles.teamMemberInfo}>
                    <p className={styles.teamMemberName}>
                        {`${member.first_name} ${member.last_name}`}{member.role === 'admin' && <span className={styles.teamMemberRole}> (admin)</span>}
                    </p>
                    <p className={styles.teamMemberContact}>{member.phone}</p>
                    <p className={styles.teamMemberContact}>{member.email}</p>
                </div>
            </div>
        </button>
    </li>
);

export default TeamMemberItem;
