console.log("Script runs");

let scroll_area = document.querySelector("#scroll_area");

let button_map = {
    "about": "#about_link", "education": "#education_link", "projects": "#projects_link", "skills": "#skills_link", "contacts": "#contacts_link"
}

let scroll_items = ["#about", "#education", "#projects", "#skills", "#contacts"];
let scroll_elements = scroll_items.map((selector) => document.querySelector(selector));

let options = {
    root: scroll_area,
    rootMargin: '0px',
    threshold: [0.4, 0.6] // ratio to trigger 
}


function scroll_callback(entries, observer) {
    entries.forEach((entry) => {
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

// Projects scroll progres

window.onscroll = function () { projects_scroll_callback() };

const PROJECTS_RELEVANT_AREA_ID = "projects-sticky-container";
const PROJECTS_BAR_ID = "timeline-progress";

const TIMELINE_HEIGHT_PX = 170;
const CIRCLE_R_PX = 9;

function projects_scroll_callback() {
    let projects_el = document.getElementById(PROJECTS_RELEVANT_AREA_ID);
    let dom_rect = projects_el.getBoundingClientRect();

    let scrolled = 0;
    if (dom_rect.y < 0 && dom_rect.y > -dom_rect.height) {
        scrolled = (-dom_rect.y / (dom_rect.height - TIMELINE_HEIGHT_PX)) * 100;
    }
    document.getElementById(PROJECTS_BAR_ID).style.width = scrolled + "%";

}
