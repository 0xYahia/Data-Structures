//! 04 – Array – Operations Implementation
//! Array implement some operation for Ts

//! Template:
//! 1) Name: Resize

//! 2) Assumptions
//      - Array data is stored in memory heap
//      - Array address is stored in memory stack

//! 3) Inputs:
//      - The array data type
//      - The array itself
//      - New size

//! 4) Processes: Must be first on the function
//      1) Validations:
//          - The new size is a valid number
//          - The new size is not equal to the current size
//          - The array is not null

//      2) Resize the array:
//          - Create a new empty array from the same type with the new size
//          - Move all items from the source array to the new array
//          - Assign the address of the new array for the source array address

//! 5) Outputs:
//      - Nothing


function resizeArray(source:[number, number]){
  if( source == null) return

  let newArray:[number, number, number, number] = [...source,0,0]
  console.log(newArray)
}

let arr:[number, number] = [2,5]

resizeArray(arr)