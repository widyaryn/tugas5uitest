describe("Visit kasirAja", ()=>{
    it('should contain url /login', ()=>{
        //Open url kasirAja
        cy.visit('https://kasirdemo.belajarqa.com')
        //Assert
        cy.url().should('include', '/login')
    }) 
})

describe("Login kasirAja", ()=>{
    it('success login to kasirAja, should contain url /dashboard', ()=>{
        //Input username and password
        cy.get('#email').type("emailaja@yopmail.com")
        cy.get('#password').type("12345")
        //Click login
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        //Assert
        cy.url().should('include','/dashboard')
        cy.contains("kasirAja")
    })
})





// describe("Open Menu Category", ()=>{
//   it('should contain url /categories', ()=>{
//      cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div').click()
//      cy.url().should('include', '/categories')
//   })
// })

// describe("Add New Category Mie Instan", ()=>{
//   it('success click tambah, should contain url /categories/create', ()=>{
//      cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
//      cy.url().should('include', '/categories/create')
//   })
//   it('success create new category mie instan, should contain url /categories', ()=>{
//      cy.get('#nama').type('mie instan')
//      cy.get('#deskripsi').type('sembako')
//      cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
//      cy.url().should('include', '/categories')
//   })    
// //   it('make sure category mie instan has been created', ()=>{
// //      cy.wait(500).get('#root > div > div > div.css-tnxwfz > div > a:nth-child(2) > div > div > div').click()
// //      cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div').click()
// //      cy.contains('mie instan')
// //     //  cy.contains().should('include', '/login')
// //   })
// })







// describe("Open Menu Product", ()=>{
//     it('should contain url /products', ()=>{
//        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div > div').click()
//     //    cy.reload(forceReload)
//        cy.url().should('include', '/products')
//     })
//   })
  
//   describe("Add New Product Indomie Goreng", ()=>{
//     it('success click tambah, should contain url /products/create', ()=>{
//        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
//        cy.url().should('include', '/products/create')
//     })
//     it('success create new product indomie goreng, should contain url /products', ()=>{
//        cy.get('#kode').type('IDM001')
//        cy.get('#nama').type('indomie goreng')
//        cy.get('#deskripsi').type('indomie goreng kemasan')
//        cy.get('#harga\\ beli').type('3500')
//        cy.get('#harga\\ jual').type('5000')
//        cy.get('#stok').type('50')
//        cy.get('#kategori').click()
//        cy.contains('mie instan').click()
//        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
//        cy.url().should('include', '/products')
//     })    
//     // it('make sure category mie instan has been created', ()=>{
//     //     cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(7)').click()
//     //     cy.get('#root > div > div > div > div.chakra-container.css-9rmdie > div.css-1t33j5j').contains('indomie goreng')
//     // })
//   })