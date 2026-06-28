# No Grok Search

I did not like getting GroKKK results in my Google searches, so I asked ChatGPT for help.

ChatGPT wrote the code for each of the files in this repository. My role was mostly to copy, paste, test, and report what was broken. There were quite a few little issues along the way—JavaScript bugs, service worker caching, GitHub Pages quirks, Android behavior, and CSS problems—but each time I reported the problem, ChatGPT diagnosed it and suggested a fix until everything worked.

In other words, this project was less about me writing code and more about me directing the project and debugging it with an AI pair programmer.

## What does this do?

This is a small Progressive Web App (PWA) that acts as a front end to Google Search.

Instead of searching Google directly, you search through this app. The app then silently adds search operators that exclude Grokipedia from the query before sending you to Google.

For example, if you search for:

```
Sacramento State
```

the app actually sends Google something like:

```
Sacramento State -site:grokipedia.com -site:www.grokipedia.com -inurl:grokipedia -intitle:grokipedia
```

Google performs the search normally, except results from Grokipedia are filtered out.

## How the files work together

### index.html

This is the user interface.

It displays the logo, search box, and search button. It also contains the JavaScript that reads your search, appends the exclusion terms, and redirects your browser to Google.

### style.css

This controls the appearance of the application.

It centers everything on the page, styles the search box, buttons, fonts, spacing, and supports both light and dark mode.

### manifest.json

This tells browsers that the project is a Progressive Web App.

Because of the manifest, browsers can install it like an app on Android, Windows, macOS, and other platforms.

### sw.js

This is the Service Worker.

Normally, service workers cache files so PWAs work offline. During development, however, caching made testing extremely frustrating because browsers kept loading old versions of files after I updated them.

The current service worker simply clears old caches so new versions are loaded immediately.

### icon-192.png and icon-512.png

These are the application icons used when the PWA is installed on a device.

## Why build this?

Mostly because I could.

I was curious whether I could create a useful tool almost entirely by collaborating with an AI instead of writing JavaScript myself.

It turns out the answer is yes.

This repository is also an example of a different style of software development: instead of programming every line by hand, the human defines the goal, tests the software, and guides the debugging process while the AI generates most of the implementation.

## License

Feel free to use, modify, or improve this project.

If you build something interesting from it, I'd love to hear about it.

Happy searching!

