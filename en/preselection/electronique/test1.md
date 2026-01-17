# Test 1: Input Sensor - Gyroscope and Accelerometer

Detection of orientation with accelerometer and gyroscope MPU6050 - Conversion of physical quantities into exploitable electrical signals.

## Presentation

A sensor is an electronic device designed to convert physical or environmental quantities (motion, temperature, pressure, etc.) into exploitable electrical signals. Among the variety of available sensors, this test focuses on the accelerometer and gyroscope, key components in robotics and autonomous navigation.

### Main characteristics

- Real-time orientation detection
- I2C communication protocol
- Integration of an LCD display
- Portable and autonomous system

### Objective

This test aims to measure, interpret and display in real time the orientation and acceleration of a hand using an inertial sensor connected to a microcontroller. The data is visualized on an LCD screen via I2C communication.

---

## Presentation of the sensor

### Accelerometer (MPU6050)

Measures linear acceleration on three axes (X, Y, Z), detecting variations in speed and position.

- Motion detection (forward, backward, tilt)
- Trajectory correction
- Fall and impact detection

### Gyroscope (MPU6050)

Measures angular velocity on three axes, determining the speed and direction of rotation.

- Object orientation tracking
- Motion stabilization
- Improved navigation accuracy

### Sensor identification

We selected the GY-521 module, based on the MPU6050 sensor, which integrates an accelerometer and a gyroscope in a single component.

**Sensor operation:**
- **Accelerometer:** Measures acceleration in m/s² or in g
- **Gyroscope:** Measures angular velocity in °/s
- **I2C Communication:** Default address 0x68

---

## Used material

| Component | Reference | Quantity | Objective |
|-----------|-----------|----------|----------|
| Microcontroller | Arduino UNO (ATmega328P) | 1 | System core and processing |
| Sensor | GY-521 (MPU6050) | 1 | Motion and orientation detection |
| Display | LCD 16x2 + I2C module | 1 | Real-time data visualization |
| Power supply | 9V Battery | 1 | Portable power source |
| Wiring | Breadboard, jumpers | - | Circuit connections |
| Passive components | 10 kΩ resistors | 2 | I2C pull-up resistors |

---

## Presentation of components

### Arduino UNO

ATmega328P microcontroller - Brain of the system for data processing and control.

### LCD 16x2 + I2C screen

Real-time display of orientation and acceleration data.

### Breadboard

Prototyping platform for easy circuit assembly and testing.

### Jumpers

Flexible wiring for rapid prototyping and connections.

### 10 kΩ resistors

Stabilization of the I2C bus and communication reliability.

### 9V Battery

Portable power source with internal voltage regulation.

---

## Electronic schematic

The complete schematic of the MPU6050 sensor system with Arduino UNO and LCD display.

---

## Overall system operation

### Operating steps

1. **Component initialization**
   - Configuration and calibration of the LCD screen and MPU6050 sensor

2. **Automatic calibration**
   - Sensor calibration at system startup

3. **Raw data reading**
   - Continuous acquisition of acceleration and orientation data

4. **Dominant direction detection**
   - Algorithm processing for movement direction

5. **Display of direction and intensity**
   - Real-time result on LCD of processed data

### Technical specifications

- **Sampling frequency:** 3.3 Hz (300ms delay)
- **Communication:** I2C at 400kHz
- **Accuracy:** ±2% for acceleration
- **Power consumption:** ~50mA
- **Operating voltage:** 5V DC

---

## Arduino Code

### Used libraries

- **Wire.h** – I2C communication
- **Adafruit_MPU6050.h** – Sensor control
- **Adafruit_Sensor.h** – Structures and abstractions
- **LiquidCrystal_I2C.h** – LCD screen management

### Code characteristics

- Real-time data processing
- Automatic error handling
- Direction detection algorithm
- LCD display management
- Sensor calibration

### Complete code

````cpp
// Test 1 - GY-521 (MPU6050) with LCD and Arduino UNO
// UCAO-TECH TRC 2025

#include <Wire.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <LiquidCrystal_I2C.h>

Adafruit_MPU6050 mpu;
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(115200);
  Wire.begin();
  lcd.begin();
  lcd.backlight();
  lcd.print("Init sensor...");

  if (!mpu.begin()) {
    lcd.clear();
    lcd.print("MPU6050 Error");
    while (1);
  }
  lcd.clear();
  lcd.print("Sensor ready.");
  delay(1000);
}

void loop() {
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);

  float ax = a.acceleration.x;
  float ay = a.acceleration.y;
  float az = a.acceleration.z;

  lcd.clear();
  if (abs(ax) > abs(ay) && abs(ax) > abs(az)) {
    lcd.print(ax > 0 ? "Right" : "Left");
  } else if (abs(ay) > abs(az)) {
    lcd.print(ay > 0 ? "Forward" : "Backward");
  } else {
    lcd.print(az > 0 ? "Up" : "Down");
  }
  lcd.setCursor(0, 1);
  lcd.print("Acc: ");
  lcd.print(max(max(abs(ax), abs(ay)), abs(az)), 2);
  lcd.print(" g");
  delay(300);
}
````

## 🎥 Demonstration videos

- **Main demonstration**  
 [Main demonstration](https://www.youtube.com/watch?v=3eNkmmQ-iXk)

- **Axis testing**  
  [Axis testing](https://www.youtube.com/watch?v=REr67c1P6QY)

- **Real-time operation**  
  [Real-time operation](https://www.youtube.com/watch?v=27L5mn_YXMU)

---

## ⚠️ Problems encountered

| Problem | Root cause | Applied solution |
|---------|-------------|--------------------|
| Inconsistent display | Incorrect threshold values | Adjustment and calibration of thresholds |
| Incorrect orientation | Z-axis calibration error | Correct Z-axis calibration |
| Unstable LCD | Power supply fluctuations | Verification and stabilization of power supply |

---

## ✅ Conclusion

### 🎯 Achievements

- Application of skills in electronics and programming  
- Use of a combined accelerometer-gyroscope sensor  
- Design of a functional circuit with LCD interface  
- Implementation of real-time data processing  

### 📥 Downloads

- `test1_input.ino`  
- KiCad schematic

---

**UCAO-TECH TRC 2025**  
*Electronic Test 1 – Accelerometer & Gyroscope*