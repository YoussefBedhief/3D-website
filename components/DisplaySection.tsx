import { CursorArrowRippleIcon } from "@heroicons/react/24/solid"

const DisplaySection = () => {
  return (
    <section
      className=" flex justify-between w-[98.8vw] h-screen bg-[#09080D]"
      id="third"
    >
      <div
        className="flex flex-col justify-center pl-56 w-1/2"
        id="section--third--container"
      >
        <p className="font-bold uppercase text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#ff7043] to-orange-600 py-3">
          Custom your Bottle
        </p>
        <h1 className="font-extrabold text-5xl py-2">
          Unleash Flavorful Hydration with AirUp.
        </h1>
        <p className="text-gray-500 text-xs">
          Customize Your Hydration Experience: With AirUp, youre in control. Mix
          and match a variety of tantalizing flavor pods to create your perfect
          hydration companion. Unleash your creativity and savor the journey of
          crafting a personalized and refreshing taste adventure.
        </p>
        <div className="flex gap-x-3 py-4 justify-start">
          <button
            id="button--customize"
            className="border border-white rounded-3xl py-2 px-5 flex items-center gap-x-2 hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent z-20"
          >
            <CursorArrowRippleIcon className="h-5 w-5" />
            Open 3D
          </button>
        </div>
      </div>
      {/*3D watch model */}
      <div></div>
    </section>
  )
}

export default DisplaySection
