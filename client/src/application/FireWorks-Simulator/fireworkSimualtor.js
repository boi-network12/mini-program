import React, { useRef, useEffect } from 'react';
import './FireworkSimualtor.css';

const FireworkSimulator = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const fireworks = [];

        // Set initial canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Firework class
        class Firework {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = Math.random() * 3 + 2;
                this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
                this.speedX = Math.random() * 6 - 3;
                this.speedY = Math.random() * 6 - 3;
                this.alpha = 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.alpha -= 0.02;
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.restore();
            }
        }

        // Animation loop
        function animate() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            fireworks.forEach((firework, index) => {
                firework.update();
                firework.draw();
                if (firework.alpha <= 0) fireworks.splice(index, 1);
            });
            requestAnimationFrame(animate);
        }

        // Click handler to add fireworks
        const handleCanvasClick = (e) => {
            const clickX = e.clientX;
            const clickY = e.clientY;
            for (let i = 0; i < 30; i++) {
                fireworks.push(new Firework(clickX, clickY));
            }
        };

        // Resize canvas on window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Add event listeners
        canvas.addEventListener('click', handleCanvasClick);
        window.addEventListener('resize', handleResize);

        // Start animation loop
        animate();

        // Clean up event listeners on component unmount
        return () => {
            canvas.removeEventListener('click', handleCanvasClick);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="FireworkSimulatorWrapper">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default FireworkSimulator;
