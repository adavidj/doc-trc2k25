# Test 3: Output Test - Mechanical 7-segment display with servomotors

Mechanical 7-segment display reinvented using servomotors - A fusion of digital logic and mechanical movement.

## Project context

In a world dominated by digital screens and LEDs, the Tekbot Robotic Challenge 2025 launches a bold challenge: reinvent the 7-segment display by giving it a mechanical soul.

![Initial concept](/images_electronique/test3/image1.jpg)

**Project origin:** TEKBOT ROBOTIC CHALLENGE 2025

---

## Project objectives

### Main objectives

- Design a fully mechanical 7-segment display
- Precisely control 7 servomotors with a microcontroller
- Implement cyclic counting 0→9→0

### Secondary objectives

- Reduce the number of pins by using integrated circuits
- Document the development process
- Validate the solution by simulation

---

## Part 1: Physical implementation

### Used components

| Component | Reference | Quantity | Role |
|-----------|-----------|----------|------|
| Microcontroller | ATmega328P | 1 | System brain |
| Servomotors | SG90 | 7 | Segment control |
| Regulator | LM7805 | 1 | 5V regulation |
| Battery | Li-ion 7.4V | 1 | Power supply |
| Capacitors | 100nF, 1000μF, 10µF | 4 | Filtering |
| Crystal | 16MHz | 1 | Clock |

### Electronic schematic

![Complete electronic schematic](/images_electronique/test3/circuit.PNG)

**Description:**
- Overload protection
- Direct servo connection to PWM pins
- Reset circuit with push button

![Physical schematic 1](/images_electronique/test3/image2.jpg)

![Physical schematic 2](/images_electronique/test3/image3.jpg)

### Power supply

The power supply system includes:

- **Li-ion 7.4V 2S battery:** Main energy source
- **LM7805 regulator:** Stabilization at 5V for components
- **Filtering capacitors:** 100nF and 10μF to smooth the power supply

### PCB realization

![PCB front view](/images_electronique/test3/pcb_test3_front.PNG)

![PCB back view](/images_electronique/test3/pcb_test3_back.PNG)

**Characteristics:**
- Designed with KiCad
- Double-sided
- 0.6 mm tracks
- Optimized spacing for connectors

[📥 Download PCB files](https://github.com/TekBot-Robotics-Challenge/2025-Team-UCAO-TECH-Docs/blob/main/Electronique/Test3/Kicad/7seg_circuit_electronique.rar)

### Arduino code

Excerpt from the main code using millis() for non-blocking timing:

````cpp
// Progressive servo initialization
if (!initTerminee) {
  if (millis() - debutInit >= 100) { // Delay between servos
    debutInit = millis();
    servoEnCours++;
    
    if (servoEnCours < 7) {
      segments[servoEnCours].attach(brochesServos[servoEnCours]);
      segments[servoEnCours].write(90);
    } else {
      initTerminee = true;
      afficher(chiffreActuel); // Initial display 0
    }
  }
}
````

---

## Part 2: Theoretical innovation

### Key concepts

- **Precise angular control:** Each servo must reach a specific angle to display each segment correctly.
- **Servo synchronization:** Servos must be synchronized to avoid display errors.

### Theoretical challenges

- Calculate optimal delays for servo control.
- Model the dynamic behavior of the system for predictive control.

---

## Comparison and advantages

| Criterion | Traditional 7-segment display | 7-segment display with servomotors |
|---------|-----------------------------------|--------------------------------------|
| Flexibility | Low | High |
| Control complexity | Low | High |
| Cost | Low | High |
| Maintenance | Simple | Complex |
| Innovation | Standard | High |

---

## Problems encountered

- **Problem:** Difficulty synchronizing servos for precise display.
  - **Solution:** Adjustment of delays in the code and use of millis() function for non-blocking timing.

---

## Technical references

1. [SG90 Servomotors - Specifications](https://www.example.com/sg90-specs)
2. [ATmega328P - Datasheet](https://www.example.com/atmega328p-datasheet)
3. [LM7805 Regulator - Information](https://www.example.com/lm7805-info)

---

## Conclusion

This project allowed exploring the limits of the traditional 7-segment display by integrating mechanical elements. Although challenges remain, particularly in terms of cost and complexity, the results obtained pave the way for new innovations in the field of digital displays.