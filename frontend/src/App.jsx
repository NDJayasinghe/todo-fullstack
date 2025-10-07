import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:8080/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get(`${API}/latest`);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await axios.post(API, { title, description: desc });
    setTitle("");
    setDesc("");
    fetchTasks();
  };

  const markDone = async (id) => {
    await axios.patch(`${API}/${id}/done`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        {/* Left column */}
        <div className="task-input">
          <h2>Add a Task</h2>
          <input
            className="input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="textarea"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="btn add-btn" onClick={addTask}>
            Add
          </button>
        </div>

        <div className="divider" />

        {/* Right column */}
        <div className="task-list">
          <h2>Recent Tasks</h2>
          {tasks.length === 0 && (
            <p className="empty">No active tasks 🎉</p>
          )}
          <div className="cards">
            {tasks.map((t) => (
              <div key={t.id} className="card">
                <div className="card-text">
                  <strong>{t.title}</strong>
                  <p>{t.description}</p>
                </div>
                <button
                  className="btn done-btn"
                  onClick={() => markDone(t.id)}
                >
                  Done
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;