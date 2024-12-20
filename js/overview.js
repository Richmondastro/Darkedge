// Initialize Tabs: Show only the first tab content
document.querySelectorAll(".table-wrapper").forEach((content, index) => {
  content.style.display = index === 0 ? "block" : "none";
});

// Tab Switching Functionality
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".table-wrapper");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    tabContents.forEach((content) => {
      content.style.display =
        content.id === button.dataset.tab ? "block" : "none";
    });
  });
});

// Populate First Round Results Table and Cards
const firstResultsTable = document.getElementById("team-table-body-first");
const firstResultsCards = document.getElementById("results-cards-first");

// Function to render rows or cards based on limit
function renderData(data, limit, tableBody, cardContainer) {
  const visibleData = data.slice(0, limit);

  // Table rows
  tableBody.innerHTML = visibleData
    .map((result) => {
      const { SchoolName, Team, TeamCode, Percentage, Place } = result;
      return `<tr>
        <td>${Place}</td>
        <td>${SchoolName}</td>
        <td>${Team}</td>
        <td>${TeamCode}</td>
        <td>${Percentage}</td>
      </tr>`;
    })
    .join("");

  // Cards
  cardContainer.innerHTML = visibleData
    .map((result) => {
      const { SchoolName, Team, TeamCode, Percentage, Place } = result;
      return `<div class="results-card">
        <h4>${Place} - ${SchoolName}</h4>
        <p>Team : ${Team}</p>
        <p><strong>Team Code:</strong> ${TeamCode}</p>
        <p><strong>Marks:</strong> ${Percentage}</p>
        </div>`;
    })
    .join("");
}

// Initial render for top 25 first round results
renderData(results, 25, firstResultsTable, firstResultsCards);

// Search Functionality for First Round Results
document.getElementById("search-input-first").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  if (query.trim() === "") {
    // Show top 25 if search input is empty
    renderData(results, 25, firstResultsTable, firstResultsCards);
  } else {
    // Filter and show all matching results
    const filteredResults = results.filter((result) =>
      [result.SchoolName, result.TeamCode].some((field) =>
        field.toLowerCase().includes(query)
      )
    );

    renderData(
      filteredResults,
      filteredResults.length,
      firstResultsTable,
      firstResultsCards
    );
  }
});

// Populate School Codes Table and Cards
const schoolCodesTable = document.getElementById("team-table-body-school");
const schoolCodesCards = document.getElementById("results-cards-school");

// Function to render school codes (no limit required)
function renderSchoolCodes(data, tableBody, cardContainer) {
  // Table rows
  tableBody.innerHTML = data
    .map((school) => {
      const { SchoolName, Team, SchoolCode } = school;
      return `<tr>
        <td>${SchoolName}</td>
        <td>${Team}</td>
        <td>${SchoolCode}</td>
      </tr>`;
    })
    .join("");

  // Cards
  cardContainer.innerHTML = data
    .map((school) => {
      const { SchoolName, Team, SchoolCode } = school;
      return `<div class="results-card">
        <h4>${SchoolName}</h4>
        <h4>${Team}</h4>
        <p><strong>School Code:</strong> ${SchoolCode}</p>
      </div>`;
    })
    .join("");
}

// Initial render for school codes
renderSchoolCodes(schoolCodes, schoolCodesTable, schoolCodesCards);

// Search Functionality for School Codes
document
  .getElementById("search-input-school")
  .addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();

    if (query.trim() === "") {
      // Show all school codes if search input is empty
      renderSchoolCodes(schoolCodes, schoolCodesTable, schoolCodesCards);
    } else {
      // Filter and show all matching school codes
      const filteredSchools = schoolCodes.filter((school) =>
        school.SchoolName.toLowerCase().includes(query)
      );

      renderSchoolCodes(filteredSchools, schoolCodesTable, schoolCodesCards);
    }
  });
