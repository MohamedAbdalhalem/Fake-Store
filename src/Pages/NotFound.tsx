import notFoundImg from '../assets/Capture décran 2024-04-09 à 11.33.56.png'
export default function NotFound() {
  return (
    <div className='h-[80vh]'>
      <img src={notFoundImg} alt="not-found" className='w-full h-full dark:d-none' />
    </div>
  )
}
