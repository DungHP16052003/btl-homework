import useDebounce from "@/hooks/useDebounce"
import useUser from "@/hooks/useUser";
import {  useEffect, useState } from "react"


function Home2() {
  const user = useUser()
    const [searchValue, setSearchValue] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState(null);
    const debounceValue = useDebounce(searchValue, 800 )
    console.log(user);
    
    useEffect(() => {
     if(debounceValue){
        console.log(`call API ${debounceValue}`);
        
     }
    }, [debounceValue])
    useEffect(() => {
      return () => URL.revokeObjectURL(preview)
    }, [preview])
  return (
    <div>
      <div>{user && <p>xin chào, {user.firstName}</p> }</div>
      <input type="text" value={searchValue} onChange={(e) => {
         setSearchValue(e.target.value)
      }} />
      <h1>Change img</h1>
      <img src={preview} alt="" />
      <input type="file" accept="*/image" onChange={(e) => {
        const file = e.target.files[0];
        setAvatar(file);
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
      }} />
    </div>
  )
}

export default Home2
