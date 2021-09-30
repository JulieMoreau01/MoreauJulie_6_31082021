import { getData } from './../data.js'
import { photographerPageGallery } from './../photographer.js'

const listItemsSelect = document.querySelectorAll('.list-item')
const urlPage = window.location.search
const idUrlPage = urlPage.replace('?id=', '')

let state = 'popState'

export function sortGallery (media) {
  const dataMedia = media
  const arrayTri = []

  dataMedia.forEach(data => {
    const stringId = (data.photographerId).toString()
    if (idUrlPage === stringId) {
      arrayTri.push(data)
    }
  })
  if (state === 'popState') {
    arrayTri.sort(function (a, b) {
      return b.likes - a.likes
    })
    return arrayTri
  } else if (state === 'dateState') {
    arrayTri.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })
  } else if (state === 'titleState') {
    arrayTri.sort(function compare (a, b) {
      if (a.title < b.title) {
        return null
      } else if (a.title > b.title) {
        return true
      }
      return false
    })
  }
  return arrayTri
}

function stateSort (media, event) {
  if (event.target.id === 'option-1') {
    state = 'popState'
  } else if (event.target.id === 'option-2') {
    state = 'dateState'
  } else if (event.target.id === 'option-3') {
    state = 'titleState'
  }
  sortGallery(media)
  photographerPageGallery(media)
  return state
}

function selectAction (media) {
  listItemsSelect.forEach(item => {
    item.addEventListener('click', event => {
      stateSort(media, event)
    })
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        stateSort(media, event)
      }
    })
  })
}

const initSort = async () => {
  const { media } = await getData()
  selectAction(media)
  sortGallery(media)
}

initSort()
