# Test 3 : Afficheur 7 segments

Ce test concerne l'utilisation d'afficheurs 7 segments.

## Objectifs

- Contrôler un afficheur 7 segments
- Afficher des chiffres et lettres
- Utiliser des registres à décalage

## Matériel

- Afficheur 7 segments
- 74HC595 (registre à décalage)

## Code exemple

```python
import RPi.GPIO as GPIO

# Configuration des pins
data_pin = 17
clock_pin = 18
latch_pin = 19

def display_digit(digit):
    # Affichage du chiffre
    pass
```

## Références

- [7-Segment Display](https://en.wikipedia.org/wiki/Seven-segment_display)