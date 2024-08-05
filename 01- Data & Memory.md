## Space one unit of memory &rarr; Most of the memory is 8 bits but some are 16 bits or 32 bits or 64 bits
 - Not there address in memory &rarr; it's just a number that we use to refer to that memory location

### Binary Numbers &rarr; 0 and 1
- 0 &rarr; represents the **cell** in memory empty from electricity
- 1 &rarr; represents the cell in memory full from electricity

##### We use order this numbers to represent the data in memory

##### Units of information [**data**]
-  Smallest Unit of Data &rarr; Bit [0 or 1]
-  8 bits &rarr; 1 byte
-  1024 bytes &rarr; 1 kilobyte
-  1024 kilobytes &rarr; 1 megabyte
-  1024 megabytes &rarr; 1 gigabyte
-  1024 gigabytes &rarr; 1 terabyte
-  1024 terabytes &rarr; 1 petabyte
-  1024 petabytes &rarr; 1 exabyte
-  1024 exabytes &rarr; 1 zettabyte
-  1024 zettabytes &rarr; 1 yottabyte


**NOTE &rarr; IBM put the standard of 8 bits = 1 byte**

<hr>

#### Any data we can represent it in binary numbers
**Example:**
- **1520**
- **To represent this number in binary numbers we need to divide it by 2 and take the remainder and repeat this process until we get 0**
&rarr; 1520 / 2 = 760 &rarr; 0
&rarr; 760 / 2 = 380 &rarr; 0
&rarr; 380 / 2 = 190 &rarr; 0
&rarr; 190 / 2 = 95 &rarr; 0
&rarr; 95 / 2 = 47 &rarr; 1
&rarr; 47 / 2 = 23 &rarr; 1
&rarr; 23 / 2 = 11 &rarr; 1
&rarr; 11 / 2 = 5 &rarr; 1
&rarr; 5 / 2 = 2 &rarr; 1
&rarr; 2 / 2 = 1 &rarr; 0
&rarr; 1 / 2 = 0 &rarr; 1
&rarr; 1520 &rarr; 10111100000

#### To store this number in memory we need 11 bits so we need 2 bytes and put zero in the first 5 bits
- 00000101
<hr>

#### **To covert binary number to decimal number**
**Example &rarr; 1011110000**
**we need to multiply each bit with 2 to the power of it's index from right to left and start from 0 and add all the results**
&rarr; 0 * 2^0 = 0
&rarr; 0 * 2^1 = 0
&rarr; 0 * 2^2 = 0
&rarr; 0 * 2^3 = 0
&rarr; 1 * 2^4 = 16
&rarr; 1 * 2^5 = 32
&rarr; 1 * 2^6 = 64
&rarr; 1 * 2^7 = 128
&rarr; 1 * 2^8 = 256
&rarr; 0 * 2^9 = 0
&rarr; 1 * 2^10 = **1024**
#### 0 + 0 + 0 + 0 + 16 + 32 + 64 + 128 + 256 + 0 + 1024 = 1520
<hr>

#### To represent characters in binary numbers we use ASCII table and it's 8 bits but we can't represent all the characters in ASCII table so we use Unicode table and it's 16 bits
<hr>

#### To represent colors in binary numbers we use RGB table and it's 24 bits
&rarr; From 0 to 255 for each color [Red, Green, Blue] &rarr; 0 &rarr; 000000, 255 &rarr; 111111
<hr>

#### To represent images in binary numbers we use pixels and each pixel via color [Red, Green, Blue] and each color has 8 bits
&rarr; 8 bits for Red + 8 bits for Green + 8 bits for Blue = 24 bits for each pixel
