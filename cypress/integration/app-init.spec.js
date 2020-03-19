describe('App Initialization', function() {
  it('Loads house data on page load', function() {
    const houseId = 36;

    cy.server();
    cy.route('GET', `/rooms/${houseId}`, 'fixture:example-data.json');
    cy.visit(`/?house_id=${houseId}`);
  })
})