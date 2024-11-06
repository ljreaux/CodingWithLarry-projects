export default function createSVG(numberOfElements: number) {
  const svg = document.querySelector("#hangman-svg")!;
  const elements = [
    '<rect x="0" y="92" width="64" height="4" class="hm-gallows-b" />',
    '<rect x="52" y="0" width="4" height="96" class="hm-gallows-s" />',
    '<rect x="10" y="0" width="42" height="4" class="hm-gallows-t" />',
    '<rect x="10" y="0" width="1" height="20" class="hm-rope" />',
    '<circle r="8" fill="none" stroke="black" cx="10.5" cy="28"/>',
    '<rect x="10" y="36" width="1" height="20" class="hm-body" />',
    '<rect x="10" y="56" width="1" height="13.33" transform="rotate(-45 10 56)" class="hm-leg-r"/>',
    '<rect x="10" y="56" width="1" height="13.33" transform="rotate(45 10 56)" class="hm-leg-l" />',
    `<rect
    x="9"
    y="45"
    width="1"
    height="10"
    transform="rotate(120 10 45)"
    class="hm-arm-l"
  />`,
    `<rect
    x="9.8"
    y="45"
    width="1"
    height="10"
    transform="rotate(-120 10 45)"
    class="hm-arm-r"
  />`,
    `<g class="hm-face">
    <line
      x1="7"
      y1="25"
      x2="9"
      y2="27"
      stroke="red"
      stroke-width="0.5"
    />
    <line
      x1="7"
      y1="27"
      x2="9"
      y2="25"
      stroke="red"
      stroke-width="0.5"
    />

    <line
      x1="12"
      y1="25"
      x2="14"
      y2="27"
      stroke="red"
      stroke-width="0.5"
    />
    <line
      x1="12"
      y1="27"
      x2="14"
      y2="25"
      stroke="red"
      stroke-width="0.5"
    />

    <line
      x1="9"
      y1="31"
      x2="12"
      y2="33"
      stroke="red"
      stroke-width="0.5"
    />
    <line
      x1="9"
      y1="33"
      x2="12"
      y2="31"
      stroke="red"
      stroke-width="0.5"
    />
  </g>`,
  ];
  const currentlyShown = elements.slice(0, numberOfElements + 1);
  svg.innerHTML = ""; // Clear SVG to prevent duplicate elements from being added.

  currentlyShown.forEach((element) => {
    svg.innerHTML += element;
  });

  return svg;
}
