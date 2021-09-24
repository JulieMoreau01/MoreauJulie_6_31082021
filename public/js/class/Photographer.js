class Photographer {
  constructor (data) {
    this.name = data.name
    this.id = data.id
    this.city = data.city
    this.country = data.country
    this.tags = data.tags
    this.tagline = data.tagline
    this.price = data.price
    this.portrait = data.portrait
    this.liTags = data.tags.map(tag => `<li class="tag ${tag}" aria-label="cliquez pour trier" tabindex="5">#${tag}</li>`).join(' ')
    this.classTag = data.tags.join(' ')
  }

  creatPrice () {
    return `
    <p tabindex="8">
      <span id="total_like"></span><i class="fas fa-heart"></i> ${this.price}€ / jour
    </p>
    `
  }

  creatHtmlIndex () {
    return `
    <section class="index ${this.classTag}">
      <figure>
        <a href="photographer.html?id=${this.id}" alt="${this.name}" tabindex="5">
          <img src="public/images/photographers_id_photos/${this.portrait}" alt="${this.name}" />
          <figcaption class="index_name" aria-label="${this.name} cliquer pour voir sa fiche">${this.name}</figcaption>
        </a>
      </figure>
      <p>
        <a href="photographer.html?id=${this.id}" alt="${this.name}" tabindex="5">
          <span class="index_country" tabindex="5">${this.city}, ${this.country}</span>
          <span class="index_tagline" tabindex="5">${this.tagline}</span>
          <span class="index_price" tabindex="5">${this.price} €/jour</span></a>
      </p>
      <ul>${this.liTags}</ul>
    </section>
    `
  }

  creatHtmlPhotographerFiche () {
    return `
    <p class="name" id="thename" tabindex="3">${this.name}</p>
    <p class="contact"><button class="btn" tabindex="6" id="contact">Contactez-moi</button></p>
    <p class="country" tabindex="4">${this.city}, ${this.country}</p>
    <p class="tagline" tabindex="4">${this.tagline}</p>
    <ul>${this.liTags}</ul>
    <figure>
      <a href="photographer.html?id=${this.id}" alt="${this.name}">
        <img src="public/images/photographers_id_photos/${this.portrait}" alt="${this.name}" tabindex="7" />
      </a>
    </figure>
    `
  }
}
