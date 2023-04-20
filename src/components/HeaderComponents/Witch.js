import React, { useState, useEffect } from 'react';
import WitchIdle from '../../assets/B_witch_idle.gif';
import WitchRun from '../../assets/B_witch_run.gif';

function Witch() {
  const [showWitchIdle, setShowWitchIdle] = useState(true);

  /* const toggleGif = () => {
      setShowWitchIdle(!showWitchIdle);
    };
  
    useEffect(() => {
    // do nothing
  }, [showWitchIdle]);
  */

  
  return (
    <div class="witch-gif" >
      {showWitchIdle ? (
        <img src={WitchIdle} alt="Idle Witch" />
      ) : (
        <img src={WitchRun} alt="Running Witch" className="witchRun stop" />
      )}
    </div>
  )
}

export default Witch