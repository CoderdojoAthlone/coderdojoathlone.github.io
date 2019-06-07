---
layout:       article
lang:         en
parent:       electronic-projects
breadcrumb:   true
permalink:    /en/projects/electronic/automatic-hen-door-2019
ref:          2019-hen-door-arduino
title:        Hen door with Arduino
author:       daedemon
description:  How to automate a hen door using Arduino Mk1 and Mk2.
tags:         Arduino, electronic, motor, relay
code:         true
---

# Automatic Hen Door
I have hens. They have to be let out at about 11 am and shut in about an hour after dark every day. 
This is rather problematic as I am in school at 11 am most days. 
This means I can only let out the hens once I come home from school. 
Hardly a satisfactory arrangement as it means the hens are only out for about 2 hours in winter.

### Enter Arduino
The only logical way to solve this issue is to remove the root of the problem - school. 
When I was told "No, you can't leave school", I had to find another way. 
I decided to use an arduino to open the hen door at 11 am ish and close the door shortly after dark.
 
### Mk1
My first design inherently flawed the arduino was not able to deliver the power necessary to move the hen door.
<img class="img-fluid" src="{{'assets/posts/2019-05-20-hen-door-arduino/hen-door-mk1.png' | relative_url}}"/>

As you can see the power for the motor comes from arduino itself. 
This was not sufficient for the motor necessary to move the hen door. 

### Mk2
As the arduino would fry if I tried to use it to handle mains power for the motor directly I needed to use relays. 
These allowed me to use full mains power to drive my motor without frying the arduino. 
<img class="img-fluid" src="{{'assets/posts/2019-05-20-hen-door-arduino/hen-door-mk2.png' | relative_url}}"/>

### Code

```c
int sensorPin = A0; // select the input pin for LDR
int sensorValue = 0; // variable to store the value coming from the sensor
int doorShut=0;

void setup()
{
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  Serial.begin(9600); 
}

void loop()
{
  sensorValue = analogRead(sensorPin); // read the value from the sensor
  Serial.println(sensorValue); //prints the values coming from the sensor on the screen
  delay(100);
}

// change 100 to the read value of the ldr in the late evening when it is mostly dark
if (100 > sensorValue & doorShut == 0)
  {				
    delay (1000);		// change to 2 hours for actual circuit
    digitalWrite (10, HIGH);
    delay (1000);		// length of time for motor to spin
    digitalWrite (10, LOW);
    doorShut = 1;
  }
// change 700 to the read value of the ldr in the early morning
else if (800 < sensorValue & doorShut == 1)
  {
    delay (1000);		// change to 5 hours for actual circuit 
    digitalWrite (11, HIGH);
    delay (1000);		// motor spin time
    digitalWrite (11, LOW);
    doorShut = 0;
  }
```

MK1 can be found [here](https://www.tinkercad.com/things/cPyxf8nL616) and MK2 can be found [here](https://www.tinkercad.com/things/9WRHAUwvzIm)


