package diggit;

import static spark.Spark.*;

/**
 * SparkMain class serving all routes using SparkJava
 */
public class SparkMain {
    public static void main(String[] args) {

        port(9090); // Spark will run on port 9090

        // Adding gzip support
        after((request, response) -> {
            response.header("Content-Encoding", "gzip");
        });


        get("/hello", (req, res) -> "Hello World");
    }
}
