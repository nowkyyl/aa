import { useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "../styles/gamepasses.css"

interface GamePass {
    id: number
    name: string
    price: string
    image: string
}

// fazer pra usar a api do roblox pra pegar as gamepass das places tipo
// local MarketPlaceService = game:GetService("MarketPlaceService")
// MarketPlaceService:GetProductInfo(game.PlaceId)

const gamePasses: GamePass[] = [
    {
        id: 1,
        name: "AK-47",
        price: "R$25",
        image:
            "https://tr.rbxcdn.com/180DAY-b00690c25e2d5de77ddf87ea172dc087/420/420/Image/Png/noFilter",
    },
    {
        id: 1,
        name: "AK-47",
        price: "R$25",
        image:
            "https://tr.rbxcdn.com/180DAY-b00690c25e2d5de77ddf87ea172dc087/420/420/Image/Png/noFilter",
    },
    {
        id: 1,
        name: "AK-47",
        price: "R$25",
        image:
            "https://tr.rbxcdn.com/180DAY-b00690c25e2d5de77ddf87ea172dc087/420/420/Image/Png/noFilter",
    },
    {
        id: 1,
        name: "AK-47",
        price: "R$25",
        image:
            "https://tr.rbxcdn.com/180DAY-b00690c25e2d5de77ddf87ea172dc087/420/420/Image/Png/noFilter",
    },
    {
        id: 1,
        name: "AK-47",
        price: "R$25",
        image:
            "https://tr.rbxcdn.com/180DAY-b00690c25e2d5de77ddf87ea172dc087/420/420/Image/Png/noFilter",
    },
    {
        id: 1,
        name: "AK-47",
        price: "R$25",
        image:
            "https://tr.rbxcdn.com/180DAY-b00690c25e2d5de77ddf87ea172dc087/420/420/Image/Png/noFilter",
    },
]

function GenerateRayPath(startX: number): string {
    const endY = window.innerHeight
    let path = `M ${startX} 0`
    let currentX = startX
    let currentY = 0

    while (currentY < endY / 2) {
        const deltaX = (Math.random() - 0.5) * 30
        const deltaY = Math.random() * 30 + 10
        currentX += deltaX
        currentY += deltaY
        path += ` L ${currentX} ${currentY}`
    }

    while (currentY < endY) {
        const deltaX = (Math.random() - 0.5) * 80
        const deltaY = Math.random() * 60 + 20
        currentX += deltaX
        currentY += deltaY
        path += ` L ${currentX} ${currentY}`
    }

    return path
}

export default function Gamepasses() {
    const navigate = useNavigate()
    const location = useLocation()
    const { game } = location.state || {}

    const rayContainerRef = useRef<HTMLDivElement | null>(null)
    const rainContainerRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        (async () => { if (!game) return navigate("/") })()

        const GenerateRay = (startX: number) => {
            const svgNS = "http://www.w3.org/2000/svg"

            const svg = document.createElementNS(svgNS, "svg")
            svg.classList.add("ray-svg")

            const path = document.createElementNS(svgNS, "path")
            path.setAttribute("d", GenerateRayPath(startX))
            path.classList.add("ray-line")

            svg.appendChild(path)
            rayContainerRef.current?.appendChild(svg)

            setTimeout(() => {
                svg.remove()
            }, 600)
        }

        const GenerateRainDrop = () => {
            if (!rainContainerRef.current) return

            const drop = document.createElement("div")
            drop.className = "raindrop"
            drop.style.left = `${Math.random() * window.innerWidth}px`
            rainContainerRef.current.appendChild(drop)

            setTimeout(() => {
                drop.remove()
            }, 800)
        }

        const interval = setInterval(() => {
            for (let i = 0; i < 5; i++) GenerateRainDrop()

            if (Math.random() < 1 / 60) {
                const x = Math.random() * window.innerWidth
                GenerateRay(x)
            }
        }, 50)

        return () => clearInterval(interval)
    }, [game, navigate])

    return (
        <div className="gamepasses-container">
            <div className="rain" ref={rainContainerRef} />
            <div className="rays" ref={rayContainerRef} />

            <h1 className="title">Gamepasses</h1>
            <div className="store-container">
                {gamePasses.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button onClick={() => {
                            navigate("/checkout", { state: { product } })
                        }}>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
