let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let progressBar= document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs =[
   {songName: "tu mera sanam", filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
   {songName: "Hum nashe me to nhi ", filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
   {songName: "Jeena Abhi", filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
   {songName: "Parda dari", filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
   {songName: "Mai ke kara", filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
   {songName: "Dhokha", filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},
   {songName: "Gehraiyan tital", filePath:"songs/7.mp3",coverPath:"cover/7.jpg"},
   {songName: "Tadap", filePath:"songs/8.mp3",coverPath:"cover/8.jpg"},
   {songName: "Tere siwa jag mai", filePath:"songs/9.mp3",coverPath:"cover/9.jpg"},
   {songName: "Tu mera ho gaya h", filePath:"songs/10.mp3",coverPath:"cover/10.jpg"},
]

songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
})
//audioElement.play();

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

