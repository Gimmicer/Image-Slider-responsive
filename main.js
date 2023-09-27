const slider = () => {
  const slideRef = document.createElement("div");
  const loadingProgress = 0;

  const handleClickNext = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://c4.wallpaperflare.com/wallpaper/980/348/874/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg",
      desc: "Something beautiful cannot be created without creativity.",
      name: "EXPLORE THE WORLD",
    },
    {
      id: 2,
      imgUrl:
        "https://c4.wallpaperflare.com/wallpaper/460/712/996/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg",
      desc: "Something beautiful cannot be created without creativity.",
      name: "EXPLORE THE WORLD",
    },
    {
      id: 3,
      imgUrl:
        "https://c4.wallpaperflare.com/wallpaper/409/466/456/sunset-4k-1080p-high-quality-wallpaper-preview.jpg",
      desc: "Something beautiful cannot be created without creativity.",
      name: "EXPLORE THE WORLD",
    },
    {
      id: 4,
      imgUrl:
        "https://c4.wallpaperflare.com/wallpaper/442/708/886/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg",
      desc: "Something beautiful cannot be created without creativity.",
      name: "EXPLORE THE WORLD",
    },
    {
      id: 5,
      imgUrl:
        "https://c4.wallpaperflare.com/wallpaper/675/710/404/desert-hd-1080p-wallpaper-preview.jpg",
      desc: "Something beautiful cannot be created without creativity.",
      name: "EXPLORE THE WORLD",
    },
    {
      id: 6,
      imgUrl:
        "https://c4.wallpaperflare.com/wallpaper/338/385/83/mountain-hd-1080p-widescreen-3840x2160-wallpaper-preview.jpg",
      desc: "Something beautiful cannot be created without creativity.",
      name: "EXPLORE THE WORLD",
    },
  ];

  // create the container div
  const container = document.createElement("div");
  container.classList.add("container");

  // create the Loadbar div
  const loadbar = document.createElement("div");
  loadbar.classList.add("loadbar");
  loadbar.style.width = `${loadingProgress}%`;

  //Append loadbar to container
  container.appendChild(loadbar);

  //Append slide div to container
  container.appendChild(slideRef);

  //Create and append items to slide div
  data.forEach((item) => {
    const slideItem = document.createElement("div");
    slideItem.classList.add("item");
    slideItem.style.backgroundImage = `url(${item.imgUrl})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = item.name;

    const des = document.createElement("div");
    des.classList.add("des");
    des.textContent = item.desc;

    const button = document.createElement("button");
    button.textContent = "See more";

    content.appendChild(name);
    content.appendChild(des);
    content.appendChild(button);
    slideItem.appendChild(content);
    slideRef.appendChild(slideItem);

    //Create button for slider
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    //Create prev button
    const prevButton = document.createElement("button");
    prevButton.id = "prev";
    prevButton.addEventListener("click", handleClickPrev);

    const previcon = document.createElement("i");
    previcon.className = "fa fa-angle-left";
    prevButton.appendChild(previcon);

    //Create the next button
    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.addEventListener("click", handleClickNext);

    const nexticon = document.createElement("i");
    nexticon.className = "fa fa-angle-right";
    nextButton.appendChild(nexticon);

    //Append the buttons to te container
    buttons.appendChild(prevButton);
    buttons.appendChild(nextButton);
    container.appendChild(buttons);
  });

  document.getElementById("root").appendChild(container);
};

slider();
