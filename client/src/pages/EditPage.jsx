import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import TeamMemberForm from '../components/TeamMemberForm';
import { useTeamMembers } from '../hooks/useTeamMembers';

const EditPage = () => {
    const { id } = useParams();
    const { teamMembers, updateTeamMember, deleteTeamMember } = useTeamMembers();
    const navigate = useNavigate();
    const memberToEdit = teamMembers.find((member) => member.id === parseInt(id));

    const handleUpdateMember = async (updatedMember) => {
        await updateTeamMember(id, updatedMember);
        navigate('/');
    };

    const handleDeleteMember = async () => {
        await deleteTeamMember(id);
        navigate('/');
    };

    return memberToEdit ? (
        <>
            <Link to="/" className="back-link">← Back to List</Link>
            <h2>Edit team member</h2>
            <p className="subtitle">Edit contact info, location, and role.</p>
            <hr />
            <TeamMemberForm
                memberData={memberToEdit}
                onSubmit={handleUpdateMember}
                onDelete={handleDeleteMember}
                showDeleteButton={true}
            />
        </>
    ) : (
        <p>Member not found</p>
    );
};

export default EditPage;
