import React from 'react';
import './HomeContent.css';

const HomeContent = () => {
    const projectName = "Project 1"; // Proje adı, dinamik olarak alınabilir.
    const dashboardContent = ""; // Dashboard içeriği, dinamik olarak alınabilir.

    return (
        <div className="home-content">
            <div className="card recents">
                <h2>Recents</h2>
                <div className="project-info">
                    {projectName ? (
                        <div className="project-card">
                            <span>{projectName} · in Project Notes</span>
                            <div className="project-icons">
                                <div className="icon" title="Open in new tab" onClick={() => alert('Open in new tab')}>
                                    🔗
                                </div>
                                <div className="icon" title="Copy link" onClick={() => alert('Copy link')}>
                                    📋
                                </div>
                            </div>
                        </div>
                    ) : (
                        <textarea className="hidden-textarea" placeholder="No project selected..." readOnly />
                    )}
                </div>
                <div className="dashboard-info">
                    {dashboardContent ? (
                        <p>{dashboardContent}</p>
                    ) : (
                        <textarea className="hidden-textarea" placeholder="Dashboard is empty..." readOnly />
                    )}
                </div>
            </div>
            <div className="card agenda">
                <h2>Agenda</h2>
                <p>Agenda items from your calendar will show here.</p>
                <button className="btn">Add calendar integrations</button>
            </div>
            <div className="card my-work">
                <h2>My Work</h2>
                <p>Tasks and reminders assigned to you will show here.</p>
                <button className="btn">Add task or reminder</button>
            </div>
            <div className="card assigned-to-me">
                <h2>Assigned to me</h2>
                <p>Tasks assigned to you will appear here.</p>
                <button className="btn">Add task</button>
            </div>
        </div>
    );
};

export default HomeContent;
