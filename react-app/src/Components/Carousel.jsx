import { useEffect, useState } from "react";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const img = [
    {
      img: "data:image/jpeg;base64,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",
      caption:
        "We go together like movies and popcorn. When the sun sets, the movie begins.",
    },
    {
      img: "src/assets/3.jpg",
      caption: "It may sound corny, but movie nights with you are my favorite.",
    },
    {
      img: "src/assets/1.jpg",
      caption: "I don't know if I can ever go back to watching a movie inside.",
    },
  ];

  useEffect(() => {
    // create array of promises that will be resolved when each image has finished loading
    Promise.all(
      img.map((image) => {
        return new Promise((resolve, reject) => {
          const imgs = new Image();
          //set imgs url
          imgs.src = image.img;
          //fire when browser load
          imgs.onload = resolve;
          imgs.onerror = reject;
        });
      })
    ).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    //make initial value to avoid some bug if condition not true
    let intervalId = null;
    if (index < img.length - 1) {
      intervalId = setTimeout(() => {
        //update state based on previous value
        setIndex((prevIndex) => prevIndex + 1);
      }, 2000);
    }
    return () => {
      //ensure intervalId not null, because this call back execute after every render
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [index]);
  useEffect(() => {
    //separate because i doesn't want this code to execute every render
    if (index === img.length - 1) {
      setIndex(0);
    }
  }, [index]);

  return (
    <>
      {imagesLoaded && (
        <div className=" carousel carousel-center rounded-box ">
          <div id="item1" className="carousel-item ">
            <img
              src={img[index].img}
              key={index}
              className="absolute top-0 left-0  object-fit opacity-90 "
              style={{ transition: "opacity 0.5s ease-in-out" }}
            ></img>
            <div className="absolute inset-0 flex items-center justify-center ">
              <p className="text-white text-xl font-bold">
                {img[index].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
