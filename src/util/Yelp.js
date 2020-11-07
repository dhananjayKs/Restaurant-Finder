let apiKey='5Gf5varfnALO2wiltutx-otO9-E2xoQgiZxwg-HtACFazIPCORJ9hsvzR-t76OTeJEr6uoaO6C8OK1BVS-j9JlwQwzs_uPUnjsvy7YbDjLR5SgeVCtVgC8sKNK-OX3Yx'


let Yelp={
    async search(sortBy,term,location){
        
        try{
            let response=await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
                headers:{
                    'Authorization': `Bearer ${apiKey}`
                }
            })
            if(response.ok){
                let result= await response.json()
                console.log(result)
                return result.businesses.map(business=>{
                    return {
                        id:business.id,
                        imageSrc:business.image_url,
                        name:business.name,
                        address:business.location.address1,
                        city:business.location.city,
                        state:business.location.state,
                        zipCode:business.location.zip_code,
                        category:business.categories[0].title,
                        rating:business.rating,
                        reviewCount:business.review_count
                    }
                })

                
                
            }
            throw new Error("Error detected")
        }catch(e){
            console.log(e)
        }
    }
}
export default Yelp

