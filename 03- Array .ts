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