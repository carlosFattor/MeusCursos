def add1(x:Int, y:Int) = x + y //method  
val add2 = (x:Int, y:Int) => x + y //anonymous function  
val add3:(Int,Int)=>Int = _ + _ //alternate way  
val add4 = (_ + _):(Int,Int)=>Int //alternate way, rare   
    
println(add1(42,13))  
println(add2(42,13))  
println(add3(42,13))  
println(add4(42,13))  