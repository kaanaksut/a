import React, { useState } from 'react';
import './Recents.css';
import { FaExternalLinkAlt, FaClipboard, FaEdit, FaTrash } from 'react-icons/fa';

const Recents = ({ projects, setProjects }) => {
  const [newProjectName, setNewProjectName] = useState(''); // Yeni proje ismi için state
  const [editingProject, setEditingProject] = useState(null); // Düzenleme için proje

  const addProject = () => {
    if (newProjectName.trim() === '') return; // Boş proje ismi eklemeyi engelle
    const newProject = { id: projects.length + 1, name: newProjectName };
    setProjects([...projects, newProject]); // Yeni projeyi ekle
    setNewProjectName(''); // Proje ekledikten sonra input'u temizle
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id)); // Projeyi sil
  };

  const startEditingProject = (project) => {
    setEditingProject(project); // Düzenlenecek projeyi ayarla
    setNewProjectName(project.name); // Düzenlenecek projenin ismini input'a yerleştir
  };

  const saveProject = () => {
    if (!editingProject) return; // Eğer düzenlenmekte olan proje yoksa
    setProjects(
      projects.map((project) =>
        project.id === editingProject.id ? { ...project, name: newProjectName } : project
      )
    );
    setEditingProject(null); // Düzenlemeyi tamamla
    setNewProjectName(''); // Input'u temizle
  };

  return (
    <div className="recents-container">
      <h2>Recents</h2>
      {projects.length === 0 ? (
        <div className="no-project">
          <p>No recent projects available.</p>
          <input
            type="text"
            placeholder="Enter project name"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            className="project-input"
          />
          <button className="add-project-btn" onClick={addProject}>
            + Create New Project
          </button>
        </div>
      ) : (
        <div className="recents-list">
          {projects.map((project) => (
            <div key={project.id} className="recent-item">
              <span>{project.name} • in Project Notes</span>
              <div className="project-icons">
                <button
                  className="icon-btn"
                  title="Open in new tab"
                  onClick={() => alert('Opening project in new tab...')}
                >
                  <FaExternalLinkAlt />
                </button>
                <button
                  className="icon-btn"
                  title="Copy link"
                  onClick={() => alert('Link copied!')}
                >
                  <FaClipboard />
                </button>
                <button
                  className="icon-btn"
                  title="Edit project name"
                  onClick={() => startEditingProject(project)}
                >
                  <FaEdit />
                </button>
                <button
                  className="icon-btn"
                  title="Delete project"
                  onClick={() => deleteProject(project.id)}
                >
                  <FaTrash />
                </button>
              </div>

              {/* Dashboard kısmı ayrı satırda */}
              <div className="dashboard-link">
                <span>Dashboard</span>
                <div className="dashboard-icons">
                  <button
                    className="icon-btn"
                    title="Open dashboard in new tab"
                    onClick={() => alert('Opening dashboard in new tab...')}
                  >
                    <FaExternalLinkAlt />
                  </button>
                  <button
                    className="icon-btn"
                    title="Copy dashboard link"
                    onClick={() => alert('Dashboard link copied!')}
                  >
                    <FaClipboard />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {editingProject && (
            <div className="edit-section">
              <input
                type="text"
                placeholder="Edit project name"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                className="project-input"
              />
              <button className="save-project-btn" onClick={saveProject}>
                Save
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Recents;
