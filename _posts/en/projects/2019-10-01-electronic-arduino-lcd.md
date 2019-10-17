---
layout:       article
lang:         en
parent:       electronic-projects
breadcrumb:   true
permalink:    /en/projects/electronic/lcd-arduino-2019
ref:          2019-lcd-arduino
title:        LCD Arduino
author:       fionnc, tristan, Iain Campbell
description:  How to use an LCD and Arduino to display a message
tags:         Arduino, electronic, lcd
code:         true
---

## Arduino LCD  

This project used a Liquid Crystal display (LCDs) and an arduino to display a message.
LCDs like these are very popular and broadly used in electronics projects as they are good for displaying information like sensors data from your project.
 

<img class="img-fluid" src="{{'assets/posts/2019-10-01-arduino-lcd/lcd-coderdojo-message.png' | relative_url}}"/>


### More about the project

The Arduino has a function known as a serial monitor, an area of the Arduino application in which data can be displayed. 
However, when the Arduino is not attached to a computer, this feature cannot be used as there is no display to show these variables on.
We decided to solve this issue by attaching a Liquid Crystal Display, or LCD, to the Arduino board and having this display the contents of the serial monitor.
Normally, the LCD is only used with the larger Arduino Mega due to the large amount of pins and ports needed to control the inputs to the LCD. 
We were able to adapt the circuit to a standard Arduino Uno without loss of functionality, but using the Mega is recommended if other circuits are necessary to acquire data for the LCD to display.
We also added a potentiometer to the circuit in order to control the contrast of the text to the screen.


### Components
* Arduino Board
* LCD Screen (compatible with Hitachi HD44780 driver)
* Pin headers to solder to the LCD display pins
* 10k ohm potentiometer


### Schematic
* This is the schematic for this project:

<img class="img-fluid" src="{{'assets/posts/2019-10-01-arduino-lcd/lcd-schematic.png' | relative_url}}"/>


#### LCD pin out 

The purpose of the pins of the LCD are shown below:

<img class="img-fluid" src="{{'assets/posts/2019-10-01-arduino-lcd/lcd-pinout.png' | relative_url}}"/>

For more information see [Components 101 - 16 x 2 LCD Module ](https://components101.com/16x2-lcd-pinout-datasheet)

#### How the circuit is connected

* The LCD has 16 pins and the first one from left to right is the Ground pin `GND` or `VSS`. 
* The second pin is the `VCC/VDD` which we connect the 5 volts pin on the Arduino Board. 
* A potentiometer is attached to the `Vo` pin  for controlling the contrast of the display.
* The `RS` pin or register select pin is used for selecting whether we will send commands or data to the LCD. 
  For example if the RS pin is set on low state or zero volts, then we are sending commands to the LCD like: set the cursor to a specific location, clear the display, turn off the display and so on. 
* When RS pin is set on High state (or 5 volts) we are sending data or characters to the LCD.
* Next comes the R / W pin which selects the mode whether we will read or write to the LCD. Here we use write node for writing or sending commands and data to the LCD.
* There are 8 data pins. In this project we used four of the eight pins.
* Anode pin Connected to positive `5V` through a 220 Ohm resistor.
* Cathode pin Connected to `GND` (negative).
*  From the [Arduino’s official website](https://www.arduino.cc/en/Reference/LiquidCrystal) you can find and see the functions of the library which enable easy use of the LCD. 
   We can use the Library in 4 or 8 bit mode. In this tutorial we will use it in 4 bit mode, or we will just use 4 of the 8 data pins.

### Component diagram

* The following shows a breadboard diagram which was used for this project.

<img class="img-fluid" src="{{'assets/posts/2019-10-01-arduino-lcd/lcd-component-diagram.png' | relative_url}}"/>


### Code

* The following code snippet was used:

```c

/*
  LiquidCrystal Library - Hello World

 Demonstrates the use a 16x2 LCD display.  The LiquidCrystal
 library works with all LCD displays that are compatible with the
 Hitachi HD44780 driver. There are many of them out there, and you
 can usually tell them by the 16-pin interface.

 This sketch prints "Hello World!" to the LCD
 and shows the time.

  The circuit:
 * LCD RS pin to digital pin 12
 * LCD Enable pin to digital pin 11
 * LCD D4 pin to digital pin 5
 * LCD D5 pin to digital pin 4
 * LCD D6 pin to digital pin 3
 * LCD D7 pin to digital pin 2
 * LCD R/W pin to ground
 * LCD VSS pin to ground
 * LCD VCC pin to 5V
 * 10K resistor:
 * ends to +5V and ground
 * wiper to LCD VO pin (pin 3)

 Library originally added 18 Apr 2008
 by David A. Mellis
 library modified 5 Jul 2009
 by Limor Fried (http://www.ladyada.net)
 example added 9 Jul 2009
 by Tom Igoe
 modified 22 Nov 2010
 by Tom Igoe

 This example code is in the public domain.

 http://www.arduino.cc/en/Tutorial/LiquidCrystal
 */

// include the library code:
#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
}

void loop() {
    // Print a message to the LCD.
    lcd.print("  Coderdojo");
    // set cursor to send line 
    lcd.setCursor(0,1);
    // Print a message to the LCD.
    lcd.print(" is Awesome!");
}

```


### Further experiments

* We experimented with additional LCD library functions using a `Hello Coderdojo!` message to auto-scroll the text from right to left in a loop as shown below:

```c
#include <LiquidCrystal.h>

// initialize the library by associating any needed LCD interface pin
// with the arduino pin number it is connected to
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("Hello Coderdojo!");
  delay(1000);
}

void loop() {
  // scroll 16 positions (string length) to the left
  // to move it offscreen left:
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // scroll one position left:
    lcd.scrollDisplayLeft();
    // wait a bit:
    delay(150);
  }

  // scroll 32 positions (string length + display length) to the right
  // to move it offscreen right:
  for (int positionCounter = 0; positionCounter < 32; positionCounter++) {
    // scroll one position right:
    lcd.scrollDisplayRight();
    // wait a bit:
    delay(150);
  }

  // scroll 16 positions (display length + string length) to the left
  // to move it back to center:
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // scroll one position left:
    lcd.scrollDisplayLeft();
    // wait a bit:
    delay(150);
  }

  // delay at the end of the full loop:
  delay(1000);

}



```


### Resources
* The [Arduino "Hello World"](https://www.arduino.cc/en/Tutorial/HelloWorld) tutorial on LCD and Arduino provides a useful reference. 

