import NoteList from "../NoteList/NoteList";
import css from "./App.module.css";

function App() {
  return (
    <div>
      <div className={css.app}>
        <header className={css.toolbar}>
          <button className={css.button}>Create note +</button>

          <NoteList />
        </header>
      </div>
    </div>
  );
}

export default App;
