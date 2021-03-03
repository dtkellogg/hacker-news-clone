// import React from "react";

// const styles = {
//   content: {
//     fontSize: "35px",
//     position: "absolute",
//     left: "0",
//     right: "0",
//     marginTop: "20px",
//     textAlign: "center",
//   },
// };

// export default function Loading({ text = "Loading", speed = 300 }) {
//   const [content, setContent] = React.useState(text);

//   React.useEffect(() => {
//     const id = window.setInterval(() => {
//       setContent((content) => {
//         return content === `${text}...` ? text : `${content}.`;
//       });
//     }, speed);

//     return () => window.clearInterval(id);
//   }, [text, speed]);
//   return <p styles={styles.content}>{content}</p>;
// }

import React from "react";
import "../css/spinner.css";

export default function Loading() {
  return (
    <div className="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
