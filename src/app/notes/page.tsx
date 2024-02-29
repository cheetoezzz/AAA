"use client";
import { useState, ChangeEvent } from 'react';

const Notes = () => {
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState<string[]>([]); 

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    if (content.trim() !== '') {
      setNotes([...notes, content]); // Add the content to the list of notes
      setContent(''); // Clear the textarea after saving
      alert('Note saved!');
    } else {
      alert('Please enter some text before saving.');
    }
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Notepad ni ARC</h1>
      <textarea
        className="w-full h-64 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
        value={content}
        onChange={handleChange}
        placeholder="Start typing..."
      />
      <div className="mt-4 flex flex-col items-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save
        </button>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Saved Notes:</h2>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notes;