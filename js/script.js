let button = document.querySelector('.btn');

button.addEventListener('click', function() {
    let eta = document.getElementById('eta').value;
    let km = document.getElementById('km').value;
    let prezzo_st = km * 0.21

    if (eta == 'under') {
        let prezzo_under = prezzo_st - prezzo_st / 100 * 20;
        document.getElementById('info').innerText = ' ' + prezzo_under.toFixed(2) + '€';
        console.log(eta);
        document.getElementById('info_e').innerText = ' Minorenne';
        document.getElementById('info_k').innerText = ' ' + km;
    }
    
    else if (eta == 'over') {
        let prezzo_over = prezzo_st - prezzo_st / 100 * 40;
        document.getElementById('info').innerText = ' ' + prezzo_over.toFixed(2) + '€';
        document.getElementById('info_e').innerText = ' Over 65 anni';
        document.getElementById('info_k').innerText = ' ' + km;
    }
    
    else {
        document.getElementById('info').innerText = ' ' + prezzo_st.toFixed(2) + '€';
        document.getElementById('info_e').innerText = ' Maggiorenne';
        document.getElementById('info_k').innerText = ' ' + km;
    }
}) 