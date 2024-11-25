'use client'

import { useRef, useEffect } from 'react'

const SpaceBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const stars: [number, number, number, number][] = []
        for (let i = 0; i < 200; i++) {
            stars.push([Math.random(), Math.random(), Math.random(), Math.random() * 0.5 + 0.5])
        }

        let animationFrameId: number

        const draw = (time: number) => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw stars
            stars.forEach(([x, y, brightness, speed]) => {
                const size = brightness * 2
                const yPos = (y + time * speed * 0.00002) % 1 // Update 1: Adjusted star movement speed
                ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`
                ctx.fillRect(x * canvas.width, yPos * canvas.height, size, size)
            })

            // Draw nebula
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width / 2
            )
            gradient.addColorStop(0, 'rgba(25, 25, 112, 0)')
            gradient.addColorStop(0.5, `rgba(72, 61, 139, ${0.1 + Math.sin(time * 0.0002) * 0.05})`) // Update 2: Slowed down nebula pulsation
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            animationFrameId = requestAnimationFrame(draw)
        }

        animationFrameId = requestAnimationFrame(draw)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0" />
}

export default SpaceBackground

