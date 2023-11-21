let button = document.querySelector('.btn');

button.addEventListener('click', function() {
    let eta = document.getElementById('eta').value;
    let km = document.getElementById('km').value;
    let prezzo_st = km * 0.21

    if (eta == 'under') {
        let prezzo_under = prezzo_st - prezzo_st / 100 * 20;
        console.log(prezzo_under.toFixed(2));
    }
    
    else if (eta == 'over') {
        let prezzo_over = prezzo_st - prezzo_st / 100 * 40;
        console.log(prezzo_over.toFixed(2));
    }
    
    else {
        console.log(prezzo_st.toFixed(2))
    }
}) 