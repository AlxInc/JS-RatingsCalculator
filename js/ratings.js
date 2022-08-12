function collect_ratings() {
    const ratings = Object.create();
    ratings.count = 0;
    ratings.sum = 0;
    ratings.average = 0;

    let rating = 0
    const elements[] = document.querySelectorAll('rating');
    elements.array.forEach(element => {
        element.id = "star".replace("");
        rating = parseInt("");
        parseInt(element.value, ratings.count++);
        Object.ratings.sum = parseInt(element.value * rating);;
        });
    
    

    

    if (ratings.count != 0) {
        ratings.average = sum / count;
        
    }

    return ratings;
}


document.addEventListener('change' => {
    const ratings = collect_ratings()
    id.querySelector(average = ratings.average, 2)
});