# Final Test – Computer Science

## IT Documentation – Intelligent Conveyor System

Advanced software architecture and real-time control system for automated waste sorting.

---

## Introduction

### Context

In a world where sustainable waste management becomes a major issue for industrial cities, **TEKBOT CITY** aims to implement an innovative system to optimize waste sorting and valorization. Automated sorting, flow traceability and integration of digital tools are now essential to meet environmental, economic and regulatory requirements.

### Vision and perspectives

The ambition of this project is to demonstrate how technological innovation can transform industrial waste management. In the short term, the objective is to implement a reliable, automated and connected system, capable of sorting different types of waste in real time.

### Documentation approach

This documentation was designed to ensure transparency, reproducibility and continuous improvement of the project. It details each step of the design, from technical choices to development methods.

---

## System description

### General presentation

The intelligent conveyor system presented here is an innovative automated waste sorting solution, designed to meet the challenges of Industry 4.0 and sustainable development.

### Sequence diagram – System operation

```
sequenceDiagram
    participant Operator as Operator
    participant Object as Waste (colored cube)
    participant PresenceSensor as Presence Sensor
    participant Conveyor as Conveyor
    participant ColorSensor as Color Sensor
    participant Microcontroller as Microcontroller
    participant WebInterface as Web Interface
    participant Collector as Collector

    Operator->>Object: Places waste on conveyor
    Object->>PresenceSensor: Passage detected
    PresenceSensor-->>Microcontroller: Presence signal
    Microcontroller->>Conveyor: Belt startup
    Conveyor->>Object: Transport to analysis zone
    Object->>ColorSensor: Arrival under sensor
    ColorSensor-->>Microcontroller: Color measurement
    Microcontroller->>WebInterface: Counter update
    Conveyor->>Object: Stop at end of path
    Collector->>Object: Collects waste
```

### System objectives

- Automatically detect the presence and color of objects  
- Classify and sort waste autonomously  
- Ensure complete traceability of operation  
- Provide a web supervision interface  

### System advantages

- Automated, fast and reliable sorting  
- Adaptability to different types of waste  
- Reduction of manual interventions  
- Data collection and analysis  

---

## Intelligent detection

### Color detection with TCS34725

The TCS34725 sensor is an electronic component capable of identifying the color of an object by analyzing the light it reflects. By decomposing this light into its components (red, green, blue), the sensor determines the dominant hue.

#### Arduino – Color detection with TCS34725

````cpp
#include <Wire.h>
#include <Adafruit_TCS34725.h>
#include <Servo.h>

// Pin definitions
#define LASER_ENTRY_PIN 2
#define LDR_ENTRY_PIN A0
#define LASER_EXIT_PIN 3
#define LDR_EXIT_PIN A1
#define SERVO_SORT1_PIN 8
#define SERVO_SORT2_PIN 9

Adafruit_TCS34725 tcs = Adafruit_TCS34725();
Servo servoSort1;
Servo servoSort2;

void setup() {
    // Pin initialization
    pinMode(LASER_ENTRY_PIN, INPUT);
    pinMode(LDR_ENTRY_PIN, INPUT);
    pinMode(LASER_EXIT_PIN, INPUT);
    pinMode(LDR_EXIT_PIN, INPUT);
    
    // Servo initialization
    servoSort1.attach(SERVO_SORT1_PIN);
    servoSort2.attach(SERVO_SORT2_PIN);
    
    // Color sensor initialization
    if (tcs.begin()) {
        Serial.println("TCS34725 sensor detected!");
    }
    
    Serial.begin(9600);
}

void loop() {
    // Entry presence detection
    if (detectEntryPresence()) {
        activateConveyor();
        
        // Color detection
        String color = detectColor();
        sortObject(color);
        
        // Data transmission
        sendData(color, "RUNNING");
    }
    
    // Exit presence detection
    if (detectExitPresence()) {
        stopConveyor();
        sendData("NONE", "STOPPED");
    }
}

````

### Presence detection with KY-008 + LDR

A presence sensor allows detecting if an object is in a given area. In our conveyor, we use a combination of KY-008 laser and photoresistor (LDR) to instantly detect the passage of objects.

#### Arduino – Presence detection

````cpp
#define LASER_PIN 8
#define LDR_PIN A0
#define THRESHOLD 400

