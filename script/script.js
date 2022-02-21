let toTop = document.querySelector(".toTop");

toTop.onclick = () => {
    window.scrollTo(0, 0);
}
window.onscroll = () => {
    if (window.scrollY >= 700) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }

}

let menu = document.querySelector(".toggle-menu"); //menu icon

// input search field
let myElement = document.createElement("input");

// Search
let searchIcon = document.querySelector(".search");


searchIcon.onclick = () => {
    myElement.setAttribute("type", "search");
    myElement.classList.add("inputSearch");
    searchIcon.style.display = 'none';

    myElement.classList.add("searchInp");

    if (window.matchMedia(`(max-width:431px)`).matches) {
        // Set Width For Input Field 150px and move it down
        myElement.style.cssText = `width: 130px !important;
        `;
        // hidden Menu Icon
        menu.style.display = 'none';

    } else if (window.matchMedia(`(max-width:930px)`).matches) {
        menu.style.display = 'block'
        menu.nextElementSibling.style.cssText = `  position: absolute;
        top: 90%;
        right: 200px;
        min-width: 200px;
        background-color: var(--transparentColor);
        display: none;`;

        let lis = menu.nextElementSibling.children;

        for (const x of lis) {
            x.style.cssText = `display: block;
            padding: 10px 0 15px 15px;`;
            x.firstElementChild.style.cssText = `border: 0;`
        }

    }
    searchIcon.before(myElement);
}

// Menu 


menu.onclick = () => {
    menu.classList.toggle("active-menu");

    if (menu.classList.contains("active-menu")) {
        menu.nextElementSibling.style.display = 'block'
    } else {
        menu.nextElementSibling.style.display = 'none'
    }
}

menu.nextElementSibling.onclick = () => {
    if (window.matchMedia('(max-width:780px)').matches) {
        menu.nextElementSibling.style.display = 'none'
    }
}

// Input Search Field Click Enter

myElement.addEventListener("keypress", (ev) => {
    if (ev.charCode == 13) {
        window.location.reload();
    }
})

// BackGround
let BACKs = [`images/design-features.jpg`, `images/landing.jpg`, `images/shuffle-07.jpg`],
    spanBack = document.querySelectorAll("span > span");

let Landing = document.querySelector(".landing"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next");

let i = 1;
Landing.style.backgroundImage = `url("${BACKs[i]}")`;

spanBack.forEach((el) => {
    el.classList.remove("activeWall");
});
spanBack[i].classList.add("activeWall");

function ChangeBack(cur) {

    switch (cur) {
        case 'next':
            if (i < 2) {
                Landing.style.backgroundImage = `url("${BACKs[++i]}")`
                spanBack.forEach((el) => {
                    el.classList.remove("activeWall");
                });
                spanBack[i].classList.add("activeWall");
            } else {
                i = 0;
                Landing.style.backgroundImage = `url("${BACKs[i]}")`
                spanBack.forEach((el) => {
                    el.classList.remove("activeWall");
                });
                spanBack[i].classList.add("activeWall");
            }
            break;
        case 'prev':
            if (i > 0) {
                Landing.style.backgroundImage = `url("${BACKs[--i]}")`
                spanBack.forEach((el) => {
                    el.classList.remove("activeWall");
                });
                spanBack[i].classList.add("activeWall");
            } else {
                i = 2;
                Landing.style.backgroundImage = `url("${BACKs[i]}")`
                spanBack.forEach((el) => {
                    el.classList.remove("activeWall");
                });
                spanBack[i].classList.add("activeWall");
            }
            break;

        default:
            i = +cur;
            Landing.style.backgroundImage = `url("${BACKs[i]}")`
            spanBack.forEach((el) => {
                el.classList.remove("activeWall");
            });
            spanBack[i].classList.add("activeWall");
            break;
    }


}

/* Portfolio */

let Botton_Type = document.querySelectorAll("#portfolio > .types > li");
let Cards = document.querySelectorAll("#portfolio > .content > .Card");
let cur_type = 0;

function CreateCards() {
    for (let i = 0; i < 8; i++) {
        let Card = document.createElement("div");
        Card.classList.add("Card");

        switch (i % 3) {
            case 0:
                Card.classList.add("Photo");
                break;
            case 1:
                Card.classList.add("Web");
                break;
            case 2:
                Card.classList.add("App");
                break;
            default:
                break;

        };

        let img = document.createElement("img");
        img.setAttribute("src", `images/shuffle-0${1+i}.jpg`);
        Card.appendChild(img);


        let text = document.createElement("div");
        text.classList.add("text");

        let content_h2 = document.createElement("h2");
        content_h2.innerHTML = `Awesome Image`;

        let content_p = document.createElement("p");
        content_p.innerHTML = `Photography`;

        text.appendChild(content_h2);
        text.appendChild(content_p);

        Card.appendChild(text);

        document.querySelector("#portfolio > .content").appendChild(Card);

    }
    Cards = [...Cards, ...document.querySelectorAll("#portfolio > .content > .Card")];

    if (Cards.length > 20) {
        Cards[20].classList.replace(Cards[20].classList.item(1), "Print");
    }

    Botton_(cur_type);
}
CreateCards();

function Botton_(cur) {
    Botton_Type.forEach((el) => {
        el.classList.remove("activeType");
    });
    Botton_Type[cur].classList.add("activeType");

    switch (cur) {
        case 0:
            Cards.forEach((el) => {
                document.querySelector("#portfolio > .content").appendChild(el)
            })
            break;

        case 1:
            Cards.forEach((el) => {
                el.classList.contains("App") ?
                    document.querySelector("#portfolio > .content").appendChild(el) :
                    el.remove();

            });
            break;

        case 2:
            Cards.forEach((el) => {
                el.classList.contains("Photo") ?
                    document.querySelector("#portfolio > .content").appendChild(el) :
                    el.remove();

            });
            break;

        case 3:
            Cards.forEach((el) => {
                el.classList.contains("Web") ?
                    document.querySelector("#portfolio > .content").appendChild(el) :
                    el.remove();

            });
            break;

        case 4:
            Cards.forEach((el) => {
                el.classList.contains("Print") ?
                    document.querySelector("#portfolio > .content").appendChild(el) :
                    el.remove();

            });
            break;
    }
    cur_type = cur;
}

// Skills Field 
let bar = document.querySelectorAll(".prog-hold .bar");

bar.forEach((el) => {
    let percent_value = el.getAttribute("data-prog");

    el.style.backgroundImage =
        `linear-gradient(to right, #19c8fa ${percent_value}, #a2a2a26c ${percent_value})`
})
