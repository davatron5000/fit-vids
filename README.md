# fit-vids
Web Component version of FitVids from the creator of FitVids. This will make your video embeds squishy when you wrap them in a wonderfully namespaced custom element.

## Features

Supports YouTube, Vimeo, and any other `iframe` video embed.

It's also v smol 889 bytes (482b gzipped)


## Usage

Import the custom element and wrap your videos.

```html
<!-- import custom element -->
<script type="module" src="fit-vids.js"></script>

<!-- wrap embeds in fit-vids custom element -->
<fit-vids>
  <iframe src="http://youtube.com?v=123"></iframe>
</fit-vids>
```

## Acknowledgements

- This is all @zachleat's fault ([source](https://elk.zone/mastodon.social/@zachleat@zachleat.com/111217846361544297))
