export default function windowScrollTo(to: number = 0) {
    window.scrollTo({
      top: to,
      behavior: 'smooth'
    });
  }