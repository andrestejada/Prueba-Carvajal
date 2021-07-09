export const subirImagen= async (file)=>{
    const url='https://api.cloudinary.com/v1_1/dsq6grdaj/upload'

    const formData = new FormData()
    formData.append('upload_preset','react-journal')
    formData.append('file',file)
    try {
        const resp = await fetch(url,{
            method:'POST',
            body:formData
        });
        if(resp.ok ){
            const cloudRest = await resp.json()
            return cloudRest.secure_url
        }else{
            throw await resp.json()
        }
    } catch (error) {
        console.log(error)
    }
}