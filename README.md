# Zadání pro GitHub Copilot – Webová stránka o algoritmech

Vytvoř moderní, přehlednou a interaktivní vzdělávací webovou stránku v českém jazyce na téma **Algoritmizace – zpracování textu**, na základě dodaných studijních materiálů.

## 1. Cíl stránky
Stránka má sloužit studentům k učení a opakování tématu algoritmy. Má obsahovat srozumitelně vysvětlenou teorii, vizuální ukázky a interaktivní test pro ověření znalostí.

## 2. Design
- Moderní, čistý a minimalistický design.
- Použij tmavě modrou, fialovou a světlejší neutrální barvy.
- Stránka musí být responzivní a dobře fungovat na mobilu, tabletu i počítači.
- Použij karty, přehledné sekce, ikony a jemné animace.
- Text musí být dobře čitelný a přehledně členěný.
- Přidej navigaci, která umožní rychlý přechod na jednotlivé části stránky.
- Vytvoř profesionální vzhled vhodný pro školní vzdělávací projekt.

## 3. Obsah stránky

### Sekce 1 – Co je algoritmus?
Vysvětli, co je algoritmus a proč ho vytváříme.

Uveď, že tvorba počítačového programu probíhá ve dvou hlavních fázích:
1. Vymyšlení přesného postupu řešení – algoritmu.
2. Přepsání tohoto postupu do kódu v konkrétním programovacím jazyce.

Zobraz definici algoritmu v samostatné vizuálně zvýrazněné kartě.

### Sekce 2 – Vlastnosti správného algoritmu
Vysvětli všech šest vlastností algoritmu:

- Konečnost (začátek a konec)
- Věcná správnost
- Jednoznačnost
- Obecnost
- Opakovatelnost (determinismus)
- Srozumitelnost

Každou vlastnost zobraz jako samostatnou kartu s ikonou, názvem, vysvětlením a jednoduchým příkladem.

### Sekce 3 – Možnosti zápisu algoritmů
Přehledně představ pět způsobů zápisu algoritmů:

- Slovní vyjádření
- Matematický zápis
- Rozhodovací tabulky
- Vývojové diagramy
- Počítačový program

U každého způsobu uveď:
- K čemu se používá.
- Výhody.
- Nevýhody.

Použij přehledné karty nebo tabulku.

### Sekce 4 – Základní značky vývojových diagramů
Vysvětli následující značky a jejich funkci:

- Ovál – začátek a konec.
- Kosodélník – vstup a výstup.
- Obdélník – zpracování.
- Kosočtverec – rozhodování.
- Šestiúhelník – příprava cyklu.
- Spojka – propojení částí diagramu.
- Obdélník se svislými čarami – podprogram.

Každou značku graficky zobraz pomocí SVG, CSS nebo jiného vhodného způsobu. Značky musí být vizuálně rozlišitelné.

Přidej příklad jednoduchého vývojového diagramu, například algoritmu pro rozhodnutí, zda je číslo kladné, záporné nebo nula.

## 4. Interaktivní test

Vytvoř sekci s názvem „Otestuj své znalosti“.

Test bude obsahovat 9 otázek vycházejících z dodaných studijních materiálů.

### Otázky 1–5: Výběr z možností
Každá otázka má čtyři možnosti a právě jednu správnou odpověď.

1. Jak se v programu projeví algoritmus, ve kterém byla porušena podmínka věcné správnosti?
   - a) Program se nikdy nespustí a překladač nahlásí syntaktickou chybu.
   - b) Program se zacyklí a bude nutné ho násilně ukončit.
   - c) Program zdánlivě pracuje bez problému, ale poskytuje chybné výsledky.
   - d) Program skončí ihned po načtení prvního vstupního údaje.

2. Který zápis správně převádí matematický zlomek (A+B)/(C+D) do programátorského zápisu?
   - a) X := A+B / C+D
   - b) X := (A+B) / (C+D)
   - c) X := A+B / (C+D)
   - d) X := (A+B) / C+D

3. Jak se ve vývojovém diagramu značí blok pro načtení vstupních dat od uživatele?
   - a) Obdélníkem s textem Načti.
   - b) Kosočtvercem s textem Vstup.
   - c) Kosodélníkem s textem Čti.
   - d) Oválem s textem Začátek.

