import { useState, useRef, useEffect } from 'react';
import autoAnimate from '@formkit/auto-animate';
import styles from './Dropdown.module.scss';

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  return (
    <div ref={parent} className={styles.root}>
      <strong className='dropdown-label' onClick={reveal}>
        Click me to open!
      </strong>
      {show && <p className='dropdown-content'>Lorum ipsum...</p>}
    </div>
  );
};

export default Dropdown;
