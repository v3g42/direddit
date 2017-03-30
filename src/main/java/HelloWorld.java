import static spark.Spark.*;

/**
 * HelloWorld class serving "GET hello route to test spark java framework"
 */
public class HelloWorld {
    public static void main(String[] args) {
        get("/hello", (req, res) -> "Hello World");
    }
}
