import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TeamMemberForm from '../components/TeamMemberForm';
import { useTeamMembers } from '../hooks/useTeamMembers';

const AddPage = () => {
    const navigate = useNavigate();
    const { addTeamMember } = useTeamMembers();

    const handleAddMember = async (member) => {
        await addTeamMember(member);
        navigate('/');
    };

    return (
        <>
            <Link to="/" className="back-link">← Back to List</Link>
            <h2>Add a team member</h2>
            <p className="subtitle">Set email, location, and role.</p>
            <TeamMemberForm
                onSubmit={handleAddMember}
                showDeleteButton={false}
            />
        </>
    );
};

export default AddPage;
