
let page;
const pages = [
    {
        page:"Home",
        navigate: homePage
    },
    {
    page: "About",
        navigate: about

    },
    {
        page: "Interact",
        navigate: interact
    }

]


function navButton(pg, pr, nv){
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);
}

function navigation(){
    let nav= document.createElement("nav");
let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="100px";
    nav.style.backgroundColor="blue";
    for(obj of pages){
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homePage(){
    let home = document.createElement('h1')
    home.innerHTML = `Home Page`
    document.body.querySelector(".wrapper").appendChild(home);


}

function about(){
    let about = document.createElement('h1')
    about.innerHTML = `About`
    document.body.querySelector(".wrapper").appendChild(about);
}



    function interact() {
        let interact = document.createElement("h1");
        interact.innerHTML = "Interact"
        let group = document.createElement("div")

        let counter = 0;
        let counterEle = document.createElement('h1');
        counterEle.innerHTML = `${counter}`;
        group.append(counterEle);
        document.body.appendChild(group);

        let button = document.createElement("button");
        button.innerHTML = "Increase Counter";
        document.body.appendChild(button);

        button.onclick = function() {
            counter += 1;
            counterEle.innerHTML = `${counter}`;
        }
        document.body.querySelector(".wrapper").appendChild(interact);

    };


navigation();
homePage();