4. Která vlastnost algoritmu zajišťuje, že při zadání stejných vstupních dat dostaneme vždy stejný výsledek?
   - a) Obecnost.
   - b) Srozumitelnost.
   - c) Jednoznačnost.
   - d) Opakovatelnost.

5. Jaký je hlavní účel překladače?
   - a) Převádí vývojový diagram na slovní popis.
   - b) Překládá program napsaný v programovacím jazyce do strojového kódu.
   - c) Automaticky opravuje logické chyby.
   - d) Převádí komentáře v kódu do češtiny.

### Otázky 6–9: Otevřené otázky

6. Vyjmenuj všech 6 základních podmínek (vlastností), které musí splňovat správný algoritmus.

7. Jaké dvě hlavní podmínky řešitelnosti musíme v algoritmech nejčastěji ošetřit pomocí větvení, aby program při výpočtu nehavaroval?

8. Vysvětli rozdíl mezi logickým součinem (AND) a logickým součtem (OR) dvou proměnných A a B.

9. K čemu slouží ve vývojovém diagramu značka Spojka a jakým pravidlem se řídí její označování?

### Funkce testu
- Uživatel musí mít možnost vybírat odpovědi a zadávat odpovědi na otevřené otázky.
- Přidej tlačítko „Vyhodnotit test“.
- Po vyhodnocení zobraz počet správných odpovědí.
- U otázky s výběrem z možností zobraz, zda byla odpověď správná nebo špatná.
- Zobraz správnou odpověď a stručné vysvětlení.
- U otevřených otázek zobraz vzorovou odpověď pro porovnání.
- Otevřené otázky nehodnoť automaticky pomocí přesné shody textu. Zobraz vzorovou odpověď a umožni studentovi porovnat vlastní odpověď.
- Přidej tlačítko „Zkusit znovu“, které resetuje test.
- Před vyhodnocením zobraz průběžný stav dokončení testu.
- Test musí fungovat bez serveru.

Správné odpovědi pro otázky 1–5:
1. c
2. b
3. c
4. d
5. b

Vzorové odpovědi pro otevřené otázky:

6. Konečnost, věcná správnost, jednoznačnost, obecnost, opakovatelnost a srozumitelnost.

7. Jmenovatel zlomku nesmí být nulový a výraz pod odmocninou nesmí být v oboru reálných čísel záporný.

8. AND má hodnotu 1 pouze tehdy, jsou-li A i B rovny 1. OR má hodnotu 1 tehdy, když je alespoň jedna z proměnných rovna 1.

9. Spojka slouží ke spojení dvou částí vývojového diagramu, které nelze nakreslit souvisle. Spojky na obou koncích přerušení musí mít stejné označení.

## 5. Další prvky stránky
- Přidej horní navigační menu.
- Přidej úvodní hero sekci s názvem „Algoritmy“ a krátkým popisem.
- Přidej tlačítko „Začít se učit“, které posune uživatele k teorii.
- Přidej tlačítko „Otestovat znalosti“, které posune uživatele k testu.
- Přidej indikátor průběhu testu.
- Přidej patičku stránky s názvem projektu „Algoritmizace – vzdělávací projekt“.

## 6. Technické požadavky
- Použij HTML, CSS a JavaScript, případně React, pokud je v projektu již nastaven.
- Pokud projekt nemá žádný framework, vytvoř stránku v čistém HTML, CSS a JavaScriptu.
- Rozděl kód do logických souborů.
- Nepoužívej backend ani databázi.
- Všechny interaktivní prvky musí skutečně fungovat.
- Zajisti responzivitu, přístupnost a čitelnost.
- Nepoužívej zbytečně složité knihovny.
- Vytvoř kompletní funkční implementaci, ne pouze návrh nebo ukázku kódu.

## 7. Výsledek
Vytvoř hotovou webovou stránku, která bude působit jako moderní interaktivní vzdělávací materiál. Bude kombinovat teorii, grafické znázornění vývojových diagramů a interaktivní test.

Nejprve prohlédni existující soubory projektu, zachovej případnou existující strukturu a poté implementuj celý web. Pokud je to možné, spusť nebo ověř, že web funguje.
