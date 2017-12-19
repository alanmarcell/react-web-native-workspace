/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import './Test.view.css';
const styles = { h14tl145: 'css-byr42u', hb8n212: 'css-lu8nfd' };

const Test = props => {
  return (
    <button
      data-test-id={props['data-test-id'] || 'Test'}
      onClick={props.onClick}
      className={styles.h14tl145}
    >
      <span data-test-id="Test.Text" className={styles.hb8n212}>
        Hey I'm a button!
      </span>
      {props.children}
    </button>
  );
};

export default Test;
