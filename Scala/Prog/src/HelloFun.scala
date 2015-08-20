

/**
 * @author Carlos
 */
object HelloFun extends App{
  List("Hello", "IFSP", "SP", "?", "Friends")
  .map(_.toUpperCase())
  .filter(_ != "?")
  .foreach(println)
}