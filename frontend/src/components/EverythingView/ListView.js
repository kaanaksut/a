import React, { useState } from 'react';
import './ListView.css'; // CSS dosyası için

const ListView = () => {
  const [listName, setListName] = useState(''); // Liste adı
  const [listDescription, setListDescription] = useState(''); // Liste açıklaması
  const [lists, setLists] = useState([]); // Oluşturulan listeler

  // Liste oluşturma işlevi
  const handleCreateList = () => {
    if (listName) {
      const newList = {
        name: listName,
        description: listDescription,
      };
      setLists([...lists, newList]);
      setListName(''); // Formu temizle
      setListDescription('');
    } else {
      alert('Please enter a list name');
    }
  };

  return (
    <div className="list-view">
      <h2>Create a New List</h2>
      <div className="list-form">
        <input
          type="text"
          placeholder="List Name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <textarea
          placeholder="List Description (Optional)"
          value={listDescription}
          onChange={(e) => setListDescription(e.target.value)}
        />
        <button onClick={handleCreateList}>Create List</button>
      </div>

      <h3>Your Lists</h3>
      {lists.length > 0 ? (
        <ul className="list-display">
          {lists.map((list, index) => (
            <li key={index}>
              <h4>{list.name}</h4>
              <p>{list.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No lists available.</p>
      )}
    </div>
  );
};

export default ListView;
