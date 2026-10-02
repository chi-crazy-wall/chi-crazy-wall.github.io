// Decorative enhancement only: content and layout work without JavaScript.
(() => {
  const wall = document.querySelector('.wall');
  const svg = wall.querySelector('.threads');
  const connections = [
    ['.steering', '.oversight'],
    ['.steering', '.notice'],
    ['.oversight', '.intent'],
    ['.oversight', '.verification'],
    ['.verification', '.monitoring'],
    ['.monitoring', '.delegation'],
    ['.delegation', '.loop'],
    ['.intent', '.loop'],
    ['.intent', '.notice'],
    ['.agency', '.steering'],
    ['.agency', '.autonomy'],
    ['.collaboration', '.oversight'],
    ['.collaboration', '.provenance'],
    ['.provenance', '.verification'],
    ['.provenance', '.monitoring'],
    ['.autonomy', '.delegation'],
    ['.autonomy', '.loop'],
  ];
  const paths = connections.map(() => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '1.5');
    svg.append(path);
    return path;
  });
  function draw() {
    if (!svg.getClientRects().length) return;
    const bounds = svg.getBoundingClientRect();
    // Use the rendered pin when present, otherwise the middle of the paper.
    function anchor(selector) {
      const card = wall.querySelector(selector);
      const pin = card.querySelector('.pin');
      const rect = (pin || card).getBoundingClientRect();
      return [rect.left + rect.width / 2 - bounds.left,
        rect.top + rect.height / 2 - bounds.top];
    }
    svg.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
    connections.forEach(([from, to], i) => {
      const a = anchor(from), b = anchor(to);
      paths[i].setAttribute('d', `M${a[0]} ${a[1]} L${b[0]} ${b[1]}`);
    });
    svg.setAttribute('data-connected', '');
  }
  const observer = new ResizeObserver(draw);
  observer.observe(wall);
  wall.querySelectorAll('.term,.notice').forEach(card => observer.observe(card));
  window.addEventListener('resize', draw);
  draw();
})();
