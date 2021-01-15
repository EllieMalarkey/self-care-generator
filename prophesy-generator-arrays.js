const prophesy = {
    mood: ['boring', 'productive', 'pleasantly chaotic', 'nightmarish', 'cozy', 'busy', 'exhausting', 'boring', 'exhilarating', 'calm', 'caffeine-fueled'],
    contact: ['an old friend', 'the IRS', 'your cat', 'my lawyers', 'a potential lover', 'a hat maker', 'your nosiest neighbor', 'former astronaut and current U.S. Senator Mark Kelly', 'New York Knicks 2020 second round draft pick Daniel Oturu','a very insecure owl', 'me'],
    message: ['bad news', 'a sales pitch', 'a frightening prophesy', 'a message from the dark side', 'more information on your vehicle\'s extended warranty', 'a sexy secret', 'a lead on a potential new client', 'a tale of woe', 'an exciting opportunity', 'a juicy confession', 'a New York Times article that you can\'t access because you\'ve used up all of your free articles for this month'],
    task: ['drink your water', 'make a line of salt across your front door threshold to ward away evil spirits', 'stretch your body', 'take a few deep breaths', 'take a break to meditate', 'fake your death and start over in Tahiti', 'take a bath', 'have a cup of tea', 'pet your cat']
};

let randomMood = prophesy.mood[Math.floor(Math.random() * prophesy.mood.length)];
let randomContact = prophesy.contact[Math.floor(Math.random() * prophesy.contact.length)];
let randomMessage= prophesy.message[Math.floor(Math.random() * prophesy.message.length)];
let randomTask = prophesy.task[Math.floor(Math.random() * prophesy.task.length)];

console.log(`My crystal ball says that today will be a ${randomMood} day. You will hear from ${randomContact} with ${randomMessage}. Don't forget to ${randomTask}!`)