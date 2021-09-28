/**
 * VARIABLE
 */
const urlPage = window.location.search
const idUrlPage = urlPage.replace('?id=', '')
const containerFiche = document.getElementById('fiche')
const containerPrice = document.getElementById('price')
const containerSelect = document.getElementById('select')
const containerGallery = document.getElementById('gallery')
const containerLightbox = document.getElementById('lightbox')
containerLightbox.style.display = 'none'
const containerModal = document.getElementById('modal')
containerModal.style.display = 'none'

/**
 * TEMPLATE FICHE PHOTOGRAPHER & PRICE & SELECT
 */
function photographerPageTop (photographers) {
  const dataPhotographers = photographers

  // GET TABLE WITH GOOD PHOTOGRAPHER ID
  const getPhotographerById = dataPhotographers.findIndex(function (item, i) {
    const stringId = (item.id).toString()
    return stringId === idUrlPage
  })

  // DISPLAY FICHE PHOTOGRAPHER & PRICE
  const data = dataPhotographers[getPhotographerById]
  const photograpeTemplate = new Photographer(data)
  containerFiche.innerHTML += photograpeTemplate.creatHtmlPhotographerFiche()
  containerPrice.innerHTML += photograpeTemplate.creatPrice()
  select()
  modal()
}


/**
 * TEMPLATE GALLERY & LIGHTBOX
 */
function photographerPageGallery (media) {

  // RESULT OF SORT GALLERY
  const arrayTri = sortGallery(media)
  
  // DISPLAY GALLERY
  containerGallery.innerHTML = ''
  arrayTri.forEach(item => {
    const mediaTemplate = new MediaFactory(item)
    containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
  })
  video()
  likeCounterFunction()

  // DISPLAY LIGHTBOX
  containerLightbox.innerHTML = ''
  arrayTri.forEach(item => {
    const lightboxTemplate = new LightBox(item)
    containerLightbox.innerHTML += lightboxTemplate.creatHtmlImgLightbox()
  })
  lightbox()
}


const init = async () => {
  const { photographers, media } = await getData()
  photographerPageTop(photographers)
  photographerPageGallery(media)
}

init()
