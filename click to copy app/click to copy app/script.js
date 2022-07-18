const  btn = document.querySelector(".btn")
const boxa = document.querySelector(".boxa");

const copyText = (e) => {
    e.preventDefault();

    boxa.select();
    boxa.setSelectionRange(0, 999999999);
    document.execCommand("copy");


    btn.textContent = "Copied!!"
    seTimeout(() =>{
        btn.textContent = "copied!!";
    },3000);
};
btn.addEventListener("click", copyText);