import React from 'react';
import styles from './Checkbox.module.scss';

export default function Checkbox(props) {

  return (
        <label className={styles.container}>
            <input type="checkbox" defaultChecked={props.checked} className={styles.input} disabled={props.disabled}/>
            <span className={styles.checkmark}><span className={styles.text}>{props.text}</span></span> 
        </label>
  )
}