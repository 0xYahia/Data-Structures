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


function resizeArray<T>(source:T[], newSize:number){
  if( source == null || newSize <=0 || newSize == source.length) return

  let newArray = new Array(newSize).fill(0)
  for(let i =0; i < source.length; i++){
    newArray[i] = source[i]
  }
  newArray = []
}

let arr:[number, number] = [2,5]

resizeArray(arr, 5)

//! Name: GetAt

//! Assumptions
//      - Array data is stored in memory heap
//      - Array address is stored in memory stack

//! Inputs:
//      - The array data type
//      - The array itself
//      - The index

//! Processes: Must be first on the function
//      1) Validations:
//          - Index is 0 or greater.

//      2) Get item:
//          - get the memory address of the 0th item
//          - get the size of the data type of the array
//          - calculate the address of the given index
//          - get value from memory using the calculated address

//! Outputs:
//      - single item or default value

//! In javascript or typescript we can not get the memory address of a variable
//! So we will use the index to get the item

function getAt<T>(source:T[], index:number):T | null{
  if(index < 0) return null
  return source[index]
}

//! Implementation of GetAt using C#

// using System;
// using System.Runtime.InteropServices;
// using System.Runtime.CompilerServices;

// class Program {
//   public static void Main (string[] args) {

//     int[] arr = new int[3] {4654, 921, 762};
//     OurArray our = new OurArray();
//     our.Resize<int>(ref arr, 5);
//     Console.WriteLine(String.Join(", ", arr));

//     int item = our.GetAt<int>(arr, 1, sizeof(int));
//     Console.WriteLine(item);
//     Console.WriteLine( arr[1] );
//   }
// }

// class OurArray{
//   public void Resize<T>(ref T[] source, int newSize)
//   {
//     if(newSize <=0) return;
//     if(source == null) return;
//     if(source.Length == newSize) return;

//     T[] newArray = new T[newSize];
//     Buffer.BlockCopy(source, 0, newArray, 0,
//                      Buffer.ByteLength(source) );

//     source = newArray;
//   }

//   public T GetAt<T>(T[] source, int index, int SizeOf)
//   {
//     if(index < 0) return default(T);
//     ref byte zeroAddr = ref MemoryMarshal.GetArrayDataReference((Array)source);
//     ref byte indexRef = ref Unsafe.Add(ref zeroAddr, index * SizeOf);
//     ref T item = ref Unsafe.As<byte, T>(ref indexRef);
//     return item;
//   }
// }