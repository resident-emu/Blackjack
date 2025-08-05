// TO-DO lisää effekti kun pakasti poistetaan kortti

let player_cards = [];
let dealer_cards = [];
let player_total = 0;
let dealer_total = 0;
let player_score = 0;
let dealer_score = 0;
const delay = ms => new Promise(res => setTimeout(res, ms)); 

$(".card").hide();

document.getElementById("deal").addEventListener("click", function() {
    main();
});

document.getElementById("hit").addEventListener("click", function() {
    hit();
});
document.getElementById("stand").addEventListener("click", function() {
    stand();
});

function addElement(index) {
    let card = document.createElement("div");
    card.className = "card";
    card.id = "card" + index;
    document.getElementById("players_cards").appendChild(card);
    $("#card"+index).hide()
}

function addElement_dealer(index) {
    let card = document.createElement("div");
    card.className = "card";
    card.id = "dealer_card" + index;
    document.getElementById("dealers_cards").appendChild(card);
    $("#dealer_card"+index).hide()
}

let uusikortti = function(maa, arvo) {
    if (arvo - 13 > 0) {
        console.log("Invalid card value");
        return null;
    }
    this.maa = maa;
    this.arvo = arvo > 10 ? 10 : arvo; //J, Q ja K = 10
    this.arvo = arvo === 1 ? 11 : this.arvo; // A = 11
    this.isAce = arvo === 1;

    this.toString = function() {
        let arvoString = "";
        switch (arvo) {
            case 1:
                arvoString = "A";
                break;
            case 11:
                arvoString = "J";
                break;
            case 12:
                arvoString = "Q";
                break;
            case 13:
                arvoString = "K";
                break;
            default:
                arvoString = arvo;
        }
        return maa + "-" + arvoString;
    }
}

let korttipakka = function() {
    this.kortit = [];
    this.luopakka = function() {
        const maat = ["pata", "hertta", "risti", "ruutu"];
        for (let i = 0; i < maat.length; i++) {
            for (let j = 1; j <= 13; j++) {
                this.kortit.push(new uusikortti(maat[i], j));
            }
        }
    }
    this.sekoita = function() {
        for (let i = 0; i < this.kortit.length; i++) {
            let randomIndex = Math.floor(Math.random() * this.kortit.length);
            let temp = this.kortit[i];
            this.kortit[i] = this.kortit[randomIndex];
            this.kortit[randomIndex] = temp;
        }
    }
    this.jaa = function() {
        return this.kortit.pop();
    }
}
let pakka = new korttipakka();

function calculateTotal(cards) {
    
    let total = 0;
    let aces = 0;
    cards.forEach(card => {
        total += card.arvo;
        if (card.isAce) aces++;
    });

    while (total > 21 && aces > 0) {
        total -= 10;
        aces--;
    }
    return total;
}

function main () {

    reset();

    $("#score").text(dealer_score+" : "+player_score);
    $("#result").text("---");

    document.getElementById("deal").disabled = true;

    pakka.luopakka();
    pakka.sekoita();

    for (i = 0; i < 2; i++) {
        player_cards.push(pakka.jaa());
        dealer_cards.push(pakka.jaa());
    }


    player_total = calculateTotal(player_cards);


    $("#card1").css("background-image", "url('Kuvakortit/" + player_cards[0].toString() + ".png')");
    $("#card2").css("background-image", "url('Kuvakortit/" + player_cards[1].toString() + ".png')");
    
    $("#dealer_card1").css("background-image", "url('Kuvakortit/" + dealer_cards[0].toString() + ".png')");
    $("#dealer_card2").text("Card");

    $("#card1").slideDown();
    $("#card2").slideDown();

    $("#dealer_card1").slideDown();
    $("#dealer_card2").slideDown();

    $("#pakka").text(pakka.kortit.length);
}

function hit() {
    player_cards.push(pakka.jaa());
    player_total = calculateTotal(player_cards);

    $("#pakka").text(pakka.kortit.length);

    addElement(player_cards.length);
    $("#card" + player_cards.length).css("background-image", "url('Kuvakortit/" + player_cards[player_cards.length - 1].toString() + ".png')");
    $("#card" + player_cards.length).slideDown()

    if (player_total > 21) {
        Game_end("Dealer");
    }
}
async function stand () {

    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    $("#dealer_card2").text("")
    $("#dealer_card2").css("background-image", "url('Kuvakortit/" + dealer_cards[1].toString() + ".png')");
    dealer_total = calculateTotal(dealer_cards);
    gameover = false
    while (gameover === false) {

        await delay(500); //for realism???

        if (dealer_total > 21) {
            // Dealer bust
            Game_end("Player");
            break;
        } 
        else if (dealer_total >= 17) {
            if (dealer_total > player_total) {
                Game_end("Dealer");
            } else if (dealer_total < player_total) {
                Game_end("Player");
            } else {
                Game_end("Push");
            }
            break;
        } else {
            dealer_cards.push(pakka.jaa());
            dealer_total = calculateTotal(dealer_cards);
            $("#pakka").text(pakka.kortit.length);

            addElement_dealer(dealer_cards.length);
            $("#dealer_card" + dealer_cards.length).css("background-image", "url('Kuvakortit/" + dealer_cards[dealer_cards.length - 1].toString() + ".png')");
            $("#dealer_card" + dealer_cards.length).slideDown();
        }
    }  
}

function Game_end (Winner) {
    if (Winner === "Push") {
        $("#result").text("Push!");
        player_score++;
        dealer_score++;
    } else {
        $("#result").text(Winner + " wins!");
        if (Winner === "Player") {
            player_score++;
        } else {
            dealer_score++;
        }
    }
    $("#score").text(dealer_score+" : "+player_score);
    document.getElementById("deal").disabled = false;
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
}

function reset () {
    document.getElementById("deal").disabled = false;
    document.getElementById("hit").disabled = false;
    document.getElementById("stand").disabled = false;
    $(".card").hide();

    player_cards = [];
    dealer_cards = [];
    player_total = 0;
    dealer_total = 0;

    $("#players_cards").empty();
    $("#dealers_cards").empty();
    addElement(1);
    addElement(2);
    addElement_dealer(1);
    addElement_dealer(2);
    
    $("#card1").hide();
    $("#card2").hide();
    $("#dealer_card1").hide();
    $("#dealer_card2").hide();

    pakka = new korttipakka();
    $("#pakka").text("52");
}