# API

## Anforderung

HOME:
- Auswahl an beliebten Pizzen (Lesen)  

Pizza Auswahl:
- Liste an allen Pizzen (inklusive Zutatenliste pro Pizza) (Lesen) (+ In Warenkorb Schreiben)

Account:
- Account Daten (Auslesen und Schreiben)
- Anmelden (Auslesen)
- Registrieren (Schreiben)

Bestellübersicht:
- Liste an allen Bestellungen des Benutzers (Auslesen)

Pizza Customizer:
- Liste an allen Zutaten (Auslesen)
- Customized Pizza (In Warenkorb schreiben)

Lieferungsverfolgung:
- Aktueller Standort (Auslesen)
- Ankunftszeit (Auslesen)

Warenkorb:
- Aktueller Warenkorb Inhalt (Auslesen und Schreiben)
- Bestellung abschließen (Schreiben)


## Lösung

### GET /api/home/favorites
Rückgabe:
```json
[
    "Pizzen"
]
```

### GET /api/user/history
Rückgabe:
```json5
{
  "$datum": [
    {} //Pizza Object
  ]
}
```

### GET /api/order/ingredients
Rückgabe:
```json5
[
  "Ingredients"
]
```

### POST /api/order/save_pizza
Parameter:
```json5
{
  "name": [
    {} //Pizza Object
  ]
}
```

Rückgabe:
```json5
{
  "status": "failed|success"
}
```

### GET /api/user/cart
Rückgabe:
```json5
[
  {} //Pizza Object
]
```