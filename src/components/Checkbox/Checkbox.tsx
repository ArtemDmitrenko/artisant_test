import React, { ReactElement, useState, useEffect } from 'react';

import styles from './checkbox.module.scss';

type CheckboxData = {
  name: string,
  isChecked: boolean,
};

type CheckboxProps = {
  title: string,
  isChecked?: boolean,
  name: string,
  onChange?: (data: CheckboxData) => void,
};

function Checkbox(props: CheckboxProps): ReactElement {
  const {
    title,
    isChecked = false,
    name,
    onChange,
  } = props;

  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    if (onChange) onChange({ name, isChecked: checked });
  }, [checked]);

  const handleCheckboxChange = (): void => {
    setChecked(!checked);
  };

  return (
    <div className={styles.checkbox}>
      <label className={styles.filter}>
        <input className={styles.content} name={name} type="checkbox" checked={checked} onChange={handleCheckboxChange} />
        <span className={styles.indicator} />
        <span className={styles.title}>{title}</span>
      </label>
    </div>

  );
}

export type { CheckboxProps, CheckboxData };
export default Checkbox;
