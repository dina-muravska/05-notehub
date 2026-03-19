import NoteList from "../NoteList/NoteList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

function App() {
  return (
    <div>
      <div className={css.app}>
        <header className={css.toolbar}>
          <button className={css.button}>Create note +</button>
          <SearchBox />
          <NoteList />
        </header>
      </div>
    </div>
  );
}

export default App;
