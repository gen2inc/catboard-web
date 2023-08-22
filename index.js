function theMeowButton() {
    let meows = ['mraaowwww', 'mraaowww', 'meeowwww', 'mraaowww', 'meeeowwww', 'mrrrrpp', 'mmreaaaaaooowww', 'mreeaoooww', 'mrrrp', 'mrrrrr', 'mrrrrrppp', 'meeeaaaowww', 'mraaoowww', 'mraooowwww', 'mrrrpp', 'mrrrp', 'miau', 'mmeeoow']
    let meowAccents = ['~','!','...',' ^^',' :3']

    function genMeow() {
        let randomMeow = '';
        for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
            randomMeow += 'm';
        }
        for (let i = 0; i < Math.floor(Math.random() * 4); i++) {
            randomMeow += 'r';
        }
        for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
            randomMeow += 'e';
        }
        for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
            randomMeow += 'o';
        }
        for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
            randomMeow += 'w';
        }
        for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
            randomMeow += meowAccents[Math.floor(Math.random()*meowAccents.length)];
        }
        return randomMeow;
    }

    function genRandMrp() {
        let randomMrp = '';
        for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
            randomMrp += 'm';
        }
        for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
            randomMrp += 'r';
        }
        for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
            randomMrp += 'p';
        }
        for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
            randomMrp += meowAccents[Math.floor(Math.random()*meowAccents.length)];
        }
        return randomMrp;
    }

    function genRandNya() {
        let randomNya = '';
        for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
            randomNya += 'n';
        }
        for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
            randomNya += 'y';
        }
        for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
            randomNya += 'a';
        }
        for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
            randomNya += meowAccents[Math.floor(Math.random()*meowAccents.length)];
        }
        return randomNya;
    }
    for (let i = 0; i < 30; i++) {
        meows.push(genMeow())
    }
    for (let i = 0; i < 10; i++) {
        meows.push(genRandMrp())
    }
    for (let i = 0; i < 10; i++) {
        meows.push(genRandNya())
    }

    return meows[Math.floor(Math.random()*meows.length)];
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("gen-meows").addEventListener('click', function() {
        let meow = theMeowButton();
        document.getElementById("cars").value += `${meow} `;
    }, false);
});