# Casharro Degdeg ah oo ku Saabsan `localStorage`

Ku soo dhowow casharradan degdegga ah ee ku saabsan `localStorage`! Hagahan wuxuu kugu bari doonaa fikradda `localStorage` ee horumarinta web-ka, sida ay u shaqeyso, iyo sida aad u isticmaali karto si aad u horumariso codsiyadaada web-ka.

---

## Tusmada Mawduuca

1. **Waa maxay `localStorage`?**
2. **Maxaad u isticmaashaa `localStorage`?**
3. **Astaamaha Muhiimka ah ee `localStorage`**
4. **Howlaha Aasaasiga ah**
   - Kaydinta Xogta
   - Soo Qaadashada Xogta
   - Tirtiridda Xogta
   - Nadiifinta Kaydka
5. **Noocyada Xogta iyo Habka Kaydinta**
6. **`localStorage` vs. `sessionStorage` vs. Cookies**
7. **Tusaalooyin Fudud**
8. **Xaddidaadaha iyo Arrimaha La Tixgeliyo**
9. **Amniga iyo Khataraha Jira**
10. **Xeerarka Ugu Wanaagsan ee Loo Raaco**
11. **Gunaanad**

---

## 1. Waa maxay `localStorage`?

`localStorage` waa API lagu kaydiyo xogta gudaha browser-ka isticmaalaha. Xogta la kaydiyay waxay sii jirtaa xitaa haddii browser-ka la xiro, taasoo ka dhigaysa mid faa'iido leh marka la rabo xogta in la xafido inta isticmaaluhu dib ugu soo laabanayo web-ka.

---

## 2. Maxaad u isticmaashaa `localStorage`?

- **Xog Joogto Ah**: Xogta lama tirtirayo ilaa si gaar ah looga saaro.
- **Fudud**: Way sahlan tahay in la isticmaalo.
- **Degdeg & Waxqabad Wanaagsan**: Waa mid dhakhso leh marka la barbar dhigo kaydinta server-ka.
- **Offline Shaqaynaya**: Waa faa'iido marka codsigaagu u baahan yahay inuu shaqeeyo xitaa markuu offline yahay.

---

## 3. Astaamaha Muhiimka ah ee `localStorage`

- **Xaddiga Xogta**: Badanaa ilaa 5MB domain kasta.
- **Nooca Xogta**: Waxay kaydisaa xogta oo kaliya qaab xarfo (strings).
- **Amniga**: Waxaa laga heli karaa oo kaliya isla domain-ka.

---

## 4. Howlaha Aasaasiga ah

### Kaydinta Xogta

```js
localStorage.setItem('furaha', 'qiimaha');
```

### Soo Qaadashada Xogta

```js
const qiimaha = localStorage.getItem('furaha');
```

### Tirtiridda Xogta Gaar Ah

```js
localStorage.removeItem('furaha');
```

### Nadiifinta Dhammaan Xogta

```js
localStorage.clear();
```

---

## 5. Noocyada Xogta iyo Habka Kaydinta

`localStorage` waxay kaydisaa xogta sida xarfo (strings), sidaas darteed haddii aad rabto inaad kaydiso shay (object) ama liis (array), waa inaad u badashaa JSON.

**Kaydinta shay (object):**

```js
const user = { magac: 'Ahmed', da': 25 };
localStorage.setItem('user', JSON.stringify(user));
```

**Soo qaadashada shay (object):**

```js
const user = JSON.parse(localStorage.getItem('user'));
```

---

## 6. `localStorage` vs. `sessionStorage` vs. Cookies

| Tilmaam | `localStorage` | `sessionStorage` | Cookies |
| --- | --- | --- | --- |
| Joogtaynta Xogta | Ilaa laga tirtiro | Ilaa browser-ka la xiro | Waa la dhigi karaa waqti go'an |
| Xaddiga Xogta | ~5MB | ~5MB | ~4KB |
| Helitaanka | Kaliya browser-ka | Kaliya browser-ka | Waxaa la dirayaa server-ka |

---

## 7. Tusaalooyin Fudud

### Tusaale 1: Xasuusashada Habka Midabka (Theme)

```js
// Kaydi midabka
localStorage.setItem('theme', 'dark');

// Soo qaado midabka
const theme = localStorage.getItem('theme');
document.body.classList.add(theme);
```

### Tusaale 2: Kaydinta Alaabta Cart-ga

```js
// Kaydi alaabta
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({ id: 1, magac: 'Alaabta', tiro: 1 });
localStorage.setItem('cart', JSON.stringify(cart));

// Soo qaado alaabta
const cartItems = JSON.parse(localStorage.getItem('cart'));
```

---

## 8. Xaddidaadaha iyo Arrimaha La Tixgeliyo

- **Xaddidaad Xog**: Kaliya 5MB ayaa la kaydin karaa.
- **Noocyada Xogta**: Kaliya xarfo (strings) ayaa la kaydin karaa.
- **Saamaynta Waxqabadka**: Waxay hoos u dhigi kartaa waxqabadka haddii si xad-dhaaf ah loo isticmaalo.

---

## 9. Amniga iyo Khataraha Jira

- **XSS Weeraro**: Haddii boggaagu uu nugul yahay, qof dambiile ah wuu heli karaa xogtaada `localStorage`.
- **Xogaha Xasaasiga ah**: Ha ku kaydin xogaha sida passwords ama xogaha gaarka ah.

---

## 10. Xeerarka Ugu Wanaagsan ee Loo Raaco

- **Hubinta iyo Nadaafadda Xogta**: Mar walba hubi xogta aad kasoo qaadanayso `localStorage`.
- **Maaraynta Khaladaadka**: Adeegso `try...catch` si aad u maamusho khaladaadka.
- **Hubinta Taageerada Browser-ka**:

```js
if (typeof(Storage) !== 'undefined') {
  // `localStorage` waa la heli karaa
} else {
  // Halkan ka fikir xal kale
}
```

---

## 11. Gunaanad

`localStorage` waa qalab aad u faa'iido badan oo kuu oggolaanaya inaad kaydiso xogta isticmaalaha si ay u sii jirto. Marka la fahmo astaamaheeda, xaddidaadaheeda, iyo sida loo isticmaalo si badbaado leh, waxaad awoodi doontaa inaad horumariso codsiyo web ah oo dhakhso badan, offline shaqeynaya, oo waxtar leh.

---

Taas ayaa ahayd hage degdeg ah oo ku saabsan `localStorage`! Haddii aad qabto su'aalo, xor u noqo inaad weydiiso. 😊