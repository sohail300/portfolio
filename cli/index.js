#!/usr/bin/env node

import figlet from 'figlet';
import pkg from 'colors';
import chalkAnimation from 'chalk-animation';

function printSkill(languages, header) {
    // (['yellow', 'red', 'blue', 'magenta']);
    let color = 'red';
    let output = `${header}`.magenta + ' - ';
    languages.forEach((language, index) => {
        output += language[color];
        if (index !== languages.length - 1) {
            output += ', ';
        }
    });

    console.log(output);
}

function print() {
    console.log(`
        █▀█ █▀ █▀█ █▀ █▀█ █▄ █ █▀█ █     █▀▄ █▀ ▀█▀ █▀█ █ █   █▀
        █▀▀ █▄ █▀▄ ▄█ █▄█ █ ▀█ █▀█ █▄▄   █▄▀ █▄  █  █▀█ █ █▄▄ ▄█`.cyan);
    console.log()
    console.log(`NAME       `.magenta + ' - ' + 'Vineet Agarwal'.green);
    console.log(`STATUS     `.magenta + ' - ' + 'Final year student at IIIT Bhagalpur'.green);
    console.log(`EXPERTISE  `.magenta + ' - ' + 'Designer and Full Stack Developer'.green);
    console.log(`GITHUB     `.magenta + ' - ' + `https://github.com/sohail300`.green);
    console.log(`PORTFOLIO  `.magenta + ' - ' + `https://heysohail.me`.green);
    console.log(`EMAIL      `.magenta + ' - ' + `sohailatwork10@gmail.com`.green);

    console.log(`  
        █▀ █▄▀ █ █   █   █▀
        ▄█ █ █ █ █▄▄ █▄▄ ▄█`.cyan)
    console.log()
    printSkill(['Java', 'JavaScript', 'TypeScript', 'Python', 'Bash'], 'LANGUAGES   ');
    printSkill(['ReactJS', 'NextJS', 'NodeJS', 'ExpressJS', 'Hono', 'Tailwind CSS'], 'FRAMEWORKS  ');
    printSkill(['WordPress', 'Prisma', 'Linux', 'Git', 'GitHub', 'Figma'], 'TOOLS       ');
    printSkill(['MongoDB', 'Firebase', 'PostgreSQL'], 'DATABASES   ');
    printSkill(['Docker', 'Kubernetes', 'Github Actions', 'CI/CD', 'AWS', 'AZURE', ' Cloudflare', 'Vercel'], 'DEVOPS      ');
    printSkill(['Data Structures and Algorithm (DSA)', 'Object Oriented Programming (OOPs)', 'Networking', ' Operating Systems (OS)', 'Database Management Systems (DBMS)'], 'Course Work ');

    console.log(`
        █▀ ▀▄▀ █▀█ █▀ █▀█ █ █▀ █▄ █ █▀▀ █▀ 
        █▄ █ █ █▀▀ █▄ █▀▄ █ █▄ █ ▀█ █▄▄ █▄`.cyan);
    console.log()
    console.log(`WEBYAPAR          `.magenta + ' - ' + 'Worked as a Frontend Web Developer Intern. '.yellow);
    console.log(`GLOCYBS           `.magenta + ' - ' + 'Worked as a Full Stack Web Developer Intern.'.yellow);
    console.log(`BHAGALPUR POLICE  `.magenta + ' - ' + 'Worked as UI/UX and Frontend Developer in a project involving 10+ members in collaboration with Bhagalpur Police'.yellow);
    console.log(`STREEYA           `.magenta + ' - ' + `Worked as a UI/UX Design Intern`.yellow);


    console.log(`
        █▀█ █▀█ █▀█   █ █▀ █▀▀ ▀█▀  █▀
        █▀▀ █▀▄ █▄█  ▄█ █▄ █▄▄  █   ▄█`.cyan);
    console.log()
    console.log(`E-KAKSHA   `.magenta + ' - ' + 'Course Selling Platform. Link: https://e-kaksha.vercel.app/'.blue);
    console.log(`SPILL      `.magenta + ' - ' + 'Anonymous feedback platform. Link: https://spill-app.vercel.app/'.blue);
    console.log(`PORTFOLIO  `.magenta + ' - ' + 'My Portfolfio Website. Link: https://heysohail.me'.blue);


    console.log(`
        █▀▄▀█ █▀ █▀ █▀ █▀█ █▀▀ █▀
        █ ▀ █ █▄ ▄█ ▄█ █▀█ █▄█ █▄`.cyan)
    const karaoke = chalkAnimation.karaoke('\nSohail is available to join your team, ready to help your company achieve new heights. Appreciate you taking a look at my CLI!\n'); // Animation starts
    setTimeout(() => {
        karaoke.start(); // Animation resumes
    }, 200);
}

function main() {
    figlet.text(
        "Hey There !",
        {
            font: "Slant",
            horizontalLayout: "center",
            verticalLayout: "center",
            width: 80,
            whitespaceBreak: true,
        },
        function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            console.log(data.yellow);
        }
    );

    setTimeout(() => {
        print();
    }, 300);

}

main();
