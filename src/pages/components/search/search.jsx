import styles from "./search.module.css";

function ReSearch() {
  return (
    <div className={styles.btnsearch}>
      <span class="material-symbols-outlined">search</span>
      <input className="search" placeholder="Search..."></input>
    </div>
  );
}
export default ReSearch;
