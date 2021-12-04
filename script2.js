document.body.style.cssText = `
    padding:0;
    margin:0;
    font-family:arial;
    display:flex;
    flex-direction:column;
    height:100vh;
    `
function header()
{

    // create header
    let header = document.createElement('header')
    header.style.cssText = `
        background-color:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:5px 20px;
        box-shadow:0px 2px 5px 6px #aaa;
        font-size:20px;
        margin-bottom:5px

    `
    //create Logo
    let log = document.createElement('div');
    let logText = document.createTextNode('Elzero')
    log.append(logText);
    log.style.cssText = `color:green;font-weight:bold;font-size:25px`
    
    // create navigation
    let ul = document.createElement('ul')
    ul.style.cssText = `
        list-style:none;
        padding:0;
        display:flex;
        gap:20px

    `
    let homeLi = document.createElement('li')
    homeLi.appendChild(document.createTextNode('Home'))
    let aboutLi = document.createElement('li')
    aboutLi.appendChild(document.createTextNode('About'))
    let Serviceli = document.createElement('li')
    Serviceli.appendChild(document.createTextNode('Services'))
    let contatcLi = document.createElement('li')
    contatcLi.appendChild(document.createTextNode('Contact'))
    // append li to ul
    ul.append(homeLi, aboutLi, Serviceli, contatcLi)
    // append logo and navigation to header
    header.append(log, ul)
   return header
}
// header()

function main()
{
    let main = document.createElement('main')
    main.style.cssText = `

        flex-grow:1;
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
        grid-template-rows:repeat(3,1fr);
        gap:10px;
        background-color:#eee;
        padding:10px
        
    `
    for (let ind = 1; ind <= 15; ind++){
        let elemen = document.createElement('div')
        elemen.style.cssText = `text-align:center;background-color:#fff;`
        let num = document.createElement('h2')
        num.appendChild(document.createTextNode(ind))
        let p = document.createElement('p')
        p.appendChild(document.createTextNode('Product'))
        elemen.append(num, p)
        main.append(elemen)

    }

    // document.body.append(main)
    return main
}
// main()


function footer()
{
    let footer = document.createElement('footer')
    footer.style.cssText = `
        background-color:green;
        color:#fff;
        padding:10;
        text-align:center;
        font-size:20px

    `
    let copy = document.createElement('p')
    copy.appendChild(document.createTextNode('Copyright 2021'))
    footer.append(copy)
    return footer
}
document.body.append(header(),main(),footer())