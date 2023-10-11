# fit-vids
Web Component version of FitVids from the creator of FitVids. This will make your video embeds squishy when you wrap them in a wonderfully namespaced custom element.

## Features

Supported video vendors:

- [x] YouTube
- [x] Vimeo

It's also v smol:

|  | Bytes |
|---|---|
|Size         | 727 bytes |
| Gzipped      | 419 bytes |

## Usage

Import the custom element and wrap your videos.

```html
<!-- import custom element -->
<script src="path/to/fit-vids/index.js" defer></script>

<!-- wrap embeds in fit-vids custom element -->
<fit-vids>
  <iframe src="http://youtube.com?v=123"></iframe>
</fit-vids>
```

## Roadmap/Todo

- [ ] Allow more/custom sources? (e.g. tiktok, etc)
- [ ] Prop to disable default `width: 100%`? Or set width/max-width to `video.width` by default?
- [ ] ShadowDOM?

## Acknowledgements

- This is all @zachleat's fault ([source](https://elk.zone/mastodon.social/@zachleat@zachleat.com/111217846361544297))
