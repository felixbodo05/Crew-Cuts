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
// Set canvas zIndex to -1 to be behind content but on top of html background
canvas.style.zIndex = '-1';
document.body.appendChild(canvas);

let width, height;
let hexagons = [];
const hexSize = 40; // Size of hexagon
const hexWidth = Math.sqrt(3) * hexSize;
const hexHeight = 2 * hexSize;
const xDist = hexWidth;
const yDist = hexHeight * 0.75;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initHexagons();
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
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.lineWidth = 1; // Thinner lines
    ctx.stroke();
    // Optional: fill slightly? 
    // ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
    // ctx.fill(); 
}

function animate() {
    ctx.clearRect(0, 0, width, height);

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

    hexagons.forEach(hex => {
        // Update opacity
        if (hex.active) {
            if (hex.opacity < hex.targetOpacity) {
                hex.opacity += hex.flashSpeed;
                if (hex.opacity >= hex.targetOpacity) {
                    hex.targetOpacity = 0.1; // Fade out target
                }
            } else {
                hex.opacity -= hex.flashSpeed * 0.5; // Fade out slower
                if (hex.opacity <= 0.1) {
                    hex.opacity = 0.1;
                    hex.active = false;
                }
            }
        }

        drawHexagon(hex.x, hex.y, hex.opacity);
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();
