
describe("Open Menu Category", ()=>{
    it('should contain url /categories', ()=>{
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div').click()
       cy.url().should('include', '/categories')
    })
  })
  
  describe("Add New Category Mie Instan", ()=>{
    it('success open form create category, should contain url /categories/create', ()=>{
       cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
       cy.url().should('include', '/categories/create')
    })
    it('success create new category mie instan, should contain url /categories', ()=>{
       cy.get('#nama').type('mie instan')
       cy.get('#deskripsi').type('sembako')
       cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
       cy.wait(6000)
       cy.url().should('include', '/categories')
    })    
  })
  
  
  