const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1'; // Animation layer
canvas.style.pointerEvents = 'none';
canvas.style.background = 'transparent'; // Transparent to let site-bg show

// Create and inject site background layer (base layer)
const siteBg = document.createElement('div');
siteBg.id = 'site-bg';
siteBg.style.position = 'fixed';
siteBg.style.top = '0';
siteBg.style.left = '0';
siteBg.style.width = '100%';
siteBg.style.height = '100%';
siteBg.style.zIndex = '-2'; // Below animation
document.body.appendChild(siteBg);
document.body.appendChild(canvas); // Ensure canvas is on top of siteBg (DOM order matters too)

let strokeRgb = '255, 255, 255'; // Default white lines

function updateThemeColors() {
    // Check data-theme attribute first, fallback to localStorage
    let currentTheme = document.documentElement.getAttribute('data-theme');
    if (!currentTheme) {
        currentTheme = localStorage.getItem('theme') || 'dark';
    }

    const isLight = currentTheme === 'light';
    if (isLight) {
        siteBg.style.backgroundColor = '#ffffff'; // White background
        strokeRgb = '160, 160, 160'; // Light gray lines (not black!)
    } else {
        siteBg.style.backgroundColor = '#000000'; // Black background
        strokeRgb = '255, 255, 255'; // White lines
    }

    // Re-render static buffer with new stroke color
    if (staticRendered && hexagons.length > 0) {
        renderStaticBuffer();
    }
}

// Observer for theme changes
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
            updateThemeColors();
        }
    });
});
observer.observe(document.documentElement, { attributes: true });

// Initial theme setup
updateThemeColors();

let width, height;
let hexagons = [];
const hexSize = 40; // Size of hexagon
const hexWidth = Math.sqrt(3) * hexSize;
const hexHeight = 2 * hexSize;
const xDist = hexWidth;
const yDist = hexHeight * 0.75;

// Buffer canvas for static hexagons
const bufferCanvas = document.createElement('canvas');
const bufferCtx = bufferCanvas.getContext('2d');
let staticRendered = false;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    bufferCanvas.width = width;
    bufferCanvas.height = height;
    initHexagons();
    renderStaticBuffer();
}

function initHexagons() {
    hexagons = [];
    const rows = Math.ceil(height / yDist) + 1;
    const cols = Math.ceil(width / xDist) + 1;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const xOffset = (r % 2) * (hexWidth / 2);
            const x = c * xDist + xOffset - hexWidth;
            const y = r * yDist - hexHeight;

            hexagons.push({
                x, y,
                active: false,
                opacity: 0.15, // Subtle base opacity
                targetOpacity: 0.15,
                flashSpeed: 0.02
            });
        }
    }
}

function renderStaticBuffer() {
    bufferCtx.clearRect(0, 0, width, height);
    hexagons.forEach(hex => {
        drawHexagonToContext(bufferCtx, hex.x, hex.y, 0.15);
    });
    staticRendered = true;
}

function drawHexagonToContext(context, x, y, opacity) {
    context.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + Math.PI / 6;
        const xPos = x + hexSize * Math.cos(angle);
        const yPos = y + hexSize * Math.sin(angle);
        if (i === 0) context.moveTo(xPos, yPos);
        else context.lineTo(xPos, yPos);
    }
    context.closePath();
    context.strokeStyle = `rgba(${strokeRgb}, ${opacity})`;
    context.lineWidth = 1;
    context.stroke();
}

function drawHexagon(x, y, opacity) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + Math.PI / 6; // Rotate 30deg to point up
        const xPos = x + hexSize * Math.cos(angle);
        const yPos = y + hexSize * Math.sin(angle);
        if (i === 0) ctx.moveTo(xPos, yPos);
        else ctx.lineTo(xPos, yPos);
    }
    ctx.closePath();
    ctx.closePath();
    ctx.strokeStyle = `rgba(${strokeRgb}, ${opacity})`;
    ctx.lineWidth = 1; // Thinner lines
    ctx.stroke();
    // Optional: fill slightly? 
    // ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
    // ctx.fill(); 
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    // Copy static buffer as base layer
    if (staticRendered) {
        ctx.drawImage(bufferCanvas, 0, 0);
    }

    // Randomly activate hexagons
    if (Math.random() < 0.05) { // Chance to flash
        const randomIndex = Math.floor(Math.random() * hexagons.length);
        const hex = hexagons[randomIndex];
        if (!hex.active) {
            hex.active = true;
            hex.targetOpacity = 0.8; // Bright flash
            hex.flashSpeed = 0.02 + Math.random() * 0.03;
        }
    }

    // Only update and redraw active hexagons
    hexagons.forEach(hex => {
        if (hex.active) {
            // Update opacity
            if (hex.opacity < hex.targetOpacity) {
                hex.opacity += hex.flashSpeed;
                if (hex.opacity >= hex.targetOpacity) {
                    hex.targetOpacity = 0.1; // Fade out target
                }
            } else {
                hex.opacity -= hex.flashSpeed * 0.5; // Fade out slower
                if (hex.opacity <= 0.15) {
                    hex.opacity = 0.15;
                    hex.active = false;
                }
            }

            // Draw this active hexagon on top of static buffer
            drawHexagonToContext(ctx, hex.x, hex.y, hex.opacity);
        }
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();
