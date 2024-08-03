# MeowSimulator

A project for me to learn Svelte, SvelteKit, TailwindCSS, MongoDB and Lucia. Not a
multi-million dollar project tho. :(

## Running

### Requirements

- A MongoDB server (atlas is good enough for this)
- Node.js
- Two braincells (minimum)

### Installation

1. Clone the repository
2. Run `npm install`
3. Rename `.env.example` to `.env` and set MONGODB_URI to your MongoDB URI

### Running

- `npm run dev` to run the development server
- `npm run build` to build the project
- `npm run preview` to preview the built project

## Goals

- All users can see the home page, the about page and the login/register page
- Logged in users can access global chat, send a meow, see a live chat of all meows sent
- Private channels (only accessible through a link)

## History

As of August 1st, the goal of this project was to have a SvelteKit app with Lucia, and a working
username/password auth system. I plan to support passkeys, but that's for another day.
