import grainImage from "@/assets/images/grain.jpg"

export const Card = ({}: {}) => {
  return (
    <div className="relative z-0 overflow-hidden rounded-3xl bg-gray-800 p-8 px-8 pt-8 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-[''] md:px-10 md:pt-12 lg:px-20 lg:pt-16">
      <div
        className='absolute inset-0 -z-10 opacity-5'
        style={{
          backgroundImage: `url(${grainImage.src})`
        }}
      ></div>
    </div>
  )
}
