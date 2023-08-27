//! Space one unit of memory => Most of the memory is 8 bits but some are 16 bits or 32 bits or 64 bits
// Not there address in memory => it's just a number that we use to refer to that memory location

//! Binary Numbers => 0 and 1
// 0 => represents the cell in memory empty from electricity
// 1 => represents the cell in memory full from electricity

// We use order this numbers to represent the data in memory

//! Units of information [data]
// Smallest Unit of Dat => Bit [0 or 1]
// 8 bits => 1 byte
// 1024 bytes => 1 kilobyte
// 1024 kilobytes => 1 megabyte
// 1024 megabytes => 1 gigabyte
// 1024 gigabytes => 1 terabyte
// 1024 terabytes => 1 petabyte
// 1024 petabytes => 1 exabyte
// 1024 exabytes => 1 zettabyte
// 1024 zettabytes => 1 yottabyte


//! Note => IBM put the standard of 8 bits = 1 byte
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Any data we can represent it in binary numbers
//! Example:
// 1520
// To represent this number in binary numbers we need to divide it by 2 and take the remainder and repeat this process until we get 0
// 1520 / 2 = 760 => 0
// 760 / 2 = 380 => 0
// 380 / 2 = 190 => 0
// 190 / 2 = 95 => 0
// 95 / 2 = 47 => 1
// 47 / 2 = 23 => 1
// 23 / 2 = 11 => 1
// 11 / 2 = 5 => 1
// 5 / 2 = 2 => 1
// 2 / 2 = 1 => 0
// 1 / 2 = 0 => 1
// 1520 => 10111100000

//! To store this number in memory we need 11 bits so we need 2 bytes and put zero in the first 5 bits
// 00000101
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! To covert binary number to decimal number
//! Example => 1011110000
// we need to multiply each bit with 2 to the power of it's index from right to left and start from 0 and add all the results
// 0 * 2^0 = 0
// 0 * 2^1 = 0
// 0 * 2^2 = 0
// 0 * 2^3 = 0
// 1 * 2^4 = 16
// 1 * 2^5 = 32
// 1 * 2^6 = 64
// 1 * 2^7 = 128
// 1 * 2^8 = 256
// 0 * 2^9 = 0
// 1 * 2^10 = 1024
//! 0 + 0 + 0 + 0 + 16 + 32 + 64 + 128 + 256 + 0 + 1024 = 1520
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! To represent characters in binary numbers we use ASCII table and it's 8 bits
//! but we can't represent all the characters in ASCII table so we use Unicode table and it's 16 bits
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! To represent colors in binary numbers we use RGB table and it's 24 bits
// From 0 to 255 for each color [Red, Green, Blue] => 0 => 000000, 255 => 111111
//!------------------------------------------------------------------------------------------------------------------------------------------------------//
//! To represent images in binary numbers we use pixels and each pixel has 3 colors [Red, Green, Blue] and each color has 8 bits
// 8 bits for Red + 8 bits for Green + 8 bits for Blue = 24 bits for each pixel
//!------------------------------------------------------------------------------------------------------------------------------------------------------//