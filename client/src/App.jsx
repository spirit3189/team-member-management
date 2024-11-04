import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import { useTeamMembers } from './hooks/useTeamMembers';
import './App.css';

function App() {
  const { teamMembers, addMember, updateMember, deleteMember } = useTeamMembers();

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ListPage teamMembers={teamMembers} onMemberClick={(id) => `/edit/${id}`} />} />
          <Route path="/add" element={<AddPage addMember={addMember} />} />
          <Route path="/edit/:id" element={<EditPage teamMembers={teamMembers} updateMember={updateMember} deleteMember={deleteMember} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
