room_string = "L.LL.LL.LL LLLLLLL.LL L.L.L..L.. LLLL.LL.LL L.LL.LL.LL L.LLLLL.LL ..L.L..... LLLLLLLLLL L.LLLLLL.L L.LLLLL.LL"

room_array = room_string.split(" ")
const nb_rows = room_string.split (" ").length;
const nb_cols = room_string.split(" ")[1].length;

console.log(room_array)

let round = 0;
let occupied_seats = 0; 

const count_adjacent_occupied_seats = (x,y) => {
	// | adj_1 | adj_2 | adj_3 |
	// | adj_4 | SPACE | adj_5 |
	// | adj_6 | adj_7 | adj_8 |
	console.log(x)
	console.log(y)
	console.log(room_array[x][y]);
	
	let adjacent_spaces = []

	if (x > 1 && y > 1) {
		const adj_1 = room_array[x -1][y -1];
		adjacent_spaces.push(adj_1);
		
	}
	if ( y > 1) {
		const adj_2 = room_array[x][y -1];
		adjacent_spaces.push(adj_2); 
		
	}
	if ( x < nb_cols - 1 && y > 1) {
		const adj_3 = room_array[x + 1][y -1]; 
		adjacent_spaces.push(adj_3);
		
	}
	if (x > 1) {
		const adj_4 = room_array[x -1][y]; 
		adjacent_spaces.push(adj_4);
	}
	if (x < nb_cols - 1) {
		console.log(x);
		console.log(y);

		const adj_5 = room_array[x +1][y]; 
		adjacent_spaces.push(adj_5);
	}
	if (x > 1 && y < nb_rows) {
		const adj_6 = room_array[x -1][y +1];
		adjacent_spaces.push(adj_6);
	}
	if (y < nb_rows - 1) {
		const adj_7 = room_array[x][y +1]; 
		adjacent_spaces.push(adj_7);
	}
	if (x < nb_cols - 1 && y < nb_rows - 1) {
		const adj_8 = room_array[x +1][y +1]; 
		adjacent_spaces.push(adj_8);
	}

	let adjacent_occupied_seats = 0;

	adjacent_spaces.forEach((space) => {
		if (space === "#"){
			adjacent_occupied_seats += 1
		}
	})

	return adjacent_occupied_seats;
}

const first_round = () => {
	
	// Create a counter for occupied seats : 
	let occupied_seats = 0;

	// Iterate through all the spaces : 
	for (let i = 0; i < nb_rows; i ++) {
		for (let j = 0; j < nb_cols; j ++) {
			// Count the adjacent occupied seats : 
			console.log(i, j);
			const adjacent_occupied_seats = count_adjacent_occupied_seats(i, j)
			
			// If the seat is empty and there are no occupied seats adjacent to it:
			if (room_array[i][j] === 'L' && adjacent_occupied_seats === 0){
				// The seat becomes occupied : 
				room_array[i].splice(j, 1, "#");
				console.log(room_array[i])
				occupied_seats += 1;
			}
		}
	} 
	
}

first_round()
console.log(room_array)

// If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
// If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
// Otherwise, the seat's state does not change.


