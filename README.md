# Youtube-pause and play Fun Test

To test the functionality of pausing and playing YouTube videos when switching tabs without uploading it as an extension, you can achieve this by running the scripts directly in your browser's developer console. Here’s how you can do it:

1. Background Script Simulation
Since you can't simulate the background script directly in the console, you can use browser events to manage focus changes and tab activation. Below is a simplified version that you can run directly in the console.

Adding Event Listeners
Open Chrome Developer Tools:

Right-click on any web page and select "Inspect" or press Ctrl+Shift+I (Windows) or Cmd+Opt+I (Mac).
Go to the Console Tab.

*** Run the Following Script that is given ***

2. How It Works
visibilitychange event: This event is triggered when the visibility state of the document changes. document.hidden is true when the tab is not active and false when the tab is active.
blur event: This event is triggered when the window loses focus (e.g., when you switch to another application).
focus event: This event is triggered when the window gains focus.

3. Test the Functionality
Open a YouTube video.
Switch to another tab or application; the video should pause.
Switch back to the YouTube tab; the video should resume playing.
This script directly simulates the functionality you wanted in the Chrome extension but runs within the context of the YouTube page you’re testing. It's a quick way to prototype and verify the behavior before implementing it in an extension.
