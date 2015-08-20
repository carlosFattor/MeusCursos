

import scala.util.Random

object Optional extends App{
  def random = Random.nextInt(4)
  
  def unrealible: Integer = {
    val result = random
    if(result == 0) null else result 
  }
  
  def optional = Option(unrealible)
  
  optional match {
    case Some(x) =>  println(s"got a $x! Yay!")
    case None => println("Not today :(")
  }
  
  val names = Map(1 -> "One", 2 -> "Two", 3 -> "Three")
  
  List.fill(10)(optional)
  .flatMap { _ map { names(_)}}
  .zipWithIndex
  .foreach {case (name, index) => println(s"$index, $name")}
}