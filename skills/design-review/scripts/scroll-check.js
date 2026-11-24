/*
 * Scroll-through: scrolls the page to the bottom in 600 px steps, waiting 120 ms each, then back to the top, so lazy images and scroll reveals load before screenshots and checks.
 * Returns: the document's scroll height in px (a number).
 * Used from: references/visual-qa.md (Process, steps 3 and 4).
 * Run it by passing this whole file to playwright-cli --raw eval (see the .md above).
 */
async () => {
  for (let y = 0; y < document.documentElement.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
  return document.documentElement.scrollHeight;
}
