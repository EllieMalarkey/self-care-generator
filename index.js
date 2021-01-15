
const getDayPrediction = day => {
    let randomDay = Math.floor(Math.random() * 10)
    switch(randomDay) {
        case 0:
            return "boring";
            break;
        case 1:
            return "productive";
            break;
        case 2:
            return "pleasantly chaotic";
            break;
        case 3:
            return "nightmarish";
            break;
        case 4:
            return "cozy";
            break;
        case 5:
            return "busy";
            break;
        case 6:
            return "exhausting";
            break;
        case 7:
            return "exhilarating";
            break;
        case 8:
            return "boring";
            break;
        case 9:
            return "calm";
            break;
        default:
            return 'caffeine-fueled';
            break;
    }
}

const getTodaysContacts = contact => {
    let randomPerson = Math.floor(Math.random() * 10)
    switch(randomPerson) {
        case 0:
            return "an old friend";
            break;
        case 1:
            return "the IRS";
            break;
        case 2:
            return "your cat";
            break;
        case 3:
            return "my lawyers";
            break;
        case 4:
            return "a potential lover";
            break;
        case 5:
            return "a hat maker";
            break;
        case 6:
            return "your nosiest neighbor";
            break;
        case 7:
            return "former astronaut and current U.S. Senator Mark Kelly";
            break;
        case 8:
            return "New York Knicks 2020 second round draft pick Daniel Oturu";
            break;
        case 9:
            return "a very insecure owl";
            break;
        default:
            return 'me';
            break;
    }
}

const getProphesy = prophesy => {
    let randomPrediction = Math.floor(Math.random() * 10)
    switch(randomPrediction) {
        case 0:
            return "bad news";
            break;
        case 1:
            return "a sales pitch";
            break;
        case 2:
            return "a frightening prophesy";
            break;
        case 3:
            return "a message from the dark side";
            break;
        case 4:
            return "a lead on a potential new client";
            break;
        case 5:
            return "a sexy secret";
            break;
        case 6:
            return "more information on your vehicle's extended warranty";
            break;
        case 7:
            return "a tale of woe";
            break;
        case 8:
            return "an exciting opportunity";
            break;
        case 9:
            return "a juicy confession";
            break;
        default:
            return 'a New York Times article that you can\'t access because you\'ve used up all of your free articles for this month';
            break;
    }
}

const getSelfCare = task => {
    let randomCareTask = Math.floor(Math.random() * 10)
    switch(randomCareTask) {
        case 0:
            return "drink your water";
            break;
        case 1:
            return "not read the comment section";
            break;
        case 2:
            return "make a line of salt across your front door threshold to ward away evil spirits";
            break;
        case 3:
            return "stretch your body";
            break;
        case 4:
            return "take a few deep breaths";
            break;
        case 5:
            return "take a break to meditate";
            break;
        case 6:
            return "fake your death and start over in Tahiti";
            break;
        case 7:
            return "take a bath";
            break;
        case 8:
            return "have a cup of tea";
            break;
        case 9:
            return "pet your cat";
            break;
        default:
            return 'take a walk';
            break;
    }
}

let yourDailyProphesy = () => {
    let prediction = getDayPrediction();
    let contact = getTodaysContacts();
    let prophesy = getProphesy();
    let careTask = getSelfCare();
    return `My crystal ball says that today will be ${prediction}. You will hear from ${contact} with ${prophesy}. Don't forget to ${careTask}!`;
    };

console.log(yourDailyProphesy())