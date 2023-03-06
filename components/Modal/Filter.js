import styles from "./styles.module.css";
import { MdOutlineKeyboardArrowDown, MdCheck } from "react-icons/md";
export default function FilterState({
  setFilterState,
  filters,
  filterState,
  openFilters,
  setOpenFilters,
  menuRef,
}) {
  return (
    <aside className={styles.Filters}>
      <div
        className={styles.filterCurrent}
        onClick={() => setOpenFilters(true)}
      >
        {filterState} <MdOutlineKeyboardArrowDown />
      </div>
      <div className={styles.filter} ref={menuRef}>
        {" "}
        {openFilters
          ? filters.map((filter, i) => (
              <div
                key={i}
                onClick={() => {
                  setFilterState(filters[i]);
                  setOpenFilters(false);
                }}
              >
                {filter} {filterState === filters[i] ? <MdCheck /> : null}
              </div>
            ))
          : null}
      </div>
    </aside>
  );
}
