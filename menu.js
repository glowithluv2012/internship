let featured = document.getElementById('featured');


// CHANGE WEEKLY SPECIALS HERE

let featuredItemsData = [
    {
    id:"Milk Donut",
    desc:"Our milk donut is a delicious pastry that combines the soft, fluffy texture of a traditional donut with the creamy richness of milk. It is made by incorporating milk into the dough, resulting in a moist and slightly sweet treat. The milk adds a subtle flavor and enhances the overall tenderness of the donut. Milk donuts are often glazed or dusted with powdered sugar to enhance their sweetness and can be enjoyed as a breakfast treat or as a delightful snack throughout the day.",
    price: "$4",
    img: "internimages/milkdnt.PNG"
},
{
    id:"featured Soft-drinks",
    desc:"Our soft drinks come in a wide variety of flavors, ranging from cola and lemon-lime to fruit-flavored options like orange, grape, and cherry. Additionally, there are numerous diet and zero-calorie versions available for those seeking a low-sugar or sugar-free option.!",
    price:"12oz-$2.45 16oz-$2.65",
    img: "internimages/soda2.png"
},
]


let generateFeatured = () => {
    return(featured.innerHTML = featuredItemsData
        .map((x)=>{
            let {id, name, price, desc, img} = x;
            return`
    <div class="item col-lg-6 wow flipInX">
    <div class="d-flex align-items-center">
        <img style="width: 150px;" src="${img}" alt="" class="img-fluid flex-shrink-0 rounded">
        <div class="w-100 d-flex flex-column text-start ps-4">
            <h5 class="d-flex justify-content-between border-bottom pb-2">
                <span>${id}</span>
                <span class="text">${price}</span>
            </h5>
            <small class="fst-italic">${desc}</small>
        </div>
    </div>
</div> `
}).join(""));
};

generateFeatured();








