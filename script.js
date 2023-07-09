console.log('welcome to spotify');

let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongname = document.getElementsByClassName('mastersong')[0];
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName : 'jalsa',filePath:'1.mp3',coverPath: 'Spotify_Logo.png'},
    {songName : 'jennifer lopez',filePath:'2.mp3',coverPath: 'bg.webp '},
    {songName : 'you and i',filePath:'3.mp3',coverPath: 'Spotify_Logo.png'},
    {songName : 'my heart is beating',filePath:'4.mp3',coverPath: 'Spotify_Logo.png'},

]

songitems.forEach((element ,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
})
//audio.element.play
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        
    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= (songindex+1) + '.mp3';
        mastersongname.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>2)
    songindex=0;
    else{
        songindex+=1;
    }
    audioElement.src= (songindex+1) + '.mp3';
        audioElement.currentTime=0;
        mastersongname.innerText=songs[songindex].songName;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    songindex=3;
    else{
        songindex-=1;
    }
    audioElement.src= (songindex+1) + '.mp3';
        audioElement.currentTime=0;
        mastersongname.innerText=songs[songindex].songName;
        audioElement.play();

        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
       
})
