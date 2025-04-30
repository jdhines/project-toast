import React from 'react';

function useKeydown(targetKey, callback) {
  console.log('listening for keydown', targetKey);
  React.useEffect(
    () => {
      function keyPressHandler(event) {
        if (event.key === targetKey) {
          callback();
        }
        console.log('keydown handled!');
      };

      window.addEventListener('keydown', keyPressHandler);

      return () => {
        window.removeEventListener('keydown', keyPressHandler);
      };
    }, [targetKey, callback]
  )
}

export default useKeydown;