//! 03 – Array – Introduction
//! Array => it's a data structure that we use to store a list of items of the same type (homogeneous)
// We access the items in the array using the index of the item

// Array base address => the address of the first item in the array

//! So we can get address of the item in the array using this formula:
// address of the item = array base address + (index of the item * size of the item)

//! Example:
// let arr = [1, 2, 3, 4, 5];
// base address = 0X5040E8
// size of the item = 4 bytes
// address of the item in index 2 = 0X5040E8 + (2 * 4) = 0X5040F0
// address of the item in index 4 = 0X5040E8 + (4 * 4) = 0X5040F8
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Dynamic Array:
// it's an array that we can change it's size dynamically according to our needs
// actually it's not a dynamic array it's make a new array with a new size and copy the old array in the new array and delete the old array
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Types of Arrays:
// 1) Regular Array: it's a normal array via rows
// 2) 2D array OR Multi-Dimensional Array: it's rows and columns it's an array that contains another arrays
// 3) 3D array OR Page Array: it's row and column and the rows and columns and repeated more than once
// 4) Jagged Array: it's an array that contains another arrays but the arrays that it contains can have different sizes
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Example for 2D array:
// example from C#:
// int32[,] arr = new int32[3, 2][rows, columns];
// arr[0, 0] = 1;
// arr[0, 1] = 2;
// arr[1, 0] = 3;
// arr[1, 1] = 4;
// arr[2, 0] = 5;
// arr[2, 1] = 6;
// each row stored in memory after the other row

// length of the array = 3 * 2 = 6
// size of the item = 4 bytes
// size of the array = 3 * 2 * 4 = 24 bytes
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Example for 3D array:
// example from C#:
// int32[,,] arr = new int32[2, 3, 2][pages, rows, columns];
// arr[0, 0, 0] = 1;
// arr[0, 0, 1] = 2;
// arr[0, 1, 0] = 3;
// arr[0, 1, 1] = 4;
// arr[0, 2, 0] = 5;
// arr[0, 2, 1] = 6;
// arr[1, 0, 0] = 7;
// arr[1, 0, 1] = 8;
// arr[1, 1, 0] = 9;
// arr[1, 1, 1] = 10;
// arr[1, 2, 0] = 11;
// arr[1, 2, 1] = 12;
// each page stored in memory after the other page and each row stored in memory after the other row
// length of the array = 2 * 3 * 2 = 12
// size of the item = 4 bytes
// size of the array = 2 * 3 * 2 * 4 = 48 bytes
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Example for Jagged Array:
// it's an array that contains another arrays but the arrays that it contains can have different sizes
// example from C#:
// int32[][] arr = new int32[3][];

//NumArray[0] = new int32[3];
//NumArray[1] = new int32[2];
//NumArray[2] = new int32[4];
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Data Structure:
// Any data structure via:
// infrastructure that we use to store data in it and operations that we can do on this data like add, delete, update, search, sort, etc...

//! Array for example is a data structure
// infrastructure => consecutive memory stores
// operations => get length, traverse, get at, set at, insert at, delete at, insert first, delete first, insert last, delete last, etc...
//! There static operations and dynamic operations
// static operations => operations that we can do on the array without changing the structure of the array
//! like get length, traverse, get at, set at
// dynamic operations => operations that we can do on the array by changing the structure of the array
//! like insert at, delete at, insert first, delete first, insert last, delete last

//! NOTE
// Infrastructures => Compiler Responsibility
// Operations => Programmer Responsibility
//!------------------------------------------------------------------------------------------------------------------------------------------------------//