const music=document.getElementById("birthdayMusic"),musicBtn=document.getElementById("musicBtn");if(musicBtn){musicBtn.addEventListener("click",async()=>{if(music.paused){try{await music.play();musicBtn.textContent="♫ Pause music";}catch(e){musicBtn.textContent="Tap to play music";}}else{music.pause();musicBtn.textContent="♫ Play birthday music";}});}
const questions=[{q:"Kontya mahinat aapan ekmekanchya premat padalo?",a:["February","January","April"],correct:0},{q:"Aapli pahili unofficial date / bhet kontya divashi zali?",a:["22 February","21 February","23 February"],correct:0},{q:"What sweet nickname do I use for you?",a:["My-Sha","Sunshine","Princess"],correct:0},{q:"Which month is special in our story?",a:["February","May","December"],correct:0},{q:'Who says "I love you" more?',a:["Rahul","Shamal","Both"],correct:2},{q:"Who is the birthday star today?",a:["Rahul","Shamal","Both"],correct:1}];
let current=0,points=0,answered=false;const q=document.getElementById("question"),answers=document.getElementById("answers"),feedback=document.getElementById("feedback"),next=document.getElementById("next");
if(q){function render(){answered=false;const item=questions[current];document.getElementById("progress").textContent=`Question ${current+1} of ${questions.length}`;document.getElementById("score").textContent=`❤️ ${points}`;q.textContent=item.q;answers.innerHTML="";feedback.textContent="";next.hidden=true;item.a.forEach((a,i)=>{const b=document.createElement("button");b.className="answer";b.textContent=a;b.addEventListener("click",()=>choose(i,b));answers.appendChild(b);});}
function choose(i,b){if(answered)return;answered=true;const item=questions[current];[...answers.children].forEach(x=>x.disabled=true);answers.children[item.correct].classList.add("correct");if(i===item.correct){points++;feedback.textContent="That's right! You remember our story. 💗";}else{b.classList.add("wrong");feedback.textContent=`The correct answer is ${item.a[item.correct]}. ❤️`;}document.getElementById("score").textContent=`❤️ ${points}`;next.textContent=current===questions.length-1?"See your result 💌":"Next question →";next.hidden=false;}
next.addEventListener("click",()=>{current++;if(current<questions.length)render();else{document.querySelector(".quiz-meta").hidden=true;q.hidden=true;answers.hidden=true;feedback.hidden=true;next.hidden=true;document.getElementById("result").hidden=false;document.getElementById("resultText").textContent=`You got ${points} out of ${questions.length}. Every moment with you is a favourite memory!`;}});document.getElementById("restart").addEventListener("click",()=>{current=0;points=0;document.querySelector(".quiz-meta").hidden=false;q.hidden=false;answers.hidden=false;feedback.hidden=false;document.getElementById("result").hidden=true;render();});render();}
const slides=[...document.querySelectorAll(".slide")];
if(slides.length){
 let activeSlide=0;
 const prev=document.getElementById("prevSlide"),nextSlide=document.getElementById("nextSlide");
 const counter=document.getElementById("slideCounter"),dots=[...document.querySelectorAll(".dot")];
 function showSlide(index){
   activeSlide=Math.max(0,Math.min(slides.length-1,index));
   slides.forEach((slide,i)=>{slide.classList.toggle("active",i===activeSlide);slide.setAttribute("aria-hidden",i===activeSlide?"false":"true");});
   dots.forEach((dot,i)=>{dot.classList.toggle("selected",i===activeSlide);dot.setAttribute("aria-current",i===activeSlide?"true":"false");});
   counter.textContent=`Memory ${activeSlide+1} of ${slides.length}`;
   prev.disabled=activeSlide===0;
   nextSlide.textContent=activeSlide===slides.length-1?"Back to first memory ↺":"Next memory →";
 }
 prev.addEventListener("click",()=>showSlide(activeSlide-1));
 nextSlide.addEventListener("click",()=>showSlide(activeSlide===slides.length-1?0:activeSlide+1));
 dots.forEach((dot,i)=>dot.addEventListener("click",()=>showSlide(i)));
 showSlide(0);
}
