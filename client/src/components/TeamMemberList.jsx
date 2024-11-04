import React from 'react';
import TeamMemberItem from './TeamMemberItem';
import styles from './TeamMemberList.module.css';

const TeamMemberList = ({ teamMembers, onMemberClick }) => (
    <ul className={styles.teamMembersList} aria-label="Team Members List">
        {teamMembers.map((member) => (
            <TeamMemberItem key={member.id} member={member} onClick={() => onMemberClick(member.id)} />
        ))}
    </ul>
);

export default TeamMemberList;
