const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((item) => {
    const head = item.firstElementChild;
console.log(`Category:`,head.textContent)


    const liRef = head.nextElementSibling;
    const listItem = liRef.children;


    console.log(`Elements: ${listItem.length}`);
});