export const PRICING_USD = {text: {model:'gpt-6-luna',inputPerMillion:0.10,outputPerMillion:0.50},image: {model:'gpt-image-1-mini',deprecated:true,low:0.005,medium:0.011,high:0.036}};
export const LIMITS = {text:30,image:5};
export function estimateTextCost(inputTokens,outputTokens){return (inputTokens*PRICING_USD.text.inputPerMillion+outputTokens*PRICING_USD.text.outputPerMillion)/1000000;}
export function estimateImageCost(quality='medium'){return PRICING_USD.image[quality];}
