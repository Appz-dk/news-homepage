import web3Mobile from "../../assets/images/image-web-3-mobile.jpg";
import web3Desktop from "../../assets/images/image-web-3-desktop.jpg";

const NewsHighlighted = () => {
  return (
    <article className="highlighted__container">
      <picture className="highlighted__image-container">
        {/* Mobile */}
        <source media="(min-width:45em)" srcSet={web3Desktop} />
        <img src={web3Mobile} alt="Colorful building blocks put together in a pattern" />
        {/* Desktop */}
      </picture>
      <h1 className="highlighted__title">The Bright Future of Web 3.0?</h1>
      <p className="highlighted__text">
        We dive into the next evolution of the web that claims to put the power of the platforms
        back into the hands of the people. But is it really fulfilling its promise?
      </p>
      <button className="btn-primary">Read more</button>
    </article>
  );
};

export default NewsHighlighted;
