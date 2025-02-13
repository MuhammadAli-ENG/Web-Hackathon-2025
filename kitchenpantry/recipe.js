const recipesData = [
    {
        name: "Biryani",
        ingredients: ["rice", "chicken", "onion", "tomato", "yogurt", "ginger-garlic paste", "spices"],
        cuisine: "indian",
        image: "assets/Recipe/Biryani.jpg"
    },
    {
        name: "Burger",
        ingredients: ["burger buns", "beef patty", "lettuce", "cheese", "tomato", "onion", "mayonnaise", "ketchup"],
        cuisine: "american",
        image: "assets/Recipe/Burger.jpg"
    },
    {
        name: "Chocolate Cake",
        ingredients: ["flour", "sugar", "cocoa powder", "baking soda", "milk", "vegetable oil", "vanilla extract", "egg"],
        cuisine: "dessert",
        image: "assets/Recipe/Cake.jpg"
    },
    {
        name: "Fried Fish",
        ingredients: ["fish fillets", "lemon juice", "salt", "red chili powder", "turmeric", "cumin powder", "gram flour"],
        cuisine: "seafood",
        image: "assets/Recipe/Fish.jpg"
    },
    {
        name: "Halwa",
        ingredients: ["semolina", "sugar", "ghee", "water", "cardamom powder", "nuts"],
        cuisine: "dessert",
        image: "assets/Recipe/Halwa.jpg"
    },
    {
        name: "Chicken Karahi",
        ingredients: ["chicken", "tomatoes", "onion", "ginger-garlic paste", "spices", "yogurt"],
        cuisine: "indian",
        image: "assets/Recipe/Karhai.jpg"
    },
    {
        name: "Pizza",
        ingredients: ["pizza base", "pizza sauce", "mozzarella cheese", "bell peppers", "olives", "mushrooms"],
        cuisine: "italian",
        image: "assets/Recipe/Pizza.jpg"
    },
    {
        name: "Qorma",
        ingredients: ["mutton", "onion", "ginger-garlic paste", "yogurt", "spices"],
        cuisine: "indian",
        image: "assets/Recipe/Qorma.jpg"
    },
    {
        name: "Shawarma",
        ingredients: ["pita bread", "chicken", "yogurt", "garlic sauce", "cucumber", "tomato"],
        cuisine: "middle-eastern",
        image: "assets/Recipe/Shawarma.jpg"
    },
    {
        name: "Pasta Carbonara",
        ingredients: ["pasta", "egg", "cheese", "bacon", "garlic"],
        cuisine: "italian",
        image: "assets/Recipe/Carbonara.jpg"
    },
    {
        name: "Tacos",
        ingredients: ["tortilla", "beef", "lettuce", "cheese", "tomato", "onion"],
        cuisine: "mexican",
        image: "assets/Recipe/Tacos.jpg"
    },
    {
        name: "Sushi",
        ingredients: ["rice", "fish", "seaweed", "cucumber", "avocado"],
        cuisine: "japanese",
        image: "assets/Recipe/Sushi.jpg"
    },
    {
        name: "Pancakes",
        ingredients: ["flour", "milk", "egg", "sugar", "butter"],
        cuisine: "american",
        image: "assets/Recipe/Pancakes.jpg"
    },
    {
        name: "Samosa",
        ingredients: ["flour", "potato", "peas", "spices"],
        cuisine: "indian",
        image: "assets/Recipe/Samosa.jpg"
    },
    {
        name: "Fish and Chips",
        ingredients: ["fish", "potato", "flour", "oil"],
        cuisine: "british",
        image: "assets/Recipe/FishnChips.jpg"
    }
];

let currentPage = 1;
const recipesPerPage = 4;

document.getElementById("suggest-btn").addEventListener("click", () => {
    currentPage = 1;
    filterRecipes();
});

document.getElementById("search-btn").addEventListener("click", () => {
    currentPage = 1;
    filterRecipes();
});

document.getElementById("clear-btn").addEventListener("click", () => {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    document.getElementById("search").value = "";
    document.getElementById("cuisine-filter").value = "all";
    filterRecipes();
});

document.getElementById("all-recipes-btn").addEventListener("click", () => {
    currentPage = 1;
    displayRecipes(recipesData); // Display all recipes
    displayPagination(recipesData.length); // Update pagination
});

function filterRecipes() {
    const selectedIngredients = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(input => input.value);
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const cuisineFilter = document.getElementById("cuisine-filter").value;

    const matchedRecipes = recipesData.filter(recipe =>
        recipe.ingredients.some(ing => selectedIngredients.includes(ing)) &&
        recipe.name.toLowerCase().includes(searchQuery) &&
        (cuisineFilter === "all" || recipe.cuisine === cuisineFilter)
    );

    displayRecipes(matchedRecipes);
    displayPagination(matchedRecipes.length);
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById("recipes");
    recipesContainer.innerHTML = "";

    if (recipes.length === 0) {
        recipesContainer.innerHTML = "<p>No matching recipes found.</p>";
        return;
    }

    const start = (currentPage - 1) * recipesPerPage;
    const end = start + recipesPerPage;
    const paginatedRecipes = recipes.slice(start, end);

    paginatedRecipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.innerHTML = `
            <h3>${recipe.name}</h3>
            <img src="${recipe.image}" alt="${recipe.name}">
            <button onclick="showRecipeDetail('${recipe.name}')">See Recipe</button>
        `;
        recipesContainer.appendChild(card);
    });
}

function showRecipeDetail(name) {
    const recipe = recipesData.find(r => r.name === name);
    const modal = document.getElementById("recipe-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalIngredients = document.getElementById("modal-ingredients");

    modalTitle.innerText = recipe.name;
    modalImage.src = recipe.image;
    modalIngredients.innerText = `Ingredients: ${recipe.ingredients.join(", ")}`;
    modal.style.display = "flex";
}

function displayPagination(totalRecipes) {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(totalRecipes / recipesPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.addEventListener("click", () => {
            currentPage = i;
            filterRecipes();
        });
        paginationContainer.appendChild(button);
    }
}

// Close modal
document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("recipe-modal").style.display = "none";
});

// Initial load
filterRecipes();