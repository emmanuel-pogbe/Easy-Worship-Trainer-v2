const scriptureButton = document.querySelectorAll(".scriptureButton");
const customBtn = document.getElementById("custom");
const okBtn = document.getElementById("okBtn");
const book = document.getElementById("book");
const chapter = document.getElementById("chapter");
const verse = document.getElementById("verse");
const scriptureInputs = document.querySelectorAll(".input-class");
const scripture = document.getElementById("scripture");
const help = document.getElementById("help");
const main = document.getElementById("main");
const confirmHelp = document.getElementById("confirm-help");
const scriptureData = {
  'Genesis':[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,54,33,20,31,29,43,36,30,23, 23,57,38,34,34,28,34,31,22,33,26],
  'Exodus':[22,25,22,31,23,30,29,28,35,29,10,51,22,31,27,36,16,27,25,26,37,30,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],
  'Leviticus':[17,16,17,35,26,23,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],
  'Numbers':[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,35,28,32,22,29,35,41,30,25,18,65,23,31,39,17,54,42,56,29,34,13],
  'Deuteronomy':[46,37,29,49,33,25,26,20,29,22,32,31,19,29,23,22,20,22,21,20,23,29,26,22,19,19,26,69,28,20,30,52,29,12],
  'Joshua':[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33],
  'Judges':[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25],
  'Ruth':[22,23,18,22],
  '1 Samuel' :[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,16,23,28,23,43,25,12,25,11,31,13],
  '2 Samuel':[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,32,44,26,22,51,39,25],
  '1 Kings':[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],
  '2 Kings':[18,25,27,44,27,33,20,29,37,36,20,22,25,29,38,20,41,37,37,21,26,20,37,20,30],
  '1 Chronicles':[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],
  '2 Chronicles':[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],
  'Ezra':[11,70,13,24,17,22,28,36,15,44],
  'Nehemiah':[11,20,32,23,19,19,73,18,38,39,36,47,31],
  'Esther':[22,23,15,17,14,14,10,17,32,3],
  'Job':[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30, 24,34,17],
  'Psalms':[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],
  'Proverbs':[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],
  'Ecclesiastes':[18,26,22,17,19,12,29,17,18,20,10,14],
  'Song of Solomon':[17,17,11,16,16,12,14,14],
  'Isaiah':[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],
  'Jeremiah':[19,37,25,31,31,30,34,23,25,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],
  'Lamentations':[22,22,66,22,22],
  'Ezekiel':[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,44,37,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],
  'Daniel':[21,49,30,37,31,28,28,27,27,21,45,13],
  'Hosea':[9,25,5,19,15,11,16,14,17,15,11,15,15,10],
  'Joel':[20,32,21],
  'Amos':[15,16,15,13,27,14,17,14,15],
  'Obadiah':[21],
  'Jonah':[16,11,10,11],
  'Micah':[16,13,12,14,14,16,20],
  'Nahum':[14,14,19],
  'Habakkuk':[17,20,19],
  'Zephaniah':[18,15,20],
  'Haggai':[15,23],
  'Zechariah':[17,17,10,14,11,15,14,23,17,12,17,14,9,21],
  'Malachi':[14,17,18],
  'Matthew':[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],
  'Mark':[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],
  'Luke':[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],
  'John':[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25],
  'Acts':[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],
  'Romans':[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],
  '1 Corinthians':[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24],
  '2 Corinthians':[24,17,18,18,21,18,16,24,15,18,33,21,14],
  'Galatians':[24,21,29,31,26,18],
  'Ephesians':[23,22,21,32,33,24],
  'Philippians':[30,30,21,23],
  'Colossians':[29,23,25,18],
  '1 Thessalonians':[10,20,13,18,28],
  '2 Thessalonians':[12,17,18],
  '1 Timothy':[20,15,16,16,25,21],
  '2 Timothy':[18,26,17,22],
  'Titus':[16,15,15],
  'Philemon':[25],
  'Hebrews':[14,18,19,16,14,20,28,13,28,39,40,29,25],
  'James':[27,26,18,17,20],
  '1 Peter':[25,25,22,19,14],
  '2 Peter':[21,22,18],
  '1 John':[10,29,24,21,21],
  '2 John':[13],
  '3 John':[14],
  'Jude':[25],
  'Revelation':[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21],
}
const bibleBooks = Object.keys(scriptureData)

