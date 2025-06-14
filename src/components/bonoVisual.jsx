import { useRef } from "react";
import { toPng } from "html-to-image";

const BonoVisual = ({ codigoRedencion }) => {
  const bonoRef = useRef(null);

  const descargarBono = async () => {
    if (!bonoRef.current) return;

    const node = bonoRef.current;
    const clone = node.cloneNode(true);

    clone.style.width = "640px";
    clone.style.height = "auto";
    clone.style.transform = "scale(1)";
    clone.style.transformOrigin = "top left";
    clone.style.position = "relative";

    const codeDiv = clone.querySelector("div");
    if (codeDiv) {
      codeDiv.style.position = "absolute";
      codeDiv.style.bottom = "240px";
      codeDiv.style.fontSize = "26px";
      codeDiv.style.padding = "0px 340px";
      codeDiv.style.whiteSpace = "nowrap";
    }

    const hiddenContainer = document.createElement("div");
    hiddenContainer.style.position = "fixed";
    hiddenContainer.style.top = "-10000px";
    hiddenContainer.style.left = "-10000px";
    hiddenContainer.appendChild(clone);
    document.body.appendChild(hiddenContainer);

    try {
      const dataUrl = await toPng(clone, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = `bono-${codigoRedencion}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error al generar la imagen:", err);
    } finally {
      document.body.removeChild(hiddenContainer);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
      <div
        ref={bonoRef}
        style={{
          width: "320px",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}bonos/tarjeta-base.png`}
          alt="Bono base"
          style={{
            width: "100%",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "120px",
            color: "white",
            padding: "0px 170px",
            fontSize: "13px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            textAlign: "center",
            alignContent:"center",
          }}
        >
          {codigoRedencion}
        </div>
      </div>

      <button
        onClick={descargarBono}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          fontSize: "16px",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Descargar bono 🎁
      </button>
    </div>
  );
};

export default BonoVisual;
