let selectTongue  = document.querySelector("#tongue-select");
let p = document.querySelector("#pDescription");
let p2 = document.querySelector("#pDescription2");
let titleDescription = document.querySelector("#title");

/**
 * Switch the language according to the language chosen by the user in the select
 * @constructor
 */
function ChooseTongue() {

    if(selectTongue.value === "english") {

        p.innerHTML = "I am a junior web and mobile web developer.Currently in training at <a href=\"https://www.up-to.fr/\" target=\"_blank\"> UPTO.</a>\n" +
            "I am looking for a three-month internship to improve myself in computer science.";

        titleDescription.innerHTML = "My hobbies";

        p2.innerHTML = "I love Japan and its geek culture.\n" +
            "  I like nature, metal music, cooking and especially pastry making.\n" +
            " I love building a site from A to Z and designing it.\n" +
            "\n";
    }

    if(selectTongue.value === "japanese") {

        p.innerHTML = " Watashi wa junia~ebu oyobi mobairū~ebu kaihatsu-shadesu. Genzai <a href=\"https://www.up-to.fr/\" target=\"_blank\"> UPTO.</a>\n" +
            "de torēningu-chūdesu. Watashi wa konpyūtasaiensu no bun'ya de jibun jishin o kōjō sa seru tame ni 3kagetsu no intānshippu o sagashiteimasu.";
        titleDescription.innerHTML = "Watashi no shumi";
        p2.innerHTML = "Watashi wa Nihon to sono otaku bunka ga daisukidesu. Watashi wa shizen, metaru ongaku, ryōri, soshite tokuni pesutorī-tsukuri ga sukidesu. watashi wa A kara Z made no saito o kōchiku shite sekkei suru no ga daisukidesu.";
    }

    if(selectTongue.value === "fr") {
        p.innerHTML = "Je suis une développeuse web & web mobile junior.\n" +
            "Actuellement en formation chez <a href=\"https://www.up-to.fr/\" target=\"_blank\"> UPTO.</a>\n" +
            " Je recherche un stage de trois mois pour m'améliorer en informatique.";
        titleDescription.innerHTML = "Mes loisirs";
        p2.innerHTML = "J'adore le Japon et sa culture geek.\n" +
            "J'aime la nature, la musique métal,la cuisine et surtout la pâtisserie.\n" +
            "J'adore construire un site de A à Z et le designer."
    }

}

selectTongue.addEventListener('click', ChooseTongue)