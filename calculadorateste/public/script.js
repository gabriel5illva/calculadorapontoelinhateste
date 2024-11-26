document.getElementById("form-calculadora").addEventListener("submit", async function (e) {
    e.preventDefault();

    const correntinhas = parseInt(document.getElementById("correntinhas").value);
    const baixissimo = parseInt(document.getElementById("baixissimo").value);
    const baixo = parseInt(document.getElementById("baixo").value);
    const meioAlto = parseInt(document.getElementById("meioAlto").value);
    const alto = parseInt(document.getElementById("alto").value);
    const duploAlto = parseInt(document.getElementById("duploAlto").value);
    const altissimo = parseInt(document.getElementById("altissimo").value);

    const response = await fetch("http://localhost:3000/calculadorateste", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correntinhas, baixissimo, baixo, meioAlto, alto, duploAlto, altissimo })
    });

    const data = await response.json();

    document.getElementById("resultado").textContent = 
        `Tempo total: ${data.minutos} minutos e ${data.segundos} segundos`;
});
