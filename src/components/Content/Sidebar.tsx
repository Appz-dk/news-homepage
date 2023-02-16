const news = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation",
  },
  {
    title: "is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <h2 className="sidebar__title">New</h2>
      {news.map((news) => (
        <article key={news.title} className="sidebar__article">
          <h4>{news.title}</h4>
          <p>{news.text}</p>
        </article>
      ))}
    </div>
  );
};

export default Sidebar;
