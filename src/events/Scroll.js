import React, { useEffect, useState } from 'react';

function Scroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '150vh', padding: '20px' }}>
      <h1>Scroll Position: {scrollPosition}px</h1>
      <p>Scroll down to see the effect.</p>
    </div>
  );
}

export default Scroll;







// import React, { useEffect, useRef, useState } from 'react';

// function Scroll() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const scrollContainerRef = useRef(null);

//   const handleScroll = () => {
//     const position = scrollContainerRef.current.scrollTop;
//     setScrollPosition(position);
//   };

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     scrollContainer.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       scrollContainer.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       ref={scrollContainerRef}
//       style={{ height: '200px', overflowY: 'scroll', border: '1px solid black' }}
//     >
//       <div style={{ height: '600px', padding: '20px' }}>
//         <h1>Scroll Position: {scrollPosition}px</h1>
//         <p>Scroll down to see the effect.</p>
//       </div>
//     </div>
//   );
// }

// export default Scroll;
