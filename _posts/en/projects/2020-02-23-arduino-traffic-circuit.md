---
layout:       article
lang:         en
parent:       electronic-projects
breadcrumb:   true
permalink:    /en/projects/electronic/2020-02-23-arduino-traffic-circuit
ref:          2020-02-23-arduino-traffic-circuit
title:        Arduino traffic circuit
author:       Christian
description:  Slide pack of project presentation given on 15th of February
tags:         electronic, Arduino, LED, components
code:         true
---


---

<div class="text-center">
<a href="{{'assets/posts/2020-02-23-arduino-traffic-circuit/traffic-circuit.pptx' | relative_url}}" target="_blank" style="font-size: 1.8rem">Download Slides</a>
</div>

---

### The Arduino

<img class="img-fluid" src="{{'assets/posts/2020-02-23-arduino-traffic-circuit/arduino-schema.png' | relative_url}}" style="width: 50%"/>

1. The USB port used for powering and sending information from the computer
1. The power connector is used for powering the Arduino when the USB port is not in use with voltage
1. The pin Ground is basically the end of the circuit because it’s the minus closing the circuit to the ground.
1. It is the amount of voltage  sending to the voltage. 4. is 5volts and 5. is 3.3volts.
1. *(with 4)*
1. The Analog pins send operating voltage(5V or 3.3V) into integer values between 0 and 1023.
1. Digital pins that can input and output information to the circuit from the microprocessor.
1. *(with 7)*
1. *(with 7)*
1. Is the reset button that resets the information in the microprocessor.
1. Indicates that your Arduino is receiving power.
1. These LEDs indicates information sending from the computer. Expected to flicker.
1. The Micro Controller is really the heart of the Arduino.
1. Is the 5v voltage regulator making sure the voltage is regulated to 5v voltage.


### Programming with the Arduino

#### Basic traffic lights

There are two main functions that you always put, void setup and void loop.
Void setup is only doing it once like setting the pins and void loop is going to run the code over again and again just like an LED.


*View details on the slides*

```c
int switch State = 0;

void setup()
{
  pin Mode(2, INPUT);
  pin Mode(3, OUTPUT);
  pin Mode(4, OUTPUT);
  pin Mode(5, OUTPUT);
}

void loop()
{
  switch State = digital Read(2);

  if (switch State == LOW) {
    digital Write(3, LOW);
    digital Write(4, HIGH);
    digital Write(3, LOW);

    delay(250);
    digital Write(4, LOW);
    delay(250);
  }
  else {
    digital Write(3, LOW);
    digital Write(4, LOW);
    digital Write(5, HIGH);


    delay(2000);
    digital Write(4, HIGH);
    digital Write(5, LOW);
    delay(250);


    delay(2250);
    digital Write(4, LOW);
    digital Write(3, HIGH);
    delay(2250);
  }
}
```