bool detectPresence(int ldrPin, int threshold, int nbValidations = 3) {
    int counter = 0;
    for (int i = 0; i < nbValidations; i++) {
        int ldrValue = analogRead(ldrPin);
        if (ldrValue < threshold) {
            counter++;
        }
        delay(20);
    }
    return (counter == nbValidations);
}

void setup() {
    pinMode(LASER_PIN, OUTPUT);
    pinMode(LDR_PIN, INPUT);
    digitalWrite(LASER_PIN, HIGH);
}

void loop() {
    if (detectPresence(LDR_PIN, THRESHOLD)) {
        Serial.println("Presence confirmed!");
        // Action to perform
    }
    delay(100);
}
````

## Conveyor automation
Automation architecture

The system architecture relies on embedded intelligence that controls the entire sorting process: detection, identification, orientation and tracking.

Arduino – Main code of the automated system

#include <Wire.h>
#include <Adafruit_TCS34725.h>
#include <Servo.h>

// Pin definitions
#define LASER_ENTRY_PIN 2
#define LDR_ENTRY_PIN A0
#define LASER_EXIT_PIN 3
#define LDR_EXIT_PIN A1
#define SERVO_SORT1_PIN 8
#define SERVO_SORT2_PIN 9

Adafruit_TCS34725 tcs = Adafruit_TCS34725();
Servo servoSort1;
Servo servoSort2;

void setup() {
    // Pin initialization
    pinMode(LASER_ENTRY_PIN, INPUT);
    pinMode(LDR_ENTRY_PIN, INPUT);
    pinMode(LASER_EXIT_PIN, INPUT);
    pinMode(LDR_EXIT_PIN, INPUT);
    
    // Servo initialization
    servoSort1.attach(SERVO_SORT1_PIN);
    servoSort2.attach(SERVO_SORT2_PIN);
    
    // Color sensor initialization
    if (tcs.begin()) {
        Serial.println("TCS34725 sensor detected!");
    }
    
    Serial.begin(9600);
}

void loop() {
    // Entry presence detection
    if (detectEntryPresence()) {
        activateConveyor();
        
        // Color detection
        String color = detectColor();
        sortObject(color);
        
        // Data transmission
        sendData(color, "RUNNING");
    }
    
    // Exit presence detection
    if (detectExitPresence()) {
        stopConveyor();
        sendData("NONE", "STOPPED");
    }
}



### Error management

#### Error cases

- No object detected
- Color detection error
- Atypical or non-compliant objects
- Sensor hardware failure

#### Solutions

- Validation on multiple measurements
- Special "error" sorting bin
- Adaptive detection thresholds
- Emergency stop and alerts

---

## Web interface

### Dashboard presentation

The web interface developed with HTML, CSS, JavaScript and Bootstrap offers a modern, fluid and responsive user experience for real-time supervision of sorting operations.

### Technologies used

- **Frontend** : HTML5, CSS3, JavaScript, Bootstrap
- **Backend:** Firebase (Realtime Database)
- **Communication:** WebSocket, REST API
- **Microcontroller:** ESP8266 + Arduino

### Main features

- Real-time counter display
- Sorting statistics visualization
- User and access management
- Data export for analysis

### Firebase integration

Firebase provides a complete platform for real-time synchronization between the microcontroller and the web interface, ensuring instant data updates.

#### JavaScript – Firebase connection

````javascript
// Firebase Configuration
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project.firebaseio.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};

// Initialization
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Real-time change listening
db.ref('counters').on('value', (snapshot) => {
    const data = snapshot.val();
    updateDashboard(data);
});

function updateDashboard(data) {
    // Interface update
    document.getElementById('counter-red').textContent = data.red || 0;
    document.getElementById('counter-green').textContent = data.green || 0;
    document.getElementById('counter-blue').textContent = data.blue || 0;
    document.getElementById('counter-yellow').textContent = data.yellow || 0;
}
````

## Conclusion and Perspectives

### Summary

This intelligent conveyor project has demonstrated the feasibility of automated, reliable and connected waste sorting. The integration of modern technologies has enabled the creation of a complete solution meeting industrial and environmental challenges.

### Future developments

#### Technical improvements
- Integration of additional sensors (weight, RFID)
- Integration of additional sensors (weight, RFID)
- Strengthening security and access management
- Large-scale deployment

#### Future applications
- Extension to other types of sorting
- Integration into smart urban networks
- Logistics and industrial applications
- Contribution to the circular economy