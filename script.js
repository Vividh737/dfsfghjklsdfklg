let fplay = document.getElementById('fplay');
let cimg = document.querySelector('#cimg');
let music = document.querySelector("audio");
let fpre = document.getElementById("fpre");
let fpost = document.getElementById("fpost");
let sname = document.querySelector(".sname");
let aname = document.querySelector(".aname");
let start = document.querySelector(".start");
let end = document.querySelector(".end");
let progressbar = document.querySelector('#progressbar');
progressbar.value=0;

const songs = [
    {
        name:"Mortals",
        title:"Mortals",
        artist:"Warriyo",
    },
    {
        name:"ArabianNights",
        title:"Arabian Nights",
        artist:"Rudelies",
    },
    {
        name:"BiggerDreams",
        title:"Bigger Dreams",
        artist:"Thomas Gresen",
    },
    {
        name:"Dreams2",
        title:"Dreams Pt. II",
        artist:"Lost Sky",
    },
    {
        name:"Fearless2",
        title:"Fearless Pt. II",
        artist:"Lost Sky",
    },
    {
        name:"HeroesTonight",
        title:"Heroes Tonight",
        artist:"Janji",
    },
    {
        name:"Invincible",
        title:"Invicible",
        artist:"Deaf Kev",
    },
    {
        name:"OnAndOn",
        title:"On And On",
        artist:"Cartoon",
    },
    {
        name:"OnFire",
        title:"On Fire",
        artist:"Robin Hustin",
    },
    {
        name:"Paranoia",
        title:"Paranoia",
        artist:"Whales & ggnoaa",
    },
    {
        name:"PiercingLight",
        title:"piercing Light",
        artist:"League of Legends",
    },
    {
        name:"Pill",
        title:"Pill",
        artist:"Heuse& Zeus x Crona",
    },
    {
        name:"Shining",
        title:"Shining",
        artist:"ROY KNOX",
    },
    {
        name:"SkyHigh",
        title:"Sky High",
        artist:"Elektronomia",
    },
    {
        name:"Superhero",
        title:"Superhero",
        artist:"Unknown Brain",
    },
    {
        name:"WeAre",
        title:"We Are",
        artist:"Jo Cohen & Sex Whales",
    },
    {
        name:"WhyWeLoose",
        title:"Why We Loose",
        artist:"Cartoon",
    },
    {
        name:"Lost",
        title:"Lost",
        artist:"Lost Sky",
    },
    {
        name:"Invisible",
        title:"Invisible",
        artist:"Julius Dreisig & Zeus x Crona",
    },
    {
        name:"Koven",
        title:"Never I Felt This",
        artist:"Koven",
    },

];


fplay.addEventListener("click",()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        fplay.classList.replace("fa-play-circle","fa-pause-circle");
        cimg.classList.add("anime");
    }else{
        music.pause();
        fplay.classList.replace("fa-pause-circle","fa-play-circle");
        cimg.classList.remove("anime"); 
    }
})
music.addEventListener('timeupdate',()=>{
    const seek = music.currentTime/music.duration *100;
    progressbar.value = seek;
    let min = Math.floor(music.currentTime/60);
    let sec = Math.floor(music.currentTime%60);
    if(sec<10){
        sec = `0${sec}`;
    }
    start.textContent = `${min}:${sec}`;

    let Min = Math.floor(music.duration/60);
    let Sec = Math.floor(music.duration%60);
    if(Sec<10){
        Sec = `0${Sec}`;
    }
    end.textContent = `${Min}:${Sec}`;

})
progressbar.addEventListener('input',(e)=>{
    music.currentTime = event.target.value/100*music.duration;
})
songIndex = 0;
function nextSong(){
    fplay.classList.replace("fa-play-circle","fa-pause-circle");
    songIndex = (songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    music.play();
    cimg.classList.add("anime");
}
function prevSong(){
    fplay.classList.replace("fa-play-circle","fa-pause-circle");
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    music.play();
    cimg.classList.add("anime");
}
fpost.addEventListener('click',nextSong);
fpre.addEventListener('click',prevSong);

music.addEventListener('ended',nextSong);



function loadSong(songs){
    sname.textContent = songs.title;
    aname.textContent = songs.artist;
    music.src = "songs/"+ songs.name + ".mp3";
    cimg.src = "cover/" + songs.name + ".jpeg";
}