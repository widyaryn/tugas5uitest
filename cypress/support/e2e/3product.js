
describe("Open Menu Product", ()=>{
    it('should contain url /products', ()=>{
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div > div').click()
       cy.url().should('include', '/products')
    })
  })
  
describe("Add New Product Indomie Goreng", ()=>{
    it('success open form create product, should contain url /products/create', ()=>{
       cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
       cy.url().should('include', '/products/create')
    })
    it('success create new product indomie goreng, should contain url /products', ()=>{
       cy.get('#kode').type('IDM001')
       cy.get('#nama').type('indomie goreng')
       cy.get('#deskripsi').type('indomie goreng kemasan')
       cy.get('#harga\\ beli').type('3500')
       cy.get('#harga\\ jual').type('5000')
       cy.get('#stok').type('50')
       cy.get('#kategori').click()
       cy.contains('mie instan').click()
       cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
       cy.url().should('include', '/products')
    })    
  })