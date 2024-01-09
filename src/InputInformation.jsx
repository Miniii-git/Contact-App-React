import React, { Fragment, useState } from "react";
import styles from "./InputInformation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faL, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from "uuid";

export default function InputInformation() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [alarm, setAlarm] = useState(false);

  const inputs = [
    { type: "text", name: "name", placeholder: "Name" },
    { type: "text", name: "lastName", placeholder: "Last Name" },
    { type: "email", name: "email", placeholder: "Email" },
    { type: "number", name: "phone", placeholder: "Phone" },
  ];

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const addContact = (event) => {
    event.preventDefault();
    if (!form.name || !form.lastName || !form.phone || !form.email) {
      setAlarm(true);
      return;
    }
    const formWithId = { ...form, id: uuidv4() };
    setList((list) => [...list, formWithId]);
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setAlarm(false);
    console.log(list);
  };

  const deleteContact = (id) => {
    setList(list.filter((contact) => contact.id !== id));
  };

  return (
    <div className={styles.InputInformation}>
      <div className={styles.formSection}>
        {inputs.map((input, i) => (
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={form[input.name]}
            onChange={changeHandler}
            key={i}
          />
        ))}
        <button onClick={addContact}>Add Contact</button>
      </div>

      <div className={styles.alarmSection}>
        {alarm ? <p> Enter valid data! </p> : ""}
      </div>
      <div className={styles.contactListSection}>
        <h3> Contact List</h3>
        <div className={styles.list}>
          {list.length ? (
            <div>
              {list.map((contact) => (
                <ContactList
                  contact={contact}
                  key={contact.id}
                  deleteContact={deleteContact}
                />
              ))}
            </div>
          ) : (
            <p className={styles.messageNoContact}>No Contact Yet !</p>
          )}
        </div>
      </div>
    </div>
  );
}
