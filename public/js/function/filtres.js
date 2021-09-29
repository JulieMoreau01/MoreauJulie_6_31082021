/**
 * FILTRES TAG
 */
export function filtre () {
  // VARIABLES
  const tagIndex = document.querySelectorAll('.tag a')
  const main = document.getElementById('index')
  const sectionIndex = main.children
  const addValue = 1

  // DISPLAY PHOTOGRAPHER BY URL
  function displayPhotographerByURL () {
    const urlPageIndex = window.location.search
    const tagUrlPageIndex = urlPageIndex.replace('?', '')
    console.log(tagUrlPageIndex)
    for (let i = 1; i < sectionIndex.length; i += addValue) {
      if ((sectionIndex[i].classList.contains(tagUrlPageIndex) === true) ||
       (tagUrlPageIndex === '')) {
        console.log('1')
        sectionIndex[i].style.display = 'flex'
      } else {
        console.log('2')
        sectionIndex[i].style.display = 'none'
      }
    }
  }
  displayPhotographerByURL()

  // DISPLAY PHOTOGRAPHER BY ACTION
  for (let item = 0; item < tagIndex.length; item += addValue) {
    tagIndex[item].addEventListener('click', function (event) {
      event.preventDefault()
      history.pushState(null, null, tagIndex[item].href)
      displayPhotographerByURL()
    })
    tagIndex[item].addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault()
        history.pushState(null, null, tagIndex[item].href)
        displayPhotographerByURL()
      }
    })
  }
}
