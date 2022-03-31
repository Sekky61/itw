console.log("Script runs");

let scroll_area = document.querySelector("#scroll_area");

let button_map = {
    "about": "#about_link", "education": "#education_link", "projects": "#projects_link", "contacts": "#contacts_link"
}

let scroll_items = ["#about", "#education", "#projects", "#contacts"];
let scroll_elements = scroll_items.map((selector) => document.querySelector(selector));

console.log(scroll_elements);

let options = {
    root: scroll_area,
    rootMargin: '0px',
    threshold: [0.4, 0.6] // ratio to trigger 
}


function scroll_callback(entries, observer) {
    entries.forEach((entry) => {
        console.dir(entry);
        let menu_element_id = button_map[entry.target.id];
        let menu_el = document.querySelector(menu_element_id);
        if (entry.isIntersecting) {
            menu_el.classList.add('active');
        } else {
            menu_el.classList.remove('active');
        }
    });
}

let observer = new IntersectionObserver(scroll_callback, options);
scroll_elements.forEach((el) => observer.observe(el));