let started = 0;
let times = [];
let previousTime = null
let scriptureCount = 0;
let totalScriptures = 0;
let averageResult = document.getElementById("average");
let testType = document.getElementById("custom-test-type");

function resetVariables() {
  started = 0;
  times = [];
  scriptureCount = 0;
  previousTime = null;
  totalScriptures = 0;
}
function fetchBook() {
  const books = Object.keys(scriptureData);
  return books[Math.floor(Math.random() * books.length)];
}
function fetchChapter(book) {
  const chapters = scriptureData[book];
  return Math.floor(Math.random() * chapters.length) + 1;
}
function fetchVerse(book, chapter) {
  const verseCount = scriptureData[book][chapter - 1];
  return Math.floor(Math.random() * verseCount) + 1;
}
function fetchScripture() {
  const book_f    = fetchBook();
  const chapter_f = fetchChapter(book_f);
  const verse_f   = fetchVerse(book_f, chapter_f);
  finalscripture = `${book_f} ${chapter_f}:${verse_f}`;
  document.getElementById("scripture").innerText = finalscripture;
}
fetchScripture(); //On page load, get random scripture
function startTimer() { 
  if (previousTime===null) {
    previousTime = Date.now()
  }
}
function displayHelp() {
  document.getElementById("options").style.visibility = "visible";
  document.getElementById("result").classList.add("hidden");
  main.classList.add("hidden");
  help.classList.remove("hidden");
  document.querySelector("#help .help-content").scrollTop = 0;
}
document.getElementById("logo").addEventListener("click",function(event){
  event.preventDefault();
  fetchScripture(); //Get a new scripture when page logo is clicked
  const mainApp = document.getElementById("main-app");
  const resultPage = document.getElementById("result");
  document.getElementById("options").style.visibility = "visible";
  resultPage.classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
  mainApp.classList.remove("pop-in");
  void mainApp.offsetWidth;
  mainApp.classList.add("pop-in");
  //reset variables
  resetVariables();
});
scriptureButton.forEach(button=>{ 
  button.addEventListener("click",function(){ //At any given time, only one button settings should be active
    scriptureButton.forEach(btn=>btn.classList.remove("active"));
    this.classList.add("active");
  });
});
customBtn.addEventListener("click",()=>{ //Custom scripture pane popup
  popup.classList.remove("hidden");
  document.getElementById("customInput").focus();
});
confirmHelp.addEventListener("click",()=>{
  main.classList.remove("hidden");
  help.classList.add("hidden");
  fetchScripture();
  resetVariables();
});
okBtn.addEventListener("click",()=>{
  const popup = document.getElementById("popup");
  const customInput = document.getElementById("customInput").value;
  if (customInput>0 && customInput<100) { //valid custom input, proceed to main app
    popup.classList.add("hidden");
  }
  if (customInput>0 && customInput<100) {
    popup.classList.add("hidden");  
  }
  else if (customInput>100){
    //should add a tip popup later
    console.log("Can't be greater than 100");
  }
  else {
    //should add a tip popup later
    console.log("Can't be less than 1")
  }
});
document.getElementById("customInput").addEventListener("keydown",(e)=>{ //Only allows positive integers 
  const customInput = document.getElementById("customInput");
  if (customInput.value.length > 1 && e.key!="Backspace" && e.key!="Tab") {
    e.preventDefault();
  }
  if (e.key==="." || e.key==="-"||e.key==="e"||e.key==="E"){
    e.preventDefault()
  }
  if (e.key==="Enter") { //press enter to close pane
    e.preventDefault()
    okBtn.click();
  }
})
document.getElementById("customInput").addEventListener("focus", function() { 
  setTimeout(() => {   //when pane opens, highlight the input box
   document.getElementById("customInput").select();
  }, 0);
});
//Helper functions for changing focus to another input field
function focusNext(currentId, nextId) {
    document.getElementById(nextId).focus();
}
function focusPrev(currentId, prevId) {
    document.getElementById(prevId).focus();
}
//Helper function to check if a string starts with a number for Scriptures like 1 Samuel, to allow space key to temporarily work
function startsWithNumber(str) {
  return /^\d/.test(str);
}
function makeStrictAutocomplete(input,list) {
  let defaultValue = list[0]; //Genesis
  let typed = "";
  input.addEventListener("focus",()=>{
    typed="";
  }) //reset typed variable when input is clicked
  input.addEventListener("keydown", e => {
    const key = e.key;
    if (/^[a-zA-Z0-9 ]$/.test(key) && !e.ctrlKey) {
      if (e.key === " ") { //space bar switches to chapter field
        if (typed.length>1 || !startsWithNumber(typed[0])) {
          e.preventDefault();
          focusNext("book","chapter");
        }
        else {
          e.preventDefault();
          typed+=key;
          const match = list.find(item =>
            item.toLowerCase().startsWith(typed.toLowerCase())
          ); //check list of bible verses for input
          if (match) {
            defaultValue = match;
            input.value = match;
            // highlight the suggested part
            input.setSelectionRange(typed.length, match.length);
          } else {
            // no match → ignore this keystroke
            typed = typed.slice(0, -1);
          }
        }
      }
      else {
        e.preventDefault();
        typed += key;
        const match = list.find(item =>
          item.toLowerCase().startsWith(typed.toLowerCase())
        );
        if (match) {
          defaultValue = match;
          input.value = match;
          input.setSelectionRange(typed.length, match.length);
        } else {
          // ignore this keystroke
          typed = typed.slice(0, -1);
        }
      }
      if (typed.length==1 && /^[a-zA-Z]$/.test(e.key) && startsWithNumber(typed[0])) {
        //This area accounts for books starting with numbers e.g 1 Samuel
        e.preventDefault();
        typed += " ";
        typed += key;
        e.preventDefault();
        const match = list.find(item =>
          item.toLowerCase().startsWith(typed.toLowerCase())
        );
        if (match) {
          defaultValue = match;
          input.value = match;
          input.setSelectionRange(typed.length, match.length);
        } else {
          // ignore this keystroke
          typed = typed.slice(0, -1);
        }
      }
    }
    else if (key === "Backspace") {
      e.preventDefault();
      if (typed.length > 0) {
        typed = typed.slice(0, -1);
        if (typed === "") {
          input.value = defaultValue;
          input.select();
        } else {
            input.setSelectionRange(typed.length, defaultValue.length);
        }
      }
    }
    else if (["'",";","ArrowRight",".",",","=","-"," "].includes(e.key)) { // Move focus to chapter input
      e.preventDefault();
      focusNext("book", "chapter");
    }
    else if (e.key === "ArrowLeft") { //Move focus to verse input
      e.preventDefault();
      focusPrev("book","verse");
    }
    else if (e.ctrlKey && e.key === "a") {
      typed = ""; // reset typed variable if user selects all
    }
    else if (e.key != "Tab" && !e.ctrlKey){
      e.preventDefault();
    }
  });
  input.addEventListener("paste", e => {
    e.preventDefault();
  });
  input.addEventListener("blur", () => { //When you leave focus, reset typed variable
    typed = "";
    input.value = defaultValue;
    input.setSelectionRange(0, defaultValue.length);
  });
}
makeStrictAutocomplete(book,bibleBooks);
chapter.addEventListener("keydown", function(e) {
  if (/^[a-zA-Z]$/.test(e.key) && !e.ctrlKey) { //Only allow numbers
    e.preventDefault();
  }
  const isDigit = /^[0-9]$/.test(e.key);
  const start = chapter.selectionStart;
  const end = chapter.selectionEnd;
  let cur = chapter.value;
  let proposed;
  if (isDigit) {
    proposed = cur.slice(0, start) + e.key + cur.slice(end);
  }
  const num = Number(proposed);
  const books = book.value;
  const chapters = scriptureData[books]
  const max = chapters.length; //get the maximum number of chapters for the corresponding book
  console.log("Chaptermax "+max);
  if (num > max) { 
    //don't allow input if it's greater than the max number of chapters in the book
    e.preventDefault();
  }
  if (!/^[0-9]$/.test(e.key)) {
      // Right arrow or space (without shift) moves to "verse"
    if (["'",";","ArrowRight",".",",","=","-"," "].includes(e.key)) {
      e.preventDefault();
      focusNext("chapter", "verse");
    }
    // Left arrow moves back to "book"
    else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusPrev("chapter", "book");
    }
    else if (e.key === "Backspace") {
      if (chapter.selectionStart === 0 && chapter.selectionEnd === chapter.value.length) {
        e.preventDefault();
        return;
      }
      if (chapter.value.length === 1) {
        e.preventDefault();
        chapter.select();
        return;
      }
    }
    else if (e.key != "Tab" && !e.ctrlKey)  {
      e.preventDefault();
    }
  }
});
verse.addEventListener("keydown", function(e) {
  if (/^[a-zA-Z]$/.test(e.key) && !e.ctrlKey) {
    e.preventDefault();
  }
  const isDigit = /^[0-9]$/.test(e.key);
  const start = verse.selectionStart;
  const end = verse.selectionEnd;
  let cur = verse.value;
  let proposed;
  if (isDigit) {
    proposed = cur.slice(0, start) + e.key + cur.slice(end);
  }
  const num = Number(proposed);
  const books = book.value;
  const chapters = Number(chapter.value);
  const max = (scriptureData[books])[chapters - 1]; //get the maximum number of verses for the corresponding book and chapter
  console.log("Versemax "+max);
  if (num > max) {
    e.preventDefault();
  }
  if (!/^[0-9]$/.test(e.key)) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusPrev("verse", "chapter");
    }
    else if (e.key === "ArrowRight") {
      e.preventDefault();
      focusNext("verse","book");
    }
    else if (e.key ===" "){
      e.preventDefault();
    }
    else if (e.key === "Backspace") {
      if (verse.selectionStart === 0 && verse.selectionEnd === verse.value.length) {
        e.preventDefault();
        return;
      }
      if (verse.value.length === 1) {
        e.preventDefault();
        verse.select();
        return;
      }
   }
   else if (e.key != "Tab" && !e.ctrlKey) {
    e.preventDefault();
   }
  }
});
function calculateAverageTime() {
  let sum = times.reduce((a, b) => a + b, 0);
  let average = sum / times.length;
  return average.toFixed(3);
}
function applyInputFeatures(input) {
  // Prevent mousedown from altering selection.
  input.addEventListener("mousedown", function(e) {
    e.preventDefault();
    input.focus();
  });
  input.addEventListener("focus", function() { //on focus, select all
    setTimeout(() => {
     input.select();
    }, 0);
  });
  // Prevent backspace if the entire text is selected or deletion would result in an empty input.
  input.addEventListener("keydown", function(e) {
    if (started==0) { // Starting the test
      document.getElementById("options").style.visibility = "hidden"; //Hide the options pane
      started = 1;
      previousTime = Date.now();
      currentSetting = document.querySelector(".active").textContent; //Get the total number of scriptures to type
      if (currentSetting=="10 Scriptures"){
        totalScriptures = 10;
      }
      else if (currentSetting=="20 Scriptures") {
        totalScriptures = 20;
      }
      else {
        totalScriptures = document.getElementById("customInput").value;
      }
    }
    if (e.key === "Enter") {
      e.preventDefault();
      book.focus();
      bookInput = book.value
      chapterInput = chapter.value
      verseInput = verse.value
      finalInput = bookInput+" "+chapterInput+":"+verseInput;
      if (finalInput==scripture.textContent) {
        scriptureCount++;
        if ((scriptureCount!=totalScriptures)) {
          fetchScripture();
        }
        if (scriptureCount<=totalScriptures) {
          let finalTime = Date.now();
          let timeTaken = (finalTime-previousTime)/1000;
          times.push(timeTaken);
          previousTime = Date.now();
        }
        if (scriptureCount==totalScriptures) {
          averageTime = calculateAverageTime();
          averageResult.textContent = averageTime + " seconds";
          testType.textContent = "Scriptures " + totalScriptures; 
          document.getElementById("main").classList.add("hidden");
          document.getElementById("result").classList.remove("hidden");
        }
      }
      else {
        const inputFields = document.querySelectorAll(".input-class");
        inputFields.forEach(inputField=>inputField.style.borderColor = "red");
        setTimeout(() => {
          inputFields.forEach(inputField=>inputField.style.borderColor = "#013FBF");
         }, 500);
      }
    }
 });
}
scriptureInputs.forEach(scriptureInput=>applyInputFeatures(scriptureInput)); //Add input features to all input boxes