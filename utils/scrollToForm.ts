/**
 * @description move to the contact Form
 */

export const scrollToForm = () => {
  const contactForm = document.getElementById('contactForm')

  if (contactForm) {
    contactForm.scrollIntoView({ behavior: 'smooth' })
  }
}
