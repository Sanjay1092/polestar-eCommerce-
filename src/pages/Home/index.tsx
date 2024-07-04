function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="homeMainImg flex justify-end items-center">
        <div className="flex flex-col items-start mr-[22%]">
          <p className="text-white text-4xl font-bold text-center">
            STYLIST PICKS BEAT
            <br /> THE HEAT
          </p>
          <button className="text-white text-lg font-bold border-4 border-white m-auto mt-10 px-4 py-2 ">
            SHOP NOW
          </button>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col items-center mt-[42%]">
        <p className="text-4xl font-bold ">Discover New Arrivals</p>
        <p className="text-sm mt-3">Recently added shirts!</p>
      </div>
    </div>
  );
}

export default Home;
