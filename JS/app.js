const sections = document.querySelectorAll('section');

const createNavBar = () => {
    let child =document.createDocumentFragment();
    for(section of sections){
        let item= document.createElement('li');
        item.id = `l${section.id}`
        item.innerHTML =`<a href="#${section.id}"> ${section.id}</a>`;
        child.appendChild(item);
    }
    document.querySelector('ul').appendChild(child);    
}

createSections = ()=> {  

    for(section of sections){
        let child =document.createElement('div');
        child.className='container';
        child.innerHTML=`<h2> ${section.id}</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum
            metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam
            elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet
            porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec
            bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar
            quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus
            mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
            nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis
            libero ultricies molestie semper in tellus. Sed congue et odio sed euismod
        </p>
        <br>
        <p>
            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida,
            ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu,
            vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
            porttitor tortor, eget elementum tortor mollis non.
        </p>
        <br>
        <p>
            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida,
            ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu,
            vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
            porttitor tortor, eget elementum tortor mollis non.
        </p>`;                
        document.querySelector(`#${section.id}`).appendChild(child);
    }
   
}

onscroll = () => {
    let scrollPostion = document.documentElement.scrollTop;
    const found = false;
    sections.forEach(section =>{
        if
        (
            scrollPostion > section.offsetTop - 0.3 * section.offsetHeight  && 
            scrollPostion < section.offsetTop + section.offsetHeight  * 0.7        
        ){
            const currentSectionId = section.id;
            removeActiveClass();
            addActiveClass(currentSectionId);
            found= true;
            console.log(section.id);
        }
        // if there is no active section and the user is on the header of the page
        if (!found){
            removeActiveClass();
        }
    })
}

const removeActiveClass = () => {
    document.querySelectorAll('section').forEach(element =>{
        element.classList.remove('active-section');
    })
    document.querySelectorAll('li').forEach(element =>{
        element.classList.remove('active-li');
    })
}

const addActiveClass = (id) => {
    document.querySelector(`#${id}`).classList.add('active-section');
    document.querySelector(`#l${id}`).classList.add('active-li');
}

createNavBar();
createSections();
