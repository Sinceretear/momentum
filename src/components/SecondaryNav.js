import React, { useState } from 'react';
import { CashIcon, LockOpenIcon, LockClosedIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";

const SecondaryNav = () => {

  const isLocked = localStorage.getItem('locked') === 'true';
  const [hidden, setHidden] = useState(isLocked);

  const hide = () => {
    if (hidden) {
      var lock = false;
      localStorage.setItem("locked",lock);
      setHidden(!hidden)
    } else {
      var lock = true;
      localStorage.setItem("locked",lock);
      setHidden(!hidden)
    }
  };

  return (
    <div className="float-right text-white">
        <LockOpenIcon className="h-5 w-5 text-white pt-5" alt="lock" style={{height: '40px'}} onClick={hide} hidden={hidden}/>
        <LockClosedIcon className="h-5 w-5 text-white pt-5" alt="lock" style={{height: '40px'}} onClick={hide} hidden={!hidden}/>
        <Link to="/test" target="_blank">
          <CashIcon className="h-5 w-5 text-white pt-5" alt="bankIcon" style={{height: '40px'}}/>
        </Link>
    </div>
  );
};

export default SecondaryNav