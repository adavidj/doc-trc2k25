# Mechanical Design and Manufacturing - Intelligent Conveyor System

Precision engineering and robust construction for reliable automated sorting operations.

## Introduction

### Project Context

This mechanical documentation covers the design and implementation of an intelligent conveyor system for automated waste sorting as part of the TEKBOT Robotics Challenge 2025.

#### Key Objectives

- Design a 650mm conveyor system for 30mm sorting cubes
- Implement a reliable mechanical sorting mechanism
- Ensure compatibility with electronic and computer systems
- Optimize for 3D printing and rapid prototyping

## Material Selection Strategy

### Primary Materials Used

**PLA Filament**
- Main structural material
- 100% infill for critical parts

**PVC Conveyor Belt**
- 120mm width, 2mm thickness
- Optimal adhesion for cubes

**6300-2RS Bearings**
- Sealed ball bearings
- 12mm inner diameter

### Material Advantages

- **Cost Reduction:** 60% cheaper than metal solutions
- **Production Time:** 3 times faster manufacturing
- **Maintenance:** Simplified part replacement
- **Weight:** Light but robust structure

## Component Specifications

| Component | Material | Dimensions | Quantity | Function |
|-----------|----------|-----------|----------|----------|
| Main Frame | PLA | 650×200×150mm | 1 | Primary structure |
| Left/Right Support | PLA | 225×100×12mm | 6 sections | Side frame elements |
| Motor Drum | PLA | Ø60mm | 1 | Motor connection |
| Return Drum | PLA | Ø60mm | 1 | Belt guidance |
| Bearings | Steel | 12×35×11mm | 4 | Rotation support |
| Sorting Guides | PLA | Various | 6 | Object direction |

## CAD Modeling and Design

### SolidWorks Implementation

**Design Features:**
- Parametric design for easy modifications
- Motion study for mechanism validation
- Interference detection implemented
- Mass properties analysis

### Key Components

**Main Frame Structure**
Modular design inspired by aluminum in PLA with corner reinforcement.

**Sorting Mechanism**
Servo-actuated doors with precise 45° angular control.

**Collection System**
Four separate bins with guided chutes for sorted objects.

### Component Gallery

- Support Section A
- Motor Drum
- Sorting Guide
- Bearing Housing

## Manufacturing Process

### 1. 3D Printing

All custom components are 3D printed in PLA filament with 0.2mm layer height and 20-100% infill depending on structural requirements.

**Printing Parameters:** Nozzle 200°C, bed 60°C, speed 50mm/s

### 2. Frame Assembly

Modular frame assembly using nested PLA components with M4 stainless steel fasteners for structural integrity.

**Tools Used:** Hex keys, tape measure, alignment jig

### 3. Mechanism Integration

Servo mounting with custom brackets, belt system tensioning and bearing installation for smooth operation.

**Key Checks:** Belt alignment, servo range, sensor positioning

### 4. Final Assembly and Testing

Complete system integration followed by rigorous testing to ensure reliable operation under various conditions.

**Tests:** Load capacity, sorting accuracy, endurance

## Technical Specifications

### Dimensional Specifications

- **Total Length:** 650 mm
- **Belt Width:** 150 mm
- **Frame Height:** 150 mm
- **Object Capacity:** 20 objects/min
- **Belt Speed:** 0.1 m/s

### Performance Metrics

- **Sorting Accuracy:** > 95%
- **Maximum Load Capacity:** 5 kg
- **Power Consumption:** 12V, 2A
- **Noise Level:** < 65 dB
- **MTBF:** > 1000 hours

### Validation Results

All mechanical components meet or exceed design specifications with safety margins:

- Structural safety factor: > 2.5 on all PLA components
- Expected bearing life: > 10,000 hours at rated load
- Belt tension maintained within ±10% of optimal range
- All moving parts operate within specified tolerances

## Design Files and Documentation

### SolidWorks Source Files

Complete CAD project with all parts and assemblies:
- 42 individual part files (.SLDPRT)
- Main assemblies and sub-assemblies
- Technical drawings and specifications
- Motion study simulations

[📥 Download SolidWorks Files](https://github.com/TekBot-Robotics-Challenge/2025-Team-UCAO-TECH-Docs/blob/main/Test_Final/Mecanique/Assemblage.rar)

### 3D Printing Files

STL files ready for printing for all components:
- Optimized for FDM 3D printing
- Pre-supported if necessary
- Printing guidelines included
- Assembly instructions

[📥 Download STL Files](https://github.com/TekBot-Robotics-Challenge/2025-Team-UCAO-TECH-Docs/blob/main/Test_Final/Mecanique/Fichier_Imp3D.rar)

### Important Notes

- **Software Requirements:** SolidWorks 2025 or compatible viewer for source files
- **Printing Recommendations:** 20-40% infill for non-structural parts, 80-100% for load-bearing components
- **Material:** PLA recommended for all printed parts
- **Tolerances:** Account for 0.2mm printing tolerance in assemblies

## Physical Prototype and Testing

### Prototype Demonstration

[Watch the conveyor system in operation](/images_mecanique/test-final/Mecanique/video.mp4)

### Test Results

#### Successful Tests

- Continuous operation for 8 hours without failure
- Accurate sorting of 30mm cubes by color
- Stable belt tracking and tension
- Appropriate servo mechanism response

#### Areas for Improvement

- Belt slippage at higher speeds
- Noise reduction in gear mechanisms
- Enhanced vibration damping
- Optimized bearing lubrication

## Conclusion

The mechanical design of the intelligent conveyor system successfully meets all TRC 2025 requirements, demonstrating robust construction, reliable operation and seamless integration with electronic and computer subsystems.

### Key Achievements

- Precision manufacturing using 3D printing technology
- Optimized material selection for cost and performance
- Successful integration of mechanical and electronic systems
- Complete documentation and reproducibility

### Future Improvements

- Advanced vibration damping systems
- Modular design for easy scalability
- Enhanced material options for specific applications
- Integration with Industry 4.0 standards

---

**UCAO-TECH - TRC 2025**  
Innovative Mechanical Solutions for Automated Sorting Systems