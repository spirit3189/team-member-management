import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/team-members/';

export const useTeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTeamMembers = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL);
            setTeamMembers(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch team members');
        } finally {
            setLoading(false);
        }
    };

    const addTeamMember = async (newMember) => {
        try {
            const response = await axios.post(API_URL, newMember);
            setTeamMembers([...teamMembers, response.data]);
            setError(null);
        } catch (err) {
            setError('Failed to add team member');
        }
    };

    const updateTeamMember = async (id, updatedMember) => {
        try {
            const response = await axios.put(`${API_URL}${id}/`, updatedMember);
            setTeamMembers(
                teamMembers.map((member) => (member.id === id ? response.data : member))
            );
            setError(null);
        } catch (err) {
            setError('Failed to update team member');
        }
    };

    const deleteTeamMember = async (id) => {
        try {
            await axios.delete(`${API_URL}${id}/`);
            setTeamMembers(teamMembers.filter((member) => member.id !== id));
            setError(null);
        } catch (err) {
            setError('Failed to delete team member');
        }
    };

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    return {
        teamMembers,
        loading,
        error,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
    };
};
