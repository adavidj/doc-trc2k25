# Test 1 : Gyroscope et accéléromètre

Ce test introduit les capteurs de mouvement : gyroscope et accéléromètre.

## Objectifs

- Comprendre le fonctionnement des capteurs IMU
- Mesurer l'orientation et l'accélération
- Traiter les données des capteurs

## Matériel

- Module MPU-6050
- Connexions I2C

## Code exemple

```python
import smbus

bus = smbus.SMBus(1)
address = 0x68

def read_word(adr):
    # Lecture des données
    pass
```

## Références

- [MPU-6050 Datasheet](https://invensense.tdk.com/products/motion-tracking/6-axis/mpu-6050/)