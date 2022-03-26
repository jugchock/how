# Fix crappy video on Teams on MacOS Monterey

> from: <https://answers.microsoft.com/en-us/msteams/forum/all/external-camera-is-choppylagging-on-macos/bbef629f-8552-4ee7-9c74-b8d30e874af9>

## For Monterey 12.2.x

1. Start video conference on MS Teams.

1. Open FaceTime.

1. Close FaceTime.

> Create a shortcut with Apple Shortcuts to do the above. I created one and called it Webcam Fixer.

## For Monterey 12.3.x

> Unfortunately, the above fix appears not to work on Monterey 12.3.x.

1. Install OBS.

```bash
brew install --cask obs
```

1. Open OBS.

1. Open FaceTime.

1. Close FaceTime.

1. Start virtual cam in OBS.

1. Configure teams to use the OBS virtual camera.

> Steps 2-4 can be done with a shortcut with Apple Shortcuts.
