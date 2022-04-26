// export const Text = (props) => {
//   console.log("🚀 ~ props", props);
//   return (
//     <div>
//       <p
//         //inline styles
//         style={{
//           color: props.color,
//           //   backgroundColor: "blue", //background-color
//           //   zIndex: "1", //z-index
//         }}
//       >
//         {props.content}{" "}
//       </p>
//       {/* <p>{5 + 5}</p>
//       <p>{(() => `Barev`)()}</p> */}
//       <p>---------</p>
//     </div>
//   );
// };

export const Text = (props) => {
  return (
    <p
      style={{
        color: props.color,
      }}
    >
      {props.content}
    </p>
  );
};
