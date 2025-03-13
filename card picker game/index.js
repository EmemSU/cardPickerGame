//card picker

function cardPicker(){
    const cardnum = document.getElementById("cardnum").value;
    const cardimage = document.getElementById("cardimage");

    console.log(typeof(cardnum));

    console.log(cardnum);

    cardimage.innerHTML = `<img src="cardimg/${cardnum}.png">`;

    //cardimage.innerHTML = `<p>TEST</p>`;


}

