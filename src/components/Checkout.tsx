import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/checkout.css"

export default function Checkout() {
    const navigate = useNavigate()
    const location = useLocation()
    const { product } = location.state || {}

    useEffect(() => {
        (async () => { if (!product) return navigate("/gamepasses") })()
    }, [product, navigate])
    if (!product) return null

    const [qrCode] = useState<string | null>(null)
    const HandlePayment = async () => {
    }

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h2>Pagamento</h2>
            </div>
            <div className="checkout-product">
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
            </div>
            <button className="checkout-button" onClick={HandlePayment}>
                Copiar Chave
            </button>

            {qrCode && (
                <div className="qr-code-container">
                    <h3>QR Code para pagamento:</h3>
                    <img src={qrCode} alt="QR Code para PIX" className="qr-code" />
                </div>
            )}
        </div>
    );
}