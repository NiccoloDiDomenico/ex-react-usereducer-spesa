*EX - Carrello della spesa*

Milestone 1: Mostrare la lista dei prodotti

Parti dall’array products fornito:
Crea un componente che mostra la lista dei prodotti.
Per ogni prodotto, mostra:
    Nome, Prezzo

Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.

*Milestone 2: Aggiungere prodotti al carrello*

Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
Al click del bottone, usa una funzione addToCart per:
Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
Se il prodotto è già nel carrello, ignora l’azione.
Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
Per ogni prodotto nel carrello, mostra:
    Nome, Prezzo, Quantità

Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.

*Milestone 3: Modificare il carrello*

Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.
Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.
Sotto alla lista del carrello, mostra il totale da pagare:
Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.

Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.

*Bonus 1: Modifica dinamica delle quantità*

Al posto di mostrare solo il numero quantity, usa un input di tipo number:
Quando l’utente modifica il valore dell’input, usa la funzione updateProductQuantity per aggiornare la quantità del prodotto.
Migliora la funzione updateProductQuantity per gestire:
Numeri decimali: Forza la quantità a essere un numero intero.
Valori inferiori a 1: Non permettere quantità negative o pari a zero.

Obiettivo: Consentire una modifica precisa e dinamica delle quantità direttamente nel carrello.

*Bonus 2: Usare useReducer per gestire lo stato del carrello*

Sostituisci useState con useReducer per gestire lo stato del carrello.
Configura il reducer con queste azioni:
ADD_ITEM: Aggiunge un nuovo articolo al carrello con quantity = 1.
REMOVE_ITEM: Rimuove un articolo specifico dal carrello.
UPDATE_QUANTITY: Modifica la quantità di un articolo esistente nel carrello, assicurandoti di gestire i casi limite (es. valori negativi).
Inizializza lo stato con un array vuoto e usa useReducer per gestire le azioni del carrello.

Obiettivo: Migliorare la struttura del codice utilizzando un approccio più scalabile e organizzato.
