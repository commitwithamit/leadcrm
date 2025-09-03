import { getNameFromUrl } from "../utility/helperFunctions"

export function Rating({count, src}) {
    const altTag = getNameFromUrl(src);
    const arr = Array.from({length:count}, (_,index)=>(
        <img src={src} key={index} alt={`${altTag} ${index+1}`}/>
    ))
  return (
    <>
        {
            arr
        }
    </>
  )
}
