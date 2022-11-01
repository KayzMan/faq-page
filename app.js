let logo_images = document.querySelectorAll('.logo img')
let faq_bodies = document.querySelectorAll('.faq-body')

let expand_img_path = './expand.jpeg'
let collapse_img_path = './collapse.png'
let expanded = false

logo_images.forEach(img => {
    img.src = expand_img_path
    img.addEventListener('click', e => {
        let img_array = Array.from(logo_images)
        let faq_body_array = Array.from(faq_bodies)
        let src = img_array.indexOf(e.target)
        let faq = faq_body_array[src]
        faq.classList.toggle('hide')
        expanded = !expanded
        img.src = expanded? collapse_img_path: expand_img_path
    })
})

