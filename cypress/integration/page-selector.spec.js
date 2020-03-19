describe('Page Selector', function() {

  it('Loads house data on page load', function() {
    const houseId = 36;

    cy.server();
    cy.route('GET', `/rooms/${houseId}`, 'fixture:example-data.json');
    cy.visit(`/?house_id=${houseId}`);
  })
  it('Should have the first review on load', function() {
    expect(cy.get('#1')).to.exist;
  })

  it('Should have review 8 after clicking number 2', function() {
    cy.get('._number:first').click();
    expect(cy.get('#8')).to.exist;
  })

  it('Should have review 15 after clicking the right arrow', function() {
    cy.get('._right-arrow').click();
    expect(cy.get('#15')).to.exist;
  })

  it('Should have review 8 after clicking the left arrow', function() {
    cy.get('._left-arrow').click();
    expect(cy.get('#8')).to.exist;
  })
})