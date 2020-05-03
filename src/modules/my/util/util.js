const getUrlVars = () => {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
        m,
        key,
        value
    ) {
        vars[key] = value;
    });
    return vars;
};

const insertParam = (key, value) => {
    key = encodeURI(key);
    value = encodeURI(value);
    let kvp = document.location.search.substr(1).split('&');
    let i = kvp.length;
    let x;
    while (i--) {
        x = kvp[i].split('=');
        if (x[0] === key) {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }
    if (i < 0) {
        kvp[kvp.length] = [key, value].join('=');
    }
    document.location.search = kvp.join('&');
};

let listOfNames = [
    'Mayra Hudson',
    'Noe Oneill',
    'Larissa Boyer',
    'Jovani Estrada',
    'Kamryn Boyer',
    'Stephany Estrada',
    'Marcelo Villegas',
    'Trey Pugh',
    'Madden Patterson',
    'Lola Pham',
    'Bridget Harrison',
    'Kaley Velazquez',
    'Dakota Parks',
    'Armando Pineda',
    'Aleah Knapp',
    'Abbey Moses',
    'Riley Obrien',
    'Thalia Fields',
    'Daniella Holland',
    'Amiya Chang',
    'Jaylee Chang',
    'Kaitlynn Hines',
    'Kyler Clarke',
    'Beatrice Merritt',
    'Maggie Bass',
    'Makaila Callahan',
    'Marquis Oconnor',
    'Presley Fischer',
    'Landon Mathews',
    'Gabriella Montgomery',
    'Mason Carrillo',
    'Estrella Kennedy',
    'Kendall Yang',
    'Estrella Obrien',
    'Edwin Wolfe',
    'Mohamed Burke',
    'Natalee Ball',
    'Damon Manning',
    'Breanna Montoya',
    'Skyler Alvarado',
    'Albert Trujillo',
    'Maci Bolton',
    'Jorden Williamson',
    'Paris Randall',
    'Cordell Kramer',
    'Zaiden Richmond',
    'Kyan Shea',
    'Orlando Thompson',
    'Maurice Adkins',
    'Thaddeus Villa',
    'Marvin Murphy',
    'Jaiden Eaton',
    'Willow Scott',
    'Yadira Bartlett',
    'Hadley Acevedo',
    'Leo Fitzpatrick',
    'Rex Mclean',
    'Emilee Sanchez',
    'Saniya Hull',
    'Walter Bender',
    'Alana Holloway',
    'Joanna Robbins',
    'Raina Kaiser',
    'Kelton Campos',
    'Jacoby Gaines',
    'Weston Austin',
    'Ruth Obrien',
    'Cody Sexton',
    'Phoenix Craig',
    'Dominique Hanson',
    'Abbey Osborn',
    'Trevor Kennedy',
    'Dakota Bradshaw',
    'Sheldon Reynolds',
    'Marin Landry',
    'Isabel Ingram',
    'Jaliyah Mays',
    'Carsen Keith',
    'Roderick Schmidt',
    'Isis Guzman',
    'Sammy Mckinney',
    'Peter Brady',
    'Kristina Nunez',
    'Jayden Russo',
    'Deegan Mcfarland',
    'Ayana Medina',
    'Lucas Blanchard',
    'Ezekiel Burch',
    'Jovan Peterson',
    'Angeline Gilbert',
    'Joel Merritt',
    'Rylee Armstrong',
    'Ryleigh Salinas',
    'Braydon Villegas',
    'Devan Rogers',
    'Isabel Weeks',
    'Moses Bolton',
    'Jakobe Zuniga',
    'Duncan Charles',
    'Chaz Lutz',
    'Marquise Greer',
    'Kali Nichols',
    'Dallas Mcintosh',
    'Cadence Powell',
    'Clark Mason',
    'Elliana Golden',
    'Lane Dillon',
    'Aron Kaiser',
    'Augustus Olsen',
    'Alvin Burch',
    'Ramiro Hart',
    'Kelsie Bullock',
    'Max Mosley',
    'Trent York',
    'Nathen May',
    'Austin Lyons',
    'Laila Fleming',
    'Margaret Mcconnell',
    'Bryan Keller',
    'Londyn Meza'
];

const getName = () =>
    listOfNames[Math.floor(Math.random() * listOfNames.length)];

export { getUrlVars, insertParam, getName };
