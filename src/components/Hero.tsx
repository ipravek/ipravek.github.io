import Dragger from "react-physics-dragger";
// import ResizeObserver from "resize-observer-polyfill";

export default function Hero() {
  const handleAnim = (e) => {
    console.log(e.clientX);
  };

  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1713528193386-b719ea263b92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681406994530-3de7406c21a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1706800175256-da797daab8f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1707808512103-23f911fab68a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1713780985224-bfd1a9e622ca?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <Dragger
      // ResizeObserverPolyfill={ResizeObserver}
      >
        <div className="flex gap-32 cursor-crosshair" onClick={handleAnim}>
          {cards &&
            cards.map((e) => {
              return <Card image={e.image} key={e.image} />;
            })}
        </div>
      </Dragger>
    </>
  );
}

const Card = ({ image }: { image: string }) => {
  return (
    <>
      <div className="flex w-72 h-96 rounded-md overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          width={0}
          height={0}
          draggable={false}
        />
      </div>
    </>
  );
};
