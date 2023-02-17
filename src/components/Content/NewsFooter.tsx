import imageGaming from "../../assets/images/image-gaming-growth.jpg";
import imageLaptop from "../../assets/images/image-top-laptops.jpg";
import imageRetro from "../../assets/images/image-retro-pcs.jpg";

const newsData = [
  {
    image: imageRetro,
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    alt: "Retro computer, keyboard, gameboy and joystick",
  },
  {
    image: imageLaptop,
    title: "Top 10 Laptops of 2022",
    text: "Our best picks various needs and budgets.",
    alt: "close up of laptop keyboard keys with rgb (red color)",
  },
  {
    image: imageGaming,
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
    alt: "A hand that has just thrown a ps4 controller a bit up the air",
  },
];

const NewsFooter = () => {
  return (
    <div className="newsfooter__container">
      {newsData.map((news, idx) => (
        <article key={news.title} className="newsfooter__article">
          <img src={news.image} alt={news.alt} />
          <div className="newsfooter__article-container">
            <span>{`${idx < 10 && "0"}${idx + 1}`}</span>
            <h4>{news.title}</h4>
            <p>{news.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsFooter;
