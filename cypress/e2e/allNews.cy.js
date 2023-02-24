describe("All news", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pGGR5Ab1Pi937zK9C9zXVDyeLJTiSLD3",
      {
        method: "GET",
        fixture: "../fixtures/worldNews.json",
      }
    );
    cy.intercept(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=pGGR5Ab1Pi937zK9C9zXVDyeLJTiSLD3",
      {
        method: "GET",
        fixture: "../fixtures/artsNews.json",
      }
    );
    cy.visit("http://localhost:3000/");
  });

  it("should display header", () => {
    cy.get("Header").contains("The Times Newspaper");
  });

  it("should have category switch", () => {
    cy.get(".categories").should("be.visible");
  });

  it("should have a card container", () => {
    cy.get(".card-container").should("be.visible");
  });

  it("should contain cards in card container", () => {
    cy.get(".card").contains(
      "Our Photographers in Ukraine on the Images They Can’t Forget"
    );
  });

  it("should change news category after on category button click", () => {
    cy.get(".categories button").eq(0).click();
    cy.get(".card").contains(
      "On Broadway, ‘Bad Cinderella’ Is a Rebel With a Brooklyn Accent"
    );
  });

  it("should see article details on 'Read more' button click", () => {
    cy.get(".card a").eq(0).click();
    cy.get(".details-main").contains(
      "Our Photographers in Ukraine on the Images They Can’t Forget"
    );
  });
});
