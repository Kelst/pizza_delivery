import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client=sanityClient({
    projectId:"0qwh6hym",
    dataset:"production",
    apiVersion:"2022-07-16",
    useCdn:true,
    token:"skZPFiyShmcYtCVJGN2IQm5ZW836KlOTvMqXckViUERtlosWpa2415NNoQjgQQ92CosmTOo1eLPUDELRk5HrymXee3FhPFPUUK93aZq3h1gxRJX4shkNTpuqlSId81u71rVGldGmXTrGgCKRXAQjvlPEg42ajxaC4mFElEk15rF8Eu74fjyQ",

})
const builde=imageUrlBuilder(client)
export const urlFor=(source)=>builde.image(source)