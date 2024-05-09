const api_url = "https://sudoku-api.vercel.app/api/dosuku";
let solve;
async function getSudoku() {
  const data = await fetch(api_url);
  const sudoku = await data.json();
//   console.log("Suduko");
  const grid = sudoku.newboard.grids[0].value;
  solve = sudoku.newboard.grids[0].solution;

  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid.length; j++) {
      let temp = document.getElementById("sudoku").rows[i].cells[j];
      if (grid[i][j] != 0) {
        temp.childNodes[0].value = grid[i][j];
        temp.childNodes[0].readOnly = true;
      }
    }
  }
}

const solver = document.getElementById("solve");
solver.addEventListener('click', () => {
  for (i = 0; i < solve.length; i++) {
    for (j = 0; j < solve.length; j++) {
      let temp = document.getElementById("sudoku").rows[i].cells[j];
      temp.childNodes[0].value = solve[i][j];
      temp.childNodes[0].readOnly = true;
    }
  }
});

const newBoard = document.getElementById("newBoard");
newBoard.addEventListener('click', () => {
  location.reload();
});

getSudoku();
