import Headers from "../General/Headers";
import Button from "../General/Button";
import styles from "./styles.module.css";
import { IoMdClose } from "react-icons/io";
import { useRef, useState, useEffect } from "react";
import FilterState from "./Filter";
export default function Form({ close }) {
  const [formData, setFormData] = useState({});
  const [openFiltersPurpose, setOpenFiltersPurpose] = useState(false);
  const [filterStatePurpose, setFilterStatePurpose] = useState(purpose[0]);
  const [openFiltersEducation, setOpenFiltersEducation] = useState(false);
  const [filterStateEducation, setFilterStateEducation] = useState(
    education[0]
  );
  const [openFiltersEmployment, setOpenFiltersEmployment] = useState(false);
  const [filterStateEmployment, setFilterStateEmployment] = useState(
    employment[0]
  );
  let purposeRef = useRef();
  let educationRef = useRef();
  let employmentRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!purposeRef.current.contains(e.target)) {
          setOpenFiltersPurpose(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!educationRef.current.contains(e.target)) {
          setOpenFiltersEducation(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!employmentRef.current.contains(e.target)) {
          setOpenFiltersEmployment(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <main className={styles.Form}>
      <div className={styles.FormModal}>
        <div className={styles.FormClose}>
          <IoMdClose onClick={close} />
        </div>
        <Headers
          content="Apply for “Largest Gathering of Techies in Lagos, Nigeria"
          style={{ color: "#3A3A3A", fontSize: "24px", lineHeight: "42px" }}
        />
        <div className={styles.FormBody}>
          {formInputs.map((formInput) => (
            <div key={formInput.id} className={styles.inputBar}>
              <label htmlFor={formInput.id}>{formInput.label}</label>
              <input
                placeholder={formInput.id}
                id={formInput.id}
                required=""
                className={styles.input}
              />
            </div>
          ))}
          <div className={styles.FormCheckbox}>
            <p>Interested Track</p>
            <div className={styles.checkboxes}>
              {checkboxes.map((checkbox) => (
                <div key={checkbox}>
                  <input type="checkbox" id={checkbox} name="track" />
                  <label htmlFor={checkbox}>{checkbox}</label>
                </div>
              ))}
              <div>
                <label htmlFor="others">Others</label>
                <input id="others" className={styles.inputOthers} />
              </div>
            </div>
          </div>
          <div className={styles.inputBar}>
            {" "}
            <label htmlFor="stateCountry">State, Country</label>
            <input
              placeholder="Lagos Nigeria"
              id="stateCountry"
              required=""
              name="stateCountry"
              className={styles.input}
            />
          </div>
          <div className={styles.checkboxes}>
            <div>
              <input type="checkbox" name="gender" id="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="checkbox" name="gender" id="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className={styles.filters}>
            <label>Purpose for learning a tech skill</label>
            <FilterState
              filters={purpose}
              setFilterState={setFilterStatePurpose}
              setOpenFilters={setOpenFiltersPurpose}
              filterState={filterStatePurpose}
              openFilters={openFiltersPurpose}
              menuRef={purposeRef}
            />
          </div>
          <div className={styles.filters}>
            <label>Highest Education Qualification</label>
            <FilterState
              filters={education}
              setFilterState={setFilterStateEducation}
              setOpenFilters={setOpenFiltersEducation}
              filterState={filterStateEducation}
              openFilters={openFiltersEducation}
              menuRef={educationRef}
            />
          </div>
          <div className={styles.filters}>
            <label>Employment Status</label>
            <FilterState
              filters={employment}
              setFilterState={setFilterStateEmployment}
              setOpenFilters={setOpenFiltersEmployment}
              filterState={filterStateEmployment}
              openFilters={openFiltersEmployment}
              menuRef={employmentRef}
            />
          </div>
        </div>
        <Button
          content="Apply"
          style={{ borderRadius: "7px", margin: "0 auto", width: "80%" }}
          action={close}
        />
      </div>
    </main>
  );
}
let formInputs = [
  {
    label: "First Name",
    id: "John",
  },
  {
    label: "Last Name",
    id: "Moon",
  },
  {
    label: "Phone Number",
    id: "+23480 233 334 4444",
  },
  {
    label: "Email",
    id: "johnmoon@example.com",
  },
];
let checkboxes = [
  "Javascript",
  "Mobile App",
  "Game Dev",
  "Python",
  "UI/UX",
  "Blockchain",
];
let purpose = [
  " ---Select--- ",
  "To get a job",
  "As a hobby",
  "To upskill",
  "Education purpose",
];
let education = [
  " ---Select--- ",
  "Graduate",
  "High School",
  "Masters Degree",
  "Uneducated",
];
let employment = [
  " ---Select--- ",
  "Student",
  "Employed",
  "Unemployed",
  "Self Employed",
];
