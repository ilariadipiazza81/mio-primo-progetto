const btnCarica = document.getElementById("btnCarica");
      const listaUl = document.getElementById("listaUtenti");

      // Usiamo 'async' perché la chiamata al server richiede un po' di tempo (aspetta che il cameriere torni)
      btnCarica.addEventListener("click", async function() {
          
          listaUl.innerHTML = "<li>Caricamento in corso... ⏳</li>";

          try {
              // 1. CHIAMATA API: Chiediamo i dati all'indirizzo web
              let risposta = await fetch("https://jsonplaceholder.typicode.com/users");
              
              // 2. TRASFORMAZIONE: Convertiamo la risposta grezza in un Array di Oggetti leggibile
              let utenti = await risposta.json();

              // 3. DOM & CICLO: Puliamo la lista e stampiamo i dati come hai già imparato a fare!
              listaUl.innerHTML = "";

              for (let i = 0; i < utenti.length; i++) {
                  let li = document.createElement("li");
                  // Stampiamo nome e email presi direttamente dal server remoto
                  li.innerText = utenti[i].name + " (" + utenti[i].email + ")";
                  listaUl.appendChild(li);
              }

          } catch (errore) {
              // Se c'è un problema di connessione, lo intercettiamo qui
              listaUl.innerHTML = "<li>Ops! Qualcosa è andato storto nel recupero dei dati.</li>";
          }
      });