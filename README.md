# 👋 Wprowadzenie

**techMilionerzy** to interaktywna gra edukacyjna wzorowana na popularnym teleturnieju "Milionerzy". Aplikacja skupia się na testowaniu wiedzy z zakresu technologii informatycznych, obejmując takie dziedziny jak HTML, CSS, JavaScript, TypeScript, Node.js, React.js i Next.js.
Gracze odpowiadają na serię 12 pytań o rosnącym poziomie trudności, z możliwością wygrania wirtualnej nagrody w wysokości 1 000 000 zł. Każde pytanie ma cztery możliwe odpowiedzi, z których tylko jedna jest poprawna. Aplikacja działa na urządzeniach mobilnych oraz komputerach.

Projekt został stworzony na potrzeby zaliczenia przedmiotu Techniki Internetowe WFiIS AGH 24/25.

# ⚙️ Tech stack

## Frontend

- Next.js 15.1.3
- React 19
- TypeScript
- Tailwind CSS
- tsParticles (efekty wizualne)

## Backend

- Node.js
- PostgreSQL
- pg (PostgreSQL client)

## Narzędzia i biblioteki pomocnicze

- Zod (walidacja danych)
- clsx & tailwind-merge (zarządzanie klasami CSS)

# 🔋 Instalacja i uruchomienie

Aby uruchomić aplikację lokalnie, musisz mieć zainstalowane na swoim komputerze `git`, `node.js` oraz `npm`.

## Klonowanie repozytorium

```bash
git clone https://github.com/majkeloess/techMilionerzy
cd techMilionerzy
npm i
```

## Ustawianie zmiennych środowiskowych

Utwórz plik `.env` a następnie dodaj url do swojej bazy danych.

```env
DATABASE_URL=postgres://default:.......
NODE_ENV=production/development
```

## Schemat bazy danych

Utwórz potrzebną tabelę w swojej bazie danych aby móc dodawać swoje własne pytania.

```sql
create table pytania
(
	id serial
		primary key,
	poziom varchar(10),
	temat varchar(50),
	pytanie text,
	odp_a varchar(255),
	odp_b varchar(255),
	odp_c varchar(255),
	odp_d varchar(255),
	odp_poprawna varchar(255)
);
```

## Odpalanie projektu

```bash
npm run dev
```

Odpal [http://localhost:3000](http://localhost:3000) w swojej przeglądarce.

# Licencja

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
