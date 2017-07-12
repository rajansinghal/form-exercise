<div class = "container"> 
   <h1>Product Form</h1> 
   <form> 
      <div class = "form-group"> 
         <label for = "productid">ID</label> 
         <input type = "text" class = "form-control" id = "productid" required 
            [(ngModel)] = "model.productid" name = "id"> 
      </div> 
      
      <div class = "form-group"> 
         <label for = "name">Name</label> 
         <input type = "text" class = "form-control" id = "name" 
            [(ngModel)] = "model.productname" name = "name"> 
      </div> 
   </form> 
</div>