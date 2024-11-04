import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TeamMemberList from '../components/TeamMemberList';
import { useTeamMembers } from '../hooks/useTeamMembers';
import styles from './ListPage.module.css';

const ListPage = () => {
    const navigate = useNavigate();
    const { teamMembers, loading, error } = useTeamMembers();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const handleMemberClick = (id) => {
        navigate(`/edit/${id}`);
    };
    return (<>
        <div className={styles.listHeader}>
            <div>
                <h2>Team Members</h2>
                <p className={styles.subtitle}>You have {teamMembers.length} team members.</p>
            </div>
            <Link to="/add" className={styles.addButton} aria-label="Add Team Member">+</Link>
        </div>
        <div className={styles.scrollableList}>
            <TeamMemberList teamMembers={teamMembers} onMemberClick={handleMemberClick} />
        </div>
    </>);
};

export default ListPage;

