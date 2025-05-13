import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

interface Game {
    gameName: string;
    gameId: number;
    image: string;
}

const games: Game[] = [
    {
        gameName: "TNP",
        gameId: 14787286344,
        image: "TNP.png",
    },
    {
        gameName: "ZEUS",
        gameId: 85565814942163,
        image: "Zeus.png",
    },
    {
        gameName: "CDP",
        gameId: 17784616193,
        image: "CDP.png",
    },
];

export default function Home() {
    const navigate = useNavigate()
    const [gameData] = useState<Game[]>(games)
    return (
        <div className="game-container">
            <h1 className="title">Selecione o jogo</h1>
            <div className="game-grid">
                {gameData.map((game) => (
                    <div key={game.gameId} className="game-card">
                        <img className="game-image" src={game.image} alt={game.gameName} />
                        <div className="game-info">
                            <button className="select-button" onClick={() => {
                                navigate("/gamepasses", { state: { game } })
                            }}>Selecionar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
