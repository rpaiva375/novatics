
function validadeSudoku(board) {
    // Checando linha
    for (let i = 0; i < board.length; i++) {
        const s = new Set();
        for (let j = 0; j < board[i].length; j++) {
          const note = board[i][j];
          if (note === '.') continue;
          if (s.has(note)) return false;
          s.add(note);
        }
        
    }
  
    // Checando coluna
    for (let i = 0; i < board.length; i++) {
        const s = new Set();
        for (let j = 0; j < board[i].length; j++) {
          const note = board[j][i];
          if (note === '.') continue;
          if (s.has(note)) return false;
          s.add(note);
        }
        
    }
  
    // Checando quadrantes
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
  
            const s = new Set();
  
            for (let l = 0; l < 3; l++) {
                for (let k = 0; k < 3; k++) {
                    const note = board[3*i+l][3*j+k];
                    if (note === '.') continue;
                    if (s.has(note)) return false;
                    s.add(note);
                }
                
            }
            
        }
        
    }

    return true;
  
}
  
  let board1 =
  [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]];
  
  let board2 =
   [["8","3","3",".","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]];
  
  if (validadeSudoku(board1)){
    console.log("Sudoku Válido");
  }else{
    console.log("Sudoku Inválido");
  }