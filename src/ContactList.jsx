import React, { Fragment, useState } from "react";
import styles from "./ContactList.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function ContactList(props) {
  const { name, lastName, email, phone, id } = props.contact;

  return (
    <div className={styles.userInfo}>
      <div className="text-capitalize" id={styles.lname_fname}>
        <FontAwesomeIcon icon={faUser} /> {name} {lastName}
      </div>
      <div id={styles.email}>
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;{email}
      </div>
      <div id={styles.phone}>
        <FontAwesomeIcon icon={faPhone} />
        &nbsp;{phone}
      </div>
      <div id={styles.delete}>
        <span>
          <FontAwesomeIcon
            icon={faTrashCan}
            className={styles.iconDelete}
            onClick={() => props.deleteContact(id)}
          />
        </span>
      </div>
    </div>
  );
}
