
var audio = new Audio('sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+917222919601'> <div class='socialItem' id='call'><img class='socialItemI' src='phone.svg'/><label class='number'>7222919601</label></div> </a> <a href='mailto:sabaanjum9880@gmail.com'> <div class='socialItem'><img class='socialItemI' src='gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/sabaanjum03'> <div class='socialItem'><img class='socialItemI' src='github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/7222919601'> <div class='socialItem'><img class='socialItemI' src='whatsapp.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='pdf.png'><label>saba_anjum_cv.pdf</label></div><a href='saba_anjum_cv.pdf' download='saba_anjum_cv.pdf'><img class='download' src='downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.037368091177!2d81.3392658!3d21.1685561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddd60354f7d9%3A0x2d2ba91f9aa620b!2sBhilai%2C%20Chhattisgarh%2C%20India!5e0!3m2!1sen!2sus!4v1695042358987!5m2!1sen!2sus' class='map' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div><label class='add'><address>B.S.P Market Shop no. 14<br>Maroda Sector<br>Bhilai, Chhattisgarh, INDIA 49006</address>";

;
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>SABA ANJUM</a>.</span><br><br>I am a Computer Engineering student at <span class='bold'>Krishna Engineering College Bhilai 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
         
            sendTextMessage("<span class='sk'>I am currently pursuing a B.Tech degree in Computer Science Engineering.<br><br>I can comfortably write code in the following languages:<br><span class='bold'>Python<br>JavaScript<br>HTML<br>CSS</span><br><br>I'm proficient with the following technologies and frameworks:<br><span class='bold'>React.js<br>React Native<br>Node.js<br>Express<br>MongoDB<br>Firebase</span><br><br>I'm experienced with the following tools:<br><span class='bold'>Git<br>GitHub<br>Postman<br>VS Code<br>REST APIs</span><br><br>I've built full-stack web and mobile applications.<br><br>I use <span class='bold'>Arch Linux</span> as my daily driver on my HP Pavilion 15-ec0xxx.<br>OS: Arch Linux<br>DE: Gnome (mostly), KDE (occasionally)<br>Favourite IDE: VS Code</span>");
            break;


        case "education":
             sendTextMessage(`
                <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 600px;">
                    <p>👨‍💻 <strong>B.Tech in Computer Science Engineering</strong> (3rd Year)</p>
                    <p>🎓 Krishna Engineering College, Bhilai</p>
                    <p>📅 <em>Expected Graduation: 2026</em></p>
            
                    <p>🧠 <strong>Skills & Expertise:</strong></p>
                    <ul>
                        <li>🌟 Pursuing advanced courses in <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong></li>
                        <li>🧑‍🔧 <strong>Expert</strong> in solving and writing <strong>ML algorithms</strong></li>
                        <li>🌐 Proficient <strong>Full-Stack Developer</strong> with hands-on experience in modern web technologies</li>
                    </ul>
                </div>
                `);
             break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/vinayak_patil_09/'><span class='bold'>Saba Anjum</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/sabaanjum03'> <div class='socialItem'><img class='socialItemI' src='github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}

