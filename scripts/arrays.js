console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards
const courseToCard = ({prefix, number, title, url, desc, prereqs, credits}) => {
    const prereqLinks = prereqs
        .map((prereq) => `<a href="#" class="card-link">${prereq}</a>`)
        .join();
    const courseTemplate = `<div class="col">
                                <div class="card" style="width: 18rem;">
                                <h3 class="card-header">${title}</h3>
                                <div class="card-body">
                                    <h5 class="card-title">${prefix} ${number}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Prereqs: ${prereqLinks}</h6>
                                    <p class="card-text">${desc}</p>
                                    <a href="${url}" class="card-link">Catalog Page</a>
                                </div>
                                <div class="card-footer text-muted">Credits: ${credits}</div>
                                </div>
                            </div>`;
    return courseTemplate;
}
const resultsContainer = document.querySelector("#filtered-results");
const courseCards = data.items.map(courseToCard);
resultsContainer.innerHTML = courseCards.join("");
const findSummary = (courseCards) => {
    const creditHoursSum = data.items.reduce((prev, curr) => {
        return prev + curr.credits;
    }, 0);
    const prereqHoursSum = data.items.reduce((prev, curr) => {
        return prev + curr.prereqs.length * 3;
    }, 0);
    const summaryTemplate = `<h2>Summary</h2>
                            <dl>
                                <dt>Count</dt>
                                <dd><span>${courseCards.length}</span> items</dd>
                                <dt>Cost</dt>
                                <dd><span>${creditHoursSum}<span> credit-hours + <span>${prereqHoursSum}</span> credit-hours of prereqs</dd>
                            </dl>`
    return summaryTemplate;
}
const summaryContainer = document.querySelector("#summary");
summaryContainer.innerHTML = findSummary(data.items);

// 2. maybe we only show those that match the search query?
const filterCourseCard = (markup, query) => {
    console.log(markup, query);
    return markup.toLowerCase().includes(query.toLowerCase());
  };

const filterData = (markup, query) => {
    console.log(markup, query);
    return markup.title.toLowerCase().includes(query.toLowerCase()) || markup.desc.toLowerCase().includes(query.toLowerCase());
};
  const searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", (ev) => {
    console.log(ev);
    ev.preventDefault();
    // ev.stopPropagation();
    console.log("query text");
    const searchField = document.querySelector('input[name="query-text"]');
    const queryText = searchField.value;
    console.log(queryText);
    const filteredCourseCards = courseCards.filter((card) =>
      filterCourseCard(card, queryText)
    );
    console.log('filteredCourseCards', filteredCourseCards);
    resultsContainer.innerHTML = filteredCourseCards.join("");

    // 3. we update the result count and related summary info as we filter
    const filteredDataItems = data.items.filter((item) =>
        filterData(item, queryText))
    const findSummary = (courseCards) => {
        const creditHoursSum = filteredDataItems.reduce((prev, curr) => {
            return prev + curr.credits;
        }, 0);
        const prereqHoursSum = filteredDataItems.reduce((prev, curr) => {
            return prev + curr.prereqs.length * 3;
        }, 0);
        const summaryTemplate = `<h2>Summary</h2>
                                <dl>
                                    <dt>Count</dt>
                                    <dd><span>${courseCards.length}</span> items</dd>
                                    <dt>Cost</dt>
                                    <dd><span>${creditHoursSum}<span> credit-hours + <span>${prereqHoursSum}</span> credit-hours of prereqs</dd>
                                </dl>`
        return summaryTemplate;
    }
    const summaryContainer = document.querySelector("#summary");
    summaryContainer.innerHTML = findSummary(filteredCourseCards);
  });




