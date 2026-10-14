# HeliosX Form

## Getting Started
Project Used Bun version `1.3.14` with `bun install` followed by `bun run dev` command.

## Trade-offs
Currently the main trade-off I've made is the structure of the `answers` state. Initially I had the 5 questions hardcoded within the @Form/index file. However once I refactored it to come from the questions service I tried to emulate what a server may actually return. However I still wanted to keep the simplicity of the `answer` state being an array in which each item was an answer. The only issue I can see here is versioning is not taken into consideration. So if in the future we were to handle saving a local state of the answers, and questions are added or taken away (no longer exactly 5 questions), when the local state is attempted to be restored it'd need to consider if the question set is no stale or not. As the question service doesn't return a version then the best I could do is check if the number of questions are the same, or better take a hash of the questions object when saving to local state and comparing it with the state fetched from the server.

