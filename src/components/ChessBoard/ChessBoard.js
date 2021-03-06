import React from "react";

function ChessBoard() {
  function box() {
    let chessBox = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i % 2 === j % 2) {
          chessBox.push(<div className="white">1</div>);
        } else {
          chessBox.push(<div className="black">1</div>);
        }
      }
    }
    return chessBox;
  }
  return (
    <div>
      <div className="mainbox">{box().map((item) => item)}</div>
    </div>
  );
}

export default ChessBoard;
// import React from 'react'

// function ChessBoard() {
//     function box() {
//         let display = [];
//         for (let i = 0; i < 8; i++) {
//             for (let j = 0; j < 8; j++) {
//                 if (i % 2 === j % 2) {
//                     display.push(<div className='white'>1</div>);
//                 } else {
//                     display.push(<div className='black'>2</div>)
//                 }
//             }
//         }
//         return display
//     }
//     return (
//         <div className='chessBox'>
//             {box().map((item) => item)}
//         </div>
//     )
// }

// export default ChessBoard
