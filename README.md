# MF-Dark

A micro-frontend "framework". The concepts that hold `dark` together will be primarily hidden from site.
This idea of allowing you to be able to do just what you need to with out getting lost in the shadows is at the core of `dark`

Let's start by saying it is not because we don't trust you with these kinds of things. It's just that the amount of control we
will need is almost certainly going to keep you in the light and us in the dark.

### Concepts

- Micro-frontend generator
  - this will generate you a micro-frontend that will be tied to the shell app.
  - (later we can make framework specific ones)
- Shell app that stitches them all together
  - i'd prefer not to have this if possible
  - it should be a framework egnostic static site that syncs up the micro-sites within
- Generalized styling location that is cached and distributed
- generalized querying location
  - possibly graphql or some sort of passed down query cache (react cache, swr???)

### Examples

to get started init a new mf-dark project

`dark init <your micro-frontend shell>`

then spin up a micro-frontend
(optionally starting it with a template)

`dark spawn <first-page> --template react`

then run the dev server

`dark dev`

this will get you going on port:666


