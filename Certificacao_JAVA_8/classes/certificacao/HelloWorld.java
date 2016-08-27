package certificacao;

public class HelloWorld {
    public static void main(String... args){
        System.out.println(args[0]);
    }
}

/*nao compila, nome do arquivo diferente do nome da classe, 
isso pois tem o metodo main e é definida como public
public class teste {
    public static void main(String... args){
        System.out.println("classe teste");
    }
}*/